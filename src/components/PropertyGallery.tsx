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

export type GalleryRoom = {
  name: string;
  slug: string;
  images: GalleryItem[];
};

interface PropertyGalleryProps {
  items: GalleryItem[];
  propertyName: string;
  rooms?: GalleryRoom[];
}

const categories = ["All", "Bedroom", "Bathroom", "Terrace & Outdoor", "Living Room", "Kitchen & Dining", "Restaurant", "Common Areas", "Views"];

export default function PropertyGallery({ items, propertyName, rooms }: PropertyGalleryProps) {
  const [filter, setFilter] = useState("All");
  const [activeRoom, setActiveRoom] = useState<string | null>(rooms && rooms.length > 0 ? rooms[0].slug : null);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get items for display based on room and category filters
  const displayItems = useMemo(() => {
    let filtered = items;

    // Filter by room if room sections are enabled
    if (activeRoom && rooms && rooms.length > 0) {
      const selectedRoom = rooms.find(r => r.slug === activeRoom);
      if (selectedRoom) {
        filtered = selectedRoom.images;
      }
    }

    // Filter by category
    if (filter !== "All") {
      filtered = filtered.filter((item) => item.category === filter);
    }

    return filtered;
  }, [items, activeRoom, rooms, filter]);

  const currentIndex = lightbox
    ? displayItems.findIndex((item) => item.src === lightbox.src)
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
            ? (currentIndex - 1 + displayItems.length) % displayItems.length
            : (currentIndex + 1) % displayItems.length;
        setLightbox(displayItems[newIndex]);
        setIsTransitioning(false);
      }, 150);
    },
    [currentIndex, displayItems]
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

  // Scroll to section when room changes
  const handleRoomChange = (slug: string) => {
    setActiveRoom(slug);
    setFilter("All");
    const element = document.getElementById(`room-${slug}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Room Tabs (if rooms are provided) */}
      {rooms && rooms.length > 0 && (
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/50 mb-4">Browse by Room</p>
          <div className="flex flex-wrap gap-3">
            {rooms.map((room) => (
              <button
                key={room.slug}
                onClick={() => handleRoomChange(room.slug)}
                className={cn(
                  "px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] transition-all duration-500 border",
                  activeRoom === room.slug
                    ? "bg-brand-gold text-brand-ink border-brand-gold"
                    : "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                )}
              >
                {room.name}
                <span className="ml-2 text-white/50">({room.images.length})</span>
              </button>
            ))}
            <button
              onClick={() => {
                setActiveRoom(null);
                setFilter("All");
              }}
              className={cn(
                "px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] transition-all duration-500 border",
                activeRoom === null
                  ? "bg-white text-brand-ink border-white"
                  : "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
              )}
            >
              All Images ({items.length})
            </button>
          </div>
        </div>
      )}

      {/* Room Sections (if rooms are provided) */}
      {rooms && rooms.length > 0 && rooms.map((room) => (
        <div key={room.slug} id={`room-${room.slug}`} className="mb-16 scroll-mt-32">
          {/* Room Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold mb-1">Room Gallery</p>
              <h2 className="font-display text-2xl sm:text-3xl font-light text-white">{room.name}</h2>
            </div>
            <a
              href={`#room-${room.slug}`}
              onClick={(e) => {
                e.preventDefault();
                handleRoomChange(room.slug);
                navigator.clipboard.writeText(window.location.origin + window.location.pathname + `#room-${room.slug}`);
              }}
              className="text-[10px] uppercase tracking-[0.15em] text-white/50 hover:text-brand-gold transition-colors"
              title="Copy link to this room"
            >
              Copy Link
            </a>
          </div>

          {/* Room Images Grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {room.images.slice(0, activeRoom === room.slug ? undefined : 8).map((item, i) => (
              <div
                key={item.src}
                className="group relative break-inside-avoid overflow-hidden cursor-pointer"
                onClick={() => {
                  setLightbox(item);
                  setActiveRoom(room.slug);
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading={i < 4 ? "eager" : "lazy"}
                    quality={80}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-brand-gold">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Expand Button */}
          {room.images.length > 8 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setActiveRoom(room.slug);
                  setFilter("All");
                  window.scrollTo({ top: document.getElementById(`room-${room.slug}`)?.offsetTop || 0, behavior: "smooth" });
                }}
                className="text-[11px] uppercase tracking-[0.15em] text-brand-gold hover:text-white transition-colors border border-brand-gold/30 hover:border-brand-gold px-6 py-2.5"
              >
                View All {room.images.length} Images
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Category Filter (only show when viewing all) */}
      {activeRoom === null && (
        <>
          <div className="flex flex-wrap justify-start gap-4 sm:gap-6 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "relative text-[10px] sm:text-[11px] uppercase tracking-[0.15em] pb-2 transition-all duration-500",
                  filter === cat
                    ? "text-brand-gold"
                    : "text-white/50 hover:text-white"
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
            {displayItems.map((item, i) => (
              <div
                key={item.src}
                className="group relative break-inside-avoid overflow-hidden cursor-pointer"
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
        </>
      )}

      {/* Count */}
      <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-white/50">
        {displayItems.length} images
      </p>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[99999] bg-black/98 flex items-center justify-center"
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
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white z-10">
            <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">{propertyName}</p>
            <p className="text-xs text-white/70 mt-1">{lightbox.title}</p>
            <p className="text-[10px] text-white/50 mt-2">
              {currentIndex !== null ? currentIndex + 1 : 0} / {displayItems.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
