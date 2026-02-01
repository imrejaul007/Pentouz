"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { galleryItems, galleryCategories } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const filteredGallery =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const currentIndex = lightbox
    ? filteredGallery.findIndex((item) => item.title === lightbox.title)
    : -1;

  // Scroll reveal animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const header = sectionRef.current.querySelector(".gallery-header");

    if (header) {
      gsap.fromTo(
        header.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Grid items animation
  useEffect(() => {
    if (!gridRef.current) return;

    const items = gridRef.current.children;
    gsap.fromTo(
      items,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [filter]);

  // Lightbox open animation
  useEffect(() => {
    if (lightbox && lightboxRef.current && imageRef.current) {
      gsap.fromTo(
        lightboxRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );

      gsap.fromTo(
        imageRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.1 }
      );

      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const closeLightbox = useCallback(() => {
    if (lightboxRef.current && imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(lightboxRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        delay: 0.1,
        onComplete: () => setLightbox(null),
      });
    } else {
      setLightbox(null);
    }
  }, []);

  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (currentIndex === -1 || !imageRef.current) return;

      const exitDirection = direction === "next" ? -30 : 30;
      const enterDirection = direction === "next" ? 30 : -30;

      gsap.to(imageRef.current, {
        x: exitDirection,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          const newIndex =
            direction === "prev"
              ? (currentIndex - 1 + filteredGallery.length) % filteredGallery.length
              : (currentIndex + 1) % filteredGallery.length;
          setLightbox(filteredGallery[newIndex]);

          gsap.fromTo(
            imageRef.current,
            { x: enterDirection, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
          );
        },
      });
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

  return (
    <section ref={sectionRef} id="gallery" className="py-16 sm:py-24 lg:py-44 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header - Four Seasons minimal style */}
        <div className="gallery-header text-center mb-10 sm:mb-16 lg:mb-24">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-brand-accent mb-4 sm:mb-6">
            Visual Journey
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light">
            A Glimpse <em className="italic font-normal">Inside</em>
          </h2>
        </div>

        {/* Filter Tabs - Four Seasons text underline style - horizontal scroll on mobile */}
        <div className="flex justify-start sm:justify-center gap-6 sm:gap-10 lg:gap-14 mb-10 sm:mb-16 lg:mb-20 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
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
                  "absolute bottom-0 left-0 right-0 h-[2px] bg-brand-ink transition-all duration-500",
                  filter === cat ? "opacity-100" : "opacity-0"
                )}
              />
            </button>
          ))}
        </div>

        {/* Gallery Grid - Four Seasons clean grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6"
        >
          {filteredGallery.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setLightbox(item)}
              className={cn(
                "relative group overflow-hidden",
                // Featured items span 2 columns on larger screens
                i === 0 || i === 5 ? "sm:col-span-2 sm:row-span-2 aspect-square" : "aspect-[4/3]"
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Hover overlay - Four Seasons style */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 sm:group-hover:bg-black/40 transition-colors duration-500 flex items-end">
                <div className="p-3 sm:p-6 lg:p-8 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block">
                  <p className="text-white font-display text-base sm:text-lg lg:text-xl font-light mb-1">
                    {item.title}
                  </p>
                  <p className="text-white/60 text-[9px] sm:text-[10px] uppercase tracking-[0.15em]">
                    {item.category}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox - Four Seasons elegant style */}
      {lightbox && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[100] bg-[#0a0a0a]/98 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 sm:top-8 right-4 sm:right-8 flex items-center gap-4 text-white/50 hover:text-white transition-colors duration-300 z-10 group"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <span className="text-[11px] uppercase tracking-[0.15em] hidden sm:inline">
              Close
            </span>
            <div className="w-10 sm:w-12 h-10 sm:h-12 border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors">
              <X className="w-5 h-5" strokeWidth={1.5} />
            </div>
          </button>

          {/* Navigation - Previous */}
          <button
            className="absolute left-2 sm:left-6 lg:left-12 top-1/2 -translate-y-1/2 w-10 sm:w-14 h-10 sm:h-14 border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-all duration-300 z-10"
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
            className="absolute right-2 sm:right-6 lg:right-12 top-1/2 -translate-y-1/2 w-10 sm:w-14 h-10 sm:h-14 border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-all duration-300 z-10"
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
            ref={imageRef}
            className="max-w-5xl max-h-[85vh] relative px-12 sm:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.image}
              alt={lightbox.title}
              width={1400}
              height={900}
              className="object-contain max-h-[80vh] sm:max-h-[85vh] w-auto"
              priority
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-16 sm:bottom-12 left-1/2 -translate-x-1/2 text-center text-white px-4 w-full">
            <p className="font-display text-lg sm:text-xl lg:text-2xl font-light mb-1 sm:mb-2">
              {lightbox.title}
            </p>
            <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-[0.2em]">
              {lightbox.category}
            </p>
          </div>

          {/* Counter - hidden on mobile */}
          <div className="absolute bottom-16 sm:bottom-12 right-4 sm:right-12 text-white/30 text-[10px] sm:text-[11px] tracking-widest font-light hidden sm:block">
            <span className="text-white/60">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="mx-2">/</span>
            <span>{String(filteredGallery.length).padStart(2, "0")}</span>
          </div>
        </div>
      )}
    </section>
  );
}
