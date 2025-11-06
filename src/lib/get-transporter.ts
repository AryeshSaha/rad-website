import { googleEmailConfig } from "@/config/oAuth-client";
import { generateAccessToken } from "@/lib/get-access-token";
import { createTransport } from "nodemailer";

export async function getTransporter() {
  const accessToken = await generateAccessToken();
  const transporter = createTransport({
    service: googleEmailConfig.service,
    host: googleEmailConfig.host,
    port: parseInt(googleEmailConfig.port),
    secure: googleEmailConfig.secure === "true",
    auth: {
      type: "OAuth2",
      user: googleEmailConfig.email,
      clientId: googleEmailConfig.clientId,
      clientSecret: googleEmailConfig.clientSecret,
      refreshToken: googleEmailConfig.refreshToken,
      accessToken,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  return transporter;
}