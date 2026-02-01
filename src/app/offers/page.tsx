"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Calendar, Users, Gift } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const offers = [
  {
    title: "Extended Stay Privilege",
    badge: "Featured",
    description: "Stay 4 nights and receive the 5th night complimentary, plus exclusive dining credits and spa treatments. Perfect for those seeking an extended urban escape.",
    image: "https://pentouz.com/wp-content/uploads/2025/01/Living-Room-5-1.jpg",
    terms: "Valid through March 2026",
    benefits: ["5th Night Free", "Dining Credits", "Spa Access", "Late Checkout"],
  },
  {
    title: "Romantic Retreat",
    badge: "Couples",
    description: "Celebrate love with champagne on arrival, couples spa ritual, and private candlelit dinner. Create unforgettable memories in our most romantic suites.",
    image: "https://pentouz.com/wp-content/uploads/2025/01/11.-The-Terrace-Haven_Terrace-1024x683.jpg",
    terms: "Minimum 2 night stay",
    benefits: ["Champagne Welcome", "Couples Spa", "Private Dinner", "Rose Turndown"],
  },
  {
    title: "Family Discovery",
    badge: "Families",
    description: "Create lasting memories with connecting rooms, kids' amenities, and curated family activities. Experience luxury that welcomes the whole family.",
    image: "https://pentouz.com/wp-content/uploads/elementor/thumbs/04.-The-Skyline-Suite_Bedroom-r0jo1p5gz5rec45jsthw691ismb6d8dnu3xnv1n39c.jpg",
    terms: "Children under 12 stay free",
    benefits: ["Connecting Rooms", "Kids Amenities", "Family Activities", "Childcare Available"],
  },
  {
    title: "Business Excellence",
    badge: "Corporate",
    description: "Elevate your business travel with dedicated workspace, premium connectivity, and exclusive access to meeting facilities.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    terms: "Weekday stays only",
    benefits: ["High-Speed WiFi", "Meeting Room", "Express Laundry", "Airport Transfer"],
  },
  {
    title: "Wellness Escape",
    badge: "Wellness",
    description: "Rejuvenate with daily yoga sessions, spa treatments, and healthy cuisine options. A complete reset for mind, body, and soul.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
    terms: "3 night minimum",
    benefits: ["Daily Yoga", "Spa Credits", "Healthy Menu", "Meditation Sessions"],
  },
  {
    title: "Anniversary Special",
    badge: "Celebration",
    description: "Mark your milestone with upgraded accommodation, celebration cake, in-room decoration, and a keepsake photo session.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
    terms: "Proof of anniversary required",
    benefits: ["Room Upgrade", "Celebration Cake", "Decorations", "Photo Session"],
  },
];

export default function OffersPage() {
  const heroRef = useRef<HTMLElement>(null);
  const offersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    gsap.fromTo(
      heroRef.current.querySelectorAll("[data-reveal]"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  useEffect(() => {
    if (!offersRef.current) return;

    gsap.fromTo(
      offersRef.current.children,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: offersRef.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[50vh] sm:h-[60vh] min-h-[400px] flex items-center justify-center bg-[#1a1a1a]"
      >
        <Image
          src="https://pentouz.com/wp-content/uploads/2025/01/11.-The-Terrace-Haven_Terrace-1024x683.jpg"
          alt="Special Offers"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-black/40" />

        <div className="relative z-10 text-center px-4">
          <p data-reveal className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/50 mb-4 sm:mb-6">
            Exclusive Benefits
          </p>
          <h1 data-reveal className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white">
            Special <em className="italic">Offers</em>
          </h1>
          <p data-reveal className="mt-6 text-sm sm:text-base text-white/60 max-w-xl mx-auto">
            Discover exclusive packages designed to enhance your stay with exceptional value and memorable experiences.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div ref={offersRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {offers.map((offer) => (
              <div key={offer.title} className="group bg-white">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-brand-ink">
                      {offer.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-8">
                  <h3 className="font-display text-xl sm:text-2xl font-light mb-3 group-hover:text-brand-accent transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-body leading-relaxed mb-4">
                    {offer.description}
                  </p>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {offer.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="px-2 py-1 bg-[#f8f7f5] text-[9px] sm:text-[10px] uppercase tracking-[0.1em] text-brand-muted"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-6">
                    {offer.terms}
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-accent transition-colors group/link"
                  >
                    <span>Book This Offer</span>
                    <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book Direct */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
              Book Direct Benefits
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light">
              Why Book <em className="italic">With Us</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 border border-brand-border flex items-center justify-center">
                <Gift className="w-6 sm:w-8 h-6 sm:h-8 text-brand-accent" strokeWidth={1} />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-light mb-3">Best Rate Guarantee</h3>
              <p className="text-xs sm:text-sm text-brand-body">
                Book direct and enjoy the best available rate, guaranteed. Find a lower price elsewhere and we&apos;ll match it.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 border border-brand-border flex items-center justify-center">
                <Calendar className="w-6 sm:w-8 h-6 sm:h-8 text-brand-accent" strokeWidth={1} />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-light mb-3">Flexible Cancellation</h3>
              <p className="text-xs sm:text-sm text-brand-body">
                Plans change. Enjoy free cancellation up to 24 hours before arrival on most rates.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 border border-brand-border flex items-center justify-center">
                <Users className="w-6 sm:w-8 h-6 sm:h-8 text-brand-accent" strokeWidth={1} />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-light mb-3">Privé Club Benefits</h3>
              <p className="text-xs sm:text-sm text-brand-body">
                Members enjoy exclusive perks including room upgrades, late checkout, and special amenities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-6">
            Have Questions About Our Offers?
          </h2>
          <p className="text-sm sm:text-base text-white/60 mb-8">
            Our concierge team is available 24/7 to help you find the perfect package for your stay.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-brand-ink px-8 py-4 text-[11px] sm:text-[12px] uppercase tracking-[0.15em] font-medium hover:bg-white/90 transition-colors active:scale-95"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
