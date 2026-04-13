"use client";

import { useRef, useEffect } from "react";
import { ArrowRight, MapPin, Clock, Plane, Train, Building2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface LocationData {
  airport?: { name: string; distance: string; time: string };
  railway?: { name: string; distance: string; time: string };
  metro?: { name: string; distance: string; time: string };
  landmark?: { name: string; distance: string; time: string };
}

interface LocationSectionProps {
  location: LocationData;
  coordinates?: { lat: number; lng: number };
}

export default function LocationSection({ location, coordinates }: LocationSectionProps) {
  const locationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const shouldAnimate =
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      window.matchMedia("(min-width: 1024px)").matches;
    if (!shouldAnimate || !locationRef.current) return;

    const container = locationRef.current;
    const items = container.querySelectorAll(".location-item");
    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
      }
    );

    return () => {
      gsap.killTweensOf(items);
    };
  }, []);

  const metroOrLandmark = location.landmark ?? location.metro;

  return (
    <section ref={locationRef} className="py-16 sm:py-24 lg:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4 sm:mb-6 font-light">
            Location
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light">
            Getting <em className="italic">Here</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {location.airport && (
            <div className="location-item bg-white p-6 sm:p-8 border border-brand-border">
              <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center mb-6">
                <Plane className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-light mb-2">
                {location.airport.name}
              </h3>
              <div className="flex items-center gap-4 text-sm text-brand-muted">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {location.airport.distance}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {location.airport.time}
                </span>
              </div>
            </div>
          )}

          {location.railway && (
            <div className="location-item bg-white p-6 sm:p-8 border border-brand-border">
              <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center mb-6">
                <Train className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-light mb-2">
                {location.railway.name}
              </h3>
              <div className="flex items-center gap-4 text-sm text-brand-muted">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {location.railway.distance}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {location.railway.time}
                </span>
              </div>
            </div>
          )}

          {metroOrLandmark && (
            <div className="location-item bg-white p-6 sm:p-8 border border-brand-border">
              <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-light mb-2">
                {metroOrLandmark.name}
              </h3>
              <div className="flex items-center gap-4 text-sm text-brand-muted">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {metroOrLandmark.distance}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {metroOrLandmark.time}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Map Link */}
        {coordinates && (
          <div className="text-center mt-10 sm:mt-12">
            <a
              href={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-brand-gold hover:text-brand-goldLight transition-colors"
            >
              <MapPin className="w-4 h-4" />
              View on Google Maps
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
