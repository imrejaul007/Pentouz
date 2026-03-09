"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem("pentouz-preloader-seen") === "1";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Skip preloader on repeat views and for reduced-motion users to improve perceived speed.
    if (hasSeenPreloader || prefersReducedMotion) {
      return;
    }

    setIsLoading(true);
    sessionStorage.setItem("pentouz-preloader-seen", "1");

    // Start exit animation quickly to avoid blocking interaction.
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 350);

    // Complete hide after exit animation.
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 650);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#0a0a0a] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Logo */}
      <div className="mb-8 animate-fade-in">
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
      <div className="text-center animate-fade-in animation-delay-200">
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/70 mb-6">
          Curating Your Experience
        </p>

        {/* Progress bar */}
        <div className="w-48 sm:w-64 h-[1px] bg-white/10 relative overflow-hidden mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-accent origin-left animate-progress" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-white/10" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-white/10" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-white/10" />

      <style jsx>{`
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
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animate-progress {
          animation: progress 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
