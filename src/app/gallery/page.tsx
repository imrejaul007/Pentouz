"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { galleryItems, galleryCategories, destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Extended gallery with destination images
const allGalleryItems = [
  ...galleryItems,
  ...destinations.flatMap((dest) =>
    dest.gallery.map((img, i) => ({
      image: img,
      title: `${dest.shortTitle} - ${i + 1}`,
      category: "Properties",
    }))
  ),
];

const allCategories = ["All", ...galleryCategories.filter((c) => c !== "All"), "Properties"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof allGalleryItems)[0] | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const filteredGallery =
    filter === "All"
      ? allGalleryItems
      : allGalleryItems.filter((item) => item.category === filter);

  const currentIndex = lightbox
    ? filteredGallery.findIndex((item) => item.title === lightbox.title)
    : -1;

  // Hero animation
  useEffect(() => {
    if (!heroRef.current) return;

    gsap.fromTo(
      heroRef.current.querySelectorAll("[data-reveal]"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  // Grid animation
  useEffect(() => {
    if (!gridRef.current) return;

    gsap.fromTo(
      gridRef.current.children,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      }
    );
  }, [filter]);

  // Lightbox
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
      if (lightboxRef.current && imageRef.current) {
        gsap.fromTo(lightboxRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });
        gsap.fromTo(imageRef.current, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, delay: 0.1 });
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const closeLightbox = useCallback(() => {
    if (lightboxRef.current && imageRef.current) {
      gsap.to(imageRef.current, { scale: 0.95, opacity: 0, duration: 0.3 });
      gsap.to(lightboxRef.current, { opacity: 0, duration: 0.3, delay: 0.1, onComplete: () => setLightbox(null) });
    } else {
      setLightbox(null);
    }
  }, []);

  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (currentIndex === -1) return;
      const newIndex =
        direction === "prev"
          ? (currentIndex - 1 + filteredGallery.length) % filteredGallery.length
          : (currentIndex + 1) % filteredGallery.length;
      setLightbox(filteredGallery[newIndex]);
    },
    [currentIndex, filteredGallery]
  );

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
    <>
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[50vh] sm:h-[60vh] min-h-[400px] flex items-center justify-center bg-[#1a1a1a]"
      >
        <Image
          src="https://pentouz.com/wp-content/uploads/2025/01/Living-Room-5-1.jpg"
          alt="Gallery"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-black/40" />

        <div className="relative z-10 text-center px-4">
          <p data-reveal className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/50 mb-4 sm:mb-6">
            Visual Journey
          </p>
          <h1 data-reveal className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white">
            Our <em className="italic">Gallery</em>
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Filter Tabs */}
          <div className="flex justify-start sm:justify-center gap-4 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "relative text-[10px] sm:text-[11px] uppercase tracking-[0.15em] pb-2 sm:pb-3 transition-all duration-500 whitespace-nowrap flex-shrink-0",
                  filter === cat ? "text-brand-ink" : "text-brand-muted hover:text-brand-ink"
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

          {/* Gallery Grid */}
          <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
            {filteredGallery.map((item, i) => (
              <button
                key={`${item.title}-${i}`}
                onClick={() => setLightbox(item)}
                className={cn(
                  "relative group overflow-hidden",
                  i % 7 === 0 ? "sm:col-span-2 sm:row-span-2 aspect-square" : "aspect-[4/3]"
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-end">
                  <div className="p-3 sm:p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block">
                    <p className="text-white font-display text-base sm:text-lg font-light mb-1">
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
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[100] bg-[#0a0a0a]/98 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 sm:top-8 right-4 sm:right-8 flex items-center gap-4 text-white/50 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
          >
            <span className="text-[11px] uppercase tracking-[0.15em] hidden sm:inline">Close</span>
            <div className="w-10 sm:w-12 h-10 sm:h-12 border border-white/20 flex items-center justify-center hover:border-white/50">
              <X className="w-5 h-5" strokeWidth={1.5} />
            </div>
          </button>

          <button
            className="absolute left-2 sm:left-12 top-1/2 -translate-y-1/2 w-10 sm:w-14 h-10 sm:h-14 border border-white/20 flex items-center justify-center hover:border-white/50 z-10"
            onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
          >
            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-white" strokeWidth={1} />
          </button>

          <button
            className="absolute right-2 sm:right-12 top-1/2 -translate-y-1/2 w-10 sm:w-14 h-10 sm:h-14 border border-white/20 flex items-center justify-center hover:border-white/50 z-10"
            onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
          >
            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-white" strokeWidth={1} />
          </button>

          <div ref={imageRef} className="max-w-5xl max-h-[85vh] relative px-12 sm:px-20" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.image}
              alt={lightbox.title}
              width={1400}
              height={900}
              className="object-contain max-h-[80vh] sm:max-h-[85vh] w-auto"
              priority
            />
          </div>

          <div className="absolute bottom-16 sm:bottom-12 left-1/2 -translate-x-1/2 text-center text-white px-4 w-full">
            <p className="font-display text-lg sm:text-xl font-light mb-1">{lightbox.title}</p>
            <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-[0.2em]">{lightbox.category}</p>
          </div>

          <div className="absolute bottom-16 sm:bottom-12 right-4 sm:right-12 text-white/30 text-[10px] sm:text-[11px] tracking-widest hidden sm:block">
            <span className="text-white/60">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="mx-2">/</span>
            <span>{String(filteredGallery.length).padStart(2, "0")}</span>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
