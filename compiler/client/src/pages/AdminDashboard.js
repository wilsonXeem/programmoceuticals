import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  addExportCredits,
  fetchPaymentLogs,
  fetchPaymentRequests,
  fetchUsers,
  sendAdminEmail,
  updatePaymentRequest,
  updateUserTier
} from "../services/adminService";

const EMAIL_TEMPLATE_META = {
  companyName: process.env.REACT_APP_EMAIL_COMPANY_NAME || "ProgrammoCeuticals",
  location: process.env.REACT_APP_EMAIL_LOCATION || "Lagos, Nigeria",
  website: process.env.REACT_APP_EMAIL_WEBSITE || "www.programmoceuticals.com",
  contactEmail:
    process.env.REACT_APP_EMAIL_CONTACT_EMAIL || "info@programmoceuticals.com",
  phone: process.env.REACT_APP_EMAIL_PHONE || "+234 903 378 2254",
  senderName:
    process.env.REACT_APP_EMAIL_SENDER_NAME ||
    "Wilson Zimthamaha Bonkuru, B.Pharm",
  senderRole: process.env.REACT_APP_EMAIL_SENDER_ROLE || "Founder",
  legalText:
    process.env.REACT_APP_EMAIL_LEGAL_TEXT ||
    "© ProgrammoCeuticals. All rights reserved."
};
const escapeHtml = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const normalizeEmail = (value) => String(value || "").trim().toLowerCase();

const personalizePreviewBody = (body, recipientEmail) => {
  const email =
    String(recipientEmail || "").trim().toLowerCase() || "recipient@example.com";
  return String(body || "")
    .replace(/\[recipient\s*email\]/gi, email)
    .replace(/\[email\]/gi, email)
    .replace(/\{\{\s*recipient_email\s*\}\}/gi, email)
    .replace(/\{\{\s*email\s*\}\}/gi, email)
    .replace(/\[recipient\s*name\]/gi, email)
    .replace(/\[name\]/gi, email)
    .replace(/\{\{\s*recipient_name\s*\}\}/gi, email)
    .replace(/\{\{\s*name\s*\}\}/gi, email);
};

const buildBodyPreviewHtml = (body, recipientEmail) => {
  const personalized = personalizePreviewBody(body, recipientEmail);
  const normalized = String(personalized || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (normalized.length === 0) {
    return '<p style="margin:0 0 14px 0; color:#666666;"><em>[Your body text appears here]</em></p>';
  }

  return String(personalized)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => `<p style="margin:0 0 14px 0;">${escapeHtml(line)}</p>`)
    .join("");
};

const formatTemplateDate = (date = new Date()) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);

const getTodayDateInput = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

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

const RECEIVER_ADDRESS_MODES = new Set(["email", "name", "custom"]);

const normalizeTemplateOptions = (templateOptions = {}) => {
  const salutation = String(templateOptions.salutation ?? "Dear")
    .trim()
    .slice(0, 60);
  const receiverAddressMode = String(templateOptions.receiverAddressMode || "")
    .trim()
    .toLowerCase();

  return {
    salutation: salutation || "Dear",
    receiverAddressMode: RECEIVER_ADDRESS_MODES.has(receiverAddressMode)
      ? receiverAddressMode
      : "email",
    letterTitle: String(templateOptions.letterTitle || "")
      .trim()
      .slice(0, 220),
    letterDate: String(templateOptions.letterDate || "")
      .trim()
      .slice(0, 40),
    receiverAddressBlock: String(templateOptions.receiverAddressBlock || "")
      .trim()
      .slice(0, 800),
    receiverAddressCustom: String(templateOptions.receiverAddressCustom || "")
      .trim()
      .slice(0, 140),
    senderName: String(templateOptions.senderName || "")
      .trim()
      .slice(0, 140),
    senderRole: String(templateOptions.senderRole || "")
      .trim()
      .slice(0, 140)
  };
};

const deriveRecipientName = (email) => {
  const localPart = String(email || "").split("@")[0] || "";
  const words = localPart
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) {
    return "";
  }

  return words
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join(" ");
};

