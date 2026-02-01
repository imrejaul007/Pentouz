"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { offers, offersBackgroundImage } from "@/data/content";

export default function Offers() {
  return (
    <section id="offers" className="relative py-32 lg:py-44 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={offersBackgroundImage}
          alt="Luxury ambiance"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-ink/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <p className="text-overline text-white/50 uppercase tracking-[0.3em] mb-6">
            Exclusive Offerings
          </p>
          <h2 className="font-display text-display-md lg:text-display-lg font-light text-white">
            Signature <em className="italic">Benefits</em>
          </h2>
          <div className="w-16 h-px bg-white/30 mx-auto mt-10" />
        </div>

        {/* Offer Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="glass-dark p-10 lg:p-12 text-white group hover:bg-white/15 transition-all duration-500"
            >
              {/* Badge */}
              <span className="text-overline uppercase tracking-[0.2em] text-brand-accent">
                {offer.badge}
              </span>

              {/* Title */}
              <h3 className="font-display text-heading-xl font-light mt-6 mb-4">
                {offer.title}
              </h3>

              {/* Description */}
              <p className="text-body-md text-white/60 mb-8 leading-relaxed">
                {offer.copy}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-4 text-label uppercase tracking-[0.15em] text-white/80 hover:text-white transition-colors group/link"
              >
                <span>Inquire</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
