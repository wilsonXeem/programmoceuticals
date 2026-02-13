import { config } from "../config/env.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let transporter = null;
let nodemailerLib = null;

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildBodyHtml(body) {
  return String(body || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => `<p style="margin:0 0 14px 0;">${escapeHtml(line)}</p>`)
    .join("");
}

async function ensureTransporter() {
  if (transporter) return transporter;
  if (!config.smtpHost || !config.smtpUser || !config.smtpPass) {
    return null;
  }

  if (!nodemailerLib) {
    try {
      const module = await import("nodemailer");
      nodemailerLib = module.default || module;
    } catch (error) {
      throw new Error("Nodemailer is not installed. Run npm install in compiler/backend to enable admin email sending.");
    }
  }

  transporter = nodemailerLib.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: config.smtpSecure,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass
    }
  });

  return transporter;
}

function deriveRecipientEmail(email) {
  const formattedEmail = String(email || "").trim().toLowerCase();
  return formattedEmail || "recipient@example.com";
}

function personalizeBody(body, recipientEmail) {
  const safeRecipientEmail =
    String(recipientEmail || "").trim().toLowerCase() || "recipient@example.com";
  return String(body || "")
    .replace(/\[recipient\s*email\]/gi, safeRecipientEmail)
    .replace(/\[email\]/gi, safeRecipientEmail)
    .replace(/\{\{\s*recipient_email\s*\}\}/gi, safeRecipientEmail)
    .replace(/\{\{\s*email\s*\}\}/gi, safeRecipientEmail)
    .replace(/\[recipient\s*name\]/gi, safeRecipientEmail)
    .replace(/\[name\]/gi, safeRecipientEmail)
    .replace(/\{\{\s*recipient_name\s*\}\}/gi, safeRecipientEmail)
    .replace(/\{\{\s*name\s*\}\}/gi, safeRecipientEmail);
}

function buildReceiverAddressHtml(addressBlock) {
  const lines = String(addressBlock || "")
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
}

function buildLetterTitleHtml(letterTitle) {
  const value = String(letterTitle || "").trim();
  if (!value) {
    return "";
  }

  return `<p style="margin:0 0 14px 0; font-weight:700;">${escapeHtml(value)}</p>`;
}

const RECEIVER_ADDRESS_MODES = new Set(["email", "name", "custom"]);

function normalizeTemplateOptions(templateOptions = {}) {
  const salutationValue = String(templateOptions?.salutation ?? "Dear")
    .trim()
    .slice(0, 60);
  const receiverAddressModeValue = String(templateOptions?.receiverAddressMode || "")
    .trim()
    .toLowerCase();

  return {
    salutation: salutationValue || "Dear",
    receiverAddressMode: RECEIVER_ADDRESS_MODES.has(receiverAddressModeValue)
      ? receiverAddressModeValue
      : "email",
    letterTitle: String(templateOptions?.letterTitle || "")
      .trim()
      .slice(0, 220),
    letterDate: String(templateOptions?.letterDate || "")
      .trim()
      .slice(0, 40),
    receiverAddressBlock: String(templateOptions?.receiverAddressBlock || "")
      .trim()
      .slice(0, 800),
    receiverAddressCustom: String(templateOptions?.receiverAddressCustom || "")
      .trim()
      .slice(0, 140),
    senderName: String(templateOptions?.senderName || "")
      .trim()
      .slice(0, 140),
    senderRole: String(templateOptions?.senderRole || "")
      .trim()
      .slice(0, 140)
  };
}

function deriveRecipientName(email) {
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
}

