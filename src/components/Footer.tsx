"use client";

import Link from "next/link";
import Image from "next/image";
import { contactInfo, destinations } from "@/data/content";

const editorialLinks = [
  { label: "Stories", href: "/stories" },
  { label: "Collections", href: "/destinations" },
  { label: "Experiences", href: "/experiences" },
  { label: "About", href: "/about" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/thepentouz" },
  { label: "Facebook", href: "https://facebook.com/thepentouz" },
  { label: "LinkedIn", href: "https://linkedin.com/company/thepentouz" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      {/* Editorial Credit Line */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
          <p className="text-center text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/60">
            A publication by The Pentouz Hotels & Residences
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block mb-6 sm:mb-8">
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={180}
                height={50}
                className="h-8 sm:h-10 lg:h-12 w-auto hover:opacity-70 transition-opacity duration-300"
              />
            </Link>
            <div className="editorial-divider mb-6 sm:mb-8" />
            <p className="text-sm sm:text-base text-white/80 mb-8 max-w-sm leading-relaxed">
              Exceptional residences where modern luxury meets timeless elegance.
              Three distinctive properties, each telling its own story.
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.15em] text-white/60 hover:text-brand-gold transition-colors duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1 lg:col-span-2">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-brand-gold mb-6 sm:mb-8 font-medium">
              Navigate
            </p>
            <nav className="space-y-3 sm:space-y-4">
              {editorialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/80 hover:text-brand-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Collections */}
          <div className="col-span-1 lg:col-span-3">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-brand-gold mb-6 sm:mb-8 font-medium">
              Collections
            </p>
            <nav className="space-y-3 sm:space-y-4">
              {destinations.map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/destinations/${dest.slug}`}
                  className="block text-sm text-white/80 hover:text-brand-gold transition-colors duration-300"
                >
                  {dest.shortTitle}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-3">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-brand-gold mb-6 sm:mb-8 font-medium">
              Reservations
            </p>
            <div className="space-y-3 sm:space-y-4 text-sm text-white/80">
              <p>{contactInfo.address}</p>
              <p>{contactInfo.city}</p>
              <div className="pt-4 space-y-2 sm:space-y-3">
                {contactInfo.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block hover:text-brand-gold transition-colors duration-300"
                  >
                    {phone}
                  </a>
                ))}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block hover:text-brand-gold transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Credits */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">
                Editorial Team
              </p>
              <p className="text-[10px] sm:text-[11px] text-white/60">
                Creative Direction: The Pentouz Studio
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">
                Photography
              </p>
              <p className="text-[10px] sm:text-[11px] text-white/60">
                The Pentouz Lens Collective
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-[11px] text-white/50 gap-4 sm:gap-0">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} The Pentouz Hotels & Residences
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8">
              <Link
                href="/privacy-policy"
                className="hover:text-brand-gold transition-colors duration-300 uppercase tracking-[0.1em]"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-brand-gold transition-colors duration-300 uppercase tracking-[0.1em]"
              >
                Terms
              </Link>
              <Link
                href="/contact"
                className="hover:text-brand-gold transition-colors duration-300 uppercase tracking-[0.1em]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
