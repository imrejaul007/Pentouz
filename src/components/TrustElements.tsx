"use client";

import React from "react";
import { ShieldCheck, CheckCircle, Star, ExternalLink } from "lucide-react";

interface PressLogo {
  name: string;
  url: string;
}

interface PlatformBadge {
  name: string;
  rating: string;
  count: string;
  url: string;
  color: string;
}

const platformBadges: PlatformBadge[] = [
  {
    name: "Booking.com",
    rating: "8.8",
    count: "Review score",
    url: "https://www.booking.com/hotel/pentouz-lavelle-road.html",
    color: "#003580",
  },
  {
    name: "TripAdvisor",
    rating: "4.5",
    count: "Reviews",
    url: "https://www.tripadvisor.com/Hotel_Review-g297628-d25270496-Reviews-The_Pentouz-Bengaluru_Bangalore_Karnataka.html",
    color: "#34E0A1",
  },
  {
    name: "Google",
    rating: "4.6",
    count: "Stars",
    url: "https://maps.google.com/reviews",
    color: "#4285F4",
  },
];

const pressLogos: PressLogo[] = [
  { name: "Times of India", url: "https://timesofindia.indiatimes.com" },
  { name: "Economic Times", url: "https://economictimes.indiatimes.com" },
  { name: "The Hindu", url: "https://thehindu.com" },
  { name: "Travel + Leisure", url: "https://travelandleisure.in" },
  { name: "Luxury Lifestyle", url: "https://luxurylifestyle.in" },
];

interface TrustElementsProps {
  title?: string;
  subtitle?: string;
}

export default function TrustElements({ title = "Guest Ratings & Reviews", subtitle }: TrustElementsProps) {
  return (
    <section className="py-section-xl bg-brand-linen relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
            Guest Ratings & Reviews
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-body-lg text-brand-body max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-px bg-brand-gold mx-auto mb-12"></div>
        </div>

        {/* Platform Rating Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {platformBadges.map((badge) => (
            <a
              key={badge.name}
              href={badge.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block text-center p-6 lg:p-8 bg-white border border-brand-border/30 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-500 relative"
            >
              <div className="flex flex-col items-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: badge.color }}
                >
                  {badge.rating}
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < Math.round(parseFloat(badge.rating)) ? "text-brand-gold fill-brand-gold" : "text-brand-border"}`}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <p className="text-xl font-display font-light text-brand-ink mt-2">
                    {badge.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-brand-muted mt-1">
                    {badge.count}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-brand-muted group-hover:text-brand-gold transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full"></div>
            </a>
          ))}
        </div>

        {/* Review Prompt */}
        <div className="text-center mb-16">
          <p className="text-sm text-brand-muted">
            Stayed with us?{" "}
            <a
              href="https://maps.google.com/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent underline underline-offset-2 hover:text-brand-gold transition-colors duration-300"
            >
              Leave a review on Google
            </a>
            {", "}
            <a
              href="https://www.booking.com/hotel/pentouz-lavelle-road.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent underline underline-offset-2 hover:text-brand-gold transition-colors duration-300"
            >
              Booking.com
            </a>
            , or{" "}
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g297628-d25270496-Reviews-The_Pentouz-Bengaluru_Bangalore_Karnataka.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent underline underline-offset-2 hover:text-brand-gold transition-colors duration-300"
            >
              TripAdvisor
            </a>
          </p>
        </div>

        {/* Press Coverage */}
        <div className="mt-20 pt-16 border-t border-brand-border/20">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Featured In
            </p>
            <h3 className="font-display text-2xl lg:text-3xl font-light text-brand-ink">
              Leading Publications
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
            {pressLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block text-center p-8 bg-white border border-brand-border/30 hover:border-brand-gold/50 hover:shadow-xl transition-all duration-500 relative"
              >
                <span className="text-lg font-medium text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
                  {logo.name}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-16 border-t border-brand-border/20">
          <div className="max-w-container-xl mx-auto px-4">
            <h3 className="font-display text-2xl lg:text-3xl font-light text-brand-ink mb-12 text-center">
              Why Trust Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center gap-4 bg-white border border-brand-border/30 p-8 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-500">
                <ShieldCheck className="w-12 h-12 text-brand-accent" strokeWidth={1.5} />
                <div>
                  <h4 className="text-xl font-display font-light text-brand-ink mb-2">
                    Verified Host
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    Officially verified hospitality provider on major platforms
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 bg-white border border-brand-border/30 p-8 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-500">
                <CheckCircle className="w-12 h-12 text-brand-accent" strokeWidth={1.5} />
                <div>
                  <h4 className="text-xl font-display font-light text-brand-ink mb-2">
                    Secure Booking
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    End-to-end encrypted reservations with instant confirmation
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 bg-white border border-brand-border/30 p-8 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-500">
                <Star className="w-12 h-12 text-brand-accent" strokeWidth={1.5} />
                <div>
                  <h4 className="text-xl font-display font-light text-brand-ink mb-2">
                    Excellent Reviews
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    Consistently rated 4.8+ across all booking platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
