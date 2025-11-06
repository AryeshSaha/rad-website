import { googleEmailConfig } from "@/config/oAuth-client";
import { getTransporter } from "@/lib/get-transporter";
import Mail from "nodemailer/lib/mailer";

export const sendMail = async ({
  email,
  subject,
  htmlMessage,
  autoReply = false,
}: {
  email: string;
  subject: string;
  htmlMessage: string;
  autoReply?: boolean;
}) => {
  if (!email || !subject || !htmlMessage) {
    throw new Error("Missing required parameters");
  }

  if (!googleEmailConfig.email) {
    throw new Error("Missing environment variable: EMAIL");
  }

  try {
    const mailOptions: Mail.Options = {
      from: {
        name: googleEmailConfig.businessName,
        address: googleEmailConfig.email,
      },
      to: autoReply ? email : googleEmailConfig.email,
      replyTo: autoReply ? googleEmailConfig.email : email,
      subject: subject,
      html: htmlMessage,
    };
    const transporter = await getTransporter();
    await transporter.sendMail({
      ...mailOptions,
      headers: autoReply
        ? {
            References: "",
            "In-Reply-To": "",
          }
        : {},
    });
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Sending email failed");
  }
};
