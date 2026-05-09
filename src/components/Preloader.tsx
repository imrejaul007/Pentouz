"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === "undefined") return true;
    const hasSeenPreloader = sessionStorage.getItem("pentouz-preloader-seen") === "1";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !(hasSeenPreloader || prefersReducedMotion);
  });
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    sessionStorage.setItem("pentouz-preloader-seen", "1");

    // Shorter preloader duration for better perceived performance
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 250);

    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, [isLoading]);

  // Don't render preloader after it's done
  if (!isLoading && !isExiting) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#0a0a0a] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      {/* Logo - explicitly sized to prevent CLS */}
      <div className="mb-8 animate-fade-in">
        <Image
          src="/logo-white.png"
          alt="The Pentouz"
          width={200}
          height={60}
          priority
          quality={75}
          className="h-12 sm:h-16 w-auto"
          style={{ contain: "content" }}
        />
      </div>

      {/* Loading text */}
      <div className="text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/70 mb-6">
          Curating Your Experience
        </p>

        {/* Progress bar - pure CSS, no JS */}
        <div className="w-48 sm:w-64 h-[1px] bg-white/10 relative overflow-hidden mb-4">
          <div
            className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-accent origin-left animate-progress"
            style={{
              animation: "progress 0.6s ease-out forwards"
            }}
          />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-white/10" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-white/10" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-white/10" />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
