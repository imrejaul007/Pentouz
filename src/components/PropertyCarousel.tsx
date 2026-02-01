"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { destinations } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PropertyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Background transition animation
  useEffect(() => {
    if (backgroundRef.current) {
      // Smooth crossfade
      gsap.to(backgroundRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(backgroundRef.current, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          });
        },
      });
    }
  }, [activeIndex]);

  // Scroll-triggered reveal animations
  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return;

    // Header animation
    const headerElements = headerRef.current.children;
    gsap.fromTo(
      headerElements,
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

    // Cards stagger animation
    const cards = cardsRef.current.children;
    gsap.fromTo(
      cards,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="properties"
      className="relative min-h-screen bg-brand-ink overflow-hidden"
    >
      {/* Animated Background with smooth transition */}
      <div ref={backgroundRef} className="absolute inset-0">
        <Image
          src={destinations[activeIndex].image}
          alt={destinations[activeIndex].title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={85}
        />
        {/* Refined gradient - Four Seasons style */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center py-36 lg:py-48">
        {/* Section Header */}
        <div ref={headerRef} className="container-wide mb-20 lg:mb-28">
          <p className="text-[11px] text-white/40 uppercase tracking-[0.4em] mb-8 font-light">
            Our Destinations
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light max-w-3xl leading-[1.1]">
            Exceptional{" "}
            <em className="italic font-normal">Residences</em>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-white/40 to-transparent mt-10" />
        </div>

        {/* Property Cards */}
        <div className="container-wide">
          <div ref={cardsRef} className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            {destinations.map((dest, i) => (
              <PropertyCard
                key={dest.slug}
                property={dest}
                index={i}
                isActive={i === activeIndex}
                onHover={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Navigation Dots - refined */}
        <div className="flex justify-center gap-8 mt-20 lg:mt-28">
          {destinations.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "relative h-[2px] transition-all duration-700 ease-out",
                i === activeIndex
                  ? "w-20 bg-white"
                  : "w-10 bg-white/20 hover:bg-white/40"
              )}
              aria-label={`View property ${i + 1}`}
            >
              {i === activeIndex && (
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white/60 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

interface PropertyCardProps {
  property: (typeof destinations)[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
}

function PropertyCard({ property, index, isActive, onHover }: PropertyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <Link
      href={`/destinations/${property.slug}`}
      className={cn(
        "group block cursor-pointer transition-all duration-700",
        isActive ? "opacity-100" : "opacity-40 hover:opacity-100"
      )}
      onMouseEnter={onHover}
    >
      <div ref={cardRef}>
        {/* Card Image */}
        <div className="aspect-[3/4] relative overflow-hidden mb-8">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Gradient overlay - refined */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Number badge - elegant positioning */}
          <div className="absolute top-8 left-8">
            <span className="text-5xl lg:text-6xl font-display text-white/20 font-light transition-colors duration-500 group-hover:text-white/40">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Content overlay - revealed on hover */}
          <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] mb-3 font-light">
              {property.subtitle}
            </p>
            <h3 className="font-display text-xl lg:text-2xl text-white font-light leading-snug">
              {property.title}
            </h3>
          </div>

          {/* Arrow button - appears on hover */}
          <div className="absolute bottom-8 right-8 w-12 h-12 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bg-white group-hover:border-white">
            <ArrowRight className="w-5 h-5 text-white group-hover:text-brand-ink transition-colors duration-300" />
          </div>
        </div>

        {/* Card Content - below image */}
        <div className="text-white px-1">
          <p className="text-sm lg:text-base text-white/50 line-clamp-2 leading-relaxed font-light">
            {property.copy}
          </p>
          <div className="inline-flex items-center gap-4 mt-6 text-[10px] uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors duration-500">
            <span>Explore</span>
            <span className="w-8 h-[1px] bg-white/40 transition-all duration-500 group-hover:w-14 group-hover:bg-white" />
          </div>
        </div>
      </div>
    </Link>
  );
}
