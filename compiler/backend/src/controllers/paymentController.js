import crypto from "crypto";
import { config } from "../config/env.js";
import PaymentTransaction from "../models/PaymentTransaction.js";
import User from "../models/User.js";
import { ensureAccessState, queueAccessCodes, toUserPayload } from "../utils/accessCodes.js";

const PAYSTACK_BASE_URL = "https://api.paystack.co";

const PACKAGE_MAP = {
  single: { id: "single", name: "Single", credits: 1, amountNaira: 100000 },
  triple: { id: "triple", name: "Triple", credits: 3, amountNaira: 250000 },
  business: { id: "business", name: "Business", credits: 5, amountNaira: 400000 }
};

const CUSTOM_PACKAGE_CONFIG = {
  id: "custom",
  name: "Custom",
  minCredits: 6,
  rateNaira: 85000
};

const getFixedPackageById = (packageId) => {
  const normalized = String(packageId || "").trim().toLowerCase();
  return PACKAGE_MAP[normalized] || null;
};

const parseCredits = (value) => {
  const numeric = Number(value);
  if (!Number.isInteger(numeric)) return null;
  return numeric;
};

const resolveSelectedPackage = ({ packageId, customCredits }) => {
  const normalizedId = String(packageId || "").trim().toLowerCase();
  if (!normalizedId) {
    return { error: "Package is required" };
  }

  if (normalizedId === CUSTOM_PACKAGE_CONFIG.id) {
    const credits = parseCredits(customCredits);
    if (!credits || credits < CUSTOM_PACKAGE_CONFIG.minCredits) {
      return {
        error: `Custom package requires at least ${CUSTOM_PACKAGE_CONFIG.minCredits} exports`
      };
    }

    const amountNaira = credits * CUSTOM_PACKAGE_CONFIG.rateNaira;
    return {
      package: {
        id: CUSTOM_PACKAGE_CONFIG.id,
        name: `Custom (${credits} exports)`,
        credits,
        amountNaira,
        rateNaira: CUSTOM_PACKAGE_CONFIG.rateNaira
      }
    };
  }

  const fixedPackage = getFixedPackageById(normalizedId);
  if (!fixedPackage) {
    return { error: "Invalid package selected" };
  }

  return { package: fixedPackage };
};

const buildReference = (userId) => {
  const suffix = crypto.randomBytes(4).toString("hex");
  const userTail = String(userId || "").slice(-6);
  return `pc_${userTail}_${Date.now()}_${suffix}`;
};

const getCallbackUrl = () => {
  if (config.paystackCallbackUrl) return config.paystackCallbackUrl;
  const safeBase = String(config.frontendUrl || "http://localhost:3000").replace(/\/+$/, "");
  return `${safeBase}/account`;
};

const paystackRequest = async (path, { method = "GET", body } = {}) => {
  if (!config.paystackSecretKey) {
    throw new Error("PAYSTACK_SECRET_KEY is not configured");
  }

  const response = await fetch(`${PAYSTACK_BASE_URL}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${config.paystackSecretKey}`,
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : undefined
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.status === false) {
    throw new Error(payload.message || "Paystack request failed");
  }

  return payload.data;
};

export function listPaymentPackages(req, res) {
  return res.json({
    packages: [
      ...Object.values(PACKAGE_MAP),
      {
        id: CUSTOM_PACKAGE_CONFIG.id,
        name: CUSTOM_PACKAGE_CONFIG.name,
        credits: null,
        amountNaira: null,
        minCredits: CUSTOM_PACKAGE_CONFIG.minCredits,
        rateNaira: CUSTOM_PACKAGE_CONFIG.rateNaira
      }
    ]
  });
}

