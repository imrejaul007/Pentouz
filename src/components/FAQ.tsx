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
  const containerBg = isDark ? "bg-[#161310]" : "bg-white";
  const textPrimary = isDark ? "text-white" : "text-brand-ink";
  const textSecondary = isDark ? "text-white/72" : "text-brand-body";
  const borderColor = isDark ? "border-white/10" : "border-brand-border";
  const accentColor = isDark ? "text-brand-gold" : "text-brand-accent";

  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${containerBg} ${className}`}>
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {subtitle && (
              <p className={`text-[10px] uppercase tracking-[0.28em] ${accentColor} mb-4`}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-light ${textPrimary}`}>
                {title}
              </h2>
            )}
          </div>
        )}

        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className={`border ${borderColor} ${isDark ? "bg-white/[0.03]" : "bg-[#faf8f4]"}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-black/5"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`font-display text-lg sm:text-xl font-light ${textPrimary}`}>
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 ${accentColor} transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className={`px-6 pb-6 text-sm sm:text-base leading-7 ${textSecondary}`}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className={`text-sm ${textSecondary}`}>
            Still have questions?{" "}
            <a
              href="/contact"
              className={`${accentColor} hover:underline`}
            >
              Contact our concierge team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
