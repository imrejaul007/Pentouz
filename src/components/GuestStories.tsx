"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/content";

// Extended testimonials with additional info
const guestStories = testimonials.map((t, i) => ({
  ...t,
  location: ["Copenhagen, Denmark", "Mumbai, India", "London, United Kingdom"][i],
  property: ["Indiranagar", "Lavelle Road", "Ooty"][i],
  initials: t.name.split(" ").map((n) => n[0]).join(""),
}));

export default function GuestStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for visibility
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

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % guestStories.length);
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

  const currentStory = guestStories[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-40 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Header */}
        <p
          className={`section-overline mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Voices from Pentouz
        </p>

        {/* Quote Container */}
        <div
          className={`min-h-[350px] sm:min-h-[400px] flex flex-col items-center justify-center transition-all duration-300 ease-out ${
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Guest Avatar */}
          <div
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-cream border-2 border-brand-gold/30 flex items-center justify-center mb-8 sm:mb-10 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="font-display text-xl sm:text-2xl text-brand-gold font-light">
              {currentStory.initials}
            </span>
          </div>

          {/* Quote Mark */}
          <div className="text-brand-gold/20 text-[80px] sm:text-[100px] lg:text-[120px] font-display leading-none mb-2 select-none">
            &ldquo;
          </div>

          {/* Quote */}
          <blockquote className="pull-quote text-brand-ink max-w-3xl px-4 text-balance">
            {currentStory.quote}
          </blockquote>

          {/* Divider */}
          <div className="editorial-divider mx-auto my-8 sm:my-10" />

          {/* Attribution */}
          <div>
            <p className="font-display text-lg sm:text-xl text-brand-ink mb-1">
              {currentStory.name}
            </p>
            <p className="text-[10px] sm:text-[11px] text-brand-muted uppercase tracking-[0.25em] mb-1">
              {currentStory.location}
            </p>
            <p className="text-[9px] sm:text-[10px] text-brand-gold uppercase tracking-[0.2em]">
              Stayed at {currentStory.property}
            </p>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-4 sm:gap-5 mt-12 sm:mt-16">
          {guestStories.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={cn(
                "relative h-[2px] transition-all duration-700 ease-out",
                i === activeIndex
                  ? "w-12 sm:w-16 bg-brand-gold"
                  : "w-6 sm:w-8 bg-brand-border hover:bg-brand-gold/50"
              )}
              aria-label={`View story ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
