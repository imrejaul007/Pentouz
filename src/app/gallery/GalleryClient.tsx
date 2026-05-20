"use client";

import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { lavelleImageSet, indiranagarImageSet, ootyImageSet, fernhillImageSet } from "@/data/propertyImageSets";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 16;

type GalleryItem = {
  src: string;
  location: string;
  category: string;
  alt: string;
};

function categorize(path: string): string {
  const p = path.toLowerCase();
  if (/bathroom|bath/.test(p)) return "Bathroom";
  if (/bedroom|suite|king|queen|superior|cottage|villa_four|four_bed|villa|squad|eight_bed/.test(p)) return "Bedroom";
  if (/terrace|balcony|patio|lawn|sit-out|balcony|courtyard/.test(p)) return "Terrace & Outdoor";
  if (/living_room|living/.test(p)) return "Living Room";
  if (/kitchen|dining/.test(p)) return "Kitchen & Dining";
  if (/restaurant/.test(p)) return "Restaurant";
  if (/reception/.test(p)) return "Reception";
  if (/facade|exterior|front_view|side_view/.test(p)) return "Facade";
  if (/view|top_view|night|property_top|overview/.test(p)) return "Views";
  if (/games_room|swimming_pool|pool|play_area|kids|garden|fireplace|gazebo|tea_coffee/.test(p)) return "Common Areas";
  if (/entrance|lift|parking|staircase/.test(p)) return "Common Areas";
  return "Other";
}

function makeAlt(path: string, location: string): string {
  const file = path.split("/").pop()?.replace(/\.[^.]+$/, "").replace(/[_.-]+/g, " ") ?? "";
  return `${location} — ${file}`;
}

const lavelleItems: GalleryItem[] = lavelleImageSet.map((src) => ({
  src,
  location: "Lavelle Road",
  category: categorize(src),
  alt: makeAlt(src, "Lavelle Road"),
}));

const indiranagarItems: GalleryItem[] = indiranagarImageSet.map((src) => ({
  src,
  location: "Indiranagar",
  category: categorize(src),
  alt: makeAlt(src, "Indiranagar"),
}));

const ootyItems: GalleryItem[] = ootyImageSet.map((src) => ({
  src,
  location: "Ooty",
  category: categorize(src),
  alt: makeAlt(src, "Ooty"),
}));

const fernhillItems: GalleryItem[] = fernhillImageSet.map((src) => ({
  src,
  location: "Chikmagalur",
  category: categorize(src),
  alt: makeAlt(src, "Chikmagalur"),
}));

const allItems: GalleryItem[] = [...lavelleItems, ...indiranagarItems, ...ootyItems, ...fernhillItems];

export default function GalleryClient() {
  const [page, setPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const paginated = useMemo(() => allItems.slice(0, page * PAGE_SIZE), [page]);
  const hasMore = paginated.length < allItems.length;

  const selectedItem = selectedIndex !== null ? allItems[selectedIndex] : null;

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? allItems.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === allItems.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <section className="bg-[#fbf7f0]">
        <div className="mx-auto max-w-[1480px] px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
          {/* Properties overview */}
          <div className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Lavelle Road", count: lavelleItems.length, image: lavelleItems[0]?.src },
              { name: "Indiranagar", count: indiranagarItems.length, image: indiranagarItems[0]?.src },
              { name: "Chikmagalur", count: fernhillItems.length, image: fernhillItems[0]?.src },
              { name: "Ooty", count: ootyItems.length, image: ootyItems[0]?.src },
            ].map((property) => (
              <div key={property.name} className="relative aspect-[4/3] overflow-hidden group">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">{property.count} photos</p>
                  <p className="mt-1 font-display text-xl font-light">{property.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Count */}
          <p className="mb-8 text-[11px] uppercase tracking-[0.18em] text-brand-muted">
            {allItems.length} images across all properties
          </p>

          {/* Grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {paginated.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className="group relative break-inside-avoid overflow-hidden bg-white cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-brand-gold">{item.location}</p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/90 mt-1">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setPage((p) => p + 1)}
                className="rounded-full border border-brand-ink px-10 py-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-all duration-500 hover:bg-brand-ink hover:text-white"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div
            className="relative w-[90vw] h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedItem.src}
              alt={selectedItem.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <button
            className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">{selectedItem.location}</p>
            <p className="text-xs text-white/70 mt-1">{selectedItem.alt}</p>
            <p className="text-[10px] text-white/50 mt-2">
              {selectedIndex !== null ? selectedIndex + 1 : 0} / {allItems.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
