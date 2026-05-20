"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useMemo } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type GalleryItem = {
  src: string;
  title: string;
  category: string;
};

interface PropertyGalleryProps {
  items: GalleryItem[];
  propertyName: string;
}

const categories = ["All", "Bedroom", "Bathroom", "Terrace & Outdoor", "Living Room", "Kitchen & Dining", "Restaurant", "Common Areas", "Views"];

export default function PropertyGallery({ items, propertyName }: PropertyGalleryProps) {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredItems = useMemo(
    () => (filter === "All" ? items : items.filter((item) => item.category === filter)),
    [items, filter]
  );

  const currentIndex = lightbox
    ? filteredItems.findIndex((item) => item.src === lightbox.src)
    : -1;

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
            ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
            : (currentIndex + 1) % filteredItems.length;
        setLightbox(filteredItems[newIndex]);
        setIsTransitioning(false);
      }, 150);
    },
    [currentIndex, filteredItems]
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
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-start gap-4 sm:gap-6 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "relative text-[10px] sm:text-[11px] uppercase tracking-[0.15em] pb-2 transition-all duration-500",
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

      {/* Gallery Grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {filteredItems.map((item, i) => (
          <div
            key={item.src}
            className="group relative break-inside-avoid overflow-hidden bg-white cursor-pointer"
            onClick={() => setLightbox(item)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading={i < 8 ? "eager" : "lazy"}
                quality={80}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
              <p className="text-[9px] uppercase tracking-[0.22em] text-brand-gold">Gallery</p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/90 mt-1">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Count */}
      <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-brand-muted">
        {filteredItems.length} images
      </p>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation - Previous */}
          <button
            className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image Container */}
          <div
            className={cn(
              "relative w-[90vw] h-[85vh] flex items-center justify-center transition-opacity duration-150",
              isTransitioning ? "opacity-0" : "opacity-100"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.title}
              fill
              className="object-contain"
              sizes="90vw"
              priority
              quality={90}
            />
          </div>

          {/* Navigation - Next */}
          <button
            className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">{propertyName}</p>
            <p className="text-xs text-white/70 mt-1">{lightbox.title}</p>
            <p className="text-[10px] text-white/50 mt-2">
              {currentIndex !== null ? currentIndex + 1 : 0} / {filteredItems.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
