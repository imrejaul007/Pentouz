"use client";

import Link from "next/link";
import Image from "next/image";
import { contactInfo, destinations } from "@/data/content";

const footerLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Guides", href: "/travel" },
  { label: "Experiences", href: "/experiences" },
  { label: "Stories", href: "/stories" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#11100f] text-white">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />
      <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-brand-gold/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#92764d]/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 pt-20 sm:pt-24 lg:pt-28 pb-12">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6">
              The Pentouz Residences
            </p>
            <Link href="/" className="inline-flex items-center" suppressHydrationWarning>
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={190}
                height={54}
                className="h-12 w-auto"
              />
            </Link>
            <h2 className="mt-8 font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight max-w-3xl">
              A quieter expression of <em className="italic text-brand-gold">luxury hospitality</em>
            </h2>
            <p className="mt-6 max-w-2xl text-sm sm:text-base text-white/70 leading-relaxed">
              Thoughtfully composed stays in Bengaluru and Ooty, designed around privacy, location, and a more personal rhythm of travel.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {destinations.map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/destinations/${dest.slug}`}
                  className="group border border-white/10 bg-white/[0.03] p-4 hover:border-brand-gold/35 transition-colors"
                  suppressHydrationWarning
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/45 mb-2">{dest.subtitle}</p>
                  <p className="font-display text-2xl font-light text-white group-hover:text-brand-gold transition-colors">
                    {dest.shortTitle}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-5">Navigate</p>
              <nav className="space-y-4">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm uppercase tracking-[0.18em] text-white/78 hover:text-brand-gold transition-colors"
                    suppressHydrationWarning
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-5">Reservations</p>
              <div className="space-y-3 text-sm text-white/72">
                <p>{contactInfo.address}</p>
                <p>{contactInfo.city}</p>
                {contactInfo.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block hover:text-brand-gold transition-colors"
                  >
                    {phone}
                  </a>
                ))}
                <a href={`mailto:${contactInfo.email}`} className="block hover:text-brand-gold transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
            &copy; {new Date().getFullYear()} The Pentouz Hotels & Residences
          </p>
          <div className="flex flex-wrap gap-5 text-[10px] uppercase tracking-[0.16em] text-white/55">
            <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-brand-gold transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
