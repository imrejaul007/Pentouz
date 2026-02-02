"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/data/content";

const collectionTaglines: Record<string, string> = {
  indiranagar: "The Urban Sanctuary",
  "lavelle-road": "The Address",
  ooty: "The Mountain Retreat",
};

export default function Collections() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="collections"
      className="py-20 sm:py-28 lg:py-40 bg-[#f8f7f5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-28">
          <p
            className={`section-overline mb-4 sm:mb-6 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Our Collections
          </p>
          <h2
            className={`section-title transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Three Stories,
            <br />
            <em className="italic text-brand-gold">Infinite</em> Memories
          </h2>
          <div
            className={`editorial-divider mx-auto mt-8 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          />
        </div>

        {/* Collection Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {destinations.map((property, index) => (
            <Link
              key={property.slug}
              href={`/destinations/${property.slug}`}
              className={`group block transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Collection Number */}
              <p className="chapter-label mb-4">
                Collection {String(index + 1).padStart(2, "0")}
              </p>

              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <ArrowRight className="w-5 h-5 text-brand-ink" />
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="card-subtitle mb-2">{property.subtitle}</p>
                <h3 className="card-title text-brand-ink mb-2 group-hover:text-brand-gold transition-colors duration-500">
                  {property.shortTitle}
                </h3>
                <p className="text-sm text-brand-muted italic">
                  {collectionTaglines[property.slug] || "Luxury Redefined"}
                </p>
              </div>

              {/* Read Story Link */}
              <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-brand-accent group-hover:text-brand-gold transition-colors duration-500">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Photo Credit */}
        <p
          className={`text-center mt-16 sm:mt-20 text-[10px] uppercase tracking-[0.2em] text-brand-muted transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          Photography by The Pentouz Studio
        </p>
      </div>
    </section>
  );
}
