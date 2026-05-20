"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type HeroSliderProps = {
  images: string[];
  alt: string;
  children?: React.ReactNode;
  overlayClassName?: string;
};

export default function HeroSlider({
  images,
  alt,
  children,
  overlayClassName = "",
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (images.length === 0) return;
    const firstImage = new window.Image();
    firstImage.src = images[0];
    firstImage.onload = () => setIsLoaded(true);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images]);

  useEffect(() => {
    if (!isLoaded || images.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length, isLoaded]);

  if (images.length === 0) return null;

  return (
    <div className="relative isolate min-h-[100svh] overflow-hidden bg-[#0f0e0c]">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`${alt} - Image ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            quality={85}
            className="object-cover"
            fetchPriority={index === 0 ? "high" : "low"}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className={`absolute inset-0 bg-gradient-to-r from-[#0f0e0c]/80 via-[#0f0e0c]/35 to-[#0f0e0c]/10 ${overlayClassName}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/70 via-transparent to-[#0f0e0c]/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f0e0c]/20" />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Navigation dots */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-[2px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                index === currentIndex
                  ? "w-8 bg-[#c3a061]"
                  : "w-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
