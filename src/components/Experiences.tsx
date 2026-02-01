"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Four Seasons style experience cards with images
const experienceCards = [
  {
    title: "Culinary Excellence",
    subtitle: "Dining",
    description: "From intimate in-residence dining to curated culinary journeys, savor exceptional flavors crafted by our chefs.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=1000&fit=crop",
    link: "/experiences#dining",
  },
  {
    title: "Wellness & Spa",
    subtitle: "Rejuvenation",
    description: "Restore balance with personalized spa treatments and wellness programs designed for complete renewal.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=1000&fit=crop",
    link: "/experiences#wellness",
  },
  {
    title: "Curated Journeys",
    subtitle: "Exploration",
    description: "Discover the essence of each destination through bespoke experiences tailored to your interests.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1000&fit=crop",
    link: "/experiences#journeys",
  },
];

export default function Experiences() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
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

    // Cards stagger
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
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
      className="py-16 sm:py-24 lg:py-44 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header - Four Seasons centered style */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16 lg:mb-28">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-brand-accent mb-4 sm:mb-6">
            Signature Experiences
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light max-w-3xl mx-auto leading-[1.15]">
            Curated <em className="italic font-normal">Moments</em>,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Lasting Memories
          </h2>
        </div>

        {/* Experience Cards - Four Seasons style with portrait images */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {experienceCards.map((exp) => (
            <Link
              key={exp.title}
              href={exp.link}
              className="group block"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] sm:aspect-[4/5] overflow-hidden mb-5 sm:mb-8">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover Arrow - hidden on mobile */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-10 sm:w-12 h-10 sm:h-12 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 hidden sm:flex">
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-brand-ink" />
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-brand-muted mb-2 sm:mb-3">
                  {exp.subtitle}
                </p>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-light mb-3 sm:mb-4 group-hover:text-brand-accent transition-colors duration-500">
                  {exp.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-body leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Experiences CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-28">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-3 sm:gap-4 border border-brand-ink px-6 sm:px-10 py-3 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:bg-brand-ink hover:text-white transition-all duration-500 group active:scale-95"
          >
            <span>View All Experiences</span>
            <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
