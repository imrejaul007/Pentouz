"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);

  // Background crossfade animation
  useEffect(() => {
    if (backgroundRef.current) {
      gsap.to(backgroundRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(backgroundRef.current, {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          });
        },
      });
    }
  }, [activeIndex]);

  // Scroll reveal
  useEffect(() => {
    if (!sectionRef.current || !headerRef.current) return;

    gsap.fromTo(
      headerRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartRef.current - touchEndRef.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="properties"
      className="relative bg-[#1a1a1a] overflow-hidden"
    >
      {/* Background Image - Four Seasons style with full coverage */}
      <div ref={backgroundRef} className="absolute inset-0">
        <Image
          src={destinations[activeIndex].image}
          alt={destinations[activeIndex].title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 sm:py-20 lg:py-32">
        {/* Header - Four Seasons style */}
        <div ref={headerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-10 sm:mb-16 lg:mb-20">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/50 mb-3 sm:mb-4">
            Our Properties
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight">
              The Definition of{" "}
              <em className="italic font-normal">Luxury</em>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Modern Living
            </h2>

            {/* Navigation Arrows - Four Seasons style - desktop only */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <button
                onClick={prevSlide}
                className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:border-white group transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-white group-hover:text-brand-ink transition-colors" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:border-white group transition-all duration-300"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-white group-hover:text-brand-ink transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Cards - Horizontal scroll on mobile, grid on desktop */}
        <div
          ref={carouselRef}
          className="max-w-7xl mx-auto lg:px-12"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Mobile: Horizontal scroll */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-6">
            <div className="flex gap-4 sm:gap-6" style={{ width: 'max-content' }}>
              {destinations.map((dest, i) => (
                <div key={dest.slug} className="w-[280px] sm:w-[320px] flex-shrink-0">
                  <PropertyCard
                    property={dest}
                    index={i}
                    isActive={i === activeIndex}
                    onClick={() => setActiveIndex(i)}
                    isMobile
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 px-6 lg:px-0">
            {destinations.map((dest, i) => (
              <PropertyCard
                key={dest.slug}
                property={dest}
                index={i}
                isActive={i === activeIndex}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Progress Indicator - Four Seasons style */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-8 sm:mt-12 lg:mt-16">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-[10px] sm:text-[11px] text-white/50 tracking-wider">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 h-[1px] bg-white/20 relative">
              <div
                className="absolute top-0 left-0 h-full bg-white transition-all duration-500"
                style={{ width: `${((activeIndex + 1) / destinations.length) * 100}%` }}
              />
            </div>
            <span className="text-[10px] sm:text-[11px] text-white/50 tracking-wider">
              {String(destinations.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Mobile Navigation - Larger touch targets */}
        <div className="flex lg:hidden justify-center gap-4 mt-6 sm:mt-8 px-4 sm:px-6">
          <button
            onClick={prevSlide}
            className="w-12 h-12 sm:w-14 sm:h-14 border border-white/30 flex items-center justify-center active:bg-white/10 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 sm:w-14 sm:h-14 border border-white/30 flex items-center justify-center active:bg-white/10 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

interface PropertyCardProps {
  property: (typeof destinations)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
  isMobile?: boolean;
}

function PropertyCard({ property, index, isActive, onClick, isMobile }: PropertyCardProps) {
  return (
    <div
      className={cn(
        "group cursor-pointer transition-all duration-500",
        isActive ? "opacity-100" : "opacity-70 hover:opacity-90",
        isMobile && "touch-manipulation"
      )}
      onClick={onClick}
    >
      {/* Card - Four Seasons style */}
      <div className="relative aspect-[16/10] overflow-hidden mb-4 sm:mb-6">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Hover overlay with view button - desktop only */}
        <div className="absolute inset-0 hidden lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={`/destinations/${property.slug}`}
            className="bg-white text-brand-ink px-6 py-3 text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-white/90 transition-colors"
          >
            View Property
          </Link>
        </div>

        {/* Mobile: Active indicator */}
        {isActive && isMobile && (
          <div className="absolute bottom-3 left-3 bg-white px-3 py-1.5 text-[9px] uppercase tracking-[0.1em] font-medium text-brand-ink">
            Selected
          </div>
        )}
      </div>

      {/* Card Content - Four Seasons style */}
      <div className="text-white">
        <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/50 mb-1.5 sm:mb-2">
          {property.subtitle}
        </p>
        <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-light mb-2 sm:mb-3">
          {property.shortTitle}
        </h3>
        <p className="text-xs sm:text-sm text-white/60 leading-relaxed line-clamp-2 mb-3 sm:mb-4">
          {property.copy}
        </p>
        <Link
          href={`/destinations/${property.slug}`}
          className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors group/link"
        >
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
