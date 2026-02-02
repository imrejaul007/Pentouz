"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { galleryItems, galleryCategories } from "@/data/content";

// Photographer credits for each image
const photographers: Record<string, string> = {
  "The Grand Living": "Priya Sharma",
  "Master Suite": "Arjun Mehta",
  "Poolside Serenity": "Kavitha Nair",
  "Evening Ambiance": "Rohan Verma",
  "Garden Retreat": "Anita Desai",
  "Dining Experience": "Vikram Singh",
};

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const filteredGallery =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const currentIndex = lightbox
    ? filteredGallery.findIndex((item) => item.title === lightbox.title)
    : -1;

  // Intersection Observer for visibility
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

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (currentIndex === -1) return;
      setIsTransitioning(true);
      setTimeout(() => {
        const newIndex =
          direction === "prev"
            ? (currentIndex - 1 + filteredGallery.length) % filteredGallery.length
            : (currentIndex + 1) % filteredGallery.length;
        setLightbox(filteredGallery[newIndex]);
        setIsTransitioning(false);
      }, 150);
    },
    [currentIndex, filteredGallery]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox("prev");
      if (e.key === "ArrowRight") navigateLightbox("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, closeLightbox, navigateLightbox]);

  // Masonry layout pattern - determines grid span for each item
  const getGridSpan = (index: number) => {
    const pattern = [
      "col-span-2 row-span-2", // Large
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-2", // Tall
      "col-span-1 row-span-1", // Small
      "col-span-2 row-span-1", // Wide
    ];
    return pattern[index % pattern.length];
  };

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-20 sm:py-28 lg:py-40 bg-[#f8f7f5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p
            className={`section-overline mb-4 sm:mb-6 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Visual Journal
          </p>
          <h2
            className={`section-title transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Moments <em className="italic text-brand-gold">Captured</em>
          </h2>
          <div
            className={`editorial-divider mx-auto mt-6 sm:mt-8 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          />
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex justify-start sm:justify-center gap-6 sm:gap-10 lg:gap-14 mb-10 sm:mb-14 lg:mb-16 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "relative text-[10px] sm:text-[11px] uppercase tracking-[0.15em] pb-2 sm:pb-3 transition-all duration-500 whitespace-nowrap flex-shrink-0",
                filter === cat
                  ? "text-brand-ink"
                  : "text-brand-muted hover:text-brand-ink"
              )}
            >
              {cat}
              <span
                className={cn(
                  "absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold transition-all duration-500",
                  filter === cat ? "opacity-100" : "opacity-0"
                )}
              />
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 auto-rows-[150px] sm:auto-rows-[180px] lg:auto-rows-[200px]">
          {filteredGallery.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setLightbox(item)}
              className={cn(
                "relative group overflow-hidden",
                getGridSpan(i),
                `transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`
              )}
              style={{ transitionDelay: `${400 + i * 80}ms` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex flex-col items-start justify-end p-4 sm:p-5 lg:p-6">
                <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-display text-base sm:text-lg lg:text-xl font-light mb-1">
                    {item.title}
                  </p>
                  <p className="text-white/70 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] mb-2">
                    {item.category}
                  </p>
                  {photographers[item.title] && (
                    <p className="text-brand-gold text-[8px] sm:text-[9px] uppercase tracking-[0.2em]">
                      Photo by {photographers[item.title]}
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Photo Credit */}
        <p
          className={`text-center mt-12 sm:mt-16 photo-credit transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          Captured by The Pentouz Lens
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[100] bg-[#0a0a0a]/98 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 sm:top-8 right-4 sm:right-8 flex items-center gap-4 text-white hover:text-brand-gold transition-colors duration-300 z-10 group"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <span className="text-[11px] uppercase tracking-[0.15em] hidden sm:inline">
              Close
            </span>
            <div className="w-10 sm:w-12 h-10 sm:h-12 border border-white/60 flex items-center justify-center hover:border-brand-gold transition-colors">
              <X className="w-5 h-5" strokeWidth={1.5} />
            </div>
          </button>

          {/* Navigation - Previous */}
          <button
            className="absolute left-2 sm:left-6 lg:left-12 top-1/2 -translate-y-1/2 w-10 sm:w-14 h-10 sm:h-14 border border-white/60 flex items-center justify-center hover:border-brand-gold hover:bg-brand-gold/20 transition-all duration-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-white" strokeWidth={1} />
          </button>

          {/* Navigation - Next */}
          <button
            className="absolute right-2 sm:right-6 lg:right-12 top-1/2 -translate-y-1/2 w-10 sm:w-14 h-10 sm:h-14 border border-white/60 flex items-center justify-center hover:border-brand-gold hover:bg-brand-gold/20 transition-all duration-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-white" strokeWidth={1} />
          </button>

          {/* Image Container */}
          <div
            className={`max-w-5xl max-h-[85vh] relative px-12 sm:px-20 transition-opacity duration-150 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.image}
              alt={lightbox.title}
              width={1400}
              height={900}
              className="object-contain max-h-[80vh] sm:max-h-[85vh] w-auto"
              loading="eager"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-16 sm:bottom-12 left-1/2 -translate-x-1/2 text-center text-white px-4 w-full">
            <p className="font-display text-lg sm:text-xl lg:text-2xl font-light mb-1 sm:mb-2">
              {lightbox.title}
            </p>
            <p className="text-[9px] sm:text-[10px] text-white/70 uppercase tracking-[0.2em] mb-1">
              {lightbox.category}
            </p>
            {photographers[lightbox.title] && (
              <p className="text-brand-gold text-[8px] sm:text-[9px] uppercase tracking-[0.15em]">
                Photography by {photographers[lightbox.title]}
              </p>
            )}
          </div>

          {/* Counter */}
          <div className="absolute bottom-16 sm:bottom-12 right-4 sm:right-12 text-white/70 text-[10px] sm:text-[11px] tracking-widest font-light hidden sm:block">
            <span className="text-brand-gold font-medium">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="mx-2">/</span>
            <span>{String(filteredGallery.length).padStart(2, "0")}</span>
          </div>
        </div>
      )}
    </section>
  );
}
