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
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <p className="text-overline text-brand-muted uppercase tracking-[0.2em] mb-8">
          Guest Experiences
        </p>

        {/* Quote Carousel */}
        <div className="relative min-h-[250px] flex items-center justify-center">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={cn(
                "absolute inset-0 flex flex-col items-center justify-center transition-all duration-700",
                i === activeIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              )}
            >
              {/* Quote */}
              <blockquote className="font-display text-display-sm lg:text-display-md font-light italic text-brand-ink mb-8 text-balance">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div>
                <p className="text-body-md font-medium text-brand-ink">
                  {testimonial.name}
                </p>
                <p className="text-caption text-brand-muted uppercase tracking-[0.1em]">
                  {testimonial.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-8 bg-brand-ink"
                  : "w-2 bg-brand-border hover:bg-brand-muted"
              )}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
