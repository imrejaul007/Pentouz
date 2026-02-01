"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { destinations } from "@/data/content";

export default function PropertyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // GSAP background transition
  useEffect(() => {
    if (backgroundRef.current) {
      gsap.to(backgroundRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
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

  return (
    <section
      id="properties"
      className="relative min-h-[90vh] bg-brand-ink overflow-hidden"
    >
      {/* Animated Background */}
      <div ref={backgroundRef} className="absolute inset-0">
        <Image
          src={destinations[activeIndex].image}
          alt={destinations[activeIndex].title}
          fill
          className="object-cover transition-opacity"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center py-24 lg:py-32"
      >
        {/* Section Header */}
        <div className="container-luxury mb-12 lg:mb-16">
          <p className="text-overline text-white/60 uppercase tracking-[0.25em] mb-4">
            Our Properties
          </p>
          <h2 className="font-display text-display-md lg:text-display-lg text-white font-light">
            Discover Pentouz Residences
          </h2>
        </div>

        {/* Property Cards */}
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
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

        {/* Navigation Dots */}
        <div className="flex justify-center gap-4 mt-12 lg:mt-16">
          {destinations.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "h-px transition-all duration-500",
                i === activeIndex ? "w-12 bg-white" : "w-8 bg-white/30 hover:bg-white/50"
              )}
              aria-label={`View property ${i + 1}`}
            />
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
  return (
    <div
      className={cn(
        "group cursor-pointer transition-all duration-500",
        isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
      )}
      onMouseEnter={onHover}
    >
      {/* Card Image */}
      <div className="aspect-[4/5] relative overflow-hidden mb-6">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Number badge */}
        <div className="absolute top-6 left-6">
          <span className="text-overline text-white/70">
            0{index + 1}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="text-white">
        <p className="text-caption text-white/60 uppercase tracking-[0.15em] mb-2">
          {property.subtitle}
        </p>
        <h3 className="font-display text-heading-lg font-light mb-3">
          {property.title}
        </h3>
        <p className="text-body-sm text-white/70 mb-4 line-clamp-2">
          {property.copy}
        </p>
        <a
          href={`#${property.slug}`}
          className="inline-flex items-center gap-3 text-caption uppercase tracking-[0.1em] group/link"
        >
          <span>View Property</span>
          <span className="w-6 h-px bg-white transition-all duration-300 group-hover/link:w-10" />
        </a>
      </div>
    </div>
  );
}
