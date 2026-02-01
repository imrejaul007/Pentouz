"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, contactInfo } from "@/data/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-brand-borderLight shadow-subtle"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a
              href="/"
              className={cn(
                "text-xl tracking-[0.2em] font-light transition-colors duration-300",
                isScrolled ? "text-brand-ink" : "text-white"
              )}
            >
              <span className="font-medium">THE</span> PENTOUZ
            </a>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.slice(0, 4).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm tracking-[0.05em] link-underline transition-colors duration-300",
                    isScrolled
                      ? "text-brand-body hover:text-brand-ink"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
              {/* Check Rates CTA - Desktop */}
              <a
                href="#booking"
                className={cn(
                  "hidden md:block px-6 py-3 text-sm tracking-[0.1em] uppercase transition-all duration-300 border",
                  isScrolled
                    ? "border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-brand-ink"
                )}
              >
                Check Rates
              </a>

              {/* Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
                aria-label="Open menu"
              >
                <span
                  className={cn(
                    "w-6 h-px transition-all duration-300 group-hover:w-5",
                    isScrolled ? "bg-brand-ink" : "bg-white"
                  )}
                />
                <span
                  className={cn(
                    "w-6 h-px transition-all duration-300 group-hover:w-7",
                    isScrolled ? "bg-brand-ink" : "bg-white"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-white transition-transform duration-500 ease-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Menu Header */}
          <div className="flex justify-between items-center px-6 lg:px-12 h-20 lg:h-24 border-b border-brand-borderLight">
            <span className="text-sm tracking-[0.2em] uppercase text-brand-muted">
              Menu
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center hover:rotate-90 transition-transform duration-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-brand-ink" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 flex flex-col lg:flex-row">
            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center px-6 lg:px-24 py-12">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center gap-6 py-4 border-b border-brand-borderLight"
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? "translateX(0)" : "translateX(40px)",
                    transition: `all 0.5s ease ${i * 0.08 + 0.2}s`,
                  }}
                >
                  <span className="text-sm text-brand-muted w-8">
                    0{i + 1}
                  </span>
                  <span className="text-3xl lg:text-5xl font-display font-light text-brand-ink group-hover:tracking-wider transition-all duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>

            {/* Contact Info - Right side on desktop */}
            <div className="lg:w-80 px-6 lg:px-12 py-8 lg:py-0 lg:flex lg:flex-col lg:justify-center border-t lg:border-t-0 lg:border-l border-brand-borderLight bg-brand-cream lg:bg-transparent">
              <div
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.5s ease 0.5s",
                }}
              >
                <p className="text-overline uppercase tracking-[0.2em] text-brand-muted mb-4">
                  Reservations
                </p>
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="block text-heading-lg text-brand-ink hover:text-brand-accent transition-colors mb-2"
                >
                  {contactInfo.phones[0]}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block text-body-md text-brand-body hover:text-brand-ink transition-colors"
                >
                  {contactInfo.email}
                </a>

                <div className="mt-8 pt-8 border-t border-brand-border">
                  <p className="text-overline uppercase tracking-[0.2em] text-brand-muted mb-4">
                    Address
                  </p>
                  <p className="text-body-sm text-brand-body">
                    {contactInfo.address}
                    <br />
                    {contactInfo.city}
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
