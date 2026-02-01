"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, contactInfo } from "@/data/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      // Calculate scroll progress for gradient fade (0 to 1 over first 200px)
      setScrollProgress(Math.min(scrollY / 200, 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      {/* Top Gradient Overlay - Fades as you scroll (Four Seasons style) */}
      <div
        className="fixed top-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-b from-black/50 via-black/25 to-transparent pointer-events-none z-40 transition-opacity duration-500"
        style={{ opacity: 1 - scrollProgress }}
      />

      {/* Main Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
        style={{
          // Floating effect on scroll
          transform: isScrolled ? "translateY(0)" : "translateY(0)",
        }}
      >
        {/* Progress line at top - Four Seasons style */}
        <div
          className={cn(
            "absolute top-0 left-0 h-[2px] bg-brand-accent transition-all duration-500",
            isScrolled ? "opacity-100" : "opacity-0"
          )}
          style={{ width: `${scrollProgress * 100}%` }}
        />

        <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-20">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              isScrolled ? "h-16 sm:h-18 lg:h-20" : "h-20 sm:h-24 lg:h-32"
            )}
          >
            {/* Logo */}
            <Link href="/" className="relative block">
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={160}
                height={45}
                className={cn(
                  "w-auto transition-all duration-500",
                  isScrolled ? "h-7 sm:h-8 lg:h-9 invert" : "h-8 sm:h-9 lg:h-10"
                )}
                priority
              />
            </Link>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center gap-12 xl:gap-14">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-[11px] uppercase tracking-[0.15em] font-light transition-all duration-300 group",
                    isScrolled
                      ? "text-brand-body hover:text-brand-ink"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                  {/* Underline animation */}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full",
                      isScrolled ? "bg-brand-ink" : "bg-white"
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-6 sm:gap-8 lg:gap-10">
              {/* Check Rates CTA - Desktop */}
              <Link
                href="/#booking"
                className={cn(
                  "hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-[10px] uppercase tracking-[0.15em] font-medium transition-all duration-300 border",
                  isScrolled
                    ? "border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white"
                    : "border-white/40 text-white hover:bg-white hover:text-brand-ink"
                )}
              >
                Check Rates
              </Link>

              {/* Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className={cn(
                  "flex items-center gap-3 transition-all duration-300",
                  isScrolled
                    ? "text-brand-ink hover:text-brand-accent"
                    : "text-white hover:text-white/70"
                )}
                aria-label="Open menu"
              >
                <span className="hidden sm:inline text-[11px] uppercase tracking-[0.15em] font-light">
                  Menu
                </span>
                <div className="relative w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                  <span
                    className={cn(
                      "w-5 h-[1px] transition-all duration-300",
                      isScrolled ? "bg-brand-ink" : "bg-white"
                    )}
                  />
                  <span
                    className={cn(
                      "w-4 h-[1px] transition-all duration-300",
                      isScrolled ? "bg-brand-ink" : "bg-white"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-[#0a0a0a] transition-all duration-700 ease-out",
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Menu Header */}
          <div className="flex justify-between items-center px-4 sm:px-6 lg:px-20 h-20 sm:h-24 lg:h-32">
            <Image
              src="/logo-white.png"
              alt="The Pentouz"
              width={160}
              height={45}
              className="h-8 sm:h-9 lg:h-10 w-auto"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-white hover:text-white/60 transition-colors duration-300"
              aria-label="Close menu"
            >
              <span className="hidden sm:inline text-[11px] uppercase tracking-[0.15em] font-light">
                Close
              </span>
              <X className="w-6 h-6" strokeWidth={1} />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-auto">
            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-24 py-8 lg:py-20">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-baseline gap-4 sm:gap-8 py-4 sm:py-5 lg:py-6 border-b border-white/5 last:border-b-0"
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? "translateY(0)" : "translateY(40px)",
                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08 + 0.15}s`,
                  }}
                >
                  <span className="text-[10px] tracking-[0.2em] text-white/20 w-6 sm:w-8 font-light">
                    0{i + 1}
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-5xl font-display font-light text-white group-hover:text-white/50 transition-colors duration-300">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Contact Info */}
            <div
              className="lg:w-[420px] px-4 sm:px-6 lg:px-20 py-8 lg:py-20 lg:flex lg:flex-col lg:justify-center lg:border-l border-white/5 bg-black/30 lg:bg-transparent"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0)" : "translateY(40px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
              }}
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-8 font-light">
                  Reservations
                </p>
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="block text-xl lg:text-2xl text-white hover:text-white/60 transition-colors duration-300 font-light mb-4"
                >
                  {contactInfo.phones[0]}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block text-base text-white/50 hover:text-white transition-colors duration-300 font-light"
                >
                  {contactInfo.email}
                </a>

                <div className="mt-12 lg:mt-16 pt-8 lg:pt-10 border-t border-white/5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-6 font-light">
                    Destinations
                  </p>
                  <div className="space-y-3">
                    <Link
                      href="/destinations/indiranagar"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm text-white/40 hover:text-white transition-colors duration-300 font-light"
                    >
                      Indiranagar, Bangalore
                    </Link>
                    <Link
                      href="/destinations/lavelle-road"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm text-white/40 hover:text-white transition-colors duration-300 font-light"
                    >
                      Lavelle Road, Bangalore
                    </Link>
                    <Link
                      href="/destinations/ooty"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm text-white/40 hover:text-white transition-colors duration-300 font-light"
                    >
                      Elk Hill, Ooty
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
