"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { living, livingImage } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Living() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Image reveal with scale
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Parallax on scroll
      gsap.to(imageRef.current.querySelector("img"), {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Content reveal
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll("[data-reveal]");
      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="living"
      className="bg-brand-cream py-36 lg:py-48 overflow-hidden"
    >
      <div className="container-wide">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left - Image with decorative element */}
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src={livingImage}
                alt="Living at Pentouz"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative frame */}
            <div className="hidden lg:block absolute -bottom-10 -right-10 w-40 h-40 border border-brand-accent/20" />
            <div className="hidden lg:block absolute -top-10 -left-10 w-24 h-24 bg-white" />
          </div>

          {/* Right - Content */}
          <div ref={contentRef} className="lg:py-16">
            <p
              data-reveal
              className="text-[11px] text-brand-accent uppercase tracking-[0.4em] mb-8 font-light"
            >
              The Art of Living
            </p>
            <h2
              data-reveal
              className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-10 text-balance leading-[1.15]"
            >
              Crafted for{" "}
              <em className="italic font-normal">Every Occasion</em>
            </h2>
            <div
              data-reveal
              className="w-16 h-[1px] bg-brand-accent mb-12"
            />
            <p
              data-reveal
              className="text-base lg:text-lg text-brand-body mb-16 leading-relaxed font-light"
            >
              Whether you seek the energy of the city or the calm of the hills,
              our residences adapt to your rhythm. Each space tells a story of
              refined comfort and timeless elegance.
            </p>

            {/* Living cards - stacked with enhanced styling */}
            <div data-reveal className="space-y-8">
              {living.map((item, i) => (
                <div
                  key={item.title}
                  className="border-l border-brand-border pl-8 py-4 group hover:border-brand-accent transition-all duration-700"
                >
                  <h3 className="text-lg font-display font-light mb-3 group-hover:text-brand-accent transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-body leading-relaxed font-light">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              data-reveal
              href="/destinations"
              className="inline-flex items-center gap-5 mt-14 text-[11px] uppercase tracking-[0.2em] text-brand-ink hover:text-brand-accent transition-colors duration-500 group"
            >
              <span>Explore Properties</span>
              <span className="w-10 h-[1px] bg-brand-ink/30 transition-all duration-500 group-hover:w-16 group-hover:bg-brand-accent" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
