"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { living, livingImage } from "@/data/content";
import AnimatedCounter from "./AnimatedCounter";
import Marquee from "./Marquee";

// Awards and accolades for marquee
const awards = [
  "Forbes Travel Guide Recommended",
  "TripAdvisor Travelers' Choice 2024",
  "Condé Nast Traveller Hot List",
  "World Luxury Hotel Awards",
  "Booking.com Excellence Award",
  "Times Travel Award Winner",
];

export default function Living() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Use Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Full-width Cinematic Section - Four Seasons Style */}
      <section
        ref={sectionRef}
        id="living"
        className="relative bg-[#1a1a1a] overflow-hidden"
      >
        {/* Full-bleed Image with Overlay */}
        <div className="relative h-[60vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden">
          <Image
            src={livingImage}
            alt="The Art of Living at Pentouz"
            fill
            className="object-cover scale-110"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/60 to-transparent" />

          {/* Centered Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6 max-w-4xl">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/90 mb-4 sm:mb-6 drop-shadow-sm">
                The Art of Living
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.15] mb-4 sm:mb-8">
                Crafted for{" "}
                <em className="italic font-normal text-brand-gold drop-shadow-[0_2px_8px_rgba(201,169,98,0.3)]">Every</em>
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Occasion
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto mb-6 sm:mb-10 font-light leading-relaxed px-4">
                Whether you seek the energy of the city or the calm of the hills,
                our residences adapt to your rhythm.
              </p>
              <Link
                href="/destinations"
                className="inline-flex items-center gap-3 bg-white text-brand-ink px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-brand-gold hover:text-white transition-all duration-300 active:scale-95 btn-shimmer hover:shadow-lg hover:shadow-brand-gold/30"
              >
                Explore All Properties
              </Link>
            </div>
          </div>

          {/* Play Button Overlay - Four Seasons style with gold hover - hidden on small mobile */}
          <button className="absolute bottom-6 sm:bottom-12 right-4 sm:right-12 w-12 h-12 sm:w-16 sm:h-16 border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-all duration-500 group hidden sm:flex hover:shadow-lg hover:shadow-brand-gold/30">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 group-hover:scale-110 transition-transform" fill="currentColor" />
          </button>
        </div>

        {/* Feature Cards Below - Four Seasons style */}
        <div className="bg-[#1a1a1a] py-12 sm:py-16 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              {living.map((item, i) => (
                <div
                  key={item.title}
                  className={`group cursor-pointer transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-100 translate-y-0"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Number with gold accent */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <span className="text-[10px] sm:text-[11px] text-brand-gold tracking-[0.2em] font-medium">
                      0{i + 1}
                    </span>
                    <div className="flex-1 h-[1px] bg-white/50 group-hover:bg-brand-gold transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-white font-light mb-3 sm:mb-4 group-hover:text-white/80 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light mb-4 sm:mb-6">
                    {item.copy}
                  </p>

                  {/* Link */}
                  <Link
                    href="/destinations"
                    className="inline-flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-white hover:text-brand-gold transition-colors duration-500 group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Marquee - Premium touch */}
      <section className="py-6 sm:py-8 bg-[#0a0a0a] border-y border-brand-gold/40 overflow-hidden">
        <Marquee
          items={awards}
          speed={40}
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/90"
        />
      </section>

      {/* Statistics Section with Animated Counters */}
      <StatsSection />
    </>
  );
}

function StatsSection() {
  const stats = [
    { number: 3, suffix: "", label: "Exclusive Properties" },
    { number: 15, suffix: "+", label: "Years of Excellence" },
    { number: 98, suffix: "%", label: "Guest Satisfaction" },
    { number: 24, suffix: "/7", label: "Concierge Service" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#f8f7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center lg:border-r last:border-r-0 border-brand-border/50"
            >
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-brand-ink mb-2 sm:mb-4">
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-brand-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
