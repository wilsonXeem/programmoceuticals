import dotenv from "dotenv";

dotenv.config();

const smtpPort = Number.parseInt(process.env.SMTP_PORT || "587", 10);

export const config = {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || "dev-secret-change-me",
  mongoUri: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ctd_compiler",
  corsOrigin: process.env.CORS_ORIGIN || "*",
  adminEmail: (process.env.ADMIN_EMAIL || "").toLowerCase(),
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
  paystackSecretKey: process.env.PAYSTACK_SECRET_KEY || "",
  paystackCallbackUrl: process.env.PAYSTACK_CALLBACK_URL || "",
  smtpHost: process.env.SMTP_HOST || "",
  smtpPort: Number.isFinite(smtpPort) ? smtpPort : 587,
  smtpSecure: process.env.SMTP_SECURE === "true",
  smtpUser: process.env.SMTP_USER || "",
  smtpPass: process.env.SMTP_PASS || "",
  smtpFromName: process.env.SMTP_FROM_NAME || "ProgrammoCeuticals",
  smtpFromEmail: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || "",
  emailLogoUrl: process.env.EMAIL_LOGO_URL || "",
  emailCompanyName: process.env.EMAIL_COMPANY_NAME || "ProgrammoCeuticals",
  emailLocation: process.env.EMAIL_LOCATION || "Lagos, Nigeria",
  emailWebsite: process.env.EMAIL_WEBSITE || "www.programmoceuticals.com",
  emailContactEmail: process.env.EMAIL_CONTACT_EMAIL || "info@programmoceuticals.com",
  emailPhone: process.env.EMAIL_PHONE || "+234 903 378 2254",
  emailSenderName:
    process.env.EMAIL_SENDER_NAME || "Wilson Zimthamaha Bonkuru, B.Pharm",
  emailSenderRole: process.env.EMAIL_SENDER_ROLE || "Founder",
  emailLegalText:
    process.env.EMAIL_LEGAL_TEXT || "© ProgrammoCeuticals. All rights reserved."
};
