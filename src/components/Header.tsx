"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, Phone, X, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { contactInfo, destinations } from "@/data/content";

const primaryNav = [
  { label: "Destinations", href: "/destinations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Experiences", href: "/experiences" },
  { label: "Offers", href: "/offers" },
  { label: "Privé Club", href: "/prive-club" },
  { label: "About", href: "/about" },
];

function getBookingUrl() {
  const fmt = (d: Date) => d.toISOString().split("T")[0];
  const checkin = new Date();
  checkin.setDate(checkin.getDate() + 1);
  const checkout = new Date();
  checkout.setDate(checkout.getDate() + 2);
  return `https://bookmystay.io/rooms/37853/${fmt(checkin)}/${fmt(checkout)}/2/0?utm_source=brandWebsite`;
}

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bookingUrl = getBookingUrl();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Gold accent line */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-transparent via-[#c3a061]/50 to-transparent" />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#0f0e0c]/98 backdrop-blur-xl border-b border-white/[0.05]"
            : "bg-[#0f0e0c]/95"
        )}
      >
        {/* Top bar */}
        <div className="hidden xl:block border-b border-white/[0.04]">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-10 h-10 flex items-center justify-between">
            <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-white/50">
              Bengaluru, Chikmagalur & Ooty
            </p>
            <div className="flex items-center gap-8">
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-white/50 hover:text-[#c3a061] transition-colors duration-300"
              >
                {contactInfo.phones[0]}
              </a>
              <a
                href={contactInfo.whatsapp ? `https://wa.me/${contactInfo.whatsapp.replace(/\+/g, "")}` : "https://wa.me/918884449930"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-white/50 hover:text-green-400 transition-colors duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="h-20 lg:h-24 flex items-center justify-between">
            {/* Logo - hidden when menu is open */}
            <div className={cn("flex items-center gap-12 xl:gap-16", isMenuOpen && "hidden xl:flex")}>
              <Link href="/" className="block flex-shrink-0">
                <Image
                  src="/logo-white.png"
                  alt="The Pentouz"
                  width={155}
                  height={44}
                  className="h-9 w-auto"
                  priority
                />
              </Link>

              {/* Navigation */}
              <nav className="hidden xl:flex items-center gap-1">
                {primaryNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.15em] transition-all duration-300",
                      isActive(link.href)
                        ? "text-[#c3a061]"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile logo */}
            <Link href="/" className="flex xl:hidden items-center">
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={120}
                height={34}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="hidden md:flex items-center gap-2 text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-white/60 hover:text-[#c3a061] transition-colors duration-300"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                Concierge
              </a>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.15em] font-medium border border-white/20 text-white px-6 py-2.5 transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]"
              >
                Book Now
              </a>

              <button
                onClick={() => setIsMenuOpen((open) => !open)}
                className="flex items-center gap-2 font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.15em] border border-white/15 text-white/70 px-4 py-2.5 transition-all duration-500 hover:border-white/30 hover:text-white xl:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="w-4 h-4" strokeWidth={1.5} />
                <span className="hidden sm:inline">Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-[100] overflow-hidden",
          isMenuOpen ? "bg-[#0f0e0c]" : "bg-transparent pointer-events-none"
        )}
        style={{ visibility: isMenuOpen ? "visible" : "hidden", transition: "background-color 0.4s ease" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-8 h-48 w-48 rounded-full bg-[#c3a061]/[0.03]" />
          <div className="absolute bottom-40 right-8 h-64 w-64 rounded-full bg-[#8b7355]/[0.03]" />
        </div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Menu header */}
          <div className="flex justify-end items-center px-5 sm:px-8 lg:px-10 py-5 sm:py-6 border-b border-white/[0.05]">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.15em] text-white/50 hover:text-white transition-colors duration-300 min-h-[44px] min-w-[44px] justify-center -mr-2"
              aria-label="Close menu"
            >
              <span className="hidden sm:inline">Close</span>
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Menu content */}
          <div className="flex-1 overflow-auto">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] min-h-full">
              {/* Navigation */}
              <nav className="px-5 sm:px-8 lg:px-12 py-6 sm:py-8 border-b lg:border-b-0 lg:border-r border-white/[0.05]">
                <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] mb-5 sm:mb-6 font-medium">
                  Navigate
                </p>

                <div className="space-y-0">
                  {[{ label: "Home", href: "/" }, ...primaryNav].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-4 border-b min-h-[52px] transition-all duration-300",
                        isActive(link.href) ? "border-[#c3a061]/40" : "border-white/[0.05] hover:border-white/[0.1]"
                      )}
                    >
                      <span className={cn(
                        "font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl lg:text-4xl font-light transition-colors duration-300",
                        isActive(link.href) ? "text-[#c3a061]" : "text-white"
                      )}>
                        {link.label}
                      </span>
                      <ArrowRight className="w-5 h-5 text-white/30 flex-shrink-0" strokeWidth={1.3} />
                    </Link>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col gap-3">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.15em] font-medium bg-white text-[#0f0e0c] px-6 py-3.5 min-h-[48px] transition-all duration-500 hover:bg-[#c3a061] hover:text-white"
                  >
                    Book Now
                  </a>
                  <a
                    href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.15em] border border-white/15 text-white/70 px-6 py-3.5 min-h-[48px] transition-all duration-500 hover:border-white/30 hover:text-white"
                  >
                    Call Concierge
                  </a>
                </div>
              </nav>

              {/* Residences */}
              <div className="px-5 sm:px-8 lg:px-12 py-6 sm:py-8">
                <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] mb-5 sm:mb-6 font-medium">
                  Properties
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                  {destinations.map((dest) => (
                    <Link
                      key={dest.slug}
                      href={`/destinations/${dest.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="group grid grid-cols-[64px_1fr] gap-3 items-center border border-white/[0.05] bg-white/[0.02] p-2 min-h-[64px] transition-all duration-500 hover:border-[#c3a061]/30 hover:bg-white/[0.04]"
                    >
                      <div className="relative h-14 overflow-hidden">
                        <Image
                          src={dest.heroImage || dest.image}
                          alt={dest.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <p className="text-[9px] font-['Inter',sans-serif] uppercase tracking-[0.12em] text-white/40 mb-1">
                          {dest.subtitle}
                        </p>
                        <p className="font-['Cormorant_Garamond',serif] text-base sm:text-lg font-light text-white group-hover:text-[#c3a061] transition-colors duration-300">
                          {dest.shortTitle}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
