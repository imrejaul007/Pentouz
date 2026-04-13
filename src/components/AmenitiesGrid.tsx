"use client";

import { useRef, useEffect } from "react";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AmenitiesGridProps {
  features: string[];
  amenities: string[];
}

export default function AmenitiesGrid({ features, amenities }: AmenitiesGridProps) {
  const featuresRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const shouldAnimate =
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      window.matchMedia("(min-width: 1024px)").matches;
    if (!shouldAnimate || !featuresRef.current) return;

    const container = featuresRef.current;
    const cards = container.querySelectorAll(".feature-card");
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
        },
      }
    );

    return () => {
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <section ref={featuresRef} className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4 sm:mb-6 font-light">
            Features
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light">
            Refined <em className="italic">Amenities</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.slice(0, 6).map((feature) => (
            <div
              key={feature}
              className="feature-card group flex items-start gap-4 sm:gap-5 p-5 sm:p-6 lg:p-8 bg-[#faf6f0] border border-[#ede3d7] transition-colors duration-500"
            >
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold transition-colors duration-500">
                <Check
                  className="w-4 h-4 text-brand-gold group-hover:text-white transition-colors duration-500"
                  strokeWidth={2}
                />
              </div>
              <div>
                <p className="text-sm sm:text-base text-brand-ink font-light">
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities tags — horizontal scroll on mobile */}
        <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-3 sm:gap-4 mt-12 sm:mt-16 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {amenities.slice(0, 8).map((amenity) => (
            <span
              key={amenity}
              className="flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 border border-brand-border text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
            >
              {amenity}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
