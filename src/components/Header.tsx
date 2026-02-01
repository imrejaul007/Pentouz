"use client";

import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, contactInfo } from "@/data/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-600",
          isScrolled
            ? "bg-white border-b border-brand-border/50"
            : "bg-transparent"
        )}
      >
        <div className="max-w-container-2xl mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-20 lg:h-28">
            {/* Logo */}
            <a
              href="/"
              className={cn(
                "text-base lg:text-lg tracking-[0.35em] font-light uppercase transition-colors duration-500",
                isScrolled ? "text-brand-ink" : "text-white"
              )}
            >
              The Pentouz
            </a>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center gap-12">
              {navLinks.slice(0, 4).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-label uppercase tracking-[0.12em] transition-all duration-300 hover:opacity-50",
                    isScrolled ? "text-brand-body" : "text-white/90"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-6 lg:gap-10">
              {/* Check Rates CTA - Desktop */}
              <a
                href="#booking"
                className={cn(
                  "hidden lg:inline-block text-label uppercase tracking-[0.12em] transition-all duration-300 hover:opacity-50",
                  isScrolled ? "text-brand-ink" : "text-white"
                )}
              >
                Check Rates
              </a>

              {/* Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className={cn(
                  "flex items-center gap-3 transition-colors duration-300 hover:opacity-50",
                  isScrolled ? "text-brand-ink" : "text-white"
                )}
                aria-label="Open menu"
              >
                <span className="hidden sm:inline text-label uppercase tracking-[0.12em]">Menu</span>
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu Overlay - Dark like Four Seasons */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-brand-ink transition-all duration-700 ease-out",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Menu Header */}
          <div className="flex justify-between items-center px-6 lg:px-16 h-20 lg:h-28">
            <span className="text-base lg:text-lg tracking-[0.35em] font-light uppercase text-white">
              The Pentouz
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 text-white hover:opacity-50 transition-opacity"
              aria-label="Close menu"
            >
              <span className="hidden sm:inline text-label uppercase tracking-[0.12em]">Close</span>
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-auto">
            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center px-6 lg:px-20 py-8 lg:py-16">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-baseline gap-6 py-4 lg:py-6 border-b border-white/10 last:border-b-0"
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.5s ease ${i * 0.08 + 0.15}s`,
                  }}
                >
                  <span className="text-micro text-white/30 w-8">
                    0{i + 1}
                  </span>
                  <span className="text-display-sm lg:text-display-md font-display font-light text-white group-hover:opacity-50 transition-opacity duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>

            {/* Contact Info */}
            <div
              className="lg:w-[400px] px-6 lg:px-16 py-8 lg:py-16 lg:flex lg:flex-col lg:justify-center lg:border-l border-white/10 bg-black/20 lg:bg-transparent"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.5s ease 0.5s",
              }}
            >
              <div>
                <p className="text-overline uppercase text-white/30 mb-6">
                  Reservations
                </p>
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="block text-heading-lg text-white hover:opacity-50 transition-opacity mb-3"
                >
                  {contactInfo.phones[0]}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block text-body-md text-white/60 hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-overline uppercase text-white/30 mb-4">
                    Destinations
                  </p>
                  <p className="text-body-sm text-white/50">
                    Indiranagar, Bangalore<br />
                    Lavelle Road, Bangalore<br />
                    Elk Hill, Ooty
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
