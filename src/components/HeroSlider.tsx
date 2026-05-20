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

  // Preload first image before starting slider
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
    // Only start auto-rotation after first image is loaded
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
    <div className="relative isolate min-h-[100svh] overflow-hidden bg-brand-dark">
      {images.map((image, index) => {
        const isFirst = index === 0;
        const shouldPreload = isFirst;

        return (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-luxury ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`${alt} - Image ${index + 1}`}
              fill
              priority={shouldPreload}
              sizes="100vw"
              quality={85}
              className="object-cover"
              fetchPriority={isFirst ? "high" : "low"}
              loading={isFirst ? "eager" : "lazy"}
            />
          </div>
        );
      })}

      {/* Layered overlay gradients - refined for premium feel */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/40 to-brand-dark/15 ${overlayClassName}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-brand-dark/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-transparent" />

      {/* Subtle gold accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(195,160,97,0.08),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Navigation dots - refined styling */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-[3px] rounded-full transition-all duration-500 ease-luxury ${
                index === currentIndex
                  ? "w-8 bg-brand-gold"
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
