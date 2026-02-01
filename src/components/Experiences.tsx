"use client";

import { ArrowRight } from "lucide-react";
import { experiences } from "@/data/content";

export default function Experiences() {
  return (
    <section id="experiences" className="section-padding bg-white">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <p className="text-overline text-brand-accent uppercase tracking-[0.3em] mb-6">
            Signature Experiences
          </p>
          <h2 className="font-display text-display-md lg:text-display-lg font-light max-w-4xl mx-auto text-balance">
            Curated <em className="italic">Moments</em>, Unforgettable Memories
          </h2>
          <div className="w-16 h-px bg-brand-accent mx-auto mt-10" />
        </div>

        {/* Experience Cards - refined grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {experiences.map((exp, i) => (
            <div key={exp.title} className="group text-center">
              {/* Number - elegant style */}
              <div className="mb-10">
                <span className="font-display text-display-md text-brand-border group-hover:text-brand-accent transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Divider line */}
              <div className="w-12 h-px bg-brand-border mx-auto mb-8 group-hover:w-20 group-hover:bg-brand-accent transition-all duration-500" />

              {/* Content */}
              <h3 className="font-display text-heading-lg font-light mb-5">
                {exp.title}
              </h3>
              <p className="text-body-md text-brand-body max-w-sm mx-auto leading-relaxed">
                {exp.copy}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 lg:mt-28">
          <a
            href="#contact"
            className="inline-flex items-center gap-4 text-label uppercase tracking-[0.15em] text-brand-ink hover:text-brand-accent transition-colors group"
          >
            <span>Speak to our concierge</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
