"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 sm:py-28 lg:py-48 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
        {/* Header */}
        <p className="text-[10px] sm:text-[11px] text-brand-accent uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-8 sm:mb-12 font-light">
          Guest Voices
        </p>

        {/* Quote */}
        <div
          className={`min-h-[220px] sm:min-h-[280px] flex flex-col items-center justify-center transition-all duration-300 ease-out ${
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Quote mark with gold accent */}
          <div className="text-brand-gold/30 text-[80px] sm:text-[100px] lg:text-[150px] font-display leading-none mb-2 sm:mb-4 select-none">
            &ldquo;
          </div>

          {/* Quote text */}
          <blockquote className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light italic text-brand-ink mb-8 sm:mb-12 text-balance leading-[1.3] max-w-4xl px-2">
            {currentTestimonial.quote}
          </blockquote>

          {/* Divider with gold gradient */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent mb-6 sm:mb-10" />

          {/* Attribution */}
          <div>
            <p className="text-base sm:text-lg font-display text-brand-ink mb-1 sm:mb-2 font-light">
              {currentTestimonial.name}
            </p>
            <p className="text-[9px] sm:text-[10px] text-brand-muted uppercase tracking-[0.25em] sm:tracking-[0.3em]">
              {currentTestimonial.source}
            </p>
          </div>
        </div>

        {/* Navigation Dots - refined */}
        <div className="flex justify-center gap-3 sm:gap-5 mt-10 sm:mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={cn(
                "relative h-[2px] transition-all duration-700 ease-out",
                i === activeIndex
                  ? "w-12 sm:w-16 bg-brand-gold"
                  : "w-6 sm:w-8 bg-brand-border hover:bg-brand-gold/50"
              )}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
