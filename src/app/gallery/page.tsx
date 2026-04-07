"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { lavelleImageSet, indiranagarImageSet, ootyImageSet } from "@/data/propertyImageSets";

type GalleryItem = {
  src: string;
  location: string;
  category: string;
  alt: string;
};

function categorize(path: string): string {
  const p = path.toLowerCase();
  if (/bathroom|bath/.test(p)) return "Bathroom";
  if (/bedroom|suite|king|queen|superior/.test(p)) return "Bedroom";
  if (/terrace|balcony|patio|lawn/.test(p)) return "Terrace & Outdoor";
  if (/living_room|living/.test(p)) return "Living Room";
  if (/kitchen|dining/.test(p)) return "Kitchen & Dining";
  if (/restaurant/.test(p)) return "Restaurant";
  if (/reception/.test(p)) return "Reception";
  if (/facade/.test(p)) return "Facade";
  if (/view/.test(p)) return "Views";
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

const allItems: GalleryItem[] = [...lavelleItems, ...indiranagarItems, ...ootyItems];

const LOCATIONS = ["All", "Lavelle Road", "Indiranagar", "Ooty"];

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

export default function GalleryPage() {
  const [activeLocation, setActiveLocation] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return allItems.filter((item) => {
      const locMatch = activeLocation === "All" || item.location === activeLocation;
      const catMatch = activeCategory === "All" || item.category === activeCategory;
      return locMatch && catMatch;
    });
  }, [activeLocation, activeCategory]);

  return (
    <>
      <Header />
      <main className="bg-[#f7f1e7] text-brand-ink">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#17120e] text-white">
          <div className="absolute inset-0">
            <Image
              src="/lavelle-road/all/restaurant_4.jpg"
              alt="The Pentouz gallery"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.88)_0%,rgba(10,8,6,0.46)_45%,rgba(10,8,6,0.78)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,160,97,0.16),transparent_30%)]" />
          </div>
          <div className="relative mx-auto max-w-[1480px] px-5 pb-20 pt-36 sm:px-8 lg:px-14 lg:pb-28 lg:pt-48">
            <div className="max-w-4xl">
              <p className="luxury-kicker text-white/70">A closer look at The Pentouz</p>
              <h1 className="luxury-hero-title mt-6 text-white">
                Every space, every property — the full collection.
              </h1>
              <p className="luxury-copy mt-8 max-w-2xl text-white/76">
                Browse all images across Lavelle Road, Indiranagar, and Ooty. Filter by location or category.
              </p>
            </div>
          </div>
        </section>

        {/* Filters + Grid */}
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
            </p>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center text-brand-muted text-sm">No images found for this combination.</div>
            ) : (
              <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
                {filtered.map((item, i) => (
                  <div
                    key={`${item.src}-${i}`}
                    className="group relative break-inside-avoid overflow-hidden bg-white"
                  >
                    <div className="relative w-full overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                    {/* Hover overlay with location + category */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                      <p className="text-[9px] uppercase tracking-[0.22em] text-brand-gold">{item.location}</p>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-white/90 mt-1">{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
