"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Users, MapPin, ArrowRight } from "lucide-react";
import { destinations } from "@/data/content";
import { submitLead } from "@/lib/leads";

export default function Booking() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    property: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
  });
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [dateError, setDateError] = useState("");

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
      { threshold: 0.2 }
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

    const selectedProperty = destinations.find((dest) => dest.slug === formData.property);

    try {
      await submitLead({
        type: "booking",
        property: formData.property || "all-properties",
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        guests: formData.guests,
        website,
      });

      setStatus({
        type: "success",
        message: "Availability request sent. Our team will be in touch shortly.",
      });

      const redirectUrl = selectedProperty?.bookingUrl || "/contact";
      setTimeout(() => {
        router.push(redirectUrl);
      }, 2500);
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

  const isDatesValid = formData.checkIn && formData.checkOut && formData.checkOut > formData.checkIn;

  const handleCheckInChange = (value: string) => {
    setFormData((prev) => ({ ...prev, checkIn: value }));
    if (formData.checkOut && value && formData.checkOut <= value) {
      setDateError("Check-out must be after check-in");
    } else {
      setDateError("");
    }
  };

  const handleCheckOutChange = (value: string) => {
    setFormData((prev) => ({ ...prev, checkOut: value }));
    if (formData.checkIn && value && value <= formData.checkIn) {
      setDateError("Check-out must be after check-in");
    } else {
      setDateError("");
    }
  };

  const isSubmitDisabled = isSubmitting || !isDatesValid;

  return (
    <section
      ref={sectionRef}
      id="booking"
      className="py-20 sm:py-28 lg:py-36 bg-brand-ink"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            className={`text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-brand-gold mb-4 sm:mb-6 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Reserve Your Stay
          </p>
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Begin Your <em className="italic text-brand-gold">Journey</em>
          </h2>
          <div
            className={`editorial-divider mx-auto mt-6 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          />
        </div>

        {/* Booking Form */}
        <form
          onSubmit={handleSubmit}
          className={`transition-all duration-1000 ease-out ${
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {/* Property Select */}
            <div className="relative">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-white/60 mb-3">
                Property
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <select
                  value={formData.property}
                  onChange={(e) =>
                    setFormData({ ...formData, property: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/20 pl-11 pr-4 py-4 text-sm text-white appearance-none cursor-pointer outline-none focus:border-brand-gold transition-colors"
                >
                  <option value="" className="bg-brand-ink">
                    All Properties
                  </option>
                  {destinations.map((dest) => (
                    <option
                      key={dest.slug}
                      value={dest.slug}
                      className="bg-brand-ink"
                    >
                      {dest.shortTitle}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Check In */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-white/60 mb-3">
                Check In
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-brand-gold transition-colors pointer-events-none z-10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>
                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => handleCheckInChange(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-white/5 border border-white/20 pl-11 pr-4 py-4 text-sm text-white outline-none focus:border-brand-gold focus:bg-white/[0.08] transition-all [color-scheme:dark] cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-4 [&::-webkit-calendar-picker-indicator]:top-1/2 [&::-webkit-calendar-picker-indicator]:-translate-y-1/2 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-60"
                  required
                />
              </div>
            </div>

            {/* Check Out */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-white/60 mb-3">
                Check Out
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-brand-gold transition-colors pointer-events-none z-10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>
                <input
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => handleCheckOutChange(e.target.value)}
                  min={formData.checkIn || new Date().toISOString().split("T")[0]}
                  className="w-full bg-white/5 border border-white/20 pl-11 pr-4 py-4 text-sm text-white outline-none focus:border-brand-gold focus:bg-white/[0.08] transition-all [color-scheme:dark] cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-4 [&::-webkit-calendar-picker-indicator]:top-1/2 [&::-webkit-calendar-picker-indicator]:-translate-y-1/2 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-60"
                  required
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-white/60 mb-3">
                Guests
              </label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <select
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/20 pl-11 pr-4 py-4 text-sm text-white appearance-none cursor-pointer outline-none focus:border-brand-gold transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num} className="bg-brand-ink">
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitDisabled}
              className="inline-flex items-center justify-center gap-3 bg-brand-gold text-white px-10 sm:px-14 py-4 sm:py-5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-brand-ink transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-brand-gold disabled:hover:text-white"
            >
              <span>{isSubmitting ? "Submitting..." : "Check Availability"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          {dateError && (
            <p className="mt-4 text-center text-xs text-red-300">
              {dateError}
            </p>
          )}
          {status && (
            <p
              className={`mt-6 text-center text-xs ${
                status.type === "success" ? "text-green-300" : "text-red-300"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>

        {/* Contact Note */}
        <p
          className={`text-center mt-8 sm:mt-10 text-[10px] sm:text-[11px] text-white/50 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          Need assistance?{" "}
          <Link
            href="/contact"
            className="text-brand-gold hover:text-white transition-colors"
          >
            Contact our concierge
          </Link>{" "}
          for personalized booking support.
        </p>
      </div>
    </section>
  );
}
