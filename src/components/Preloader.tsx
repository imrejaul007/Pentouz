"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Animate loading counter
    const counter = { value: 0 };
    gsap.to(counter, {
      value: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value).toString();
        }
      },
    });

    // Animate progress line
    gsap.to(lineRef.current, {
      scaleX: 1,
      duration: 2.5,
      ease: "power2.inOut",
    });

    // Logo animation
    const tl = gsap.timeline();

    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    tl.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );

    // After loading complete, reveal the page
    const revealTimer = setTimeout(() => {
      gsap.to(preloaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => setIsLoading(false),
      });
    }, 2800);

    return () => clearTimeout(revealTimer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[10000] bg-[#0a0a0a] flex flex-col items-center justify-center"
    >
      {/* Logo */}
      <div ref={logoRef} className="mb-8">
        <Image
          src="/logo-white.png"
          alt="The Pentouz"
          width={200}
          height={60}
          className="h-12 sm:h-16 w-auto"
          priority
        />
      </div>

      {/* Loading text */}
      <div ref={textRef} className="text-center">
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6">
          Curating Your Experience
        </p>

        {/* Progress bar */}
        <div className="w-48 sm:w-64 h-[1px] bg-white/10 relative overflow-hidden mb-4">
          <div
            ref={lineRef}
            className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-accent origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* Counter */}
        <p className="text-[11px] sm:text-[12px] tracking-[0.2em] text-white/50 font-light">
          <span ref={counterRef}>0</span>
          <span className="text-brand-gold">%</span>
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-white/10" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-white/10" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-white/10" />
    </div>
  );
}
