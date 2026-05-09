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
    <div className="relative isolate min-h-[100svh] overflow-hidden bg-[#15120f]">
      {images.map((image, index) => {
        const isFirst = index === 0;
        const shouldPreload = isFirst;

        return (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ${
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
              placeholder={isFirst ? "blur" : undefined}
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMRNBUWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAMBAQEAAAAAAAAAAAAAAAECAwAREv/aAAwDAQACEQMRAD8AzfS+o6Lp2g6fbR3NrFeXUjS3DSR8nkLHgcD4AA6xnP8pqVvU+katdS2+lQ6fLaxM0ckkUZDOVOCcHyB1nWvW9N02O9uHSxtkdpXZlES4BJPgY1p0rT7P+MWf0j/ZPtsmf/9k="
            />
          </div>
        );
      })}

      <div
        className={`absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.88)_0%,rgba(10,8,6,0.44)_38%,rgba(10,8,6,0.14)_70%,rgba(10,8,6,0.72)_100%)] ${overlayClassName}`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,160,97,0.1),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,0.08)_0%,rgba(10,8,6,0)_28%,rgba(10,8,6,0.7)_100%)]" />

      <div className="relative z-10">{children}</div>

      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-brand-gold"
                  : "w-4 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