const resolveReceiverAddress = (recipientEmail, templateOptions) => {
  const mode = templateOptions.receiverAddressMode || "email";
  if (mode === "custom" && templateOptions.receiverAddressCustom) {
    return templateOptions.receiverAddressCustom;
  }
  if (mode === "name") {
    const recipientName = deriveRecipientName(recipientEmail);
    if (recipientName) {
      return recipientName;
    }
  }
  return recipientEmail;
};

const personalizeReceiverAddressBlock = (addressBlock, recipientEmail) => {
  const email =
    String(recipientEmail || "").trim().toLowerCase() || "recipient@example.com";
  const name = deriveRecipientName(email) || email;

  return String(addressBlock || "")
    .replace(/\[recipient\s*email\]/gi, email)
    .replace(/\[email\]/gi, email)
    .replace(/\{\{\s*recipient_email\s*\}\}/gi, email)
    .replace(/\{\{\s*email\s*\}\}/gi, email)
    .replace(/\[recipient\s*name\]/gi, name)
    .replace(/\[name\]/gi, name)
    .replace(/\{\{\s*recipient_name\s*\}\}/gi, name)
    .replace(/\{\{\s*name\s*\}\}/gi, name);
};

const buildReceiverAddressPreviewHtml = (addressBlock, recipientEmail) => {
  const lines = String(personalizeReceiverAddressBlock(addressBlock, recipientEmail))
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    return "";
  }

  return lines
    .map((line, index) => {
      const marginBottom = index === lines.length - 1 ? "14px" : "2px";
      return `<p style="margin:0 0 ${marginBottom} 0;">${escapeHtml(line)}</p>`;
    })
    .join("");
};

const buildLetterTitlePreviewHtml = (letterTitle) => {
  const value = String(letterTitle || "").trim();
  if (!value) {
    return "";
  }

  return `<p style="margin:0 0 14px 0; font-weight:700;">${escapeHtml(value)}</p>`;
};

