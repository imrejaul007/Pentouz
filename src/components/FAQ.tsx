"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
  theme?: "light" | "dark";
}

export default function FAQ({
  items,
  title = "Frequently Asked Questions",
  subtitle,
  className = "",
  theme = "light",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isDark = theme === "dark";
  const containerBg = isDark ? "bg-brand-dark" : "bg-brand-cream";
  const textPrimary = isDark ? "text-white" : "text-brand-ink";
  const textSecondary = isDark ? "text-white/60" : "text-brand-body";
  const borderColor = isDark ? "border-white/[0.08]" : "border-brand-border/50";
  const accentColor = isDark ? "text-brand-gold" : "text-brand-accent";
  const itemBg = isDark ? "bg-white/[0.02]" : "bg-white";

  return (
    <section className={`py-20 sm:py-28 lg:py-36 ${containerBg} ${className}`}>
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {subtitle && (
              <p className={`text-[10px] font-ui uppercase tracking-[0.25em] ${accentColor} mb-4 font-medium`}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={`font-display font-light ${textPrimary}`} style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', letterSpacing: '-0.015em' }}>
                {title}
              </h2>
            )}
          </div>
        )}

        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className={`border ${borderColor} ${itemBg}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-5 text-left transition-colors duration-300 hover:bg-black/[0.02]"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`font-display font-light ${textPrimary} pr-4`} style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 ${accentColor} transition-all duration-500 ease-luxury flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-luxury ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className={`px-6 sm:px-8 pb-6 font-body text-sm sm:text-base leading-relaxed ${textSecondary}`}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className={`font-body text-sm ${textSecondary}`}>
            Still have questions?{" "}
            <a
              href="/contact"
              className={`${accentColor} hover:underline transition-colors duration-300`}
            >
              Contact our concierge team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
