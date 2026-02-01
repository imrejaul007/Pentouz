"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Header reveal
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Cards stagger
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="offers"
      className="py-32 lg:py-44 bg-[#f8f7f5]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header - Four Seasons style */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-brand-accent mb-6">
              Exclusive Offers
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1]">
              Signature <em className="italic font-normal">Benefits</em>
            </h2>
          </div>
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-accent transition-colors duration-500 group mt-8 lg:mt-0"
          >
            <span>View All Offers</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Offer Cards - Four Seasons horizontal layout */}
        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8 lg:gap-10">
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
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {/* Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-brand-ink">
                    {offer.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <h3 className="font-display text-2xl font-light mb-4 group-hover:text-brand-accent transition-colors duration-500">
                  {offer.title}
                </h3>
                <p className="text-sm text-brand-body leading-relaxed font-light mb-6">
                  {offer.description}
                </p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-8">
                  {offer.terms}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-accent transition-colors duration-500 group/link"
                >
                  <span>Book This Offer</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="lg:hidden text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 border border-brand-ink px-10 py-4 text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:bg-brand-ink hover:text-white transition-all duration-500 group"
          >
            <span>View All Offers</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
