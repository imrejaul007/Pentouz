"use client";

import { useState } from "react";
import { destinations } from "@/data/content";
import { submitLead } from "@/lib/leads";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    subject: "",
    message: "",
  });
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await submitLead({
        type: "contact",
        ...formData,
        website,
      });

      setStatus({
        type: "success",
        message: "Thank you. Our concierge team will respond within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", property: "", subject: "", message: "" });
      setWebsite("");
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Could not send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="luxury-panel bg-[#fcf8f1] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
      <p className="luxury-kicker text-brand-accent">Send an Inquiry</p>
      <h2 className="mt-5 font-display text-4xl font-light leading-tight text-brand-ink sm:text-5xl">
        Tell us what kind of stay you need.
      </h2>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-body">
        Share your dates, property preference, and any special requests. We will guide you to the right Pentouz stay.
      </p>
      <form onSubmit={handleSubmit} className="mt-10 space-y-7">
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

        <div className="grid gap-6 md:grid-cols-2">
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">Full Name *</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-3 w-full border-b border-brand-border bg-white px-0 py-4 text-sm outline-none transition-colors focus:border-brand-accent" placeholder="Your name" />
          </label>
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">Email *</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-3 w-full border-b border-brand-border bg-white px-0 py-4 text-sm outline-none transition-colors focus:border-brand-accent" placeholder="your@email.com" />
          </label>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">Phone Number</span>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="mt-3 w-full border-b border-brand-border bg-white px-0 py-4 text-sm outline-none transition-colors focus:border-brand-accent" placeholder="+91 98765 43210" />
          </label>
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">Property Interest</span>
            <select name="property" value={formData.property} onChange={handleChange} className="mt-3 w-full appearance-none border-b border-brand-border bg-white px-0 py-4 text-sm outline-none transition-colors focus:border-brand-accent">
              <option value="">Select property</option>
              {destinations.map((dest) => (
                <option key={dest.slug} value={dest.slug}>
                  {dest.subtitle}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">Subject *</span>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="mt-3 w-full border-b border-brand-border bg-white px-0 py-4 text-sm outline-none transition-colors focus:border-brand-accent" placeholder="How can we help you?" />
        </label>

        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">Message *</span>
          <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="mt-3 w-full resize-none border-b border-brand-border bg-white px-0 py-4 text-sm outline-none transition-colors focus:border-brand-accent" placeholder="Tell us more about your inquiry, dates, or preferences..." />
        </label>

        <div className="pt-2">
          <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center rounded-full bg-brand-ink px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-50">
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </button>
          {status ? (
            <p className={`mt-4 text-sm ${status.type === "success" ? "text-green-700" : "text-red-700"}`}>
              {status.message}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
