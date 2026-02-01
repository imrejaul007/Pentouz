"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if mobile/touch device
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    // Mouse move handler
    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    // Hover handlers for interactive elements
    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener("mousemove", onMouseMove);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, select, textarea, [data-cursor-hover]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    // Hide cursor when leaving window
    const onMouseLeaveWindow = () => setIsVisible(false);
    const onMouseEnterWindow = () => setIsVisible(true);

    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      window.removeEventListener("resize", checkMobile);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isHovering ? "scale-150" : "scale-100"}`}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className={`w-full h-full rounded-full border transition-all duration-300 ${
            isHovering ? "border-white bg-white/10" : "border-white/50"
          }`}
        />
      </div>

      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isHovering ? "opacity-0" : "opacity-100"}`}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </div>

      {/* Hide default cursor */}
      <style jsx global>{`
        @media (min-width: 1025px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
