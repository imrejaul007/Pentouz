"use client";

import { useState } from "react";
import { submitLead } from "@/lib/leads";

export default function PriveForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await submitLead({ type: "prive", email, website });
      setStatus({
        type: "success",
        message: "Thanks. Your request has been received and our team will get back to you shortly.",
      });
      setEmail("");
      setWebsite("");
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "We could not submit your request right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="luxury-panel bg-white animate-fade-in-up [animation-delay:180ms]">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="prive-email" className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">
            Email address
          </label>
          <input
            id="prive-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-3 w-full border border-brand-border bg-[#fcf8f1] px-4 py-4 text-sm text-brand-ink outline-none transition-colors duration-300 focus:border-brand-gold"
            placeholder="you@example.com"
          />
        </div>

        <div className="hidden">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-brand-ink px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Request Access"}
        </button>

        {status ? (
          <p className={`text-sm ${status.type === "success" ? "text-[#356143]" : "text-[#8a3f30]"}`}>
            {status.message}
          </p>
        ) : null}
      </form>
    </div>
  );
}
