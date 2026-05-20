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
];

const socialIcons: Record<string, React.ElementType> = {
  Instagram,
  Facebook,
  WhatsApp: MessageCircle,
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-dark text-white">
      {/* Top gold accent line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

      {/* Decorative blur orbs */}
      <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-brand-gold/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-accent/[0.03] blur-3xl pointer-events-none" />

      <div className="relative max-w-container-2xl mx-auto px-5 sm:px-8 lg:px-14 pt-20 sm:pt-24 lg:pt-28 pb-12">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* Brand section */}
          <div>
            <p className="text-[10px] font-ui uppercase tracking-[0.3em] text-brand-gold mb-6 font-medium">
              The Pentouz Residences
            </p>
            <Link href="/" className="inline-flex items-center" suppressHydrationWarning>
              <Image
                src="/logo-white.png"
                alt="The Pentouz"
                width={185}
                height={53}
                className="h-11 w-auto"
              />
            </Link>
            <h2 className="mt-8 font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight max-w-3xl">
              Distinct stays shaped around privacy, comfort, and a finer pace of travel.
            </h2>
            <p className="mt-6 max-w-2xl font-body text-sm sm:text-base text-white/65 leading-relaxed">
              Thoughtfully composed stays in Bengaluru, Chikmagalur and Ooty, designed for guests who value space, location, and a more personal way to stay.
            </p>

            {/* Destination cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {destinations.map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/destinations/${dest.slug}`}
                  className="group border border-white/[0.08] bg-white/[0.02] p-4 transition-all duration-500 ease-luxury hover:border-brand-gold/30 hover:bg-white/[0.04]"
                  suppressHydrationWarning
                >
                  <p className="text-[9px] font-ui uppercase tracking-[0.2em] text-white/40 mb-2">{dest.subtitle}</p>
                  <p className="font-display text-2xl font-light text-white group-hover:text-brand-gold transition-colors duration-300">
                    {dest.shortTitle}
                  </p>
                </Link>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-10">
              <p className="text-[10px] font-ui uppercase tracking-[0.3em] text-brand-gold mb-4 font-medium">Follow Us</p>
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
                      className="flex items-center justify-center w-10 h-10 border border-white/[0.1] text-white/55 hover:border-brand-gold hover:text-brand-gold transition-all duration-500 ease-luxury"
                    >
                      {Icon && <Icon className="w-4 h-4" strokeWidth={1.5} />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Links section */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            {/* Navigation */}
            <div>
              <p className="text-[10px] font-ui uppercase tracking-[0.3em] text-brand-gold mb-5 font-medium">Navigate</p>
              <nav className="space-y-4">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block font-ui text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-brand-gold transition-colors duration-300"
                    suppressHydrationWarning
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Concierge */}
            <div>
              <p className="text-[10px] font-ui uppercase tracking-[0.3em] text-brand-gold mb-5 font-medium">Concierge</p>
              <div className="space-y-3 font-body text-sm text-white/65">
                <p>{contactInfo.address}</p>
                <p>{contactInfo.city}</p>
                {contactInfo.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block hover:text-brand-gold transition-colors duration-300"
                  >
                    {phone}
                  </a>
                ))}
                <a href={`mailto:${contactInfo.email}`} className="block hover:text-brand-gold transition-colors duration-300">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-[10px] font-ui uppercase tracking-[0.3em] text-brand-gold mb-4 font-medium">Newsletter</p>
              <p className="font-body text-sm text-white/50 mb-4 leading-relaxed">
                Occasional updates on new properties, exclusive offers, and travel inspiration.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
                  if (email) {
                    const btn = form.querySelector("button");
                    if (btn) {
                      btn.textContent = "Subscribed";
                      btn.disabled = true;
                      btn.classList.add("opacity-60", "cursor-not-allowed");
                    }
                  }
                }}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full bg-white/[0.04] border border-white/[0.1] px-4 py-3.5 font-body text-sm text-white placeholder:text-white/25 focus:border-brand-gold/50 focus:outline-none focus:bg-white/[0.06] transition-all duration-300 rounded-none"
                />
                <button
                  type="submit"
                  className="w-full bg-brand-gold text-brand-primary font-ui text-[10px] uppercase tracking-[0.2em] font-medium px-4 py-3.5 transition-all duration-500 ease-luxury hover:bg-brand-gold-light"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/[0.06] pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-ui uppercase tracking-[0.18em] text-white/40">
            &copy; {new Date().getFullYear()} The Pentouz Hotels & Residences
          </p>
          <div className="flex flex-wrap gap-6 text-[10px] font-ui uppercase tracking-[0.16em] text-white/45">
            <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors duration-300">Privacy</Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors duration-300">Terms</Link>
            <Link href="/contact" className="hover:text-brand-gold transition-colors duration-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
