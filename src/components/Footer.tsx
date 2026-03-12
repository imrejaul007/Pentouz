"use client";

import Link from "next/link";
import Image from "next/image";
import { contactInfo, destinations } from "@/data/content";
import { cn } from "@/lib/utils";

const editorialLinks = [
  { label: "Stories", href: "/stories" },
  { label: "Collections", href: "/destinations" },
  { label: "Experiences", href: "/experiences" },
  { label: "Travel", href: "/travel" },
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
      {/* Cinematic Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block mb-8 group">
              <div className="relative">
                <Image
                  src="/logo-white.png"
                  alt="The Pentouz"
                  width={200}
                  height={55}
                  className="h-10 sm:h-12 lg:h-14 w-auto transition-opacity duration-500 group-hover:opacity-70"
                />
                <div className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </Link>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
            <p className="text-sm sm:text-base text-white/80 max-w-sm leading-relaxed font-light">
              Exceptional residences where modern luxury meets timeless elegance.
            </p>
            <p className="text-sm sm:text-base text-white/70 max-w-sm leading-relaxed font-light">
              Three distinctive properties, each telling its own story.
            </p>
          </div>

          {/* Social Links */}
          <div className="col-span-1 lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-8 font-medium">
              Follow Us
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index: number) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  suppressHydrationWarning
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:border-brand-gold/50">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/80 group-hover:text-brand-gold transition-colors duration-300">
                      {social.label}
                    </span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full" />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 w-0 h-[1px] bg-gradient-to-r from-brand-gold/30 via-brand-gold/10 to-transparent transition-all duration-500 group-hover:opacity-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1 lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-8 font-medium">
              Navigate
            </p>
            <nav className="space-y-4">
              {editorialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group block relative"
                  suppressHydrationWarning
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/80 group-hover:text-brand-gold transition-colors duration-500 font-light">
                    {link.label}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Collections */}
          <div className="col-span-2 lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-8 font-medium">
              Collections
            </p>
            <nav className="space-y-4">
              {destinations.map((dest, index: number) => (
                <Link
                  key={dest.slug}
                  href={`/destinations/${dest.slug}`}
                  className="group block"
                  suppressHydrationWarning
                >
                  <span className="text-2xl lg:text-3xl font-display font-light text-white/90 group-hover:text-brand-gold transition-colors duration-300 block">
                    {dest.shortTitle}
                  </span>
                  <span className="text-sm sm:text-base text-white/60 block mt-1 font-light">
                    {dest.subtitle}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-brand-gold/30 via-brand-gold/10 to-transparent transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-8 font-medium">
              Reservations
            </p>
            <div className="space-y-4 text-sm sm:text-base text-white/80 font-light">
              <p className="mb-4">
                {contactInfo.address}
              </p>
              <p className="mb-4">
                {contactInfo.city}
              </p>
              <div className="pt-4 space-y-3">
                {contactInfo.phones.map((phone, index: number) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="group block relative"
                    suppressHydrationWarning
                  >
                    <span className="text-white/80 group-hover:text-brand-gold transition-colors duration-300 block">
                      {phone}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full" />
                  </a>
                ))}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group block relative"
                  suppressHydrationWarning
                >
                  <span className="text-white/80 group-hover:text-brand-gold transition-colors duration-300 block">
                    {contactInfo.email}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-brand-gold/3 rounded-full blur-3xl" />

        {/* Bottom Section */}
        <div className="border-t border-white/10">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/50">
                &copy; {new Date().getFullYear()} The Pentouz Hotels & Residences
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-[10px] uppercase tracking-[0.12em]">
                <Link
                  href="/privacy-policy"
                  className="relative group"
                  suppressHydrationWarning
                >
                  <span className="text-white/70 group-hover:text-brand-gold transition-colors duration-300 block">
                    Privacy
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full" />
                </Link>
                <Link
                  href="/terms"
                  className="relative group ml-4"
                >
                  <span className="text-white/70 group-hover:text-brand-gold transition-colors duration-300 block">
                    Terms
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full" />
                </Link>
                <Link
                  href="/contact"
                  className="relative group"
                >
                  <span className="text-white/70 group-hover:text-brand-gold transition-colors duration-300 block">
                    Contact
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full" />
                </Link>
                <Link
                  href="/editorial-policy"
                  className="relative group"
                >
                  <span className="text-white/70 group-hover:text-brand-gold transition-colors duration-300 block">
                    Editorial
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
