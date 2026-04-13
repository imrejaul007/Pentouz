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
              Distinct stays shaped around privacy, comfort, and a finer pace of travel.
            </h2>
            <p className="mt-6 max-w-2xl text-sm sm:text-base text-white/70 leading-relaxed">
              Thoughtfully composed stays in Bengaluru, Chikmagalur and Ooty, designed for guests who value space, location, and a more personal way to stay.
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

            {/* Social Media */}
            <div className="mt-10">
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-4">Follow Us</p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.label];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center justify-center w-9 h-9 border border-white/15 text-white/60 hover:border-brand-gold hover:text-brand-gold transition-colors"
                    >
                      {Icon && <Icon className="w-4 h-4" strokeWidth={1.5} />}
                    </a>
                  );
                })}
              </div>
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
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-5">Concierge</p>
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

            {/* Newsletter */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-4">Newsletter</p>
              <p className="text-sm text-white/60 mb-4 leading-relaxed">
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
                  className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brand-gold/60 focus:outline-none focus:bg-white/[0.07] transition-colors rounded-none"
                />
                <button
                  type="submit"
                  className="w-full bg-brand-gold text-[#11100f] px-4 py-3 text-[10px] uppercase tracking-[0.22em] font-medium hover:bg-white transition-colors"
                >
                  Subscribe
                </button>
              </form>
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
