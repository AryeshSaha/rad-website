import { googleEmailConfig } from "@/config/oAuth-client";
import myOAuth2Client from "@/lib/gAuth";

export async function generateAccessToken() {
  myOAuth2Client.setCredentials({
    refresh_token: googleEmailConfig.refreshToken,
  });
  const accessTokenResponse = await myOAuth2Client.getAccessToken();
  // accessTokenResponse can be an object or string depending on googleapis version
  if (typeof accessTokenResponse === "string") {
    return accessTokenResponse;
  }
  return accessTokenResponse?.token || "";
}