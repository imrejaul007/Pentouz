"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Property = {
  name: string;
  slug: string;
  bookingUrl: string;
  image: string;
  type: "booking" | "enquiry" | "pending";
};

const properties: Property[] = [
  {
    name: "Lavelle Road",
    slug: "lavelle-road",
    bookingUrl: "https://bookmystay.io/rooms/37853",
    image: "/lavelle-road/all/facade_1.jpg",
    type: "booking",
  },
  {
    name: "Indiranagar",
    slug: "indiranagar",
    bookingUrl: "https://hotels.eglobe-solutions.com/pentouz/booking/hotels/the-pentouz-bangalore",
    image: "/indiranagar/all/04._living_room_05._living_room.jpg",
    type: "booking",
  },
  {
    name: "Ooty",
    slug: "ooty",
    bookingUrl: "https://pentouz.com/the-pentouz-windsor-heights-ooty/",
    image: "/ooty/all/01._facade_1.jpeg",
    type: "enquiry",
  },
  {
    name: "Pentouz Hillside",
    slug: "pentouz-hillside",
    bookingUrl: "https://wa.me/916366770369",
    image: "/fernhill/all/03_exterior.jpg",
    type: "pending",
  },
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = "";
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 pointer-events-auto",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 z-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg bg-[#faf7f2] overflow-hidden pointer-events-auto isolate">
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 border-b border-[#e5dfd6]">
          <div>
            <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#8b7355]">
              Book Your Stay
            </p>
            <h2 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1a1814] mt-1">
              Choose your property
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-[#6b6358] hover:text-[#1a1814] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Properties */}
        <div className="p-4 sm:p-5 space-y-3 max-h-[60vh] overflow-y-auto">
          {properties.map((property) => (
            <a
              key={property.slug}
              href={property.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white border border-[#e5dfd6] p-3 sm:p-4 transition-all duration-300 hover:border-[#c3a061] hover:shadow-[0_4px_20px_rgba(18,15,12,0.08)] cursor-pointer pointer-events-auto block"
            >
              {/* Image */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="80px"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl font-light text-[#1a1814]">
                  {property.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.1em] text-[#8b7355] mt-0.5">
                  {property.type === "booking" && "Book Direct"}
                  {property.type === "enquiry" && "Enquire Now"}
                  {property.type === "pending" && "Coming Soon"}
                </p>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0">
                {property.type === "booking" && (
                  <div className="w-9 h-9 rounded-full bg-[#0f0e0c] flex items-center justify-center group-hover:bg-[#c3a061] transition-colors duration-300">
                    <ExternalLink className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </div>
                )}
                {property.type === "enquiry" && (
                  <div className="w-9 h-9 rounded-full bg-[#c3a061] flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </div>
                )}
                {property.type === "pending" && (
                  <div className="w-9 h-9 rounded-full bg-[#e5dfd6] flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-[#6b6358]" strokeWidth={1.5} />
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-4 border-t border-[#e5dfd6]">
          <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] text-[#6b6358] text-center">
            Need help?{" "}
            <a
              href="https://wa.me/916366770369"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c3a061] hover:underline"
            >
              Contact our concierge
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
