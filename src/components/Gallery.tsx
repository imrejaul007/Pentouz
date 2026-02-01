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
    <section id="gallery" className="section-padding bg-brand-linen">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-overline text-brand-accent uppercase tracking-[0.3em] mb-6">
            Visual Journey
          </p>
          <h2 className="font-display text-display-md lg:text-display-lg font-light">
            A Glimpse <em className="italic">Inside</em>
          </h2>
          <div className="w-16 h-px bg-brand-accent mx-auto mt-10" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-10 lg:gap-14 mb-14 lg:mb-18">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "relative text-label uppercase tracking-[0.15em] pb-3 transition-colors duration-300",
                filter === cat
                  ? "text-brand-ink"
                  : "text-brand-muted hover:text-brand-ink"
              )}
            >
              {cat}
              <span
                className={cn(
                  "absolute bottom-0 left-0 right-0 h-px bg-brand-ink transition-transform duration-300 origin-left",
                  filter === cat ? "scale-x-100" : "scale-x-0"
                )}
              />
            </button>
          ))}
        </div>

        {/* Gallery Grid - Masonry style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
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
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-end p-6 lg:p-8">
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

      {/* Lightbox - Enhanced */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-brand-ink flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-10 flex items-center gap-3"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <span className="text-label uppercase tracking-[0.15em] hidden sm:inline">Close</span>
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>

          {/* Navigation - Previous */}
          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-all z-10"
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
            className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-all z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" strokeWidth={1} />
          </button>

          {/* Image */}
          <div
            className="max-w-6xl max-h-[85vh] relative px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.image}
              alt={lightbox.title}
              width={1400}
              height={900}
              className="object-contain max-h-[85vh] w-auto"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="text-heading-lg font-display font-light">
              {lightbox.title}
            </p>
            <p className="text-caption text-white/50 uppercase tracking-[0.2em] mt-3">
              {lightbox.category}
            </p>
          </div>

          {/* Counter */}
          <div className="absolute bottom-10 right-10 text-white/40 text-label tracking-wider">
            {String(currentIndex + 1).padStart(2, "0")} / {String(filteredGallery.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </section>
  );
}
