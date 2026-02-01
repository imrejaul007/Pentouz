"use client";

import Image from "next/image";
import { offers, offersBackgroundImage } from "@/data/content";

export default function Offers() {
  return (
    <section id="offers" className="relative section-padding overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={offersBackgroundImage}
          alt="Luxury ambiance"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-ink/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-overline text-white/60 uppercase tracking-[0.2em] mb-4">
            Special Offers
          </p>
          <h2 className="font-display text-display-md font-light text-white">
            Exclusive Benefits
          </h2>
        </div>

        {/* Offer Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="glass p-8 text-white group hover:bg-white/20 transition-all duration-300"
            >
              {/* Badge */}
              <span className="text-caption uppercase tracking-[0.15em] text-white/60">
                {offer.badge}
              </span>

              {/* Title */}
              <h3 className="font-display text-heading-lg font-light mt-4 mb-3">
                {offer.title}
              </h3>

              {/* Description */}
              <p className="text-body-sm text-white/70 mb-6">{offer.copy}</p>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-caption uppercase tracking-[0.1em]"
              >
                <span>Learn More</span>
                <span className="w-6 h-px bg-white transition-all duration-300 group-hover:w-10" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
