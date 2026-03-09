"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { submitLead } from "@/lib/leads";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await submitLead({ type: "newsletter", email, website });
      setStatus({ type: "success", message: "Subscribed successfully." });
      setEmail("");
      setWebsite("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Subscription failed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-36 bg-[#0a0a0a]"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <p
          className={`text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-brand-gold mb-6 sm:mb-8 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Stay Inspired
        </p>

        {/* Divider */}
        <div
          className={`editorial-divider mx-auto mb-8 sm:mb-10 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        />

        {/* Description */}
        <p
          className={`text-white/80 text-sm sm:text-base leading-relaxed mb-10 sm:mb-12 max-w-md mx-auto transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Join our editorial journey. Receive stories, insights, and exclusive
          invitations from The Pentouz.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col sm:flex-row gap-4 max-w-lg mx-auto transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
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
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 bg-transparent border border-white/30 px-5 py-3.5 text-sm text-white outline-none focus:border-brand-gold transition-colors duration-300 placeholder:text-white/50"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 bg-brand-gold text-white px-8 py-3.5 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-white hover:text-brand-ink transition-all duration-500"
          >
            <span>{isSubmitting ? "Submitting..." : "Subscribe"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
        {status && (
          <p
            className={`mt-4 text-xs ${
              status.type === "success" ? "text-green-300" : "text-red-300"
            }`}
          >
            {status.message}
          </p>
        )}

        {/* Privacy Note */}
        <p
          className={`text-white/40 text-[10px] uppercase tracking-[0.15em] mt-6 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          We respect your privacy.
        </p>
      </div>
    </section>
  );
}
