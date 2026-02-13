import User from "../models/User.js";
import PaymentRequest from "../models/PaymentRequest.js";
import {
  ensureAccessState,
  getCurrentAccessCode,
  queueAccessCodes,
  trimPendingAccessCodes
} from "../utils/accessCodes.js";
import {
  normalizeRecipientInput,
  sendTemplatedEmails,
  buildTemplatedEmailPreview
} from "../services/adminEmailService.js";

function extractTemplateOptions(payload = {}) {
  return {
    salutation: payload?.salutation,
    receiverAddressMode: payload?.receiverAddressMode,
    letterTitle: payload?.letterTitle,
    letterDate: payload?.letterDate,
    receiverAddressBlock: payload?.receiverAddressBlock,
    receiverAddressCustom: payload?.receiverAddressCustom,
    senderName: payload?.senderName,
    senderRole: payload?.senderRole
  };
}

export async function listUsers(req, res) {
  const users = await User.find({})
    .sort({ createdAt: -1 })
    .select("email username phone whatsappNumber tier exportCredits pendingAccessCodes usedAccessCodes createdAt")
    .lean();
  return res.json({
    users: users.map((user) => ({
      id: user._id.toString(),
      email: user.email,
      username: user.username,
      phone: user.phone,
      whatsappNumber: user.whatsappNumber,
      tier: user.tier,
      export_credits: user.exportCredits,
      access_code: getCurrentAccessCode(user),
      used_code_count: Array.isArray(user.usedAccessCodes) ? user.usedAccessCodes.length : 0,
      created_at: user.createdAt
    }))
  });
}

export async function updateUserTier(req, res) {
  const { userId, tier } = req.body || {};
  if (!userId || !tier) {
    return res.status(400).json({ error: "userId and tier are required" });
  }

  const user = await User.findByIdAndUpdate(userId, { tier }, { new: true });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  if (ensureAccessState(user)) {
    await user.save();
  }

  return res.json({ success: true });
}

export async function addExportCredits(req, res) {
  const { userId, credits } = req.body || {};
  if (!userId || typeof credits !== "number") {
    return res.status(400).json({ error: "userId and credits are required" });
  }

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  ensureAccessState(user);

  if (credits > 0) {
    queueAccessCodes(user, credits);
  } else if (credits < 0) {
    trimPendingAccessCodes(user, Math.abs(credits));
  }

  if (user.exportCredits > 0 && user.tier !== "paid") {
    user.tier = "paid";
  }

  await user.save();
  return res.json({
    success: true,
    export_credits: user.exportCredits,
    access_code: getCurrentAccessCode(user)
  });
}

export async function createPaymentRequest(req, res) {
  const { note, packageName, credits, amountNaira } = req.body || {};
  const request = await PaymentRequest.create({
    userId: req.user.id,
    note: note || null,
    packageName: packageName || null,
    credits: typeof credits === "number" ? credits : null,
    amountNaira: typeof amountNaira === "number" ? amountNaira : null
  });

  return res.status(201).json({ id: request._id.toString() });
}

export async function listPaymentRequests(req, res) {
  const requests = await PaymentRequest.find({ status: "pending" })
    .populate("userId", "email")
    .sort({ createdAt: -1 })
    .lean();

  return res.json({
    requests: requests.map((request) => ({
      id: request._id.toString(),
      user_id: request.userId?._id?.toString(),
      email: request.userId?.email,
      status: request.status,
      note: request.note,
      packageName: request.packageName,
      credits: request.credits,
      amountNaira: request.amountNaira,
      created_at: request.createdAt,
      updated_at: request.updatedAt
    }))
  });
}

export async function listPaymentLogs(req, res) {
  const requests = await PaymentRequest.find({})
    .populate("userId", "email")
    .sort({ createdAt: -1 })
    .lean();

  return res.json({
    logs: requests.map((request) => ({
      id: request._id.toString(),
      user_id: request.userId?._id?.toString(),
      email: request.userId?.email,
      status: request.status,
      note: request.note,
      packageName: request.packageName,
      credits: request.credits,
      amountNaira: request.amountNaira,
      created_at: request.createdAt,
      updated_at: request.updatedAt
    }))
  });
}

export async function updatePaymentRequest(req, res) {
  const { status } = req.body || {};
  if (!status) {
    return res.status(400).json({ error: "status is required" });
  }

  const request = await PaymentRequest.findById(req.params.id);
  if (!request) {
    return res.status(404).json({ error: "Request not found" });
  }

  const wasApproved = request.status === "approved";
  request.status = status;
  await request.save();

  if (status === "approved" && !wasApproved) {
    const user = await User.findById(request.userId);
    if (user) {
      user.tier = "paid";
      ensureAccessState(user);

      if (typeof request.credits === "number" && request.credits > 0) {
        queueAccessCodes(user, request.credits);
      }

      await user.save();
    }
  }

  return res.json({ success: true });
}

export async function previewEmailTemplate(req, res) {
  const { recipient, body } = req.body || {};
  const templateOptions = extractTemplateOptions(req.body || {});
  const recipientEmail = String(recipient || "").trim().toLowerCase() || "recipient@example.com";
  const html = buildTemplatedEmailPreview({
    recipientEmail,
    body: String(body || ""),
    templateOptions
  });

  return res.json({
    success: true,
    recipient: recipientEmail,
    html
  });
}

export async function sendEmailToUsers(req, res) {
  const { recipients, subject, body } = req.body || {};
  const templateOptions = extractTemplateOptions(req.body || {});
  const trimmedSubject = String(subject || "ProgrammoCeuticals Update")
    .trim()
    .slice(0, 140);
  const trimmedBody = String(body || "").trim();

  if (!trimmedBody || trimmedBody.length < 5) {
    return res.status(400).json({ error: "Email body must be at least 5 characters" });
  }

  const { recipients: parsedRecipients, invalid } = normalizeRecipientInput(recipients);

  if (parsedRecipients.length === 0) {
    return res.status(400).json({ error: "Add at least one valid recipient email" });
  }

  if (parsedRecipients.length > 200) {
    return res.status(400).json({ error: "Maximum 200 recipient emails per send" });
  }

  if (invalid.length > 0) {
    return res.status(400).json({
      error: "One or more email addresses are invalid",
      invalid
    });
  }

  try {
    const result = await sendTemplatedEmails({
      recipients: parsedRecipients,
      subject: trimmedSubject || "ProgrammoCeuticals Update",
      body: trimmedBody,
      templateOptions
    });

    if (result.sent_count === 0) {
      const firstFailure = Array.isArray(result.failed) ? result.failed[0] : null;
      const reason =
        firstFailure && firstFailure.error
          ? ` ${firstFailure.error}`
          : "";
      return res.status(502).json({
        error: `Failed to send email to recipients.${reason}`.trim(),
        failed: result.failed,
        failed_count: result.failed_count
      });
    }

    return res.json({
      success: true,
      subject: trimmedSubject || "ProgrammoCeuticals Update",
      sent_count: result.sent_count,
      failed_count: result.failed_count,
      sent_to: result.sent,
      failed: result.failed
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || "Failed to send emails" });
  }
}
