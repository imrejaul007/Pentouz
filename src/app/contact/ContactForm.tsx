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
    <div className="border border-[#e5dfd6] bg-[#faf7f2] p-6 sm:p-8 lg:p-10">
      <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">Send an Inquiry</p>
      <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814] mb-4 sm:mb-5" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
        Tell us what kind of stay you need.
      </h2>
      <p className="font-['Lora',serif] text-sm leading-[1.7] text-[#4a4a44] mb-6 sm:mb-8">
        Share your dates, property preference, and any special requests. We will guide you to the right Pentouz stay.
      </p>
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 lg:space-y-7">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <label className="block">
            <span className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#6b6358]">Full Name *</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-2 w-full border-b border-[#e5dfd6] bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-[#c3a061]" placeholder="Your name" />
          </label>
          <label className="block">
            <span className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#6b6358]">Email *</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-2 w-full border-b border-[#e5dfd6] bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-[#c3a061]" placeholder="your@email.com" />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <label className="block">
            <span className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#6b6358]">Phone Number</span>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="mt-2 w-full border-b border-[#e5dfd6] bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-[#c3a061]" placeholder="+91 98765 43210" />
          </label>
          <label className="block">
            <span className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#6b6358]">Property Interest</span>
            <select name="property" value={formData.property} onChange={handleChange} className="mt-2 w-full appearance-none border-b border-[#e5dfd6] bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-[#c3a061]">
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
          <span className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#6b6358]">Subject *</span>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="mt-2 w-full border-b border-[#e5dfd6] bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-[#c3a061]" placeholder="How can we help you?" />
        </label>

        <label className="block">
          <span className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#6b6358]">Message *</span>
          <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="mt-2 w-full resize-none border-b border-[#e5dfd6] bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-[#c3a061]" placeholder="Tell us more about your inquiry, dates, or preferences..." />
        </label>

        <div className="pt-3 sm:pt-4">
          <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0f0e0c] text-white px-8 sm:px-10 py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:bg-[#c3a061] disabled:opacity-50 disabled:cursor-not-allowed">
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </button>
          {status ? (
            <p className={`mt-4 font-['Lora',serif] text-sm ${status.type === "success" ? "text-green-700" : "text-red-700"}`}>
              {status.message}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
