"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { contactInfo, destinations, socialLinks } from "@/data/content";

const footerLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Experiences", href: "/experiences" },
  { label: "Privé Club", href: "/prive-club" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialIcons: Record<string, React.ElementType> = {
  Instagram,
  Facebook,
  WhatsApp: MessageCircle,
};

export default function Footer() {
  return (
    <footer className="bg-[#0f0e0c] text-white">
      {/* Gold accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c3a061]/40 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 lg:pt-24 pb-8">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={170}
                height={49}
                className="h-10 w-auto"
              />
            </Link>
            <p className="font-['Cormorant_Garamond',serif] text-xl font-light text-white/80 leading-relaxed max-w-sm mb-8">
              Distinct stays shaped around privacy, comfort, and a finer pace of travel.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 hover:border-[#c3a061] hover:text-[#c3a061] transition-all duration-300"
                  >
                    {Icon && <Icon className="w-4 h-4" strokeWidth={1.5} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#c3a061] mb-6 font-medium">
              Navigate
            </p>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.12em] text-white/60 hover:text-[#c3a061] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Properties */}
          <div>
            <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#c3a061] mb-6 font-medium">
              Properties
            </p>
            <div className="space-y-3">
              {destinations.map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/destinations/${dest.slug}`}
                  className="block font-['Cormorant_Garamond',serif] text-lg text-white/70 hover:text-[#c3a061] transition-colors duration-300"
                >
                  {dest.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#c3a061] mb-6 font-medium">
              Contact
            </p>
            <div className="space-y-3 font-['Lora',serif] text-sm text-white/60">
              <p>{contactInfo.address}</p>
              <p>{contactInfo.city}</p>
              <div className="pt-2 space-y-2">
                {contactInfo.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block hover:text-[#c3a061] transition-colors duration-300"
                  >
                    {phone}
                  </a>
                ))}
                <a href={`mailto:${contactInfo.email}`} className="block hover:text-[#c3a061] transition-colors duration-300">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-white/35">
            © {new Date().getFullYear()} The Pentouz. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.12em] text-white/35">
            <Link href="/privacy-policy" className="hover:text-[#c3a061] transition-colors duration-300">Privacy</Link>
            <Link href="/terms" className="hover:text-[#c3a061] transition-colors duration-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
