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
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Gold accent line */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[1px] bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury",
          isScrolled
            ? "bg-brand-dark/98 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_40px_rgba(15,14,12,0.15)]"
            : "bg-brand-dark/95"
        )}
      >
        {/* Top bar */}
        <div className="hidden xl:block border-b border-white/[0.05]">
          <div className="max-w-container-2xl mx-auto px-6 lg:px-16 h-9 flex items-center justify-between">
            <p className="text-[10px] font-ui uppercase tracking-[0.18em] text-white/60">
              Bengaluru, Chikmagalur and Ooty
            </p>
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className="text-[10px] font-ui uppercase tracking-[0.18em] transition-colors duration-300 text-white/60 hover:text-brand-gold"
            >
              {contactInfo.phones[0]}
            </a>
            <a
              href={contactInfo.whatsapp ? `https://wa.me/${contactInfo.whatsapp.replace(/\+/g, "")}` : "https://wa.me/918884449930"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-ui uppercase tracking-[0.18em] transition-colors duration-300 flex items-center gap-1.5 text-white/60 hover:text-green-400"
            >
              <MessageCircle className="w-3 h-3" strokeWidth={1.5} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="h-20 sm:h-24 lg:h-[5.5rem] flex items-center justify-between">
            {/* Logo */}
            <div className="hidden lg:flex items-center gap-10 xl:gap-14">
              <Link href="/" className="block flex-shrink-0" suppressHydrationWarning>
                <Image
                  src="/logo-white.png"
                  alt="The Pentouz"
                  width={160}
                  height={46}
                  className="h-10 w-auto"
                  priority
                />
              </Link>

              {/* Navigation */}
              <nav className="flex items-center gap-1">
                {primaryNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    suppressHydrationWarning
                    className={cn(
                      "px-4 py-2 font-ui text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ease-luxury",
                      isActive(link.href)
                        ? "text-brand-gold"
                        : "text-white/75 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile logo */}
            <Link href="/" className="flex lg:hidden items-center flex-shrink-0" suppressHydrationWarning>
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={118}
                height={34}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Phone */}
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="hidden md:inline-flex items-center gap-2 font-ui text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 text-white/75 hover:text-brand-gold"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                Concierge
              </a>

              {/* Book button */}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-2 font-ui text-[10px] uppercase tracking-[0.2em] font-medium border border-white/25 text-white px-5 py-2.5 transition-all duration-500 hover:border-brand-gold hover:text-brand-gold"
              >
                Book Now
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>

              {/* Menu button */}
              <button
                onClick={() => setIsMenuOpen((open) => !open)}
                className="inline-flex items-center gap-2.5 font-ui text-[10px] uppercase tracking-[0.18em] border border-white/15 text-white/80 px-4 py-2.5 transition-all duration-500 hover:border-white/30 hover:text-white"
                aria-label="Toggle menu"
              >
                <Menu className="w-4 h-4" strokeWidth={1.5} />
                <span className="hidden sm:inline">Menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom accent line when scrolled */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
        )}
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] overflow-hidden",
          isMenuOpen ? "bg-brand-dark" : "bg-transparent pointer-events-none"
        )}
        style={{
          visibility: isMenuOpen ? "visible" : "hidden",
          transition: "background-color 0.4s ease",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-28 left-8 h-40 w-40 rounded-full bg-brand-gold/[0.03]" />
          <div className="absolute bottom-32 right-8 h-52 w-52 rounded-full bg-brand-accent/[0.04]" />
        </div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Menu header */}
          <div className="flex justify-between items-center px-6 py-6 border-b border-white/[0.06]">
            <Link href="/" className="flex-shrink-0" suppressHydrationWarning>
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={118}
                height={34}
                className="h-8 w-auto"
                priority
              />
            </Link>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 font-ui text-[10px] uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors duration-300"
              aria-label="Close menu"
            >
              <span>Close</span>
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Menu content */}
          <div className="flex-1 overflow-auto">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] min-h-full">
              {/* Navigation */}
              <nav className="px-6 py-8 lg:px-12 lg:py-14 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                <p className="text-[10px] font-ui uppercase tracking-[0.3em] text-brand-gold mb-8 font-medium">
                  Navigate
                </p>
                <p className="max-w-md font-body text-sm text-white/55 leading-relaxed mb-10">
                  A quieter route through each residence, our city guide, and the Pentouz collection.
                </p>

                <div className="space-y-1">
                  {[{ label: "Home", href: "/" }, ...primaryNav].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-4 border-b transition-all duration-300",
                        isActive(link.href) ? "border-brand-gold/40" : "border-white/[0.06] hover:border-white/[0.12]"
                      )}
                    >
                      <span className={cn(
                        "font-display text-3xl sm:text-4xl font-light transition-colors duration-300",
                        isActive(link.href) ? "text-brand-gold" : "text-white"
                      )}>
                        {link.label}
                      </span>
                      <ArrowRight className="w-5 h-5 text-white/30" strokeWidth={1.3} />
                    </Link>
                  ))}
                </div>

                {/* Quick actions */}
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center gap-2 font-ui text-[10px] uppercase tracking-[0.18em] font-medium bg-white text-brand-ink px-6 py-3 transition-all duration-500 hover:bg-brand-gold hover:text-white"
                  >
                    Book Now
                  </a>
                  <a
                    href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center gap-2 font-ui text-[10px] uppercase tracking-[0.18em] border border-white/15 text-white/80 px-6 py-3 transition-all duration-500 hover:border-white/30 hover:text-white"
                  >
                    Call Concierge
                  </a>
                </div>
              </nav>

              {/* Residences */}
              <div className="px-6 py-8 lg:px-12 lg:py-14">
                <p className="text-[10px] font-ui uppercase tracking-[0.3em] text-brand-gold mb-8 font-medium">
                  Residences
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {destinations.map((dest) => (
                    <Link
                      key={dest.slug}
                      href={`/destinations/${dest.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="group grid grid-cols-[80px_1fr] sm:grid-cols-[88px_1fr] gap-3 items-center border border-white/[0.06] bg-white/[0.02] p-2.5 transition-all duration-500 hover:border-brand-gold/30 hover:bg-white/[0.04]"
                    >
                      <div className="relative h-16 sm:h-20 overflow-hidden">
                        <Image
                          src={dest.heroImage || dest.image}
                          alt={dest.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(min-width: 640px) 88px, 80px"
                        />
                      </div>
                      <div>
                        <p className="text-[9px] sm:text-[10px] font-ui uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/45 mb-1">
                          {dest.subtitle}
                        </p>
                        <p className="font-display text-lg sm:text-xl font-light text-white mb-1 group-hover:text-brand-gold transition-colors duration-300">
                          {dest.title}
                        </p>
                        <p className="text-xs sm:text-sm font-body text-white/50 line-clamp-2 hidden sm:block">
                          {dest.copy}
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
