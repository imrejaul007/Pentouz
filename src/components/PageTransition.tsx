"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!overlay || !content) return;

    // Skip on initial mount
    if (prevPathname.current === pathname && pathname === "/") return;
    if (prevPathname.current === pathname) {
      prevPathname.current = pathname;
      return;
    }

    const direction = pathname > prevPathname.current ? 1 : -1;
    prevPathname.current = pathname;

    // Reset overlay
    gsap.set(overlay, { scaleX: 0, transformOrigin: direction > 0 ? "left center" : "right center" });
    gsap.set(content, { opacity: 0, y: 15 });

    // Step 1: Overlay slides in
    gsap.to(overlay, {
      scaleX: 1,
      duration: 0.55,
      ease: "power3.inOut",
    });

    // Step 2: Content fades in after overlay covers
    gsap.to(content, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
      delay: 0.35,
    });

    // Step 3: Overlay slides out
    gsap.to(overlay, {
      scaleX: 0,
      transformOrigin: direction > 0 ? "right center" : "left center",
      duration: 0.5,
      ease: "power3.inOut",
      delay: 0.5,
    });
  }, [pathname]);

  return (
    <>
      {/* Curtain overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9998] bg-[#11100f] pointer-events-none"
        style={{ transform: "scaleX(0)" }}
      />

      {/* Page content */}
      <div ref={contentRef}>
        {children}
      </div>
    </>
  );
}