export async function initializePayment(req, res) {
  const { packageId, customCredits } = req.body || {};
  const selection = resolveSelectedPackage({ packageId, customCredits });
  if (!selection.package) {
    return res.status(400).json({ error: selection.error || "Invalid package selected" });
  }
  const selectedPackage = selection.package;

  if (!config.paystackSecretKey) {
    return res.status(500).json({ error: "Payment gateway is not configured" });
  }

  const amountKobo = selectedPackage.amountNaira * 100;
  const reference = buildReference(req.user.id);

  await PaymentTransaction.create({
    userId: req.user.id,
    provider: "paystack",
    reference,
    packageId: selectedPackage.id,
    packageName: selectedPackage.name,
    credits: selectedPackage.credits,
    amountNaira: selectedPackage.amountNaira,
    amountKobo,
    status: "pending"
  });

  try {
    const paystackData = await paystackRequest("/transaction/initialize", {
      method: "POST",
      body: {
        email: req.user.email,
        amount: amountKobo,
        reference,
        callback_url: getCallbackUrl(),
        metadata: {
          userId: req.user.id,
          packageId: selectedPackage.id,
          packageName: selectedPackage.name,
          credits: selectedPackage.credits,
          amountNaira: selectedPackage.amountNaira
        }
      }
    });

    await PaymentTransaction.findOneAndUpdate(
      { reference },
      {
        authorizationUrl: paystackData.authorization_url || null,
        providerStatus: "initialized",
        gatewayResponse: paystackData
      }
    );

    return res.json({
      reference,
      authorization_url: paystackData.authorization_url,
      access_code: paystackData.access_code
    });
  } catch (error) {
    await PaymentTransaction.findOneAndUpdate(
      { reference },
      {
        status: "failed",
        providerStatus: "initialize_failed",
        failureReason: error.message || "Initialization failed"
      }
    );
    return res.status(502).json({ error: error.message || "Failed to initialize payment" });
  }
}

export async function verifyPayment(req, res) {
  const reference = String(req.params.reference || "").trim();
  if (!reference) {
    return res.status(400).json({ error: "Payment reference is required" });
  }

  const transaction = await PaymentTransaction.findOne({ reference });
  if (!transaction) {
    return res.status(404).json({ error: "Payment transaction not found" });
  }

  if (transaction.userId.toString() !== req.user.id) {
    return res.status(403).json({ error: "Payment transaction does not belong to this user" });
  }

  const user = await User.findById(req.user.id).select(
    "email username phone whatsappNumber tier exportCredits pendingAccessCodes usedAccessCodes"
  );
  if (!user) {
    return res.status(401).json({ error: "Invalid auth token" });
  }

  if (ensureAccessState(user)) {
    await user.save();
  }

  if (transaction.status === "success" && transaction.creditedAt) {
    return res.json({
      success: true,
      user: toUserPayload(user),
      payment: {
        reference: transaction.reference,
        status: transaction.status,
        packageName: transaction.packageName,
        credits: transaction.credits,
        amountNaira: transaction.amountNaira
      }
    });
  }

  if (!config.paystackSecretKey) {
    return res.status(500).json({ error: "Payment gateway is not configured" });
  }

  let paystackData;
  try {
    paystackData = await paystackRequest(`/transaction/verify/${encodeURIComponent(reference)}`);
  } catch (error) {
    return res.status(502).json({ error: error.message || "Failed to verify payment" });
  }

  transaction.providerStatus = String(paystackData.status || "unknown");
  transaction.gatewayResponse = paystackData;
  transaction.verifiedAt = new Date();
  transaction.paidAt = paystackData.paid_at ? new Date(paystackData.paid_at) : transaction.paidAt;

  if (paystackData.status !== "success") {
    transaction.status = "failed";
    transaction.failureReason = `Paystack status: ${paystackData.status || "unknown"}`;
    await transaction.save();
    return res.status(400).json({ error: "Payment not successful" });
  }

  const paidAmount = Number(paystackData.amount || 0);
  if (paidAmount !== transaction.amountKobo) {
    transaction.status = "failed";
    transaction.failureReason = "Amount mismatch during verification";
    await transaction.save();
    return res.status(400).json({ error: "Payment verification failed (amount mismatch)" });
  }

  const customerEmail = String(paystackData.customer?.email || "").toLowerCase().trim();
  const userEmail = String(user.email || "").toLowerCase().trim();
  if (customerEmail && customerEmail !== userEmail) {
    transaction.status = "failed";
    transaction.failureReason = "Email mismatch during verification";
    await transaction.save();
    return res.status(400).json({ error: "Payment verification failed (email mismatch)" });
  }

  if (!transaction.creditedAt) {
    queueAccessCodes(user, transaction.credits);
    user.tier = "paid";
    await user.save();
    transaction.creditedAt = new Date();
  }

  transaction.status = "success";
  transaction.failureReason = null;
  await transaction.save();

  return res.json({
    success: true,
    user: toUserPayload(user),
    payment: {
      reference: transaction.reference,
      status: transaction.status,
      packageName: transaction.packageName,
      credits: transaction.credits,
      amountNaira: transaction.amountNaira
    }
  });
}
