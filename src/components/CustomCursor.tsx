"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

type CursorState = "default" | "link" | "image" | "text" | "click";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  // Magnetic button effect — buttons with magnetic-btn class pull toward cursor within 60px
  const applyMagneticEffect = useCallback(() => {
    const magneticBtns = document.querySelectorAll(".magnetic-btn");
    magneticBtns.forEach((btn) => {
      const el = btn as HTMLElement;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = mousePos.current.x - centerX;
      const dy = mousePos.current.y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 60) {
        const strength = (1 - dist / 60) * 0.4;
        const offsetX = dx * strength;
        const offsetY = dy * strength;
        gsap.to(el, {
          x: offsetX,
          y: offsetY,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      }
    });
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    if (isMobile) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    // Smooth ring follow with RAF
    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.12);
      gsap.set(ring, { x: ringPos.current.x, y: ringPos.current.y });
      gsap.set(dot, { x: mousePos.current.x, y: mousePos.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    // Mouse tracking
    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
      applyMagneticEffect();
    };

    // State detection
    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".magnetic-btn")) {
        setState("link");
      } else if (target.matches('a, button, [role="button"], input, select, textarea, label, [data-cursor="link"]')) {
        setState("link");
      } else if (target.matches('img, [data-cursor="image"], .group, [data-cursor="image"] *')) {
        setState("image");
      } else if (target.matches("p, h1, h2, h3, h4, h5, h6, span, [data-cursor='text']")) {
        setState("text");
      }
    };

    const onLeave = () => setState("default");
    const onMouseLeaveWin = () => setVisible(false);
    const onMouseEnterWin = () => setVisible(true);

    // Click pulse
    const onMouseDown = () => {
      setState("click");
      gsap.to(ring, { scale: 0.8, duration: 0.1, ease: "power2.out" });
      gsap.to(ring, { scale: 1.3, duration: 0.3, ease: "elastic.out(1, 0.5)", delay: 0.1 });
    };
    const onMouseUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.2 });
      setState("default");
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onMouseEnterWin);
    document.addEventListener("mouseleave", onMouseLeaveWin);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onMouseEnterWin);
      document.removeEventListener("mouseleave", onMouseLeaveWin);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile, applyMagneticEffect]);

  if (isMobile) return null;

  const isText = state === "text";
  const isImage = state === "image";
  const isClick = state === "click";
  const isLink = state === "link";

  return (
    <>
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-all duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        } ${isText ? "opacity-0" : ""}`}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className={`rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
            isImage
              ? "w-12 h-12 border-brand-gold/60"
              : isLink
              ? "w-14 h-14 border-brand-gold bg-brand-gold/10"
              : isClick
              ? "w-12 h-12 border-brand-gold bg-brand-gold/20"
              : "w-10 h-10 border-white/50"
          }`}
        >
          {/* Crosshair for images */}
          {isImage && (
            <div className="relative w-5 h-5">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-gold/70 -translate-x-1/2" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-brand-gold/70 -translate-y-1/2" />
            </div>
          )}
        </div>
      </div>

      {/* Dot - hidden on text/over elements */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        } ${isText ? "opacity-0" : ""}`}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 ${
            isImage ? "w-0 h-0" : "w-1.5 h-1.5"
          }`}
        />
      </div>
    </>
  );
}
