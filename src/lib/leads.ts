type LeadPayload = {
  type: "contact" | "booking" | "newsletter" | "prive";
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
};

export async function submitLead(payload: LeadPayload) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as { ok: boolean; error?: string };

  if (!response.ok || !data.ok) {
    throw new Error(data.error || "Submission failed.");
  }
}
