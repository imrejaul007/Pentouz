"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react";
import { destinations } from "@/data/content";

export default function Booking() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    property: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would redirect to a booking system
    alert(
      `Checking availability for ${formData.property || "all properties"} from ${formData.checkIn} to ${formData.checkOut} for ${formData.guests} guests`
    );
  };

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
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) =>
                    setFormData({ ...formData, checkIn: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/20 pl-11 pr-4 py-4 text-sm text-white outline-none focus:border-brand-gold transition-colors [color-scheme:dark]"
                  required
                />
              </div>
            </div>

            {/* Check Out */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-white/60 mb-3">
                Check Out
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) =>
                    setFormData({ ...formData, checkOut: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/20 pl-11 pr-4 py-4 text-sm text-white outline-none focus:border-brand-gold transition-colors [color-scheme:dark]"
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
                  {[1, 2, 3, 4, 5, 6].map((num) => (
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
              className="inline-flex items-center justify-center gap-3 bg-brand-gold text-white px-10 sm:px-14 py-4 sm:py-5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-brand-ink transition-all duration-500"
            >
              <span>Check Availability</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
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
