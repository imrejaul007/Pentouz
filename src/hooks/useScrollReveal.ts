"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealOptions {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
  stagger?: number;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const {
      y = 60,
      x = 0,
      opacity = 0,
      duration = 1.2,
      delay = 0,
      ease = "power3.out",
      start = "top 85%",
    } = options;

    gsap.set(element, { y, x, opacity });

    const animation = gsap.to(element, {
      y: 0,
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options]);

  return ref;
}

export function useStaggerReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const {
      y = 50,
      opacity = 0,
      duration = 1,
      delay = 0,
      ease = "power3.out",
      start = "top 80%",
      stagger = 0.15,
    } = options;

    const children = container.children;

    gsap.set(children, { y, opacity });

    const animation = gsap.to(children, {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [options]);

  return containerRef;
}

// Initialize scroll animations for elements with data attributes
export function initScrollAnimations() {
  if (typeof window === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  // Fade up animations
  gsap.utils.toArray("[data-reveal='fade-up']").forEach((element: any) => {
    gsap.from(element, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Fade in animations
  gsap.utils.toArray("[data-reveal='fade']").forEach((element: any) => {
    gsap.from(element, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Scale animations
  gsap.utils.toArray("[data-reveal='scale']").forEach((element: any) => {
    gsap.from(element, {
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Stagger animations for children
  gsap.utils.toArray("[data-reveal='stagger']").forEach((container: any) => {
    const children = container.children;
    gsap.from(children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  // Line reveal animations
  gsap.utils.toArray("[data-reveal='line']").forEach((element: any) => {
    gsap.from(element, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });
}
