"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const experienceCards = [
  {
    title: "Culinary Excellence",
    subtitle: "Dining",
    description: "Savor exceptional flavors crafted by our chefs, from intimate in-residence dining to curated culinary journeys.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=900&fit=crop",
    link: "/experiences#dining",
  },
  {
    title: "Wellness & Spa",
    subtitle: "Rejuvenation",
    description: "Restore balance with personalized spa treatments and wellness programs designed for complete renewal.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=900&fit=crop",
    link: "/experiences#wellness",
  },
  {
    title: "Curated Journeys",
    subtitle: "Exploration",
    description: "Discover the essence of each destination through bespoke experiences tailored to your interests.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=900&fit=crop",
    link: "/experiences#journeys",
  },
  {
    title: "Private Events",
    subtitle: "Celebrations",
    description: "Create unforgettable moments in extraordinary settings, from intimate gatherings to grand celebrations.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=900&fit=crop",
    link: "/experiences#events",
  },
  {
    title: "Local Artisans",
    subtitle: "Discovery",
    description: "Meet the makers and craftspeople who bring local culture to life through their extraordinary work.",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=900&fit=crop",
    link: "/experiences#artisans",
  },
];

export default function Experiences() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="experiences"
      className="py-20 sm:py-28 lg:py-40 bg-white overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p
              className={`section-overline mb-4 sm:mb-6 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Curated Moments
            </p>
            <h2
              className={`section-title transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Experiences That
              <br />
              <em className="italic text-brand-gold">Transform</em>
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden lg:flex items-center gap-3 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-brand-border flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-brand-border flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Cards */}
      <div
        ref={scrollRef}
        className="horizontal-scroll pl-4 sm:pl-6 lg:pl-12"
        style={{ paddingRight: "calc(100vw - 100%)" }}
      >
        {experienceCards.map((exp, index) => (
          <Link
            key={exp.title}
            href={exp.link}
            className={`group block w-[280px] sm:w-[300px] lg:w-[320px] transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${300 + index * 100}ms` }}
          >
            {/* Image */}
            <div className="relative aspect-[2/3] overflow-hidden mb-5">
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="320px"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white/90 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>

            {/* Content */}
            <p className="card-subtitle mb-2">{exp.subtitle}</p>
            <h3 className="card-title text-brand-ink group-hover:text-brand-gold transition-colors duration-500">
              {exp.title}
            </h3>

            {/* Arrow */}
            <div className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-brand-muted group-hover:text-brand-gold transition-colors duration-500">
              <span>Discover</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        ))}

        {/* Spacer for last item */}
        <div className="w-4 sm:w-6 lg:w-12 flex-shrink-0" />
      </div>

      {/* View All Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-12 sm:mt-16">
        <Link
          href="/experiences"
          className={`inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-brand-ink hover:text-brand-gold transition-all duration-500 group ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <span>View All Experiences</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>
    </section>
  );
}
