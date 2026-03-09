"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "default" | "text" | "circular" | "card" | "image";
}

export function Skeleton({ className, variant = "default" }: SkeletonProps) {
  const baseClasses = "animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]";

  const variantClasses = {
    default: "rounded",
    text: "rounded h-4",
    circular: "rounded-full",
    card: "rounded-lg",
    image: "rounded-none",
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        "animate-shimmer",
        className
      )}
    />
  );
}

// Skeleton for property cards
export function PropertyCardSkeleton() {
  return (
    <div className="group">
      <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
        <Skeleton variant="image" className="w-full h-full" />
      </div>
      <div className="pt-6 space-y-3">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}

// Skeleton for gallery images
export function GalleryImageSkeleton({ large = false }: { large?: boolean }) {
  return (
    <div className={cn(
      "relative overflow-hidden bg-gray-100",
      large ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"
    )}>
      <Skeleton variant="image" className="w-full h-full" />
    </div>
  );
}

// Skeleton for hero section
export function HeroSkeleton() {
  return (
    <div className="absolute inset-0 bg-brand-ink flex flex-col items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] animate-pulse" />

      {/* Decorative elements */}
      <div className="relative z-10 text-center space-y-6">
        <Skeleton className="h-3 w-40 mx-auto bg-white/10" />
        <Skeleton className="h-12 w-80 mx-auto bg-white/10" />
        <Skeleton className="h-12 w-64 mx-auto bg-white/10" />
        <div className="w-16 h-px bg-white/20 mx-auto my-8" />
        <Skeleton className="h-4 w-72 mx-auto bg-white/10" />
      </div>

      {/* Subtle loading indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse" />
          <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: "150ms" }} />
          <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}

// Skeleton for stat numbers
export function StatSkeleton() {
  return (
    <div className="text-center sm:text-left space-y-2">
      <Skeleton className="h-8 w-20 bg-white/10 mx-auto sm:mx-0" />
      <Skeleton className="h-3 w-24 bg-white/10 mx-auto sm:mx-0" />
    </div>
  );
}

// Image with blur placeholder
export function ImageWithPlaceholder({
  src,
  alt,
  fill = false,
  className = "",
  sizes,
  priority = false,
  onLoad,
}: {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  onLoad?: () => void;
}) {
  return (
    <div className="relative w-full h-full">
      {/* Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse" />

      {/* Actual image */}
      {/* Note: Using Next/Image with placeholder blur would be ideal here */}
    </div>
  );
}
