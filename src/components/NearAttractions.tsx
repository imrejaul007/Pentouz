"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin, Clock, Mountain, TreePine, Landmark, Utensils, Sparkles, ChevronRight } from "lucide-react";
import { chikmagalurAttractions, type Attraction, type AttractionCategory } from "@/data/chikmagalurAttractions";

interface NearAttractionsProps {
  maxItems?: number;
  showFilter?: boolean;
  title?: string;
  subtitle?: string;
}

const categoryIcons: Record<AttractionCategory, React.ReactNode> = {
  Nature: <TreePine className="w-4 h-4" />,
  Adventure: <Mountain className="w-4 h-4" />,
  Heritage: <Landmark className="w-4 h-4" />,
  Food: <Utensils className="w-4 h-4" />,
  Wellness: <Sparkles className="w-4 h-4" />,
};

const categoryColors: Record<AttractionCategory, string> = {
  Nature: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
  Adventure: "bg-orange-500/10 text-orange-700 border-orange-200",
  Heritage: "bg-amber-500/10 text-amber-700 border-amber-200",
  Food: "bg-rose-500/10 text-rose-700 border-rose-200",
  Wellness: "bg-blue-500/10 text-blue-700 border-blue-200",
};

export default function NearAttractions({
  maxItems,
  showFilter = true,
  title = "Explore the Surroundings",
  subtitle = "Discover attractions and experiences near The Pentouz Hillside",
}: NearAttractionsProps) {
  const [activeCategory, setActiveCategory] = useState<AttractionCategory | "All">("All");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const categories: Array<AttractionCategory | "All"> = [
    "All",
    "Nature",
    "Adventure",
    "Heritage",
    "Food",
    "Wellness",
  ];

  const filteredAttractions =
    activeCategory === "All"
      ? chikmagalurAttractions
      : chikmagalurAttractions.filter((a) => a.category === activeCategory);

  const displayedAttractions = maxItems
    ? filteredAttractions.slice(0, maxItems)
    : filteredAttractions;

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
    <section ref={sectionRef} className="bg-[#f8f7f5] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <p
            className={`text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4 sm:mb-6 font-light transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Around Pentouz Hillside
          </p>
          <h2
            className={`font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            {title}
          </h2>
          <p
            className={`mt-4 sm:mt-6 text-sm sm:text-base text-brand-body max-w-2xl transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {subtitle}
          </p>
        </div>

        {/* Category Filter */}
        {showFilter && (
          <div
            className={`mb-8 sm:mb-12 flex flex-wrap gap-2 sm:gap-3 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] border transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-brand-ink text-white border-brand-ink"
                    : "bg-white text-brand-body border-brand-border hover:border-brand-ink hover:text-brand-ink"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Attractions Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedAttractions.map((attraction, index) => (
            <AttractionCard
              key={attraction.name}
              attraction={attraction}
              isVisible={isVisible}
              delay={400 + index * 80}
            />
          ))}
        </div>

        {/* View All Link */}
        {maxItems && filteredAttractions.length > maxItems && (
          <div className="mt-10 sm:mt-14 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-brand-ink hover:text-brand-gold transition-colors duration-300 group"
            >
              <span>View All Attractions</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

interface AttractionCardProps {
  attraction: Attraction;
  isVisible: boolean;
  delay: number;
}

function AttractionCard({ attraction, isVisible, delay }: AttractionCardProps) {
  return (
    <article
      className={`group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={attraction.image}
          alt={attraction.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.12em] border backdrop-blur-sm ${
              categoryColors[attraction.category]
            }`}
          >
            {categoryIcons[attraction.category]}
            {attraction.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Distance & Time */}
        <div className="flex items-center gap-4 mb-3 text-[10px] sm:text-[11px] text-brand-muted">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {attraction.distance}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg sm:text-xl font-light text-brand-ink group-hover:text-brand-gold transition-colors duration-300 mb-3">
          {attraction.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-brand-body leading-relaxed line-clamp-3 mb-4">
          {attraction.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2">
          {attraction.highlights.slice(0, 3).map((highlight) => (
            <span
              key={highlight}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.1em] text-brand-muted bg-[#f8f7f5] px-2 py-1"
            >
              {highlight}
            </span>
          ))}
          {attraction.highlights.length > 3 && (
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.1em] text-brand-gold">
              +{attraction.highlights.length - 3} more
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
