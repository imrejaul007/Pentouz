"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Four Seasons style offers with images
const offers = [
  {
    title: "Extended Stay Privilege",
    badge: "Featured",
    description: "Stay 4 nights and receive the 5th night complimentary, plus exclusive dining credits and spa treatments.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    terms: "Valid through March 2026",
  },
  {
    title: "Romantic Retreat",
    badge: "Couples",
    description: "Celebrate love with champagne on arrival, couples spa ritual, and private candlelit dinner.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
    terms: "Minimum 2 night stay",
  },
  {
    title: "Family Discovery",
    badge: "Families",
    description: "Create lasting memories with connecting rooms, kids&apos; amenities, and curated family activities.",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop",
    terms: "Children under 12 stay free",
  },
];

export default function Offers() {
  return (
    <section
      id="offers"
      className="py-16 sm:py-24 lg:py-44 bg-[#f8f7f5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header - Four Seasons style */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 sm:mb-16 lg:mb-24">
          <div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-brand-accent mb-4 sm:mb-6">
              Exclusive Offers
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.15]">
              Signature <em className="italic font-normal text-brand-gold">Benefits</em>
            </h2>
          </div>
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-gold transition-colors duration-500 group mt-8 lg:mt-0"
          >
            <span>View All Offers</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Offer Cards - Stack on mobile, horizontal on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="group bg-white"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Badge with gold accent */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                  <span className="bg-brand-gold px-3 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white font-medium">
                    {offer.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8 lg:p-10">
                <h3 className="font-display text-xl sm:text-2xl font-light mb-3 sm:mb-4 group-hover:text-brand-gold transition-colors duration-500">
                  {offer.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-body leading-relaxed font-light mb-4 sm:mb-6">
                  {offer.description}
                </p>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-5 sm:mb-8">
                  {offer.terms}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-gold transition-colors duration-500 group/link"
                >
                  <span>Book This Offer</span>
                  <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All with gold hover */}
        <div className="lg:hidden text-center mt-8 sm:mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-brand-ink px-6 sm:px-10 py-3 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-all duration-500 group active:scale-95"
          >
            <span>View All Offers</span>
            <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
