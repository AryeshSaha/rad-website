import GOOGLE_MAIL_SERVICE_KEYS from "@/types/mailer-type";

export const googleEmailConfig: Record<GOOGLE_MAIL_SERVICE_KEYS, string> = {
  clientId: process.env.SMTP_CLIENT_ID || "",
  clientSecret: process.env.SMTP_CLIENT_SECRET || "",
  refreshToken: process.env.SMTP_REFRESH_TOKEN || "",
  redirectUri: process.env.SMTP_REDIRECT_URI || "",
  email: process.env.SMTP_EMAIL || "",
  host: process.env.SMTP_HOST || "",
  port: process.env.SMTP_PORT || "",
  secure: process.env.SMTP_SECURE || "",
  service: process.env.SMTP_SERVICE || "",
  businessName: process.env.BUSINESS_NAME || "",
};