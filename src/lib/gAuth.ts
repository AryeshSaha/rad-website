import { googleEmailConfig } from "@/config/oAuth-client";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;
const id = googleEmailConfig.clientId;
const secret = googleEmailConfig.clientSecret;
const redirectUri = googleEmailConfig.redirectUri;

const myOAuth2Client = new OAuth2(id, secret, redirectUri);
export default myOAuth2Client;