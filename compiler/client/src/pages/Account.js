import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { updateAccount } from "../services/accountService";
import { fetchPaymentPackages, initializePayment, verifyPayment } from "../services/paymentService";

const fallbackPackages = [
  { id: "single", name: "Single", credits: 1, amountNaira: 100000 },
  { id: "triple", name: "Triple", credits: 3, amountNaira: 250000 },
  { id: "business", name: "Business", credits: 5, amountNaira: 400000 },
  { id: "custom", name: "Custom", credits: null, amountNaira: null, minCredits: 6, rateNaira: 85000 }
];

const parseCreditsInput = (value) => {
  const numeric = Number(value);
  if (!Number.isInteger(numeric)) return null;
  return numeric;
};

const resolveCustomCredits = (value, minCredits = 6) => {
  const parsed = parseCreditsInput(value);
  if (!parsed || parsed < minCredits) return minCredits;
  return parsed;
};

const Account = () => {
  const { user, token, updateUser } = useAuth();
  const initialProfile = {
    email: user?.email || "",
    username: user?.username || "",
    phone: user?.phone || "",
    whatsappNumber: user?.whatsappNumber || "",
    password: ""
  };
  const [formState, setFormState] = useState({
    ...initialProfile
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [packageStatus, setPackageStatus] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const [availablePackages, setAvailablePackages] = useState(fallbackPackages);
  const [customCredits, setCustomCredits] = useState("6");
  const [paymentLoadingPackageId, setPaymentLoadingPackageId] = useState(null);
  const [verifyingPayment, setVerifyingPayment] = useState(false);

  useEffect(() => {
    if (!token) return;
    let active = true;

    const loadPackages = async () => {
      try {
        const payload = await fetchPaymentPackages(token);
        if (!active) return;
        if (Array.isArray(payload.packages) && payload.packages.length > 0) {
          setAvailablePackages(payload.packages);
        }
      } catch (loadError) {
        // Keep fallback package list when gateway package fetch fails.
      }
    };

    loadPackages();
    return () => {
      active = false;
    };
  }, [token]);

  useEffect(() => {
    if (!token) return;

    const params = new URLSearchParams(window.location.search);
    const reference = params.get("reference") || params.get("trxref");
    if (!reference) return;

    let active = true;
    const runVerification = async () => {
      setPackageStatus("Verifying payment...");
      setVerifyingPayment(true);
      try {
        const payload = await verifyPayment(token, reference);
        if (!active) return;
        if (payload.user) {
          updateUser(payload.user);
        }
        const creditCount = Number(payload.payment?.credits) || 0;
        setPackageStatus(
          `Payment verified. ${creditCount} export credit${creditCount === 1 ? "" : "s"} added to your account.`
        );
      } catch (verifyError) {
        if (!active) return;
        setPackageStatus(verifyError.message || "Payment verification failed.");
      } finally {
        if (!active) return;
        setVerifyingPayment(false);
        const cleanedUrl = new URL(window.location.href);
        cleanedUrl.searchParams.delete("reference");
        cleanedUrl.searchParams.delete("trxref");
        window.history.replaceState({}, "", `${cleanedUrl.pathname}${cleanedUrl.search}`);
      }
    };

    runVerification();
    return () => {
      active = false;
    };
  }, [token, updateUser]);

  const handleChange = (field) => (event) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);
    try {
      const payload = await updateAccount(token, {
        email: formState.email,
        username: formState.username,
        phone: formState.phone,
        whatsappNumber: formState.whatsappNumber,
        password: formState.password || undefined
      });
      updateUser(payload.user);
      setMessage("Account updated successfully.");
      setFormState((prev) => ({ ...prev, password: "" }));
      setProfileOpen(false);
    } catch (err) {
      setError(err.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDiscard = () => {
    setFormState(initialProfile);
    setMessage("");
    setError("");
    setProfileOpen(false);
  };

  const handlePackagePayment = async (pkg) => {
    if (!token) {
      setPackageStatus("Sign in first to start payment.");
      return;
    }

    let customCreditsPayload = null;
    if (pkg.id === "custom") {
      const minCredits = Number(pkg.minCredits || 6);
      const parsedCustomCredits = parseCreditsInput(customCredits);
      if (!parsedCustomCredits || parsedCustomCredits < minCredits) {
        setPackageStatus(`Custom package starts from ${minCredits} exports.`);
        return;
      }
      customCreditsPayload = parsedCustomCredits;
    }

    setPackageStatus("");
    setPaymentLoadingPackageId(pkg.id);
    try {
      const payload = await initializePayment(token, pkg.id, customCreditsPayload);
      if (!payload.authorization_url) {
        throw new Error("Could not start payment. Please try again.");
      }
      setPackageStatus("Redirecting to secure Paystack checkout...");
      window.location.assign(payload.authorization_url);
    } catch (err) {
      setPackageStatus(err.message || "Failed to initialize payment.");
    } finally {
      setPaymentLoadingPackageId(null);
    }
  };

  return (
    <div className="account-page">
      <div className="account-header">
        <h1 className="account-title">Account Settings</h1>
        <p className="account-subtitle">Manage your profile and export packages</p>
      </div>

      <div className="account-sections">
        <section className="account-card">
          <div className="account-card-header">
            <h2 className="account-card-title">Profile Information</h2>
            <button
              type="button"
              onClick={() => setProfileOpen((prev) => !prev)}
              className="account-edit-btn"
            >
              {profileOpen ? "Cancel" : "Edit Profile"}
            </button>
          </div>
          {!profileOpen && (
            <div className="account-info-grid">
              <div className="account-info-item">
                <span className="account-info-label">Email Address</span>
                <span className="account-info-value">{user?.email || "-"}</span>
              </div>
              <div className="account-info-item">
                <span className="account-info-label">Username</span>
                <span className="account-info-value">{user?.username || "-"}</span>
              </div>
              <div className="account-info-item">
                <span className="account-info-label">Phone Number</span>
                <span className="account-info-value">{user?.phone || "-"}</span>
              </div>
              <div className="account-info-item">
                <span className="account-info-label">WhatsApp Number</span>
                <span className="account-info-value">{user?.whatsappNumber || "-"}</span>
              </div>
              <div className="account-info-item account-info-highlight">
                <span className="account-info-label">Current Access Code</span>
                <span className="account-info-value account-access-code">{user?.access_code || "-"}</span>
              </div>
            </div>
          )}
          {profileOpen && (
            <form onSubmit={handleSubmit} className="account-form">
              <div className="account-form-group">
                <label className="account-label">Email Address</label>
                <input className="account-input" value={formState.email} onChange={handleChange("email")} type="email" required />
              </div>
              <div className="account-form-group">
                <label className="account-label">Username</label>
                <input className="account-input" value={formState.username} onChange={handleChange("username")} type="text" required />
              </div>
              <div className="account-form-group">
                <label className="account-label">Phone Number</label>
                <input className="account-input" value={formState.phone} onChange={handleChange("phone")} type="tel" required />
              </div>
              <div className="account-form-group">
                <label className="account-label">WhatsApp Number</label>
                <input className="account-input" value={formState.whatsappNumber} onChange={handleChange("whatsappNumber")} type="tel" required />
              </div>
              <div className="account-form-group">
                <label className="account-label">New Password <span className="account-optional">(optional)</span></label>
                <input className="account-input" value={formState.password} onChange={handleChange("password")} type="password" placeholder="Leave blank to keep current password" />
              </div>
              {message && <div className="account-message account-success">{message}</div>}
              {error && <div className="account-message account-error">{error}</div>}
              <div className="account-form-actions">
                <button type="submit" disabled={loading} className="account-btn account-btn-primary">
                  {loading ? "Saving Changes..." : "Save Changes"}
                </button>
                <button
                  type="button"
                  onClick={handleDiscard}
                  disabled={loading}
                  className="account-btn account-btn-secondary"
                >
                  Discard Changes
                </button>
              </div>
            </form>
          )}
        </section>

        <section className="account-card">
          <div className="account-card-header">
            <h2 className="account-card-title">Export Packages</h2>
          </div>
          <p className="account-packages-desc">
            Purchase export credits securely with Paystack. Custom packages above 5 exports are auto-calculated at ₦85,000 per export.
          </p>
          <div className="account-packages-grid">
            {availablePackages.map((pkg) => {
              const isCustom = pkg.id === "custom";
              const minCredits = Number(pkg.minCredits || 6);
              const rateNaira = Number(pkg.rateNaira || 85000);
              const credits = isCustom
                ? resolveCustomCredits(customCredits, minCredits)
                : Number(pkg.credits || 0);
              const amount = isCustom
                ? credits * rateNaira
                : Number(pkg.amountNaira ?? pkg.amount ?? 0);
              const busy = paymentLoadingPackageId === pkg.id || verifyingPayment;
              return (
                <div key={pkg.id} className="account-package-card">
                  <h3 className="account-package-name">{pkg.name}</h3>
                  <div className="account-package-price">₦{amount.toLocaleString()}</div>
                  {isCustom && (
                    <div className="account-package-custom">
                      <label
                        className="account-package-custom-label"
                        htmlFor={`account-custom-credits-${pkg.id}`}
                      >
                        Exports (minimum {minCredits})
                      </label>
                      <input
                        id={`account-custom-credits-${pkg.id}`}
                        className="account-input account-package-custom-input"
                        type="number"
                        min={minCredits}
                        step={1}
                        value={customCredits}
                        onChange={(event) => setCustomCredits(event.target.value)}
                      />
                    </div>
                  )}
                  <div className="account-package-credits">
                    {credits} Export Credit{credits > 1 ? "s" : ""}
                  </div>
                  <button onClick={() => handlePackagePayment(pkg)} className="account-package-btn" disabled={busy}>
                    {busy ? "Processing..." : "Purchase Package"}
                  </button>
                </div>
              );
            })}
          </div>
          {packageStatus && <div className="account-package-status">{packageStatus}</div>}
        </section>
      </div>
    </div>
  );
};

export default Account;
