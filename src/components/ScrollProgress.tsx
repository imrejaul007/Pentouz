"use client";
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.width = `${progress}%`;
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[2px] bg-black/5">
      <div
        ref={barRef}
        className="h-full bg-brand-gold transition-[width] duration-100 ease-out"
        style={{ width: "0%" }}
      />
    </div>
  );
}
