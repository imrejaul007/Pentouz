"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, ChevronRight } from "lucide-react";
import { destinations, heroImage } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Destination categories like Four Seasons
const categories = [
  { name: "Urban", icon: "🏙️" },
  { name: "Beach", icon: "🏖️" },
  { name: "Mountain", icon: "⛰️" },
  { name: "Heritage", icon: "🏛️" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !imageRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial states
    gsap.set(contentRef.current.children, { y: 60, opacity: 0 });
    gsap.set(imageRef.current, { scale: 1.05 });

    // Image zoom out
    tl.to(imageRef.current, {
      scale: 1,
      duration: 1.8,
      ease: "power2.out",
    });

    // Content reveal
    tl.to(
      contentRef.current.children,
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.12,
        ease: "power3.out",
      },
      "-=1.4"
    );

    // Parallax on scroll
    gsap.to(imageRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Hero Section - Four Seasons Style */}
      <section ref={heroRef} className="relative h-screen min-h-[800px] overflow-hidden">
        {/* Background Image */}
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src={heroImage}
            alt="The Pentouz Luxury Residence"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          {/* Gradient overlay - subtle like Four Seasons */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
        </div>

        {/* Content - Centered like Four Seasons */}
        <div
          ref={contentRef}
          className="relative h-full flex flex-col justify-center items-center text-center text-white px-6"
        >
          {/* Overline */}
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/70 mb-6 font-normal">
            Luxury Residences & Suites
          </p>

          {/* Main headline - Four Seasons style with italics */}
          <h1 className="font-display text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-light max-w-5xl leading-[1.05] tracking-[-0.02em]">
            Experience{" "}
            <em className="italic font-normal">Exceptional</em>
            <br />
            Living
          </h1>

          {/* CTA Button - Four Seasons style */}
          <Link
            href="#properties"
            className="mt-12 inline-flex items-center gap-3 bg-white text-brand-ink px-10 py-4 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-white/90 transition-colors duration-300"
          >
            Explore Properties
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-white/30 overflow-hidden">
            <div className="w-full h-8 bg-white animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Discovery Section - Four Seasons Style */}
      <DiscoverySection />

      {/* Booking Widget */}
      <BookingWidget />
    </>
  );
}

function DiscoverySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll("[data-reveal]");
    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-[#f8f7f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 data-reveal className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Discover <em className="italic">The Pentouz</em>
          </h2>
          <p data-reveal className="text-base text-brand-body max-w-2xl mx-auto">
            Find your perfect stay across our curated collection of luxury residences
          </p>
        </div>

        {/* Category Pills - Four Seasons style */}
        <div data-reveal className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-brand-border/50 text-sm text-brand-body hover:border-brand-ink hover:text-brand-ink transition-all duration-300"
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Destination Quick Links */}
        <div data-reveal className="grid md:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/60 mb-2">
                  {dest.subtitle}
                </p>
                <h3 className="text-xl lg:text-2xl font-display font-light text-white">
                  {dest.shortTitle}
                </h3>
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 bg-white/0 group-hover:bg-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                <ChevronRight className="w-5 h-5 text-brand-ink" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingWidget() {
  const [property, setProperty] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="booking"
      className="py-20 lg:py-28 bg-white border-t border-brand-border/30"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 font-normal">
            Plan Your Stay
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light">
            Check <em className="italic">Availability</em>
          </h2>
        </div>

        {/* Booking Form - Four Seasons inline style */}
        <div className="bg-[#f8f7f5] p-8 lg:p-12">
          <div className="grid md:grid-cols-5 gap-6 items-end">
            {/* Property */}
            <div className="md:col-span-1">
              <label className="text-[10px] uppercase tracking-[0.2em] text-brand-muted block mb-3">
                Property
              </label>
              <select
                value={property}
                onChange={(e) => setProperty(e.target.value)}
                className="w-full bg-white border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-ink transition-colors"
              >
                <option value="">Select</option>
                {destinations.map((dest) => (
                  <option key={dest.slug} value={dest.slug}>
                    {dest.shortTitle}
                  </option>
                ))}
              </select>
            </div>

            {/* Check In */}
            <div className="md:col-span-1">
              <label className="text-[10px] uppercase tracking-[0.2em] text-brand-muted block mb-3">
                Check In
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-white border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-ink transition-colors"
              />
            </div>

            {/* Check Out */}
            <div className="md:col-span-1">
              <label className="text-[10px] uppercase tracking-[0.2em] text-brand-muted block mb-3">
                Check Out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-white border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-ink transition-colors"
              />
            </div>

            {/* Guests */}
            <div className="md:col-span-1">
              <label className="text-[10px] uppercase tracking-[0.2em] text-brand-muted block mb-3">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-white border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-ink transition-colors"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-1">
              <button className="w-full bg-brand-ink text-white py-3 px-6 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-black transition-colors duration-300">
                Check Rates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
