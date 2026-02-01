"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Animate quote change
  useEffect(() => {
    if (quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [activeIndex]);

  // Scroll reveal
  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section ref={sectionRef} className="py-36 lg:py-48 bg-white">
      <div
        ref={contentRef}
        className="max-w-5xl mx-auto px-8 lg:px-12 text-center"
      >
        {/* Header */}
        <p className="text-[11px] text-brand-accent uppercase tracking-[0.4em] mb-12 font-light">
          Guest Voices
        </p>

        {/* Quote */}
        <div ref={quoteRef} className="min-h-[280px] flex flex-col items-center justify-center">
          {/* Quote mark */}
          <div className="text-brand-border/30 text-[120px] lg:text-[150px] font-display leading-none mb-4 select-none">
            &ldquo;
          </div>

          {/* Quote text */}
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light italic text-brand-ink mb-12 text-balance leading-[1.3] max-w-4xl">
            {currentTestimonial.quote}
          </blockquote>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-brand-accent mb-10" />

          {/* Attribution */}
          <div>
            <p className="text-lg font-display text-brand-ink mb-2 font-light">
              {currentTestimonial.name}
            </p>
            <p className="text-[10px] text-brand-muted uppercase tracking-[0.3em]">
              {currentTestimonial.source}
            </p>
          </div>
        </div>

        {/* Navigation Dots - refined */}
        <div className="flex justify-center gap-5 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "relative h-[2px] transition-all duration-700 ease-out",
                i === activeIndex
                  ? "w-16 bg-brand-ink"
                  : "w-8 bg-brand-border hover:bg-brand-muted"
              )}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
