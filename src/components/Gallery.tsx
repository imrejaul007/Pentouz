"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { galleryItems, galleryCategories } from "@/data/content";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(
    null
  );

  const filteredGallery =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const currentIndex = lightbox
    ? filteredGallery.findIndex((item) => item.title === lightbox.title)
    : -1;

  const navigateLightbox = (direction: "prev" | "next") => {
    if (currentIndex === -1) return;
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredGallery.length) % filteredGallery.length
        : (currentIndex + 1) % filteredGallery.length;
    setLightbox(filteredGallery[newIndex]);
  };

  return (
    <section id="gallery" className="section-padding bg-brand-cream">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-overline text-brand-muted uppercase tracking-[0.2em] mb-4">
            Gallery
          </p>
          <h2 className="font-display text-display-md font-light">
            A Glimpse Inside
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-8 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "relative text-body-sm uppercase tracking-[0.1em] pb-2 transition-colors",
                filter === cat
                  ? "text-brand-ink"
                  : "text-brand-muted hover:text-brand-ink"
              )}
            >
              {cat}
              {filter === cat && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-brand-ink" />
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Masonry style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-heading-sm font-display font-light">
                    {item.title}
                  </p>
                  <p className="text-white/70 text-caption uppercase tracking-[0.1em]">
                    {item.category}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation - Previous */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Navigation - Next */}
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] relative px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.image}
              alt={lightbox.title}
              width={1200}
              height={800}
              className="object-contain max-h-[85vh] w-auto"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="text-heading-md font-display font-light">
              {lightbox.title}
            </p>
            <p className="text-caption text-white/60 uppercase tracking-[0.15em] mt-2">
              {lightbox.category}
            </p>
          </div>

          {/* Counter */}
          <div className="absolute bottom-8 right-8 text-white/60 text-sm">
            {currentIndex + 1} / {filteredGallery.length}
          </div>
        </div>
      )}
    </section>
  );
}
