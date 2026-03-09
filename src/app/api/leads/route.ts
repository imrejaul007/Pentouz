import { NextResponse } from "next/server";

type LeadType = "contact" | "booking" | "newsletter" | "prive";

interface LeadPayload {
  type: LeadType;
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  property?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  website?: string;
  sourcePath?: string;
  sourceKeywordSlug?: string;
  sourceArticleSlug?: string;
  sourceIntent?: string;
  sourceReferrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  fbclid?: string;
  msclkid?: string;
}

function isValidEmail(email?: string) {
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidDate(value?: string) {
  if (!value) return false;
  const date = new Date(value);
  return Number.isFinite(date.getTime());
}

function validatePayload(payload: LeadPayload): string | null {
  if (!payload?.type) return "Missing lead type.";
  if (payload.website) return "Invalid submission.";

  if (payload.type === "contact") {
    if (!payload.name?.trim()) return "Name is required.";
    if (!isValidEmail(payload.email)) return "A valid email is required.";
    if (!payload.subject?.trim()) return "Subject is required.";
    if (!payload.message?.trim()) return "Message is required.";
  }

  if (payload.type === "booking") {
    if (!isValidDate(payload.checkIn) || !isValidDate(payload.checkOut)) {
      return "Check-in and check-out dates are required.";
    }
    if (!payload.guests?.trim()) return "Guest count is required.";
  }

  if (payload.type === "newsletter" || payload.type === "prive") {
    if (!isValidEmail(payload.email)) return "A valid email is required.";
  }

  return null;
}

async function forwardToWebhook(payload: LeadPayload, request: Request) {
  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (!webhookUrl) return;

  const ip =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "unknown";

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      source: "pentouz-site",
      receivedAt: new Date().toISOString(),
      ip,
      userAgent: request.headers.get("user-agent") || "unknown",
    }),
    cache: "no-store",
  });
}

export async function POST(request: Request) {
  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const validationError = validatePayload(payload);
  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
  }

  try {
    await forwardToWebhook(payload, request);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Lead capture failed. Please try again." },
      { status: 502 }
    );
  }

  console.info("Lead captured", {
    type: payload.type,
    email: payload.email || null,
    property: payload.property || null,
    sourcePath: payload.sourcePath || null,
    sourceKeywordSlug: payload.sourceKeywordSlug || null,
    sourceArticleSlug: payload.sourceArticleSlug || null,
    sourceIntent: payload.sourceIntent || null,
    utmSource: payload.utmSource || null,
    utmMedium: payload.utmMedium || null,
    utmCampaign: payload.utmCampaign || null,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
