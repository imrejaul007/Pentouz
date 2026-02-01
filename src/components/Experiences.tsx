"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Experiences() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Header reveal
    if (headerRef.current) {
      const elements = headerRef.current.children;
      gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Cards stagger
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experiences"
      className="py-36 lg:py-48 bg-white"
    >
      <div className="container-wide">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-24 lg:mb-32">
          <p className="text-[11px] text-brand-accent uppercase tracking-[0.4em] mb-8 font-light">
            Signature Experiences
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light max-w-4xl mx-auto text-balance leading-[1.15]">
            Curated <em className="italic">Moments</em>,
            <br className="hidden sm:block" /> Unforgettable Memories
          </h2>
          <div className="w-16 h-[1px] bg-brand-accent mx-auto mt-12" />
        </div>

        {/* Experience Cards - refined grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-16 lg:gap-24"
        >
          {experiences.map((exp, i) => (
            <div key={exp.title} className="group text-center">
              {/* Number - elegant style with line */}
              <div className="mb-10 relative">
                <span className="font-display text-6xl lg:text-7xl text-brand-border/50 font-light group-hover:text-brand-accent/30 transition-colors duration-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Divider line - animated */}
              <div className="w-10 h-[1px] bg-brand-border mx-auto mb-10 group-hover:w-20 group-hover:bg-brand-accent transition-all duration-700" />

              {/* Content */}
              <h3 className="font-display text-xl lg:text-2xl font-light mb-5">
                {exp.title}
              </h3>
              <p className="text-sm lg:text-base text-brand-body max-w-sm mx-auto leading-relaxed font-light">
                {exp.copy}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24 lg:mt-32">
          <Link
            href="/contact"
            className="inline-flex items-center gap-5 text-[11px] uppercase tracking-[0.2em] text-brand-ink hover:text-brand-accent transition-colors duration-500 group"
          >
            <span>Speak to our concierge</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
