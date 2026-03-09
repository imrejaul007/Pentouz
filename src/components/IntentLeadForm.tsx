"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { submitLead } from "@/lib/leads";

type IntentType = "legal" | "business" | "medical" | "leisure";

interface IntentLeadFormProps {
  intent: IntentType;
  keyword: string;
  place: string;
  articleTitle: string;
  keywordSlug: string;
  articleSlug: string;
}

const intentCopy: Record<IntentType, { title: string; description: string; cta: string }> = {
  legal: {
    title: "Need Court-Visit Stay Support?",
    description:
      "Share your requirement and our team will help you with hearing-day friendly stay planning near key legal zones.",
    cta: "Request Legal Stay Support",
  },
  business: {
    title: "Need Executive Stay Planning?",
    description:
      "Get quick support for business-focused itineraries, central routing, and premium stay coordination.",
    cta: "Request Business Stay Support",
  },
  medical: {
    title: "Need Medical-Visit Stay Assistance?",
    description:
      "Our team can help you with a calm, practical stay plan for appointment and attendant travel days.",
    cta: "Request Medical Stay Support",
  },
  leisure: {
    title: "Need Help Planning Your City Stay?",
    description:
      "Share your travel plan and we will help you align location, room type, and surrounding experiences.",
    cta: "Request Travel Assistance",
  },
};

export default function IntentLeadForm({
  intent,
  keyword,
  place,
  articleTitle,
  keywordSlug,
  articleSlug,
}: IntentLeadFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(
    null
  );

  const copy = intentCopy[intent];
  const pathname = usePathname();

  const attribution = useMemo(() => {
    if (typeof window === "undefined") return "none";

    const keys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "gclid",
      "fbclid",
      "msclkid",
    ];

    const params = new URLSearchParams(window.location.search);

    const items = keys
      .map((key) => {
        const value = params.get(key);
        if (!value) return null;
        return `${key}=${value}`;
      })
      .filter((entry): entry is string => Boolean(entry));

    return items.length ? items.join(" | ") : "none";
  }, []);

  const subject = useMemo(() => {
    return `Intent Lead (${intent.toUpperCase()}): ${place} | keyword=${keywordSlug} | article=${articleSlug}`;
  }, [intent, place, keywordSlug, articleSlug]);

  const message = useMemo(() => {
    return [
      `Lead source article: ${articleTitle}`,
      `Keyword intent: ${keyword}`,
      `Requested support type: ${intent}`,
      `Keyword slug: ${keywordSlug}`,
      `Article slug: ${articleSlug}`,
      `Page path: ${pathname || "unknown"}`,
      `Query attribution: ${attribution}`,
      `Referrer: ${typeof document !== "undefined" ? document.referrer || "direct/unknown" : "unknown"}`,
    ].join(". ");
  }, [articleTitle, intent, keyword, keywordSlug, articleSlug, pathname, attribution]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await submitLead({
        type: "contact",
        name,
        email,
        phone,
        subject,
        message,
        property: "Lavelle Road",
        website,
      });

      setStatus({
        type: "success",
        message: "Thanks. Our reservations team will contact you shortly.",
      });
      setName("");
      setEmail("");
      setPhone("");
      setWebsite("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Could not send your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-white border-y border-brand-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-3">
              Priority Assistance
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-4">{copy.title}</h2>
            <p className="text-sm sm:text-base text-brand-body leading-relaxed">{copy.description}</p>
          </div>

          <form onSubmit={onSubmit} className="bg-[#f8f7f5] border border-brand-border p-5 sm:p-6 space-y-4">
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div>
              <label className="text-[11px] uppercase tracking-[0.12em] text-brand-muted block mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-gold transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-[0.12em] text-brand-muted block mb-2">
                Email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-gold transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-[0.12em] text-brand-muted block mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-gold transition-colors"
                placeholder="+91"
              />
            </div>

            {status ? (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-green-700" : "text-red-700"
                }`}
              >
                {status.message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-ink text-white py-3 text-[11px] uppercase tracking-[0.15em] hover:bg-brand-gold transition-colors disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : copy.cta}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
