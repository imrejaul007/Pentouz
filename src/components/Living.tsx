"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Play } from "lucide-react";
import { living, livingImage } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Living() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Header reveal
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { y: 60, opacity: 0 },
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

    // Image parallax
    if (imageRef.current) {
      gsap.to(imageRef.current.querySelector("img"), {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Cards stagger
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
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
    <>
      {/* Full-width Cinematic Section - Four Seasons Style */}
      <section
        ref={sectionRef}
        id="living"
        className="relative bg-[#1a1a1a] overflow-hidden"
      >
        {/* Full-bleed Image with Overlay */}
        <div ref={imageRef} className="relative h-[70vh] lg:h-[85vh] overflow-hidden">
          <Image
            src={livingImage}
            alt="The Art of Living at Pentouz"
            fill
            className="object-cover scale-110"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/60 to-transparent" />

          {/* Centered Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div ref={headerRef} className="text-center text-white px-6 max-w-4xl">
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/50 mb-6">
                The Art of Living
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-8">
                Crafted for{" "}
                <em className="italic font-normal">Every</em>
                <br />
                Occasion
              </h2>
              <p className="text-base lg:text-lg text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Whether you seek the energy of the city or the calm of the hills,
                our residences adapt to your rhythm.
              </p>
              <Link
                href="/destinations"
                className="inline-flex items-center gap-3 bg-white text-brand-ink px-8 py-4 text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-white/90 transition-colors duration-300"
              >
                Explore All Properties
              </Link>
            </div>
          </div>

          {/* Play Button Overlay - Four Seasons style */}
          <button className="absolute bottom-12 right-12 w-16 h-16 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-ink transition-all duration-500 group">
            <Play className="w-5 h-5 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
          </button>
        </div>

        {/* Feature Cards Below - Four Seasons horizontal scroll style */}
        <div className="bg-[#1a1a1a] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div
              ref={cardsRef}
              className="grid md:grid-cols-3 gap-8 lg:gap-12"
            >
              {living.map((item, i) => (
                <div
                  key={item.title}
                  className="group cursor-pointer"
                >
                  {/* Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[11px] text-white/30 tracking-[0.2em]">
                      0{i + 1}
                    </span>
                    <div className="flex-1 h-[1px] bg-white/10 group-hover:bg-white/30 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl lg:text-2xl text-white font-light mb-4 group-hover:text-white/80 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed font-light mb-6">
                    {item.copy}
                  </p>

                  {/* Link */}
                  <Link
                    href="/destinations"
                    className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-white/50 hover:text-white transition-colors duration-500 group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Four Seasons style */}
      <StatsSection />
    </>
  );
}

function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll("[data-stat]");
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const stats = [
    { number: "3", label: "Exclusive Properties" },
    { number: "15+", label: "Years of Excellence" },
    { number: "98%", label: "Guest Satisfaction" },
    { number: "24/7", label: "Concierge Service" },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#f8f7f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-stat
              className="text-center lg:border-r last:border-r-0 border-brand-border/30"
            >
              <div className="font-display text-5xl lg:text-6xl xl:text-7xl font-light text-brand-ink mb-4">
                {stat.number}
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-brand-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
