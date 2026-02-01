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
    const filters = sectionRef.current.querySelector(".gallery-filters");

    if (header) {
      gsap.fromTo(
        header.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
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

    if (filters) {
      gsap.fromTo(
        filters,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: filters,
            start: "top 90%",
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
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
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
      // Animate lightbox background
      gsap.fromTo(
        lightboxRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );

      // Animate image
      gsap.fromTo(
        imageRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.1 }
      );

      // Disable scroll
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
        scale: 0.9,
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

      const exitDirection = direction === "next" ? -50 : 50;
      const enterDirection = direction === "next" ? 50 : -50;

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
    <section ref={sectionRef} id="gallery" className="section-padding bg-brand-linen">
      <div className="container-wide">
        {/* Header */}
        <div className="gallery-header text-center mb-16 lg:mb-20">
          <p className="text-overline text-brand-accent uppercase tracking-[0.3em] mb-6">
            Visual Journey
          </p>
          <h2 className="font-display text-display-md lg:text-display-lg font-light">
            A Glimpse <em className="italic">Inside</em>
          </h2>
          <div className="w-16 h-px bg-brand-accent mx-auto mt-10" />
        </div>

        {/* Filter Tabs */}
        <div className="gallery-filters flex justify-center gap-10 lg:gap-14 mb-14 lg:mb-18">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "relative text-label uppercase tracking-[0.15em] pb-3 transition-colors duration-500",
                filter === cat
                  ? "text-brand-ink"
                  : "text-brand-muted hover:text-brand-ink"
              )}
            >
              {cat}
              <span
                className={cn(
                  "absolute bottom-0 left-0 right-0 h-px bg-brand-ink transition-transform duration-500 origin-left",
                  filter === cat ? "scale-x-100" : "scale-x-0"
                )}
              />
            </button>
          ))}
        </div>

        {/* Gallery Grid - Masonry style */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {filteredGallery.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setLightbox(item)}
              className={cn(
                "relative group overflow-hidden",
                // Vary heights for masonry effect
                i % 5 === 0 || i % 5 === 3 ? "aspect-[3/4]" : "aspect-square"
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-700 flex items-end p-6 lg:p-8">
                <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-heading-md font-display font-light mb-1">
                    {item.title}
                  </p>
                  <p className="text-white/60 text-caption uppercase tracking-[0.15em]">
                    {item.category}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox - Enhanced with animations */}
      {lightbox && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[100] bg-brand-ink/98 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors duration-300 z-10 flex items-center gap-3 group"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <span className="text-label uppercase tracking-[0.15em] hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">
              Close
            </span>
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors">
              <X className="w-5 h-5" strokeWidth={1.5} />
            </div>
          </button>

          {/* Navigation - Previous */}
          <button
            className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 w-14 h-14 border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-all duration-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" strokeWidth={1} />
          </button>

          {/* Navigation - Next */}
          <button
            className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 w-14 h-14 border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-all duration-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" strokeWidth={1} />
          </button>

          {/* Image Container */}
          <div
            ref={imageRef}
            className="max-w-6xl max-h-[80vh] relative px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.image}
              alt={lightbox.title}
              width={1400}
              height={900}
              className="object-contain max-h-[80vh] w-auto"
              priority
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="text-heading-lg font-display font-light mb-2">
              {lightbox.title}
            </p>
            <p className="text-caption text-white/40 uppercase tracking-[0.2em]">
              {lightbox.category}
            </p>
          </div>

          {/* Counter */}
          <div className="absolute bottom-12 right-10 text-white/30 text-label tracking-widest font-light">
            <span className="text-white/60">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="mx-2">/</span>
            <span>{String(filteredGallery.length).padStart(2, "0")}</span>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10">
            <div
              className="h-full bg-white/40 transition-all duration-500"
              style={{
                width: `${((currentIndex + 1) / filteredGallery.length) * 100}%`,
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
