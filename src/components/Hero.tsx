"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { destinations, heroImage } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !imageRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial states
    gsap.set(contentRef.current.children, { y: 100, opacity: 0 });
    gsap.set(imageRef.current, { scale: 1.1 });

    // Image zoom out
    tl.to(imageRef.current, {
      scale: 1,
      duration: 2,
      ease: "power2.out",
    });

    // Content reveal with stagger
    tl.to(
      contentRef.current.children,
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=1.5"
    );

    // Scroll indicator fade in
    if (scrollIndicatorRef.current) {
      tl.to(
        scrollIndicatorRef.current,
        {
          opacity: 1,
          duration: 1,
        },
        "-=0.5"
      );
    }

    // Parallax effect on scroll
    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Content fade out on scroll
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "20% top",
        end: "50% top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Hero Section - Full viewport with parallax */}
      <section ref={heroRef} className="relative h-screen min-h-[900px] overflow-hidden">
        {/* Background Image with parallax */}
        <div ref={imageRef} className="absolute inset-0 scale-110">
          <Image
            src={heroImage}
            alt="The Pentouz Luxury Residence"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          {/* Refined gradient overlay - Four Seasons style */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </div>

        {/* Content - Centered with refined typography */}
        <div
          ref={contentRef}
          className="relative h-full flex flex-col justify-center items-center text-center text-white px-8"
        >
          {/* Overline */}
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.5em] text-white/50 mb-10 font-light">
            Luxury Residences & Suites
          </p>

          {/* Main headline - dramatic sizing like Four Seasons */}
          <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[7rem] font-light max-w-6xl leading-[1] tracking-[-0.02em]">
            Where{" "}
            <em className="italic font-normal">Luxury</em>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> Meets </span>
            <em className="italic font-normal">Serenity</em>
          </h1>

          {/* Decorative line */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent my-10" />

          {/* Subheadline */}
          <p className="text-base md:text-lg lg:text-xl text-white/50 max-w-xl font-light tracking-wide leading-relaxed">
            Boutique residences in the heart of Bangalore
            <br className="hidden md:block" />
            and the hills of Ooty
          </p>
        </div>

        {/* Scroll indicator - elegant animation */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0"
        >
          <a
            href="#properties"
            className="group flex flex-col items-center gap-4 text-white/40 hover:text-white/70 transition-colors duration-700"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-light">
              Discover
            </span>
            <div className="relative w-[1px] h-16 bg-white/20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white to-transparent animate-scroll-down" />
            </div>
          </a>
        </div>

        {/* Bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
      </section>

      {/* Booking Widget Section */}
      <BookingWidget />
    </>
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
            start: "top 90%",
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
    <section
      ref={sectionRef}
      id="booking"
      className="bg-white py-28 lg:py-36 -mt-24 relative z-10"
    >
      <div className="max-w-container-lg mx-auto px-8 lg:px-16">
        {/* Header */}
        <div data-reveal className="text-center mb-20">
          <p className="text-[11px] uppercase tracking-[0.4em] text-brand-accent mb-6 font-light">
            Plan Your Stay
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light">
            Check <em className="italic">Availability</em>
          </h2>
        </div>

        {/* Booking Form */}
        <div data-reveal className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 items-end">
            {/* Property */}
            <div className="space-y-5">
              <label className="text-[10px] uppercase tracking-[0.25em] text-brand-muted block font-light">
                Property
              </label>
              <div className="relative">
                <select
                  value={property}
                  onChange={(e) => setProperty(e.target.value)}
                  className="w-full border-b border-brand-border pb-4 bg-transparent focus:border-brand-ink outline-none transition-colors duration-500 text-base cursor-pointer appearance-none"
                >
                  <option value="">Select property</option>
                  {destinations.map((dest) => (
                    <option key={dest.slug} value={dest.slug}>
                      {dest.subtitle}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 bottom-4 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-brand-muted"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Check In */}
            <div className="space-y-5">
              <label className="text-[10px] uppercase tracking-[0.25em] text-brand-muted block font-light">
                Check In
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border-b border-brand-border pb-4 bg-transparent focus:border-brand-ink outline-none transition-colors duration-500 text-base"
              />
            </div>

            {/* Check Out */}
            <div className="space-y-5">
              <label className="text-[10px] uppercase tracking-[0.25em] text-brand-muted block font-light">
                Check Out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border-b border-brand-border pb-4 bg-transparent focus:border-brand-ink outline-none transition-colors duration-500 text-base"
              />
            </div>

            {/* Guests */}
            <div className="space-y-5">
              <label className="text-[10px] uppercase tracking-[0.25em] text-brand-muted block font-light">
                Guests
              </label>
              <div className="relative">
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full border-b border-brand-border pb-4 bg-transparent focus:border-brand-ink outline-none transition-colors duration-500 text-base cursor-pointer appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 bottom-4 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-brand-muted"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div data-reveal className="text-center mt-20">
            <button className="group relative inline-flex items-center justify-center bg-brand-ink text-white py-5 px-20 text-[11px] uppercase tracking-[0.25em] font-light overflow-hidden transition-all duration-700 hover:bg-black">
              <span className="relative z-10">Check Rates</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
