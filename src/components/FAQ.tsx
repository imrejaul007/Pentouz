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
  const containerBg = isDark ? "bg-[#0f0e0c]" : "bg-white";
  const textPrimary = isDark ? "text-white" : "text-[#1a1814]";
  const textSecondary = isDark ? "text-white/60" : "text-[#4a4a44]";
  const borderColor = isDark ? "border-white/[0.08]" : "border-[#e5dfd6]";
  const accentColor = isDark ? "text-[#c3a061]" : "text-[#8b7355]";
  const itemBg = isDark ? "bg-white/[0.02]" : "bg-[#faf7f2]";

  return (
    <section className={`py-20 lg:py-32 ${containerBg} ${className}`}>
      <div className="max-w-[900px] mx-auto px-6 sm:px-10">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {subtitle && (
              <p className={`text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] ${accentColor} mb-3 font-medium`}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={`font-['Cormorant_Garamond',serif] font-light ${textPrimary}`} style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.01em' }}>
                {title}
              </h2>
            )}
          </div>
        )}

        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className={`border ${borderColor} ${itemBg}`}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-6 px-6 sm:px-8 py-5 text-left transition-colors duration-300 hover:bg-black/[0.02]"
                aria-expanded={openIndex === index}
              >
                <span className={`font-['Cormorant_Garamond',serif] font-light ${textPrimary} pr-4`} style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 ${accentColor} transition-all duration-500 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className={`px-6 sm:px-8 pb-6 font-['Lora',serif] text-sm sm:text-base leading-relaxed ${textSecondary}`}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className={`font-['Lora',serif] text-sm ${textSecondary}`}>
            Still have questions?{" "}
            <a href="/contact" className={`${accentColor} hover:underline transition-colors duration-300`}>
              Contact our concierge
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
