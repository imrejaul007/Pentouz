"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { livingImage } from "@/data/content";

export default function EditorialFeature() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] sm:h-[90vh] lg:h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={livingImage}
          alt="The Art of Living"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Glass Container */}
          <div className="editorial-glass px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">
            {/* Pull Quote */}
            <blockquote
              className={`pull-quote text-white mb-8 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              &ldquo;Every detail is a dialogue between tradition and contemporary
              elegance.&rdquo;
            </blockquote>

            {/* Divider */}
            <div
              className={`editorial-divider mx-auto mb-6 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            />

            {/* Attribution */}
            <p
              className={`text-[11px] uppercase tracking-[0.3em] text-white/70 mb-10 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              The Pentouz Philosophy
            </p>

            {/* CTA */}
            <Link
              href="/experiences"
              className={`inline-flex items-center justify-center gap-3 border border-white/60 text-white px-8 sm:px-10 py-3.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-brand-ink transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Explore Our Spaces
            </Link>
          </div>
        </div>
      </div>

      {/* Photo Credit */}
      <p
        className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 photo-credit transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        Captured at The Pentouz Indiranagar
      </p>
    </section>
  );
}
