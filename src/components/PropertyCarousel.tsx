"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { destinations } from "@/data/content";

export default function PropertyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // GSAP background transition
  useEffect(() => {
    if (backgroundRef.current) {
      gsap.to(backgroundRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          gsap.to(backgroundRef.current, {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });
        },
      });
    }
  }, [activeIndex]);

  return (
    <section
      id="properties"
      className="relative min-h-screen bg-brand-ink overflow-hidden"
    >
      {/* Animated Background */}
      <div ref={backgroundRef} className="absolute inset-0">
        <Image
          src={destinations[activeIndex].image}
          alt={destinations[activeIndex].title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center py-32 lg:py-40">
        {/* Section Header */}
        <div className="container-wide mb-16 lg:mb-24">
          <p className="text-overline text-white/50 uppercase tracking-[0.3em] mb-6">
            Our Destinations
          </p>
          <h2 className="font-display text-display-lg lg:text-display-xl text-white font-light max-w-2xl">
            Exceptional <em className="italic">Residences</em>
          </h2>
          <div className="w-20 h-px bg-white/30 mt-8" />
        </div>

        {/* Property Cards */}
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
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
        <div className="flex justify-center gap-6 mt-16 lg:mt-24">
          {destinations.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "transition-all duration-500",
                i === activeIndex
                  ? "w-16 h-px bg-white"
                  : "w-8 h-px bg-white/30 hover:bg-white/50"
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
        "group cursor-pointer transition-all duration-700",
        isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
      )}
      onMouseEnter={onHover}
    >
      {/* Card Image */}
      <div className="aspect-[3/4] relative overflow-hidden mb-8">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Number badge - elegant */}
        <div className="absolute top-8 left-8">
          <span className="text-display-sm font-display text-white/40 font-light">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* View button on hover */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div>
            <p className="text-overline text-white/60 uppercase tracking-[0.2em] mb-2">
              {property.subtitle}
            </p>
            <h3 className="font-display text-heading-xl text-white font-light">
              {property.title}
            </h3>
          </div>
          <div className="w-12 h-12 border border-white/40 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
            <ArrowRight className="w-5 h-5 text-white group-hover:text-brand-ink transition-colors" />
          </div>
        </div>
      </div>

      {/* Card Content - below image */}
      <div className="text-white px-2">
        <p className="text-body-md text-white/60 line-clamp-2 leading-relaxed">
          {property.copy}
        </p>
        <a
          href={`#${property.slug}`}
          className="inline-flex items-center gap-4 mt-6 text-caption uppercase tracking-[0.15em] text-white/80 hover:text-white transition-colors group/link"
        >
          <span>Explore</span>
          <span className="w-8 h-px bg-white/50 transition-all duration-300 group-hover/link:w-12 group-hover/link:bg-white" />
        </a>
      </div>
    </div>
  );
}
