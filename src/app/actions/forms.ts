"use server";

import { headers } from "next/headers";

import { verifyTurnstile } from "@/lib/turnstile";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Increments on every server response so the client knows to reset the single-use Turnstile token. */
  attempt: number;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string, maxLength: number) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

async function clientIp() {
  const headerList = await headers();
  return headerList.get("cf-connecting-ip") ?? headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
}

/** Bots tend to fill every input, including the visually hidden "website" honeypot. */
function isHoneypotFilled(formData: FormData) {
  return field(formData, "website", 200).length > 0;
}

export async function submitContact(previous: FormState, formData: FormData): Promise<FormState> {
  const attempt = previous.attempt + 1;

  if (isHoneypotFilled(formData)) {
    // Pretend success so bots get no signal.
    return { status: "success", message: "Thank you! Your message was recorded.", attempt };
  }

  const name = field(formData, "name", 120);
  const email = field(formData, "email", 200);
  const subject = field(formData, "subject", 200);
  const message = field(formData, "message", 5000);

  if (!name || !subject || !message || !EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please fill in every field with a valid email address.", attempt };
  }

  const human = await verifyTurnstile(formData.get("cf-turnstile-response"), "contact", await clientIp());
  if (!human) {
    return { status: "error", message: "We couldn't verify you're human. Please complete the check and try again.", attempt };
  }

  // Verified submission: deliver { name, email, subject, message } here (email service, CRM, etc.).

  return { status: "success", message: "Thank you! Your message was recorded.", attempt };
}

export async function subscribeNewsletter(previous: FormState, formData: FormData): Promise<FormState> {
  const attempt = previous.attempt + 1;

  if (isHoneypotFilled(formData)) {
    return { status: "success", message: "You're in! Check your inbox for the welcome dispatch.", attempt };
  }

  const email = field(formData, "email", 200);
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address.", attempt };
  }

  const human = await verifyTurnstile(formData.get("cf-turnstile-response"), "newsletter", await clientIp());
  if (!human) {
    return { status: "error", message: "We couldn't verify you're human. Please complete the check and try again.", attempt };
  }

  // Verified subscription: add `email` to your mailing list provider here.

  return { status: "success", message: "You're in! Check your inbox for the welcome dispatch.", attempt };
}
