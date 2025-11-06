"use server";

import { getTransporter } from "@/lib/get-transporter";
import { sendMail } from "@/lib/mailer";
import { readFile } from "fs/promises";
import { compile } from "handlebars";
import { resolve } from "path";

export async function submitContactForm(formData: FormData) {
  const transporter = await getTransporter();
  await transporter.verify();
  const templatePath = resolve("src/constants/templates/notification.html");
  const source = await readFile(templatePath, "utf-8");
  const notificationMail = compile(source);

  const name = formData.get("fullName")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const subject = "Contact Form Submission From Rad Media Solutions Website";
  const message = formData.get("message")?.toString() || "";

  const notificationReplacements = {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
  };

  const notificationOptions = {
    email,
    subject,
    htmlMessage: notificationMail(notificationReplacements),
  };

  const notiSent = await sendMail(notificationOptions);
  if (!notiSent) {
    throw new Error("Failed to send notification email");
  }
}