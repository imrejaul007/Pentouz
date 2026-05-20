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
    <div className="border border-[#e5dfd6] bg-white p-6 sm:p-8 lg:p-10">
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div>
          <label htmlFor="prive-email" className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#6b6358]">
            Email address
          </label>
          <input
            id="prive-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 w-full border border-[#e5dfd6] bg-[#faf7f2] px-4 py-3 sm:py-4 text-sm text-[#1a1814] outline-none transition-colors duration-300 focus:border-[#c3a061]"
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
          className="w-full flex items-center justify-center gap-2 bg-[#0f0e0c] text-white px-7 py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-medium transition-all duration-500 hover:bg-[#c3a061] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Request Access"}
        </button>

        {status ? (
          <p className={`font-['Lora',serif] text-sm ${status.type === "success" ? "text-green-700" : "text-red-700"}`}>
            {status.message}
          </p>
        ) : null}
      </form>
    </div>
  );
}