function personalizeReceiverAddressBlock(addressBlock, recipientEmail) {
  const safeRecipientEmail = deriveRecipientEmail(recipientEmail);
  const safeRecipientName = deriveRecipientName(safeRecipientEmail) || safeRecipientEmail;

  return String(addressBlock || "")
    .replace(/\[recipient\s*email\]/gi, safeRecipientEmail)
    .replace(/\[email\]/gi, safeRecipientEmail)
    .replace(/\{\{\s*recipient_email\s*\}\}/gi, safeRecipientEmail)
    .replace(/\{\{\s*email\s*\}\}/gi, safeRecipientEmail)
    .replace(/\[recipient\s*name\]/gi, safeRecipientName)
    .replace(/\[name\]/gi, safeRecipientName)
    .replace(/\{\{\s*recipient_name\s*\}\}/gi, safeRecipientName)
    .replace(/\{\{\s*name\s*\}\}/gi, safeRecipientName);
}

function resolveReceiverAddress(recipientEmail, templateOptions) {
  const mode = templateOptions?.receiverAddressMode || "email";
  if (mode === "custom" && templateOptions?.receiverAddressCustom) {
    return templateOptions.receiverAddressCustom;
  }

  if (mode === "name") {
    const derivedName = deriveRecipientName(recipientEmail);
    if (derivedName) {
      return derivedName;
    }
  }

  return deriveRecipientEmail(recipientEmail);
}

function getTemplateMeta(templateOptions = {}) {
  const options = normalizeTemplateOptions(templateOptions);
  return {
    companyName: config.emailCompanyName || "ProgrammoCeuticals",
    location: config.emailLocation || "Lagos, Nigeria",
    website: config.emailWebsite || "www.programmoceuticals.com",
    contactEmail: config.emailContactEmail || "info@programmoceuticals.com",
    phone: config.emailPhone || "+234 903 378 2254",
    senderName:
      options.senderName ||
      config.emailSenderName ||
      "Wilson Zimthamaha Bonkuru, B.Pharm",
    senderRole: options.senderRole || config.emailSenderRole || "Founder",
    legalText: config.emailLegalText || "© ProgrammoCeuticals. All rights reserved."
  };
}

function formatTemplateDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

function resolveTemplateDate(letterDateInput) {
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
}

