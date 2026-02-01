"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { offers, offersBackgroundImage } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Offers() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Background parallax
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

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
      id="offers"
      className="relative py-36 lg:py-48 overflow-hidden"
    >
      {/* Background Image with parallax */}
      <div ref={bgRef} className="absolute inset-0 -top-20 -bottom-20">
        <Image
          src={offersBackgroundImage}
          alt="Luxury ambiance"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-ink/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-24 lg:mb-32">
          <p className="text-[11px] text-white/40 uppercase tracking-[0.4em] mb-8 font-light">
            Exclusive Offerings
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.15]">
            Signature <em className="italic font-normal">Benefits</em>
          </h2>
          <div className="w-16 h-[1px] bg-white/30 mx-auto mt-12" />
        </div>

        {/* Offer Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {offers.map((offer, i) => (
            <div
              key={offer.title}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-10 lg:p-14 text-white group hover:bg-white/10 hover:border-white/20 transition-all duration-700"
            >
              {/* Number */}
              <span className="absolute top-8 right-8 text-5xl font-display text-white/5 font-light">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Badge */}
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-accent font-light">
                {offer.badge}
              </span>

              {/* Title */}
              <h3 className="font-display text-2xl lg:text-3xl font-light mt-8 mb-5">
                {offer.title}
              </h3>

              {/* Description */}
              <p className="text-sm lg:text-base text-white/50 mb-10 leading-relaxed font-light">
                {offer.copy}
              </p>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-500 group/link"
              >
                <span>Inquire</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover/link:translate-x-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
