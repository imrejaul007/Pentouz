"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, contactInfo } from "@/data/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          isScrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-brand-border/30"
            : "bg-transparent"
        )}
      >
        <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-32">
            {/* Logo */}
            <Link href="/" className="relative block">
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={160}
                height={45}
                className={cn(
                  "h-8 lg:h-10 w-auto transition-all duration-700",
                  isScrolled ? "invert" : ""
                )}
                priority
              />
            </Link>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center gap-14">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[11px] uppercase tracking-[0.15em] transition-all duration-500 hover:opacity-40 font-light",
                    isScrolled ? "text-brand-body" : "text-white/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-8 lg:gap-12">
              {/* Check Rates CTA - Desktop */}
              <Link
                href="/#booking"
                className={cn(
                  "hidden lg:inline-block text-[11px] uppercase tracking-[0.15em] transition-all duration-500 hover:opacity-40 font-light",
                  isScrolled ? "text-brand-ink" : "text-white"
                )}
              >
                Check Rates
              </Link>

              {/* Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className={cn(
                  "flex items-center gap-4 transition-all duration-500 hover:opacity-40",
                  isScrolled ? "text-brand-ink" : "text-white"
                )}
                aria-label="Open menu"
              >
                <span className="hidden sm:inline text-[11px] uppercase tracking-[0.15em] font-light">Menu</span>
                <Menu className="w-5 h-5" strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-[#0a0a0a] transition-all duration-1000 ease-out",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Menu Header */}
          <div className="flex justify-between items-center px-4 sm:px-6 lg:px-20 h-16 sm:h-20 lg:h-32">
            <Image
              src="/logo-white.png"
              alt="The Pentouz"
              width={160}
              height={45}
              className="h-8 lg:h-10 w-auto"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-white hover:opacity-40 transition-opacity duration-500"
              aria-label="Close menu"
            >
              <span className="hidden sm:inline text-[11px] uppercase tracking-[0.15em] font-light">Close</span>
              <X className="w-5 h-5" strokeWidth={1} />
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
                  className="group flex items-baseline gap-4 sm:gap-8 py-4 sm:py-5 lg:py-7 border-b border-white/5 last:border-b-0"
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1 + 0.2}s`,
                  }}
                >
                  <span className="text-[10px] tracking-[0.2em] text-white/20 w-6 sm:w-8 font-light">
                    0{i + 1}
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-5xl font-display font-light text-white group-hover:opacity-40 transition-opacity duration-500">
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
                transform: isMenuOpen ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
              }}
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-8 font-light">
                  Reservations
                </p>
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="block text-xl lg:text-2xl text-white hover:opacity-40 transition-opacity duration-500 font-light mb-4"
                >
                  {contactInfo.phones[0]}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block text-base text-white/50 hover:text-white transition-colors duration-500 font-light"
                >
                  {contactInfo.email}
                </a>

                <div className="mt-16 pt-10 border-t border-white/5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-6 font-light">
                    Destinations
                  </p>
                  <div className="space-y-3">
                    <Link
                      href="/destinations/indiranagar"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm text-white/40 hover:text-white transition-colors duration-500 font-light"
                    >
                      Indiranagar, Bangalore
                    </Link>
                    <Link
                      href="/destinations/lavelle-road"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm text-white/40 hover:text-white transition-colors duration-500 font-light"
                    >
                      Lavelle Road, Bangalore
                    </Link>
                    <Link
                      href="/destinations/ooty"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm text-white/40 hover:text-white transition-colors duration-500 font-light"
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
