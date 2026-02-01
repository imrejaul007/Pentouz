"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Header */}
        <p className="text-overline text-brand-accent uppercase tracking-[0.3em] mb-10">
          Guest Voices
        </p>

        {/* Quote Carousel */}
        <div className="relative min-h-[320px] flex items-center justify-center">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={cn(
                "absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000",
                i === activeIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
              )}
            >
              {/* Quote mark */}
              <div className="text-brand-border text-8xl font-display leading-none mb-6">&ldquo;</div>

              {/* Quote */}
              <blockquote className="font-display text-display-sm lg:text-display-md font-light italic text-brand-ink mb-10 text-balance leading-snug">
                {testimonial.quote}
              </blockquote>

              {/* Divider */}
              <div className="w-12 h-px bg-brand-accent mb-8" />

              {/* Attribution */}
              <div>
                <p className="text-body-lg font-display text-brand-ink mb-2">
                  {testimonial.name}
                </p>
                <p className="text-caption text-brand-muted uppercase tracking-[0.2em]">
                  {testimonial.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots - refined */}
        <div className="flex justify-center gap-4 mt-14">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "transition-all duration-500",
                i === activeIndex
                  ? "w-12 h-px bg-brand-ink"
                  : "w-6 h-px bg-brand-border hover:bg-brand-muted"
              )}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
