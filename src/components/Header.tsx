"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu, Search, Phone, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { contactInfo, destinations } from "@/data/content";

const editorialNav = [
  { label: "Destinations", href: "/destinations" },
  { label: "Travel", href: "/travel" },
  { label: "Experiences", href: "/experiences" },
  { label: "Stories", href: "/stories" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
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

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Cinematic Progress Line */}
      <div
        className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-brand-gold/20 via-brand-gold to-brand-gold z-50 transition-transform duration-300"
        style={{ transform: `translateX(${(1 - scrollProgress) * 100}%)` }}
      />

      {/* Glassmorphism Header Background */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-brand-border"
            : "bg-transparent"
        )}
      >
        <div
          className={cn(
            "max-w-container-2xl mx-auto px-6 lg:px-16 h-20 flex items-center justify-between",
            isScrolled ? "py-4" : "py-6"
          )}
        >
          {/* Left - Logo & Quick Links */}
          <div className="flex items-center gap-8 lg:gap-12">
            <Link href="/" className="relative group" suppressHydrationWarning>
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={140}
                height={40}
                className="h-8 sm:h-10 lg:h-12 w-auto transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute -bottom-3 left-1/2 w-0 h-0.5 bg-brand-gold transition-all duration-500 group-hover:w-full" />
            </Link>

            {/* Desktop Quick Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {editorialNav.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-[10px] uppercase tracking-[0.2em] font-light transition-all duration-500 group",
                    isActive(link.href)
                      ? "text-brand-ink"
                      : isScrolled
                        ? "text-brand-muted hover:text-brand-gold"
                        : "text-white/80 hover:text-brand-gold"
                  )}
                  suppressHydrationWarning
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-2 left-1/2 h-[1px] w-0 bg-brand-gold transition-all duration-500 group-hover:w-full",
                    isActive(link.href) ? "w-full" : "w-0"
                  )} suppressHydrationWarning />
                </Link>
              ))}
            </nav>
          </div>

          {/* Center - Booking Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className={cn(
                "group relative inline-flex items-center gap-3 px-5 py-2.5 transition-all duration-500",
                isScrolled
                  ? "border border-brand-border bg-white text-brand-ink hover:border-brand-gold hover:text-brand-gold"
                  : "border border-white/30 bg-white/10 text-white hover:border-brand-gold hover:text-white"
              )}
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-[0.15em]">{contactInfo.phones[0]}</span>
              <span className={cn(
                "absolute bottom-0 left-0 h-[1px] bg-brand-gold transition-all duration-500",
                isScrolled ? "w-0 group-hover:w-full" : "w-full"
              )} />
            </a>
            <Link
              href="/contact"
              className={cn(
                "group relative inline-flex items-center gap-3 px-5 py-2.5 transition-all duration-500",
                isScrolled
                  ? "border border-brand-border bg-white text-brand-ink hover:border-brand-gold hover:text-brand-gold"
                  : "border border-white/30 bg-white/10 text-white hover:border-brand-gold hover:text-white"
              )}
            >
              <MapPin className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-[0.15em]">Book Now</span>
              <span className={cn(
                "absolute bottom-0 left-0 h-[1px] bg-brand-gold transition-all duration-500",
                isScrolled ? "w-0 group-hover:w-full" : "w-full"
              )} />
            </Link>
          </div>

          {/* Right - Navigation & Menu */}
          <div className="flex items-center gap-8">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {editorialNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-[10px] uppercase tracking-[0.2em] font-light transition-all duration-500 group",
                    isActive(link.href)
                      ? "text-brand-gold"
                      : isScrolled
                        ? "text-brand-muted hover:text-brand-gold"
                        : "text-white/80 hover:text-brand-gold"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-2 left-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full",
                    isActive(link.href) ? "w-full" : "w-0"
                  )} />
                </Link>
              ))}
            </nav>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={cn(
                "group relative flex items-center gap-3 px-4 py-2.5 transition-all duration-500",
                isScrolled
                  ? "text-brand-ink hover:text-brand-gold"
                  : "text-white hover:text-white/80"
              )}
              aria-label="Open menu"
            >
              <span className="hidden sm:inline text-[10px] uppercase tracking-[0.15em] font-light">Menu</span>
              <div className="relative w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                <span className="w-6 h-[1px] bg-current transition-all duration-300 group-hover:w-4" />
                <span className="w-[1px] h-6 bg-current transition-all duration-300 group-hover:translate-y-1.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Progress Line Bottom Accent */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-brand-gold/30 via-brand-gold/10 to-transparent" />
        )}
      </header>

      {/* Fullscreen Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] transition-all duration-700 ease-out overflow-hidden",
          isMenuOpen
            ? "opacity-100 visible bg-brand-ink/95"
            : "opacity-0 invisible pointer-events-none bg-transparent"
        )}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Menu Header */}
          <div className="flex justify-between items-center px-6 lg:px-12 py-6 lg:py-8 border-b border-white/10">
            <Link href="/" className="relative group" suppressHydrationWarning>
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={140}
                height={40}
                className="h-8 sm:h-10 lg:h-12 w-auto transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-white/80 hover:text-brand-gold transition-colors duration-300"
              aria-label="Close menu"
            >
              <span className="text-[10px] uppercase tracking-[0.15em] font-light">Close</span>
              <div className="relative w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                <span className="w-6 h-[1px] bg-current transition-all duration-300 hover:rotate-45" />
                <span className="w-[1px] h-6 bg-current transition-all duration-300 hover:rotate-45" />
              </div>
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 flex flex-col overflow-auto">
            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col px-6 lg:px-16 py-8 lg:py-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-12 font-medium">
                Explore
              </p>
              <div className="space-y-2">
                {[
                  { label: "Home", href: "/" },
                  ...editorialNav,
                ].map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "group flex items-baseline gap-4 py-5 lg:py-6 px-4 border-b border-white/10 transition-all duration-500",
                      isActive(link.href) ? "border-brand-gold bg-brand-gold/5" : "border-transparent hover:border-brand-gold/30"
                    )}
                    style={{
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen ? "translateY(0)" : "translateY(40px)",
                      transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1 + 0.3}s`,
                    }}
                  >
                    <span className={cn(
                      "text-2xl lg:text-4xl font-display font-light group-hover:translate-x-2 transition-transform duration-500",
                      isActive(link.href) ? "text-brand-gold" : "text-white/90 group-hover:text-brand-gold"
                    )}>
                      {link.label}
                    </span>
                    <span className={cn(
                      "absolute bottom-0 left-0 h-[1px] bg-brand-gold transition-all duration-500",
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </Link>
                ))}
              </div>
            </nav>

            {/* Destinations Quick Access */}
            <div className="bg-white/5 border-t border-white/10 px-6 lg:px-12 py-8 lg:py-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-ink mb-6 font-medium">
                Our Properties
              </p>
              <div className="space-y-4">
                {destinations.map((dest) => (
                  <Link
                    key={dest.slug}
                    href={`/destinations/${dest.slug}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center gap-4 py-3 px-4 transition-all duration-500 hover:bg-brand-linen"
                  >
                    <div className="w-16 h-16 lg:w-20 lg:h-20 overflow-hidden rounded border border-brand-border/30">
                      <Image
                        src={dest.image}
                        alt={dest.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-1">
                        {dest.subtitle}
                      </p>
                      <p className="text-base font-display font-light text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
                        {dest.shortTitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-brand-ink border-t border-white/10 px-6 lg:px-12 py-8 lg:py-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-6 font-medium">
                Contact
              </p>
              <div className="space-y-6">
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="group flex items-center gap-4 text-white/80 hover:text-brand-gold transition-colors duration-300"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-1">Call</p>
                    <p className="text-xl font-display font-light">{contactInfo.phones[0]}</p>
                  </div>
                  <span className="absolute bottom-0 left-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full" />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex items-center gap-4 text-white/80 hover:text-brand-gold transition-colors duration-300"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 flex items-center justify-center">
                    <Search className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-1">Email</p>
                    <p className="text-xl font-display font-light">{contactInfo.email}</p>
                  </div>
                  <span className="absolute bottom-0 left-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
