"use client";

import { experiences } from "@/data/content";

export default function Experiences() {
  return (
    <section id="experiences" className="section-padding">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-overline text-brand-muted uppercase tracking-[0.2em] mb-4">
            Experiences
          </p>
          <h2 className="font-display text-display-md font-light max-w-3xl mx-auto text-balance">
            Curated Moments, Unforgettable Memories
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {experiences.map((exp, i) => (
            <div key={exp.title} className="group text-center">
              {/* Number circle */}
              <div className="w-16 h-16 mx-auto mb-6 border border-brand-border rounded-full flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-cream transition-all duration-300">
                <span className="font-display text-2xl text-brand-muted group-hover:text-brand-accent transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-heading-md font-light mb-4">
                {exp.title}
              </h3>
              <p className="text-body-sm text-brand-body max-w-xs mx-auto">
                {exp.copy}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm tracking-[0.1em] uppercase text-brand-body hover:text-brand-ink transition-colors group"
          >
            <span>Speak to our concierge</span>
            <span className="w-8 h-px bg-brand-border group-hover:w-12 group-hover:bg-brand-ink transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
