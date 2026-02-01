"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface MarqueeProps {
  items: string[];
  speed?: number;
  separator?: string;
  className?: string;
  direction?: "left" | "right";
}

export default function Marquee({
  items,
  speed = 30,
  separator = "✦",
  className = "",
  direction = "left",
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current || !contentRef.current) return;

    const content = contentRef.current;
    const contentWidth = content.offsetWidth / 2;

    // Duplicate content for seamless loop
    gsap.set(content, {
      x: direction === "left" ? 0 : -contentWidth,
    });

    gsap.to(content, {
      x: direction === "left" ? -contentWidth : 0,
      duration: speed,
      ease: "none",
      repeat: -1,
    });
  }, [speed, direction]);

  // Create duplicated content for seamless scrolling
  const marqueeContent = [...items, ...items];

  return (
    <div
      ref={marqueeRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
    >
      <div ref={contentRef} className="inline-flex items-center">
        {marqueeContent.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="px-6 sm:px-8 lg:px-12">{item}</span>
            <span className="text-brand-gold opacity-50">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
