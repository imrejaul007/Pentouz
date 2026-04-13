"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface Room {
  name: string;
  description?: string;
  image?: string;
  price?: string;
}

interface RoomGalleryProps {
  rooms: Room[];
  destinationSlug: string;
  gallery?: readonly string[];
  fallbackImage?: string;
}

export default function RoomGallery({
  rooms,
  destinationSlug,
  gallery,
  fallbackImage,
}: RoomGalleryProps) {
  const roomsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shouldAnimate =
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      window.matchMedia("(min-width: 1024px)").matches;
    if (!shouldAnimate || !roomsRef.current) return;

    const container = roomsRef.current;
    const cards = container.querySelectorAll(".room-card");
    gsap.fromTo(
      cards,
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
        },
      }
    );

    return () => {
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#f8f7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4 sm:mb-6 font-light">
            Accommodations
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light">
            Our <em className="italic">Suites</em>
          </h2>
        </div>

        <div ref={roomsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {rooms.map((room, index) => (
            <Link
              key={room.name}
              href={`/destinations/${destinationSlug}/living`}
              className="room-card group block bg-white"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                {/* Loading placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
                <Image
                  src={
                    room.image ||
                    gallery?.[index] ||
                    fallbackImage ||
                    ""
                  }
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8Aq7fudw7V1C7ggaZraYYj8kpZYpEHJgQMFgTk5HBANaOdzWdxbW9y0M0Us0SSMhXkFLKCR/DSlKiazK0M7B4j/9k="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* View button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-white text-brand-ink px-6 py-3 text-[10px] uppercase tracking-[0.15em]">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-light mb-2 group-hover:text-brand-gold transition-colors duration-300">
                  {room.name}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted mb-3">
                  {room.description}
                </p>
                {"price" in room && room.price && (
                  <div className="flex items-center gap-2">
                    {destinationSlug === "fernhill" ? (
                      <a
                        href="https://wa.me/918884449930"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 hover:bg-green-100 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                        Price on Request
                      </a>
                    ) : (
                      <p className="text-[11px] sm:text-xs font-display text-brand-accent">
                        {room.price}
                        <span className="text-[10px] text-brand-muted font-normal"> /night</span>
                      </p>
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* View All Rooms Link */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            href={`/destinations/${destinationSlug}/living`}
            className="inline-flex items-center gap-3 border border-brand-ink px-8 sm:px-10 py-3 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:bg-brand-ink hover:text-white transition-all duration-500 active:scale-95"
          >
            <span>View All Living Options</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
