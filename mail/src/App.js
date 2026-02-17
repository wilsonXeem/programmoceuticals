import React, { useEffect, useMemo, useState } from "react";
import { fetchEmailPreview, sendAdminEmail } from "./services/adminService";
import { fetchMe, signIn } from "./services/authService";
import "./App.css";

const STORAGE_KEY = "pc-mail-admin-token";
const ADMIN_EMAIL =
  process.env.REACT_APP_ADMIN_EMAIL?.toLowerCase() || "info@programmoceuticals.com";

const normalizeEmail = (value) => String(value || "").trim().toLowerCase();

const escapeText = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

const parseRecipientInput = (value) => {
  const text = String(value || "").trim();
  if (!text) {
    return [];
  }

  const tokens = text
    .split(/[\s,;]+/g)
    .map((entry) => normalizeEmail(entry))
    .filter(Boolean);

  return Array.from(new Set(tokens));
};

const normalizeSubject = (subject) =>
  String(subject || "")
    .trim()
    .slice(0, 140) || "ProgrammoCeuticals Update";

const getTodayDateInput = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatTemplateDate = (date = new Date()) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);

const resolveTemplateDate = (letterDateInput) => {
  const raw = String(letterDateInput || "").trim();
  if (!raw) {
    return formatTemplateDate();
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    const [year, month, day] = raw.split("-").map((value) => Number(value));
    const parsed = new Date(year, month - 1, day);
    if (!Number.isNaN(parsed.getTime())) {
      return formatTemplateDate(parsed);
    }
  }

  const parsed = new Date(raw);
  if (!Number.isNaN(parsed.getTime())) {
    return formatTemplateDate(parsed);
  }

  return raw;
};

const DEFAULT_SENDER_NAME =
  process.env.REACT_APP_EMAIL_SENDER_NAME || "Wilson Zimthamaha Bonkuru, B.Pharm";
const DEFAULT_SENDER_ROLE = process.env.REACT_APP_EMAIL_SENDER_ROLE || "Founder";

