"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu, Search, Phone, MapPin, Calendar } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
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
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Cinematic Progress Line */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-gold/20 via-brand-gold to-brand-gold z-50"
      />

      {/* Glassmorphism Header Background */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-white/98 backdrop-blur-xl shadow-xl border-b border-brand-border"
            : "bg-transparent"
        )}
      >
        <div
          className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 h-20 sm:h-24 flex items-center justify-between"
        >
          {/* Left - Logo & Quick Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-12">
            <Link href="/" className="relative group" suppressHydrationWarning>
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={160}
                height={45}
                className="h-10 lg:h-12 w-auto transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute -bottom-3 left-1/2 w-0 h-[2px] bg-brand-gold transition-all duration-500 group-hover:w-full" />
            </Link>

            {/* Desktop Quick Links */}
            <nav className="hidden sm:flex items-center gap-6">
              {editorialNav.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-light transition-all duration-300 group",
                    isActive(link.href)
                      ? "text-brand-ink"
                      : isScrolled
                        ? "text-brand-muted hover:text-brand-gold"
                        : "text-white/90 hover:text-brand-gold"
                  )}
                  suppressHydrationWarning
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold" />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center - Mobile Logo */}
          <div className="flex lg:hidden items-center">
            <Link href="/" className="relative group" suppressHydrationWarning>
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={120}
                height={35}
                className="h-9 w-auto transition-transform duration-500"
                priority
              />
            </Link>
          </div>

          {/* Right - Mobile Menu Button & Desktop Actions */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "lg:hidden flex items-center gap-3 px-4 py-2.5 transition-all duration-300",
                isScrolled
                  ? "text-brand-ink hover:text-brand-gold"
                  : "text-white hover:text-brand-gold"
              )}
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
              <span className="hidden sm:inline text-[11px] uppercase tracking-[0.15em] font-light">Menu</span>
            </button>

            {/* Desktop Booking Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className={cn(
                  "group flex items-center gap-2 px-5 py-2.5 transition-all duration-300 border",
                  isScrolled
                    ? "border-brand-border bg-brand-ink text-brand-ink hover:border-brand-gold hover:text-brand-gold"
                    : "border-white/30 bg-white/10 text-white hover:border-brand-gold"
                )}
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-[11px] uppercase tracking-[0.15em] font-light">{contactInfo.phones[0]}</span>
              </a>

              <Link
                href="/contact"
                className={cn(
                  "group flex items-center gap-2 px-5 py-2.5 transition-all duration-300 border",
                  isScrolled
                    ? "border-brand-border bg-brand-ink text-brand-ink hover:border-brand-gold hover:text-brand-gold"
                    : "border-white/30 bg-white/10 text-white hover:border-brand-gold"
                )}
              >
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-[11px] uppercase tracking-[0.15em] font-light">Book Now</span>
              </Link>

              <Link
                href="/destinations"
                className={cn(
                  "group flex items-center gap-2 px-5 py-2.5 transition-all duration-300 border",
                  isScrolled
                    ? "border-brand-border bg-brand-ink text-brand-ink hover:border-brand-gold hover:text-brand-gold"
                    : "border-white/30 bg-white/10 text-white hover:border-brand-gold"
                )}
              >
                <Calendar className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-[11px] uppercase tracking-[0.15em] font-light">Explore</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Progress Line Bottom Accent */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-brand-gold/30 via-brand-gold/10 to-transparent" />
        )}
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] transition-all duration-500 ease-out overflow-hidden",
          isMenuOpen
            ? "opacity-100 visible bg-brand-ink/98"
            : "opacity-0 invisible pointer-events-none bg-transparent"
        )}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-8 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-8 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
            <Link href="/" className="relative group flex-shrink-0" suppressHydrationWarning>
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={120}
                height={35}
                className="h-9 w-auto"
                priority
              />
            </Link>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-white/90 hover:text-brand-gold transition-colors duration-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-[0.15em] font-light">Close</span>
            </button>
          </div>

          {/* Menu Content - Scrollable */}
          <div className="flex-1 flex flex-col overflow-auto">
            {/* Main Navigation */}
            <nav className="flex-1 px-6 py-8 lg:py-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-8 font-medium">
                Navigate
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
                      "flex items-center justify-between py-4 px-6 border-b border-white/10 transition-all duration-300",
                      isActive(link.href) ? "border-brand-gold bg-brand-gold/5" : "border-transparent hover:border-brand-gold/30"
                    )}
                    style={{
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                      transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`,
                    }}
                  >
                    <span className={cn(
                      "text-2xl lg:text-3xl font-display font-light group-hover:translate-x-1 transition-transform duration-300",
                      isActive(link.href) ? "text-brand-gold" : "text-white/90 group-hover:text-brand-gold"
                    )}>
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Destinations Quick Access */}
            <div className="bg-white/5 border-t border-white/10 px-6 py-8 lg:py-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-ink mb-6 font-medium">
                Our Properties
              </p>
              <div className="space-y-3">
                {destinations.map((dest) => (
                  <Link
                    key={dest.slug}
                    href={`/destinations/${dest.slug}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center gap-4 py-4 px-6 transition-all duration-300 hover:bg-brand-linen"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 overflow-hidden rounded-full border-2 border-brand-border/30 flex-shrink-0">
                      <Image
                        src={dest.image}
                        alt={dest.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-1">
                        {dest.subtitle}
                      </p>
                      <p className="text-lg sm:text-xl font-display font-light text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
                        {dest.shortTitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-brand-ink border-t border-white/10 px-6 py-8 lg:py-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-6 font-medium">
                Contact
              </p>
              <div className="space-y-4">
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="group flex items-center gap-4 text-white/80 hover:text-brand-gold transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-1">Call Us</p>
                    <p className="text-xl sm:text-2xl font-display font-light">{contactInfo.phones[0]}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex items-center gap-4 text-white/80 hover:text-brand-gold transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Search className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-1">Email Us</p>
                    <p className="text-xl sm:text-2xl font-display font-light">{contactInfo.email}</p>
                  </div>
                </a>

                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center gap-4 text-white/80 hover:text-brand-gold transition-colors duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-1">Contact Form</p>
                    <p className="text-xl sm:text-2xl font-display font-light">Send Message</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
