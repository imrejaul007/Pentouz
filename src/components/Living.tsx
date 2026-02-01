"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { living, livingImage } from "@/data/content";

export default function Living() {
  return (
    <section id="living" className="bg-brand-cream section-padding overflow-hidden">
      <div className="container-wide">
        {/* Two-column layout - larger gap */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left - Image with decorative element */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src={livingImage}
                alt="Living at Pentouz"
                fill
                className="object-cover hover-scale"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative line */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-32 h-32 border border-brand-accent/30" />
          </div>

          {/* Right - Content */}
          <div className="lg:py-16">
            <p className="text-overline text-brand-accent uppercase tracking-[0.3em] mb-6">
              The Art of Living
            </p>
            <h2 className="font-display text-display-md lg:text-display-lg font-light mb-8 text-balance">
              Crafted for <em className="italic">Every Occasion</em>
            </h2>
            <div className="w-16 h-px bg-brand-accent mb-10" />
            <p className="text-body-lg text-brand-body mb-14 leading-relaxed">
              Whether you seek the energy of the city or the calm of the hills,
              our residences adapt to your rhythm. Each space tells a story of
              refined comfort and timeless elegance.
            </p>

            {/* Living cards - stacked with enhanced styling */}
            <div className="space-y-8">
              {living.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-brand-border pl-8 py-3 group hover:border-brand-accent transition-colors duration-500"
                >
                  <h3 className="text-heading-md font-display font-light mb-3 group-hover:text-brand-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-brand-body leading-relaxed">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-4 mt-14 text-label uppercase tracking-[0.15em] text-brand-ink hover:text-brand-accent transition-colors group"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
