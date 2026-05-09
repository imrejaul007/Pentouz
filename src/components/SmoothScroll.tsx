"use client";

import { useEffect, useRef, useState } from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

// Lightweight smooth scroll without heavy libraries
// Uses native CSS scroll-behavior for browsers that support it
export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const rafRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only enable on desktop to reduce JS overhead on mobile
    if (typeof window === "undefined") return;

    const isDesktop = window.innerWidth >= 1024;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isDesktop || prefersReducedMotion) return;

    // Dynamically import heavy libraries only when needed
    const initSmoothScroll = async () => {
      try {
        const [LenisModule, { gsap }, { ScrollTrigger }] = await Promise.all([
          import("@studio-freight/lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

        const Lenis = LenisModule.default;
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          touchMultiplier: 2,
        });

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time: number) => {
          lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        setIsEnabled(true);

        return () => {
          lenis.destroy();
          gsap.ticker.remove((time: number) => {
            lenis.raf(time * 1000);
          });
        };
      } catch (error) {
        // Fallback to native scroll if libraries fail
        console.warn("Smooth scroll initialization failed, using native scroll");
      }
    };

    const cleanup = initSmoothScroll();

    return () => {
      cleanup.then((fn) => fn?.());
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={isEnabled ? "smooth-scroll-enabled" : ""}>
      {children}
    </div>
  );
}
