"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
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
      className="py-20 sm:py-28 lg:py-40 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            className={`relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=1000&fit=crop"
              alt="The Pentouz Story"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content Column */}
          <div className="lg:pl-8">
            {/* Chapter Label */}
            <p
              className={`chapter-label mb-6 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Chapter One
            </p>

            {/* Divider */}
            <div
              className={`editorial-divider-left mb-8 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
              style={{ transitionDelay: "300ms", transformOrigin: "left" }}
            />

            {/* Headline */}
            <h2
              className={`section-title mb-8 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              The Art of
              <br />
              <em className="italic text-brand-gold">Exceptional</em> Living
            </h2>

            {/* Body Text */}
            <div
              className={`space-y-6 text-brand-body leading-relaxed transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <p>
                Three distinctive residences, each telling its own story of luxury,
                heritage, and the pursuit of perfection. From the vibrant heart of
                Bangalore to the serene hills of Ooty, The Pentouz represents a new
                chapter in Indian hospitality.
              </p>
              <p>
                Every space we create is a canvas for extraordinary experiences.
                We believe that true luxury lies not in opulence, but in the
                thoughtful details that transform a stay into a memory.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className={`inline-flex items-center gap-3 mt-10 text-[11px] uppercase tracking-[0.2em] text-brand-ink hover:text-brand-gold transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <span>Continue Reading</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
