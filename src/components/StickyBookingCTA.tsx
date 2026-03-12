"use client";

import Link from "next/link";
import { Calendar, Phone, MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

interface StickyBookingCTAProps {
  bookingUrl: string;
  phone: string;
  whatsapp?: string;
}

export default function StickyBookingCTA({ bookingUrl, phone, whatsapp }: StickyBookingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      if (scrollY > heroHeight * 0.3 && !isClosed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClosed]);

  if (!isVisible) return null;

  const whatsappNumber = whatsapp || phone.replace(/[\s\(\)]/g, "");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-brand-gold/20 shadow-2xl transition-all duration-500">
      {/* Close button */}
      <button
        onClick={() => setIsClosed(true)}
        className="absolute -top-3 left-4 p-2 text-white/60 hover:text-white transition-colors"
        aria-label="Close booking bar"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="max-w-container-xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 sm:gap-8">
        {/* Book Now */}
        <Link
          href={bookingUrl}
          className="group flex items-center gap-3 bg-brand-gold text-brand-primary px-6 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 font-light"
        >
          <Calendar className="w-5 h-5" />
          <span>Book Now</span>
        </Link>

        {/* Call */}
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="group flex items-center gap-3 border border-brand-border px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-brand-ink hover:border-brand-gold hover:text-brand-accent transition-all duration-300 font-light"
        >
          <Phone className="w-5 h-5" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-3 bg-green-600 text-white px-6 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-green-700 transition-all duration-300 font-light"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
