"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedCounterProps {
  end: number | string;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!counterRef.current || hasAnimated) return;

    const numericEnd = typeof end === "string" ? parseFloat(end) : end;
    const isFloat = !Number.isInteger(numericEnd);

    ScrollTrigger.create({
      trigger: counterRef.current,
      start: "top 85%",
      onEnter: () => {
        if (hasAnimated) return;
        setHasAnimated(true);

        const counter = { value: 0 };
        gsap.to(counter, {
          value: numericEnd,
          duration: duration,
          ease: "power2.out",
          onUpdate: () => {
            if (counterRef.current) {
              const displayValue = isFloat
                ? counter.value.toFixed(1)
                : Math.round(counter.value);
              counterRef.current.textContent = `${prefix}${displayValue}${suffix}`;
            }
          },
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [end, duration, suffix, prefix, hasAnimated]);

  return (
    <span ref={counterRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
