"use client";

import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { lavelleImageSet, indiranagarImageSet, ootyImageSet, fernhillImageSet } from "@/data/propertyImageSets";

const PAGE_SIZE = 12;

type GalleryItem = {
  src: string;
  location: string;
  category: string;
  alt: string;
};

function categorize(path: string): string {
  const p = path.toLowerCase();
  if (/bathroom|bath/.test(p)) return "Bathroom";
  if (/bedroom|suite|king|queen|superior|cottage|villa_four|four_bed/.test(p)) return "Bedroom";
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
  location: "Pentouz Hillside",
  category: categorize(src),
  alt: makeAlt(src, "Pentouz Hillside"),
}));

const allItems: GalleryItem[] = [...lavelleItems, ...indiranagarItems, ...ootyItems, ...fernhillItems];

const LOCATIONS = ["All", "Lavelle Road", "Indiranagar", "Ooty", "Pentouz Hillside"];

const CATEGORIES = [
  "All",
  "Bedroom",
  "Bathroom",
  "Living Room",
  "Kitchen & Dining",
  "Terrace & Outdoor",
  "Restaurant",
  "Reception",
  "Facade",
  "Views",
  "Common Areas",
];

export default function GalleryClient() {
  const [activeLocation, setActiveLocation] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return allItems.filter((item) => {
      const locMatch = activeLocation === "All" || item.location === activeLocation;
      const catMatch = activeCategory === "All" || item.category === activeCategory;
      return locMatch && catMatch;
    });
  }, [activeLocation, activeCategory]);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setPage(1);
  }, [activeLocation, activeCategory]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const paginated = useMemo(() => filtered.slice(0, page * PAGE_SIZE), [filtered, page]);
  const hasMore = paginated.length < filtered.length;

  return (
    <section className="bg-[#fbf7f0]">
      <div className="mx-auto max-w-[1480px] px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
        {/* Location filter */}
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.32em] text-brand-gold mb-3">Location</p>
          <div className="flex flex-wrap gap-2">
            {LOCATIONS.map((loc) => (
              <button
                key={loc}
                onClick={() => setActiveLocation(loc)}
                className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] border transition-all duration-300 ${
                  activeLocation === loc
                    ? "bg-brand-ink text-white border-brand-ink"
                    : "border-brand-border text-brand-muted hover:border-brand-ink hover:text-brand-ink"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Category filter */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.32em] text-brand-gold mb-3">Category</p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[10px] uppercase tracking-[0.16em] border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-brand-gold text-white border-brand-gold"
                    : "border-brand-border text-brand-muted hover:border-brand-gold hover:text-brand-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <p className="mb-8 text-[11px] uppercase tracking-[0.18em] text-brand-muted">
          {filtered.length} image{filtered.length !== 1 ? "s" : ""}
          {hasMore && ` — showing ${paginated.length}`}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center text-brand-muted text-sm">No images found for this combination.</div>
        ) : (
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {paginated.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className="group relative break-inside-avoid overflow-hidden bg-white"
              >
                <div className="relative w-full overflow-hidden">
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
        )}

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
  );
}