function buildLogoMarkup() {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; font-size:34px; font-weight:800; line-height:1; letter-spacing:-0.5px;">
      <span style="color:#120E73;">Programmo</span><span style="color:#4FA9DA;">Ceuticals</span>
    </div>
  `;
}

function buildTemplateHtml({ recipientEmail, body, templateOptions }) {
  const normalizedOptions = normalizeTemplateOptions(templateOptions);
  const meta = getTemplateMeta(normalizedOptions);
  const htmlBody = buildBodyHtml(personalizeBody(body, recipientEmail));
  const letterTitleHtml = buildLetterTitleHtml(normalizedOptions.letterTitle);
  const receiverAddressHtml = buildReceiverAddressHtml(
    personalizeReceiverAddressBlock(normalizedOptions.receiverAddressBlock, recipientEmail)
  );
  const receiverAddress = resolveReceiverAddress(recipientEmail, normalizedOptions);
  const safeReceiverAddress = escapeHtml(
    receiverAddress || recipientEmail || "recipient@example.com"
  );
  const safeSalutation = escapeHtml(normalizedOptions.salutation);
  const logoMarkup = buildLogoMarkup();
  const safeLocation = escapeHtml(meta.location);
  const safeWebsite = escapeHtml(meta.website);
  const safeContactEmail = escapeHtml(meta.contactEmail);
  const safePhone = escapeHtml(meta.phone);
  const safeSenderName = escapeHtml(meta.senderName);
  const safeSenderRole = escapeHtml(meta.senderRole);
  const safeCompanyName = escapeHtml(meta.companyName);
  const safeLegalText = escapeHtml(meta.legalText);
  const safeDate = escapeHtml(resolveTemplateDate(normalizedOptions.letterDate));

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no" />
    <title>ProgrammoCeuticals Email</title>
  </head>

  <body style="margin:0; padding:0; background:#f5f5f5; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;">
    <div style="display:none; font-size:1px; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden;">
      ProgrammoCeuticals — Technology Education & Digital Skills for Healthcare Professionals
    </div>

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
                        ${safeLocation}
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

                      ${htmlBody}

                      <p style="margin:0 0 14px 0;">Kind regards,</p>

                      <p style="margin:0;">
                        <strong>${safeSenderName}</strong><br />
                        <span style="font-weight:400;">${safeSenderRole}, ${safeCompanyName}</span>
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
                      ${safeWebsite}&nbsp;&nbsp;|&nbsp;&nbsp;${safeContactEmail}&nbsp;&nbsp;|&nbsp;&nbsp;${safePhone}
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
                ${safeLegalText}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildTemplateText({ recipientEmail, body, templateOptions }) {
  const normalizedOptions = normalizeTemplateOptions(templateOptions);
  const meta = getTemplateMeta(normalizedOptions);
  const personalizedBody = personalizeBody(body, recipientEmail);
  const letterTitle = String(normalizedOptions.letterTitle || "").trim();
  const receiverAddressLines = personalizeReceiverAddressBlock(
    normalizedOptions.receiverAddressBlock,
    recipientEmail
  )
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const receiverAddress =
    resolveReceiverAddress(recipientEmail, normalizedOptions) ||
    recipientEmail ||
    "recipient@example.com";
  const formattedDate = resolveTemplateDate(normalizedOptions.letterDate);
  return [
    meta.companyName,
    "Technology Education & Digital Skills for Healthcare Professionals",
    meta.location,
    formattedDate,
    "",
    ...receiverAddressLines,
    ...(receiverAddressLines.length > 0 ? [""] : []),
    ...(letterTitle ? [letterTitle, ""] : []),
    `${normalizedOptions.salutation} ${receiverAddress},`,
    "",
    String(personalizedBody || "").trim(),
    "",
    "Kind regards,",
    meta.senderName,
    `${meta.senderRole}, ${meta.companyName}`,
    "",
    `${meta.website} | ${meta.contactEmail} | ${meta.phone}`
  ].join("\n");
}

export function buildTemplatedEmailPreview({ recipientEmail, body, templateOptions }) {
  const derivedRecipient = deriveRecipientEmail(recipientEmail);
  return buildTemplateHtml({
    recipientEmail: derivedRecipient,
    body: String(body || ""),
    templateOptions
  });
}

export function normalizeRecipientInput(input) {
  const values = Array.isArray(input) ? input : String(input || "").split(/[\n,;]+/);
  const deduped = new Set();

  values.forEach((value) => {
    const email = String(value || "").trim().toLowerCase();
    if (email) {
      deduped.add(email);
    }
  });

  const recipients = Array.from(deduped);
  const invalid = recipients.filter((email) => !EMAIL_REGEX.test(email));

  return { recipients, invalid };
}

export async function sendTemplatedEmails({ recipients, subject, body, templateOptions }) {
  const mailer = await ensureTransporter();
  if (!mailer) {
    throw new Error("SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in backend .env");
  }

  const fromAddress = config.smtpFromEmail || config.smtpUser;
  const fromLabel = config.smtpFromName || "ProgrammoCeuticals";
  const from = fromAddress ? `"${fromLabel}" <${fromAddress}>` : config.smtpUser;
  const normalizedOptions = normalizeTemplateOptions(templateOptions);

  const results = await Promise.allSettled(
    recipients.map(async (email) => {
      const recipientEmail = deriveRecipientEmail(email);
      const html = buildTemplateHtml({
        recipientEmail,
        body,
        templateOptions: normalizedOptions
      });
      const text = buildTemplateText({
        recipientEmail,
        body,
        templateOptions: normalizedOptions
      });
      const info = await mailer.sendMail({
        from,
        to: email,
        subject,
        html,
        text
      });

      return { email, messageId: info.messageId };
    })
  );

  const sent = [];
  const failed = [];

  results.forEach((result, index) => {
    const email = recipients[index];
    if (result.status === "fulfilled") {
      sent.push({ email, messageId: result.value.messageId });
      return;
    }
    failed.push({ email, error: result.reason?.message || "Failed to send" });
  });

  return {
    sent,
    failed,
    sent_count: sent.length,
    failed_count: failed.length
  };
}
