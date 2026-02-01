"use client";

import Image from "next/image";
import { living, livingImage } from "@/data/content";

export default function Living() {
  return (
    <section id="living" className="bg-brand-cream section-padding">
      <div className="container-luxury">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left - Image */}
          <div className="aspect-[4/5] relative overflow-hidden">
            <Image
              src={livingImage}
              alt="Living at Pentouz"
              fill
              className="object-cover hover-scale"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right - Content */}
          <div className="lg:py-12">
            <p className="text-overline text-brand-muted uppercase tracking-[0.2em] mb-4">
              Living
            </p>
            <h2 className="font-display text-display-md font-light mb-6 text-balance">
              Crafted for Every Occasion
            </h2>
            <p className="text-body-lg text-brand-body mb-10">
              Whether you seek the energy of the city or the calm of the hills,
              our residences adapt to your rhythm. Each space tells a story of
              refined comfort.
            </p>

            {/* Living cards - stacked */}
            <div className="space-y-6">
              {living.map((item, i) => (
                <div
                  key={item.title}
                  className="border-l-2 border-brand-accent pl-6 py-2 group hover:border-brand-ink transition-colors"
                >
                  <h3 className="text-heading-sm font-medium mb-2 group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-brand-body">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
