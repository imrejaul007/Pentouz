"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { contactInfo, destinations } from "@/data/content";

const primaryNav = [
  { label: "Destinations", href: "/destinations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Experiences", href: "/experiences" },
  { label: "Stories", href: "/stories" },
  { label: "Privé Club", href: "/prive-club" },
  { label: "Contact", href: "/contact" },
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
      <div className="fixed top-0 left-0 right-0 z-50 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent" />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-[#f6f1ea]/96 backdrop-blur-xl border-b border-[#ddd2c1] shadow-[0_12px_40px_rgba(18,16,13,0.08)]"
            : "bg-gradient-to-b from-black/38 via-black/12 to-transparent"
        )}
      >
        <div className={cn("hidden xl:block border-b", isScrolled ? "border-black/5" : "border-white/8")}>
          <div className="max-w-container-2xl mx-auto px-6 lg:px-16 h-9 flex items-center justify-between">
            <p className={cn("text-[10px] tracking-[0.18em]", isScrolled ? "text-brand-muted" : "text-white")}>
              Bengaluru and Ooty
            </p>
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className={cn("text-[10px] tracking-[0.18em] transition-colors", isScrolled ? "text-brand-muted hover:text-brand-gold" : "text-white hover:text-brand-gold")}
            >
              {contactInfo.phones[0]}
            </a>
          </div>
        </div>

        <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="h-20 sm:h-24 lg:h-[5.5rem] flex items-center justify-between">
            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              <Link href="/" className="block" suppressHydrationWarning>
                <Image
                  src="/logo-white.png"
                  alt="The Pentouz"
                  width={168}
                  height={48}
                  className={cn("h-10 w-auto transition-all duration-500", isScrolled ? "invert" : "")}
                  priority
                />
              </Link>

              <nav className="flex items-center gap-1">
                {primaryNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    suppressHydrationWarning
                    className={cn(
                      "px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-all duration-300",
                      isActive(link.href)
                        ? isScrolled
                          ? "text-brand-ink"
                          : "text-white"
                        : isScrolled
                          ? "text-brand-muted hover:text-brand-ink"
                          : "text-white hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <Link href="/" className="flex lg:hidden items-center" suppressHydrationWarning>
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={122}
                height={36}
                className={cn("h-9 w-auto transition-all duration-500", isScrolled ? "invert" : "")}
                priority
              />
            </Link>

            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className={cn(
                  "hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] transition-colors",
                  isScrolled ? "text-brand-muted hover:text-brand-gold" : "text-white hover:text-brand-gold"
                )}
              >
                <Phone className="w-4 h-4" strokeWidth={1.4} />
                Concierge
              </a>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hidden lg:inline-flex items-center gap-2 border px-5 py-3 text-[11px] uppercase tracking-[0.18em] transition-all duration-300",
                  isScrolled
                    ? "border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white"
                    : "border-white text-white hover:border-brand-gold hover:text-brand-gold"
                )}
              >
                Book Now
                <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
              </a>

              <button
                onClick={() => setIsMenuOpen((open) => !open)}
                className={cn(
                  "inline-flex items-center gap-3 rounded-full px-4 py-2.5 transition-all duration-300",
                  isScrolled
                    ? "border border-[#ddd2c1] text-brand-ink hover:border-brand-gold hover:text-brand-gold"
                    : "border border-white text-white hover:border-brand-gold hover:text-brand-gold"
                )}
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5" strokeWidth={1.5} />
                <span className="hidden sm:inline text-[11px] uppercase tracking-[0.15em] font-light">Explore</span>
              </button>
            </div>
          </div>
        </div>

        {isScrolled ? (
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />
        ) : null}
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[100] transition-all duration-500 ease-out overflow-hidden",
          isMenuOpen ? "opacity-100 visible bg-[#12110f]/98" : "opacity-0 invisible pointer-events-none bg-transparent"
        )}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-24 left-6 h-40 w-40 rounded-full bg-brand-gold/8 blur-3xl" />
          <div className="absolute bottom-24 right-6 h-56 w-56 rounded-full bg-[#a28758]/10 blur-3xl" />
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
            <Link href="/" className="flex-shrink-0" suppressHydrationWarning>
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={122}
                height={36}
                className="h-9 w-auto"
                priority
              />
            </Link>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 text-white/90 hover:text-brand-gold transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-[0.15em] font-light">Close</span>
            </button>
          </div>

          <div className="flex-1 overflow-auto">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] min-h-full">
              <nav className="px-6 py-8 lg:px-12 lg:py-14 border-b lg:border-b-0 lg:border-r border-white/10">
                <p className="text-[10px] uppercase tracking-[0.32em] text-brand-gold mb-8 font-medium">
                  Navigate
                </p>
                <p className="max-w-md text-sm text-white/65 leading-relaxed mb-8">
                  A quieter route through each residence, our city guide, and the Pentouz collection.
                </p>

                <div className="space-y-2">
                  {[{ label: "Home", href: "/" }, ...primaryNav].map((link, i) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-4 border-b transition-all duration-300",
                        isActive(link.href) ? "border-brand-gold/50" : "border-white/10 hover:border-brand-gold/25"
                      )}
                      style={{
                        opacity: isMenuOpen ? 1 : 0,
                        transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                        transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.06}s`,
                      }}
                    >
                      <span className={cn("text-3xl sm:text-4xl font-display font-light transition-colors duration-300", isActive(link.href) ? "text-brand-gold" : "text-white/92")}>
                        {link.label}
                      </span>
                      <ArrowRight className="w-5 h-5 text-white/40" strokeWidth={1.3} />
                    </Link>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full bg-white text-brand-ink px-5 py-3 text-[11px] uppercase tracking-[0.18em]"
                  >
                    Book Now
                  </a>
                  <a
                    href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-white/85"
                  >
                    Call Concierge
                  </a>
                </div>
              </nav>

              <div className="px-6 py-8 lg:px-12 lg:py-14">
                <p className="text-[10px] uppercase tracking-[0.32em] text-brand-gold mb-8 font-medium">
                  Residences
                </p>
                <div className="space-y-4">
                  {destinations.map((dest, index) => (
                    <Link
                      key={dest.slug}
                      href={`/destinations/${dest.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="group grid grid-cols-[92px_1fr] gap-4 items-center border border-white/10 bg-white/[0.03] p-3 hover:border-brand-gold/35 transition-colors"
                      style={{
                        opacity: isMenuOpen ? 1 : 0,
                        transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                        transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.28 + index * 0.06}s`,
                      }}
                    >
                      <div className="relative h-24 overflow-hidden">
                        <Image
                          src={dest.heroImage || dest.image}
                          alt={dest.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="92px"
                        />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/55 mb-2">
                          {dest.subtitle}
                        </p>
                        <p className="font-display text-2xl font-light text-white mb-2 group-hover:text-brand-gold transition-colors">
                          {dest.shortTitle}
                        </p>
                        <p className="text-sm text-white/65 line-clamp-2">{dest.copy}</p>
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