const App = () => {
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEY) || "");
  const [sessionLoading, setSessionLoading] = useState(Boolean(localStorage.getItem(STORAGE_KEY)));
  const [sessionError, setSessionError] = useState("");
  const [user, setUser] = useState(null);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginLoading, setLoginLoading] = useState(false);

  const [emailForm, setEmailForm] = useState({
    subject: "ProgrammoCeuticals Update",
    body: "",
    salutation: "Dear",
    receiverAddressMode: "email",
    letterTitle: "",
    letterDate: getTodayDateInput(),
    receiverAddressBlock: "",
    receiverAddressCustom: "",
    senderName: DEFAULT_SENDER_NAME,
    senderRole: DEFAULT_SENDER_ROLE
  });
  const [recipientInput, setRecipientInput] = useState("");
  const [previewPageIndex, setPreviewPageIndex] = useState(0);
  const [mobilePanel, setMobilePanel] = useState("compose");

  const [sendLoading, setSendLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState({ type: "", message: "" });

  const [previewHtml, setPreviewHtml] = useState("");
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState("");

  const clearSession = (message = "") => {
    localStorage.removeItem(STORAGE_KEY);
    setToken("");
    setUser(null);
    setRecipientInput("");
    setPreviewPageIndex(0);
    setMobilePanel("compose");
    setEmailStatus({ type: "", message: "" });
    setPreviewHtml("");
    setPreviewError("");
    setSessionError(message);
  };

  useEffect(() => {
    let active = true;

    const init = async () => {
      if (!token) {
        if (active) {
          setSessionLoading(false);
        }
        return;
      }

      setSessionLoading(true);
      setSessionError("");
      try {
        const payload = await fetchMe(token);
        const normalizedUserEmail = normalizeEmail(payload?.user?.email);
        if (normalizedUserEmail !== ADMIN_EMAIL) {
          if (active) {
            clearSession("This account is not authorized for mail admin access.");
            setSessionLoading(false);
          }
          return;
        }

        if (active) {
          setUser(payload.user);
        }
      } catch (error) {
        if (active) {
          clearSession(error.message || "Session expired. Please sign in again.");
        }
      } finally {
        if (active) {
          setSessionLoading(false);
        }
      }
    };

    init();

    return () => {
      active = false;
    };
  }, [token]);

  const parsedRecipients = useMemo(
    () => parseRecipientInput(recipientInput),
    [recipientInput]
  );

  useEffect(() => {
    setPreviewPageIndex((current) => {
      if (parsedRecipients.length === 0) {
        return 0;
      }

      const maxIndex = parsedRecipients.length - 1;
      return current > maxIndex ? maxIndex : current;
    });
  }, [parsedRecipients]);

  const handleLoginField = (field, value) => {
    setLoginForm((previous) => ({ ...previous, [field]: value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setSessionError("");

    const email = normalizeEmail(loginForm.email);
    const password = String(loginForm.password || "");

    if (!email || !password) {
      setSessionError("Email and password are required.");
      return;
    }

    setLoginLoading(true);

    try {
      const payload = await signIn(email, password);
      const signedInEmail = normalizeEmail(payload?.user?.email);

      if (signedInEmail !== ADMIN_EMAIL) {
        clearSession("This account is not authorized for mail admin access.");
        return;
      }

      localStorage.setItem(STORAGE_KEY, payload.token);
      setToken(payload.token);
      setUser(payload.user);
      setLoginForm({ email: "", password: "" });
    } catch (error) {
      setSessionError(error.message || "Unable to sign in");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    clearSession("");
  };

  const updateEmailField = (field, value) => {
    setEmailForm((previous) => ({ ...previous, [field]: value }));
  };

  const buildTemplateOptionsPayload = () => ({
    salutation: emailForm.salutation,
    receiverAddressMode: emailForm.receiverAddressMode,
    letterTitle: emailForm.letterTitle,
    letterDate: emailForm.letterDate,
    receiverAddressBlock: emailForm.receiverAddressBlock,
    receiverAddressCustom: emailForm.receiverAddressCustom,
    senderName: emailForm.senderName,
    senderRole: emailForm.senderRole
  });

  const handleClearRecipients = () => {
    setRecipientInput("");
    setPreviewPageIndex(0);
  };

  const handleSendEmail = async (event) => {
    event.preventDefault();
    setEmailStatus({ type: "", message: "" });

    if (parsedRecipients.length === 0) {
      setEmailStatus({ type: "error", message: "Add at least one recipient email." });
      return;
    }

    if (!String(emailForm.body || "").trim()) {
      setEmailStatus({ type: "error", message: "Email body is required." });
      return;
    }

    if (
      emailForm.receiverAddressMode === "custom" &&
      !String(emailForm.receiverAddressCustom || "").trim()
    ) {
      setEmailStatus({
        type: "error",
        message: "Enter a custom receiver address or switch receiver address mode."
      });
      return;
    }

    setSendLoading(true);

    try {
      const payload = await sendAdminEmail(token, {
        recipients: parsedRecipients,
        subject: normalizeSubject(emailForm.subject),
        body: emailForm.body,
        ...buildTemplateOptionsPayload()
      });

      const sentCount = Number(payload.sent_count || 0);
      const failedCount = Number(payload.failed_count || 0);
      const suffix = failedCount > 0 ? ` ${failedCount} recipient(s) failed.` : "";

      setEmailStatus({
        type: "success",
        message: `Email sent to ${sentCount} recipient(s).${suffix}`.trim()
      });

      setRecipientInput("");
      setPreviewPageIndex(0);
    } catch (error) {
      const invalid = Array.isArray(error?.payload?.invalid) ? error.payload.invalid : [];
      const invalidSummary = invalid.length > 0 ? ` Invalid: ${invalid.join(", ")}` : "";
      const failed = Array.isArray(error?.payload?.failed) ? error.payload.failed : [];
      const failedSummary =
        failed.length > 0
          ? ` SMTP: ${failed
              .slice(0, 3)
              .map((entry) => entry?.error)
              .filter(Boolean)
              .join(" | ")}`
          : "";
      setEmailStatus({
        type: "error",
        message: `${error.message || "Failed to send email."}${invalidSummary}${failedSummary}`
      });
    } finally {
      setSendLoading(false);
    }
  };

  const hasPreviewRecipients = parsedRecipients.length > 0;
  const previewTotalPages = parsedRecipients.length;
  const previewIndex = hasPreviewRecipients
    ? Math.min(previewPageIndex, parsedRecipients.length - 1)
    : 0;
  const previewRecipientEmail = hasPreviewRecipients
    ? parsedRecipients[previewIndex]
    : "recipient@example.com";
  const previewPageNumber = hasPreviewRecipients ? previewIndex + 1 : 0;
  const canPagePreview = previewTotalPages > 1;
  const previewSubject = normalizeSubject(emailForm.subject);

  useEffect(() => {
    let active = true;

    if (!token || !user) {
      setPreviewHtml("");
      setPreviewError("");
      setPreviewLoading(false);
      return undefined;
    }

    setPreviewLoading(true);
    setPreviewError("");

    const timer = setTimeout(async () => {
      try {
        const payload = await fetchEmailPreview(token, {
          recipient: previewRecipientEmail,
          body: emailForm.body,
          ...buildTemplateOptionsPayload()
        });
        if (active) {
          setPreviewHtml(String(payload?.html || ""));
        }
      } catch (error) {
        if (active) {
          setPreviewHtml("");
          setPreviewError(error.message || "Failed to load preview.");
        }
      } finally {
        if (active) {
          setPreviewLoading(false);
        }
      }
    }, 120);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [
    token,
    user,
    previewRecipientEmail,
    emailForm.body,
    emailForm.salutation,
    emailForm.receiverAddressMode,
    emailForm.letterTitle,
    emailForm.letterDate,
    emailForm.receiverAddressBlock,
    emailForm.receiverAddressCustom,
    emailForm.senderName,
    emailForm.senderRole
  ]);

  const previewFrameHtml =
    previewHtml ||
    `<!doctype html><html><body style="margin:0; padding:16px; font-family:Arial, Helvetica, sans-serif; color:#475569; background:#f8fafc;">${
      previewLoading
        ? "Loading preview..."
        : escapeText(previewError || "Preview unavailable.")
    }</body></html>`;
  const handleDownloadPreviewPdf = () => {
    const sourceHtml = String(previewHtml || "").trim();
    if (!sourceHtml) {
      setEmailStatus({
        type: "error",
        message: "Preview is empty. Add recipients/content before downloading."
      });
      return;
    }

    const pageStyle = `
      <style>
        @page {
          size: A4;
          margin: 0;
        }
        html,
        body {
          margin: 0 !important;
          padding: 0 !important;
          background: #ffffff !important;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        body > div:first-child {
          display: none !important;
        }
        body > table:first-of-type {
          width: 100% !important;
          background: #ffffff !important;
        }
        body > table:first-of-type > tbody > tr > td {
          padding: 0 !important;
        }
        body > table:first-of-type > tbody > tr > td > table:first-of-type {
          width: 100% !important;
          max-width: none !important;
          border: 0 !important;
          margin: 0 !important;
        }
        body > table:first-of-type > tbody > tr > td > table:nth-of-type(2) {
          display: none !important;
        }
      </style>
    `;
    const printableHtml = sourceHtml.includes("</head>")
      ? sourceHtml.replace("</head>", `${pageStyle}</head>`)
      : `<!doctype html><html><head>${pageStyle}</head><body>${sourceHtml}</body></html>`;
    try {
      const printFrame = document.createElement("iframe");
      printFrame.setAttribute("aria-hidden", "true");
      printFrame.style.position = "fixed";
      printFrame.style.right = "0";
      printFrame.style.bottom = "0";
      printFrame.style.width = "0";
      printFrame.style.height = "0";
      printFrame.style.opacity = "0";
      printFrame.style.pointerEvents = "none";
      printFrame.style.border = "0";

      document.body.appendChild(printFrame);

      let hasPrinted = false;
      const cleanup = () => {
        window.setTimeout(() => {
          if (printFrame.parentNode) {
            printFrame.parentNode.removeChild(printFrame);
          }
        }, 800);
      };

      const triggerPrint = () => {
        if (hasPrinted) return;
        hasPrinted = true;
        const frameWindow = printFrame.contentWindow;
        if (!frameWindow) {
          throw new Error("Print frame is not available.");
        }
        frameWindow.focus();
        frameWindow.print();
        cleanup();
      };

      printFrame.onload = () => {
        window.setTimeout(() => {
          try {
            triggerPrint();
          } catch (error) {
            setEmailStatus({
              type: "error",
              message: "Failed to render PDF output. Please try again."
            });
            cleanup();
          }
        }, 260);
      };

      const frameDoc = printFrame.contentDocument || printFrame.contentWindow?.document;
      if (!frameDoc) {
        cleanup();
        setEmailStatus({
          type: "error",
          message: "Unable to prepare printable preview."
        });
        return;
      }

      frameDoc.open();
      frameDoc.write(printableHtml);
      frameDoc.close();

      window.setTimeout(() => {
        if (hasPrinted) return;
        try {
          triggerPrint();
        } catch (error) {
          setEmailStatus({
            type: "error",
            message: "Failed to render PDF output. Please try again."
          });
          cleanup();
        }
      }, 1400);
    } catch (error) {
      setEmailStatus({
        type: "error",
        message: "Failed to prepare PDF output. Please try again."
      });
    }
  };

  return (
    <div className="mailer-app">
      <header className="mailer-header">
        <div className="mailer-header-inner">
          <h1 className="mailer-logo" aria-label="ProgrammoCeuticals Mailer">
            <span className="mailer-logo-primary">Programmo</span>
            <span className="mailer-logo-secondary">Ceuticals</span>
            <span className="mailer-logo-tag">Mailer</span>
          </h1>

          {user ? (
            <div className="mailer-header-user">
              <span>{user.email}</span>
              <button type="button" className="mail-btn mail-btn-secondary" onClick={handleLogout}>
                Sign out
              </button>
            </div>
          ) : null}
        </div>
      </header>

      <main className="mailer-main">
        {sessionLoading ? (
          <section className="mail-card auth-card">
            <p className="auth-loading">Checking session...</p>
          </section>
        ) : !user ? (
          <section className="mail-card auth-card">
            <h2>Admin Sign In</h2>
            <p>
              Sign in with the configured admin account to access the standalone mail app.
            </p>
            <form className="auth-form" onSubmit={handleLogin}>
              <label htmlFor="mail-login-email">Email</label>
              <input
                id="mail-login-email"
                type="email"
                value={loginForm.email}
                onChange={(event) => handleLoginField("email", event.target.value)}
                placeholder="info@programmoceuticals.com"
                required
              />

              <label htmlFor="mail-login-password">Password</label>
              <input
                id="mail-login-password"
                type="password"
                value={loginForm.password}
                onChange={(event) => handleLoginField("password", event.target.value)}
                placeholder="Password"
                required
              />

              {sessionError ? <div className="mail-alert mail-alert-error">{sessionError}</div> : null}

              <button type="submit" className="mail-btn mail-btn-primary" disabled={loginLoading}>
                {loginLoading ? "Signing in..." : "Sign in"}
              </button>
            </form>
          </section>
        ) : (
          <>
            <div className="mobile-panel-toggle" role="tablist" aria-label="Mailer workspace view">
              <button
                type="button"
                className={`mobile-toggle-btn ${mobilePanel === "compose" ? "active" : ""}`}
                role="tab"
                aria-selected={mobilePanel === "compose"}
                onClick={() => setMobilePanel("compose")}
              >
                Compose
              </button>
              <button
                type="button"
                className={`mobile-toggle-btn ${mobilePanel === "preview" ? "active" : ""}`}
                role="tab"
                aria-selected={mobilePanel === "preview"}
                onClick={() => setMobilePanel("preview")}
              >
                Preview
              </button>
            </div>
            <section className="mailer-layout">
              <article
                className={`mail-card composer-card workspace-panel ${
                  mobilePanel === "compose" ? "is-active" : ""
                }`}
              >
              <div className="section-head">
                <h2>Email Users</h2>
                <span className="section-subtle">
                  Configure letter date/title, salutation, receiver address mode, sender name, designation, subject, and body.
                </span>
              </div>

              <div className="mail-template-note">
                <p>
                  <strong>Subject:</strong> {previewSubject}
                </p>
                <p>
                  <strong>Date:</strong> {resolveTemplateDate(emailForm.letterDate)}
                </p>
                <p>
                  <strong>Letter Title:</strong> {emailForm.letterTitle.trim() || "Not set"}
                </p>
                <p>
                  <strong>Receiver Address Block:</strong>{" "}
                  {emailForm.receiverAddressBlock.trim() ? "Configured" : "Not set"}
                </p>
                <p>
                  <strong>Greeting:</strong>{" "}
                  {`${String(emailForm.salutation || "Dear").trim() || "Dear"} ${
                    emailForm.receiverAddressMode === "custom"
                      ? emailForm.receiverAddressCustom || "[Custom Address]"
                      : emailForm.receiverAddressMode === "name"
                        ? "[Recipient Name]"
                        : "[Recipient Email]"
                  },`}
                </p>
                <p>
                  <strong>Signature:</strong>{" "}
                  {(emailForm.senderName || DEFAULT_SENDER_NAME).trim()} -{" "}
                  {(emailForm.senderRole || DEFAULT_SENDER_ROLE).trim()}
                </p>
                <p><em>Body appears in live preview and sent email exactly.</em></p>
              </div>

              <form className="composer-form" onSubmit={handleSendEmail}>
                <label htmlFor="mail-subject">Subject</label>
                <input
                  id="mail-subject"
                  type="text"
                  maxLength={140}
                  value={emailForm.subject}
                  onChange={(event) => updateEmailField("subject", event.target.value)}
                  placeholder="ProgrammoCeuticals Update"
                />

                <label htmlFor="mail-letter-date">Letter Date</label>
                <input
                  id="mail-letter-date"
                  type="date"
                  value={emailForm.letterDate}
                  onChange={(event) => updateEmailField("letterDate", event.target.value)}
                />

                <label htmlFor="mail-letter-title">Letter Title (Optional)</label>
                <input
                  id="mail-letter-title"
                  type="text"
                  maxLength={220}
                  value={emailForm.letterTitle}
                  onChange={(event) => updateEmailField("letterTitle", event.target.value)}
                  placeholder="e.g. Re: Dossier Submission Clarification"
                />

                <label htmlFor="mail-receiver-address-block">
                  Receiver Address Block (Appears Before Salutation)
                </label>
                <textarea
                  id="mail-receiver-address-block"
                  rows={4}
                  value={emailForm.receiverAddressBlock}
                  onChange={(event) =>
                    updateEmailField("receiverAddressBlock", event.target.value)
                  }
                  placeholder={"Line 1\nLine 2\nUse [recipient email] or [recipient name] tokens if needed."}
                />

                <label htmlFor="mail-salutation">Salutation</label>
                <input
                  id="mail-salutation"
                  type="text"
                  maxLength={60}
                  value={emailForm.salutation}
                  onChange={(event) => updateEmailField("salutation", event.target.value)}
                  placeholder="Dear"
                />

                <label htmlFor="mail-receiver-address-mode">Receiver Address</label>
                <select
                  id="mail-receiver-address-mode"
                  value={emailForm.receiverAddressMode}
                  onChange={(event) =>
                    updateEmailField("receiverAddressMode", event.target.value)
                  }
                >
                  <option value="email">Recipient Email</option>
                  <option value="name">Recipient Name (derived)</option>
                  <option value="custom">Custom Receiver Address</option>
                </select>

                {emailForm.receiverAddressMode === "custom" ? (
                  <>
                    <label htmlFor="mail-receiver-address-custom">Custom Receiver Address</label>
                    <input
                      id="mail-receiver-address-custom"
                      type="text"
                      maxLength={140}
                      value={emailForm.receiverAddressCustom}
                      onChange={(event) =>
                        updateEmailField("receiverAddressCustom", event.target.value)
                      }
                      placeholder="e.g. Sir / Madam"
                    />
                  </>
                ) : null}

                <label htmlFor="mail-sender-name">Sender Name</label>
                <input
                  id="mail-sender-name"
                  type="text"
                  maxLength={140}
                  value={emailForm.senderName}
                  onChange={(event) => updateEmailField("senderName", event.target.value)}
                  placeholder={DEFAULT_SENDER_NAME}
                />

                <label htmlFor="mail-sender-role">Designation</label>
                <input
                  id="mail-sender-role"
                  type="text"
                  maxLength={140}
                  value={emailForm.senderRole}
                  onChange={(event) => updateEmailField("senderRole", event.target.value)}
                  placeholder={DEFAULT_SENDER_ROLE}
                />

                <label htmlFor="mail-recipients">Recipients</label>
                <textarea
                  id="mail-recipients"
                  rows={4}
                  value={recipientInput}
                  onChange={(event) => setRecipientInput(event.target.value)}
                  placeholder="Type recipient emails. Separate with commas, spaces, semicolons, or new lines."
                />

                <div className="recipient-toolbar">
                  <button
                    type="button"
                    className="mail-btn mail-btn-secondary"
                    onClick={handleClearRecipients}
                    disabled={parsedRecipients.length === 0 && !recipientInput.trim()}
                  >
                    Clear Recipients
                  </button>
                  <span className="recipient-count">
                    Parsed {parsedRecipients.length} recipient(s)
                  </span>
                </div>
                <p className="recipient-helper">
                  Recipients are typed manually in this standalone app.
                </p>

                <label htmlFor="mail-body">Body</label>
                <textarea
                  id="mail-body"
                  rows={11}
                  value={emailForm.body}
                  onChange={(event) => updateEmailField("body", event.target.value)}
                  placeholder="Type your message body here..."
                />

                {emailStatus.message ? (
                  <div
                    className={`mail-alert ${
                      emailStatus.type === "success" ? "mail-alert-success" : "mail-alert-error"
                    }`}
                  >
                    {emailStatus.message}
                  </div>
                ) : null}

                <button type="submit" className="mail-btn mail-btn-primary" disabled={sendLoading}>
                  {sendLoading ? "Sending..." : "Send Email"}
                </button>
              </form>
            </article>

              <article
                className={`mail-card preview-card workspace-panel ${
                  mobilePanel === "preview" ? "is-active" : ""
                }`}
              >
              <div className="preview-header">
                <span>Live Preview (As Sent)</span>
                <span className="preview-badge">
                  {hasPreviewRecipients
                    ? `Page ${previewPageNumber} of ${previewTotalPages}`
                    : "No Recipient Selected"}
                </span>
              </div>

              <div className="preview-toolbar">
                <button
                  type="button"
                  className="mail-btn mail-btn-secondary"
                  onClick={() => setPreviewPageIndex((current) => Math.max(current - 1, 0))}
                  disabled={!canPagePreview || previewIndex === 0}
                >
                  Previous
                </button>
                <div className="preview-recipient">
                  Recipient: <strong>{hasPreviewRecipients ? previewRecipientEmail : "Type recipients to preview"}</strong>
                </div>
                <button
                  type="button"
                  className="mail-btn mail-btn-secondary"
                  onClick={() =>
                    setPreviewPageIndex((current) =>
                      hasPreviewRecipients
                        ? Math.min(current + 1, parsedRecipients.length - 1)
                        : 0
                    )
                  }
                  disabled={!canPagePreview || previewIndex >= parsedRecipients.length - 1}
                >
                  Next
                </button>
              </div>
              <div className="preview-toolbar preview-toolbar-download">
                <button
                  type="button"
                  className="mail-btn mail-btn-secondary"
                  onClick={handleDownloadPreviewPdf}
                >
                  Download PDF
                </button>
              </div>

              <iframe
                title="ProgrammoCeuticals email preview"
                className="preview-frame"
                srcDoc={previewFrameHtml}
              />
              </article>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default App;