const buildEmailPreviewHtml = (body, recipientEmail, templateOptions = {}) => {
  const bodyHtml = buildBodyPreviewHtml(body, recipientEmail);
  const normalizedOptions = normalizeTemplateOptions(templateOptions);
  const letterTitleHtml = buildLetterTitlePreviewHtml(normalizedOptions.letterTitle);
  const receiverAddressHtml = buildReceiverAddressPreviewHtml(
    normalizedOptions.receiverAddressBlock,
    recipientEmail
  );
  const receiverAddress = resolveReceiverAddress(recipientEmail, normalizedOptions);
  const m = EMAIL_TEMPLATE_META;
  const safeReceiverAddress = escapeHtml(receiverAddress || "recipient@example.com");
  const safeSalutation = escapeHtml(normalizedOptions.salutation);
  const safeSenderName = escapeHtml(normalizedOptions.senderName || m.senderName);
  const safeSenderRole = escapeHtml(normalizedOptions.senderRole || m.senderRole);
  const safeDate = escapeHtml(resolveTemplateDate(normalizedOptions.letterDate));
  const logoMarkup = `
    <div style="font-family: Arial, Helvetica, sans-serif; font-size:34px; font-weight:800; line-height:1; letter-spacing:-0.5px;">
      <span style="color:#120E73;">Programmo</span><span style="color:#4FA9DA;">Ceuticals</span>
    </div>
  `;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no" />
    <title>ProgrammoCeuticals Email Preview</title>
  </head>
  <body style="margin:0; padding:0; background:#f5f5f5; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f5f5f5; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="680" style="width:680px; max-width:680px; background:#ffffff; border:1px solid #e5e5e5; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
            <tr>
              <td style="padding:18px 24px 10px 24px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td width="70%" align="left" valign="middle" style="padding:0; margin:0;">
                      ${logoMarkup}
                    </td>
                    <td width="30%" align="right" valign="middle" style="padding:0; margin:0;">
                      <div style="font-family: Arial, Helvetica, sans-serif; font-size:16px; font-weight:700; color:#111111; line-height:1;">
                        ${escapeHtml(m.location)}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td width="70%" style="width:70%; height:10px; background:#4FA9DA;"></td>
                    <td width="30%" style="width:30%; height:10px; background:#120E73;"></td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 24px 0 24px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td align="right" style="font-family: Arial, Helvetica, sans-serif; font-size:13px; font-weight:600; font-style:italic; color:#4b5563; line-height:1.3;">
                      ${safeDate}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 45px 34px 45px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td style="font-family: Arial, Helvetica, sans-serif; color:#111111; font-size:14.5px; line-height:1.65;">
                      ${receiverAddressHtml}

                      ${letterTitleHtml}

                      <p style="margin:0 0 14px 0;">${safeSalutation} <strong>${safeReceiverAddress}</strong>,</p>
                      ${bodyHtml}
                      <p style="margin:0 0 14px 0;">Kind regards,</p>
                      <p style="margin:0;">
                        <strong>${safeSenderName}</strong><br />
                        <span style="font-weight:400;">${safeSenderRole}, ${escapeHtml(m.companyName)}</span>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td width="70%" style="width:70%; height:6px; background:#4FA9DA;"></td>
                    <td width="30%" style="width:30%; height:6px; background:#120E73;"></td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0; background:#ffffff;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td align="center" style="padding:12px 18px; font-family: Arial, Helvetica, sans-serif; font-size:14px; line-height:1.4; color:#111111; font-weight:800;">
                      ${escapeHtml(m.website)}&nbsp;&nbsp;|&nbsp;&nbsp;${escapeHtml(m.contactEmail)}&nbsp;&nbsp;|&nbsp;&nbsp;${escapeHtml(m.phone)}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td width="70%" style="width:70%; height:18px; background:#4FA9DA;"></td>
                    <td width="30%" style="width:30%; height:18px; background:#120E73;"></td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="680" style="width:680px; max-width:680px; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
            <tr>
              <td align="center" style="padding:10px 6px 0 6px; font-family: Arial, Helvetica, sans-serif; font-size:12px; line-height:1.5; color:#666666;">
                ${escapeHtml(m.legalText)}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

const normalizeSubject = (subject) =>
  String(subject || "")
    .trim()
    .slice(0, 140) || "ProgrammoCeuticals Update";

const AdminDashboard = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("requests");
  const [actionState, setActionState] = useState({ type: null, id: null });
  const [copiedUserId, setCopiedUserId] = useState(null);
  const [emailForm, setEmailForm] = useState({
    subject: "ProgrammoCeuticals Update",
    body: "",
    salutation: "Dear",
    receiverAddressMode: "email",
    letterTitle: "",
    letterDate: getTodayDateInput(),
    receiverAddressBlock: "",
    receiverAddressCustom: "",
    senderName: EMAIL_TEMPLATE_META.senderName,
    senderRole: EMAIL_TEMPLATE_META.senderRole
  });
  const [recipientSearch, setRecipientSearch] = useState("");
  const [selectedRecipientEmails, setSelectedRecipientEmails] = useState([]);
  const [previewPageIndex, setPreviewPageIndex] = useState(0);
  const [emailStatus, setEmailStatus] = useState({ type: null, message: "" });

  const loadData = async () => {
    setError("");
    try {
      const [usersPayload, requestsPayload] = await Promise.all([
        fetchUsers(token),
        fetchPaymentRequests(token)
      ]);
      setUsers(usersPayload.users || []);
      setRequests(requestsPayload.requests || []);
      const logsPayload = await fetchPaymentLogs(token);
      setLogs(logsPayload.logs || []);
    } catch (err) {
      setError(err.message || "Failed to load admin data");
    }
  };

  useEffect(() => {
    if (token) {
      loadData();
    }
  }, [token]);

  useEffect(() => {
    const validEmails = new Set(
      users
        .map((user) => normalizeEmail(user.email))
        .filter(Boolean)
    );
    setSelectedRecipientEmails((previous) =>
      previous.filter((email) => validEmails.has(email))
    );
  }, [users]);

  useEffect(() => {
    setPreviewPageIndex((current) => {
      if (selectedRecipientEmails.length === 0) return 0;
      const maxIndex = selectedRecipientEmails.length - 1;
      return current > maxIndex ? maxIndex : current;
    });
  }, [selectedRecipientEmails]);

  const filteredRecipientUsers = useMemo(() => {
    const search = String(recipientSearch || "").trim().toLowerCase();
    const sortedUsers = [...users].sort((a, b) =>
      String(a.email || "").localeCompare(String(b.email || ""), undefined, {
        sensitivity: "base"
      })
    );

    return sortedUsers.filter((user) => {
      const email = normalizeEmail(user.email);
      if (!email) return false;
      if (!search) return true;
      const searchableText = [
        user.email,
        user.username,
        user.phone,
        user.whatsappNumber
      ]
        .map((value) => String(value || "").toLowerCase())
        .join(" ");
      return searchableText.includes(search);
    });
  }, [users, recipientSearch]);

  const handleGrantPaid = async (userId) => {
    setActionState({ type: "grant", id: userId });
    try {
      await updateUserTier(token, userId, "paid");
      await addExportCredits(token, userId, 2);
      await loadData();
    } finally {
      setActionState({ type: null, id: null });
    }
  };

  const handleAdjustCredits = async (userId, delta) => {
    setActionState({ type: delta > 0 ? "credit-add" : "credit-remove", id: userId });
    try {
      await addExportCredits(token, userId, delta);
      await loadData();
    } finally {
      setActionState({ type: null, id: null });
    }
  };

  const handleMarkRequest = async (id, status) => {
    setActionState({ type: status, id });
    try {
      await updatePaymentRequest(token, id, status);
      await loadData();
    } finally {
      setActionState({ type: null, id: null });
    }
  };

  const handleCopyAccessCode = async (userId, code) => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopiedUserId(userId);
      window.setTimeout(() => setCopiedUserId(null), 1200);
    } catch (copyError) {
      // Silently ignore clipboard failures (e.g. unsupported browser context)
    }
  };

  const updateEmailField = (field, value) => {
    setEmailForm((prev) => ({ ...prev, [field]: value }));
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

  const handleToggleRecipient = (email) => {
    if (!email) return;
    setSelectedRecipientEmails((previous) =>
      previous.includes(email)
        ? previous.filter((value) => value !== email)
        : [...previous, email]
    );
  };

  const handleSelectVisibleUsers = () => {
    const visibleEmails = filteredRecipientUsers
      .map((user) => normalizeEmail(user.email))
      .filter(Boolean);
    if (visibleEmails.length === 0) return;
    setSelectedRecipientEmails((previous) =>
      Array.from(new Set([...previous, ...visibleEmails]))
    );
  };

  const handleClearSelectedRecipients = () => {
    setSelectedRecipientEmails([]);
  };

  const handleSendEmail = async (event) => {
    event.preventDefault();
    setEmailStatus({ type: null, message: "" });

    if (selectedRecipientEmails.length === 0) {
      setEmailStatus({ type: "error", message: "Select at least one recipient user." });
      return;
    }

    if (!emailForm.body.trim()) {
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

    setActionState({ type: "send-email", id: "bulk" });
    try {
      const payload = await sendAdminEmail(token, {
        recipients: selectedRecipientEmails,
        subject: normalizeSubject(emailForm.subject),
        body: emailForm.body,
        ...buildTemplateOptionsPayload()
      });
      const failedCount = Number(payload.failed_count || 0);
      const sentCount = Number(payload.sent_count || 0);
      const failureSuffix =
        failedCount > 0 ? ` ${failedCount} recipient(s) failed.` : "";
      setEmailStatus({
        type: "success",
        message: `Email sent to ${sentCount} recipient(s).${failureSuffix}`.trim()
      });
      setSelectedRecipientEmails([]);
      setRecipientSearch("");
      setPreviewPageIndex(0);
    } catch (err) {
      const invalid = Array.isArray(err?.payload?.invalid) ? err.payload.invalid : [];
      const invalidSummary = invalid.length > 0 ? ` Invalid: ${invalid.join(", ")}` : "";
      const failed = Array.isArray(err?.payload?.failed) ? err.payload.failed : [];
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
        message: `${err.message || "Failed to send email."}${invalidSummary}${failedSummary}`
      });
    } finally {
      setActionState({ type: null, id: null });
    }
  };
  const hasPreviewRecipients = selectedRecipientEmails.length > 0;
  const previewTotalPages = selectedRecipientEmails.length;
  const previewIndex = hasPreviewRecipients
    ? Math.min(previewPageIndex, selectedRecipientEmails.length - 1)
    : 0;
  const previewRecipientEmail = hasPreviewRecipients
    ? selectedRecipientEmails[previewIndex]
    : "recipient@example.com";
  const previewPageNumber = hasPreviewRecipients ? previewIndex + 1 : 0;
  const canPagePreview = previewTotalPages > 1;
  const previewSubject = normalizeSubject(emailForm.subject);
  const previewHtml = buildEmailPreviewHtml(
    emailForm.body,
    previewRecipientEmail,
    buildTemplateOptionsPayload()
  );
  const handleDownloadPreviewPdf = () => {
    const sourceHtml = String(previewHtml || "").trim();
    if (!sourceHtml) {
      setEmailStatus({ type: "error", message: "Preview is empty. Add content first." });
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
    <div className="admin-dashboard">
      <div className="admin-container">
        <div className="admin-header">
          <div>
            <h1 className="admin-title">Admin Dashboard</h1>
            <p className="admin-subtitle">Manage users, payment requests, export credits, and user email broadcasts</p>
          </div>
          <div className="admin-tabs">
            <button
              className={`admin-tab ${activeTab === "requests" ? "active" : ""}`}
              onClick={() => setActiveTab("requests")}
            >
              Payment Requests
            </button>
            <button
              className={`admin-tab ${activeTab === "users" ? "active" : ""}`}
              onClick={() => setActiveTab("users")}
            >
              Users
            </button>
            <button
              className={`admin-tab ${activeTab === "logs" ? "active" : ""}`}
              onClick={() => setActiveTab("logs")}
            >
              Payment Logs
            </button>
            <button
              className={`admin-tab ${activeTab === "email" ? "active" : ""}`}
              onClick={() => setActiveTab("email")}
            >
              Email Users
            </button>
          </div>
        </div>

        {error && (
          <div className="admin-error">
            {error}
          </div>
        )}

        <div className="admin-card">
          {activeTab === "requests" ? (
            <>
              <h2 className="admin-section-title">Payment Requests</h2>
              {requests.length === 0 ? (
                <p className="admin-empty">No payment requests yet.</p>
              ) : (
                <div className="admin-table-wrapper">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Status</th>
                        <th>Package</th>
                        <th>Credits</th>
                        <th>Amount</th>
                        <th>Note</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {requests.map((request) => (
                        <tr key={request.id}>
                          <td>
                            <div className="admin-user-cell">{request.email}</div>
                          </td>
                          <td>
                            <span className="admin-badge admin-badge-status">{request.status}</span>
                          </td>
                          <td>{request.packageName || "-"}</td>
                          <td><span className="admin-number">{typeof request.credits === "number" ? request.credits : "-"}</span></td>
                          <td><span className="admin-currency">₦{typeof request.amountNaira === "number" ? request.amountNaira.toLocaleString() : "-"}</span></td>
                          <td className="admin-note-cell">{request.note || "-"}</td>
                          <td>
                            <div className="admin-actions">
                              <button className="admin-btn admin-btn-primary" onClick={() => handleMarkRequest(request.id, "approved")} disabled={actionState.id === request.id}>
                                {actionState.type === "approved" && actionState.id === request.id ? "Approving..." : "Approve"}
                              </button>
                              <button className="admin-btn admin-btn-secondary" onClick={() => handleMarkRequest(request.id, "rejected")} disabled={actionState.id === request.id}>
                                {actionState.type === "rejected" && actionState.id === request.id ? "Rejecting..." : "Reject"}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          ) : activeTab === "users" ? (
            <>
              <h2 className="admin-section-title">Users</h2>
              <p className="admin-section-desc">
                Manage user tiers and export credits. Current access code rotates after each approved export.
              </p>
              {users.length === 0 ? (
                <p className="admin-empty">No users yet.</p>
              ) : (
                <div className="admin-table-wrapper">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>WhatsApp</th>
                        <th>Tier</th>
                        <th>Credits</th>
                        <th>Access Code</th>
                        <th>Used Codes</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td>
                            <div className="admin-user-cell">{user.email}</div>
                          </td>
                          <td>{user.username}</td>
                          <td>{user.phone}</td>
                          <td>{user.whatsappNumber}</td>
                          <td>
                            <span className={`admin-badge admin-badge-${user.tier}`}>{user.tier}</span>
                          </td>
                          <td><span className="admin-number">{user.export_credits}</span></td>
                          <td>
                            {user.access_code ? (
                              <div className="admin-code-cell">
                                <code className="admin-code">{user.access_code}</code>
                                <button
                                  type="button"
                                  className="admin-copy-btn"
                                  onClick={() => handleCopyAccessCode(user.id, user.access_code)}
                                >
                                  {copiedUserId === user.id ? "✓" : "Copy"}
                                </button>
                              </div>
                            ) : (
                              <span className="admin-muted">-</span>
                            )}
                          </td>
                          <td><span className="admin-number">{typeof user.used_code_count === "number" ? user.used_code_count : 0}</span></td>
                          <td>
                            <div className="admin-actions">
                              <button className="admin-btn admin-btn-primary" onClick={() => handleGrantPaid(user.id)} disabled={actionState.id === user.id}>
                                {actionState.type === "grant" && actionState.id === user.id ? "Updating..." : "Grant Paid"}
                              </button>
                              <button className="admin-btn admin-btn-small" onClick={() => handleAdjustCredits(user.id, 1)} disabled={actionState.id === user.id}>
                                {actionState.type === "credit-add" && actionState.id === user.id ? "+..." : "+1"}
                              </button>
                              <button className="admin-btn admin-btn-small" onClick={() => handleAdjustCredits(user.id, -1)} disabled={actionState.id === user.id}>
                                {actionState.type === "credit-remove" && actionState.id === user.id ? "-..." : "-1"}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          ) : activeTab === "logs" ? (
            <>
              <h2 className="admin-section-title">Payment Logs</h2>
              {logs.length === 0 ? (
                <p className="admin-empty">No payment logs yet.</p>
              ) : (
                <div className="admin-table-wrapper">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Status</th>
                        <th>Package</th>
                        <th>Credits</th>
                        <th>Amount</th>
                        <th>Note</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {logs.map((log) => (
                        <tr key={log.id}>
                          <td>
                            <div className="admin-user-cell">{log.email}</div>
                          </td>
                          <td>
                            <span className="admin-badge admin-badge-status">{log.status}</span>
                          </td>
                          <td>{log.packageName || "-"}</td>
                          <td><span className="admin-number">{typeof log.credits === "number" ? log.credits : "-"}</span></td>
                          <td><span className="admin-currency">₦{typeof log.amountNaira === "number" ? log.amountNaira.toLocaleString() : "-"}</span></td>
                          <td className="admin-note-cell">{log.note || "-"}</td>
                          <td>{new Date(log.created_at).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          ) : (
            <>
              <h2 className="admin-section-title">Email Users</h2>
              <p className="admin-section-desc">
                Template structure is fixed. Select recipients, then set letter date, title, salutation, receiver addressing, sender details, subject, and body.
              </p>
              <div className="admin-email-layout">
                <form className="admin-email-form" onSubmit={handleSendEmail}>
                  <div className="admin-email-template">
                    <p><strong>Subject:</strong> {previewSubject}</p>
                    <p><strong>Date:</strong> {resolveTemplateDate(emailForm.letterDate)}</p>
                    <p>
                      <strong>Letter Title:</strong>{" "}
                      {emailForm.letterTitle.trim() || "Not set"}
                    </p>
                    <p>
                      <strong>Receiver Address Block:</strong>{" "}
                      {emailForm.receiverAddressBlock.trim()
                        ? "Configured"
                        : "Not set"}
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
                      <strong>Signature:</strong> {(emailForm.senderName || EMAIL_TEMPLATE_META.senderName).trim()} -{" "}
                      {(emailForm.senderRole || EMAIL_TEMPLATE_META.senderRole).trim()}
                    </p>
                    <p><em>Body will appear in live preview.</em></p>
                  </div>

                  <label className="admin-field-label" htmlFor="admin-email-subject">
                    Subject
                  </label>
                  <input
                    id="admin-email-subject"
                    className="admin-input"
                    type="text"
                    maxLength={140}
                    placeholder="ProgrammoCeuticals Update"
                    value={emailForm.subject}
                    onChange={(event) => updateEmailField("subject", event.target.value)}
                  />

                  <label className="admin-field-label" htmlFor="admin-letter-date">
                    Letter Date
                  </label>
                  <input
                    id="admin-letter-date"
                    className="admin-input"
                    type="date"
                    value={emailForm.letterDate}
                    onChange={(event) => updateEmailField("letterDate", event.target.value)}
                  />

                  <label className="admin-field-label" htmlFor="admin-letter-title">
                    Letter Title (Optional)
                  </label>
                  <input
                    id="admin-letter-title"
                    className="admin-input"
                    type="text"
                    maxLength={220}
                    placeholder="e.g. Re: Dossier Submission Clarification"
                    value={emailForm.letterTitle}
                    onChange={(event) => updateEmailField("letterTitle", event.target.value)}
                  />

                  <label className="admin-field-label" htmlFor="admin-receiver-address-block">
                    Receiver Address Block (Appears Before Salutation)
                  </label>
                  <textarea
                    id="admin-receiver-address-block"
                    className="admin-input admin-textarea"
                    rows={4}
                    placeholder={"Line 1\nLine 2\nUse [recipient email] or [recipient name] tokens if needed."}
                    value={emailForm.receiverAddressBlock}
                    onChange={(event) =>
                      updateEmailField("receiverAddressBlock", event.target.value)
                    }
                  />

                  <label className="admin-field-label" htmlFor="admin-email-salutation">
                    Salutation
                  </label>
                  <input
                    id="admin-email-salutation"
                    className="admin-input"
                    type="text"
                    maxLength={60}
                    placeholder="Dear"
                    value={emailForm.salutation}
                    onChange={(event) => updateEmailField("salutation", event.target.value)}
                  />

                  <label className="admin-field-label" htmlFor="admin-receiver-address-mode">
                    Receiver Address
                  </label>
                  <select
                    id="admin-receiver-address-mode"
                    className="admin-input"
                    value={emailForm.receiverAddressMode}
                    onChange={(event) =>
                      updateEmailField("receiverAddressMode", event.target.value)
                    }
                  >
                    <option value="email">Recipient Email</option>
                    <option value="name">Recipient Name (derived)</option>
                    <option value="custom">Custom Receiver Address</option>
                  </select>

                  {emailForm.receiverAddressMode === "custom" && (
                    <>
                      <label
                        className="admin-field-label"
                        htmlFor="admin-receiver-address-custom"
                      >
                        Custom Receiver Address
                      </label>
                      <input
                        id="admin-receiver-address-custom"
                        className="admin-input"
                        type="text"
                        maxLength={140}
                        placeholder="e.g. Sir / Madam"
                        value={emailForm.receiverAddressCustom}
                        onChange={(event) =>
                          updateEmailField("receiverAddressCustom", event.target.value)
                        }
                      />
                    </>
                  )}

                  <label className="admin-field-label" htmlFor="admin-email-sender-name">
                    Sender Name
                  </label>
                  <input
                    id="admin-email-sender-name"
                    className="admin-input"
                    type="text"
                    maxLength={140}
                    placeholder={EMAIL_TEMPLATE_META.senderName}
                    value={emailForm.senderName}
                    onChange={(event) => updateEmailField("senderName", event.target.value)}
                  />

                  <label className="admin-field-label" htmlFor="admin-email-sender-role">
                    Designation
                  </label>
                  <input
                    id="admin-email-sender-role"
                    className="admin-input"
                    type="text"
                    maxLength={140}
                    placeholder={EMAIL_TEMPLATE_META.senderRole}
                    value={emailForm.senderRole}
                    onChange={(event) => updateEmailField("senderRole", event.target.value)}
                  />

                  <label className="admin-field-label" htmlFor="admin-recipient-search">
                    Search Users
                  </label>
                  <input
                    id="admin-recipient-search"
                    className="admin-input"
                    type="text"
                    placeholder="Search by email, username, phone, or WhatsApp..."
                    value={recipientSearch}
                    onChange={(event) => setRecipientSearch(event.target.value)}
                  />
                  <div className="admin-recipient-toolbar">
                    <button
                      type="button"
                      className="admin-btn admin-btn-secondary"
                      onClick={handleSelectVisibleUsers}
                      disabled={filteredRecipientUsers.length === 0}
                    >
                      Select Visible ({filteredRecipientUsers.length})
                    </button>
                    <button
                      type="button"
                      className="admin-btn admin-btn-secondary"
                      onClick={handleClearSelectedRecipients}
                      disabled={selectedRecipientEmails.length === 0}
                    >
                      Clear Selected
                    </button>
                    <span className="admin-helper-text admin-recipient-count">
                      Selected {selectedRecipientEmails.length} of {users.length}
                    </span>
                  </div>
                  <div className="admin-recipient-list" role="listbox" aria-multiselectable="true">
                    {filteredRecipientUsers.length === 0 ? (
                      <div className="admin-recipient-empty">No users match this search.</div>
                    ) : (
                      filteredRecipientUsers.map((user) => {
                        const userEmail = normalizeEmail(user.email);
                        const isSelected = selectedRecipientEmails.includes(userEmail);
                        const contactInfo = user.whatsappNumber || user.phone || "No phone";
                        return (
                          <label
                            key={user.id || userEmail}
                            className={`admin-recipient-item${isSelected ? " selected" : ""}`}
                          >
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => handleToggleRecipient(userEmail)}
                            />
                            <span className="admin-recipient-meta">
                              <span className="admin-recipient-email">{user.email}</span>
                              <span className="admin-recipient-subtle">
                                {user.username || "No username"} · {contactInfo}
                              </span>
                            </span>
                          </label>
                        );
                      })
                    )}
                  </div>

                  <label className="admin-field-label" htmlFor="admin-email-body">
                    Body
                  </label>
                  <textarea
                    id="admin-email-body"
                    className="admin-input admin-textarea"
                    rows={10}
                    placeholder="Type your message body here..."
                    value={emailForm.body}
                    onChange={(event) => updateEmailField("body", event.target.value)}
                  />

                  {emailStatus.type === "success" && (
                    <div className="admin-success">{emailStatus.message}</div>
                  )}
                  {emailStatus.type === "error" && (
                    <div className="admin-error">{emailStatus.message}</div>
                  )}

                  <div className="admin-actions">
                    <button
                      className="admin-btn admin-btn-primary"
                      type="submit"
                      disabled={actionState.type === "send-email"}
                    >
                      {actionState.type === "send-email" ? "Sending..." : "Send Email"}
                    </button>
                  </div>
                </form>

                <div className="admin-email-preview-wrap">
                  <div className="admin-email-preview-head">
                    <span>Live Preview (As Sent)</span>
                    <span className="admin-preview-page-badge">
                      {hasPreviewRecipients
                        ? `Page ${previewPageNumber} of ${previewTotalPages}`
                        : "No Recipient Selected"}
                    </span>
                  </div>
                  <div className="admin-preview-toolbar">
                    <button
                      type="button"
                      className="admin-btn admin-btn-secondary admin-preview-nav"
                      onClick={() =>
                        setPreviewPageIndex((current) => Math.max(current - 1, 0))
                      }
                      disabled={!canPagePreview || previewIndex === 0}
                    >
                      Previous
                    </button>
                    <div className="admin-preview-recipient">
                      Recipient:{" "}
                      <strong>
                        {hasPreviewRecipients ? previewRecipientEmail : "Select users to preview"}
                      </strong>
                    </div>
                    <button
                      type="button"
                      className="admin-btn admin-btn-secondary admin-preview-nav"
                      onClick={() =>
                        setPreviewPageIndex((current) =>
                          hasPreviewRecipients
                            ? Math.min(current + 1, selectedRecipientEmails.length - 1)
                            : 0
                        )
                      }
                      disabled={!canPagePreview || previewIndex >= selectedRecipientEmails.length - 1}
                    >
                      Next
                    </button>
                  </div>
                  <div className="admin-preview-toolbar admin-preview-toolbar-download">
                    <button
                      type="button"
                      className="admin-btn admin-btn-secondary"
                      onClick={handleDownloadPreviewPdf}
                    >
                      Download PDF
                    </button>
                  </div>
                  <iframe
                    className="admin-email-preview-frame"
                    title="ProgrammoCeuticals email preview"
                    srcDoc={previewHtml}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
