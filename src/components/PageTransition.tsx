"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Page enter animation
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    }
  }, [pathname]);

  return (
    <>
      {/* Page content */}
      <div ref={containerRef}>{children}</div>

      {/* Transition overlay (for future route change animations) */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] bg-[#0a0a0a] pointer-events-none opacity-0"
      />
    </>
  );
}
