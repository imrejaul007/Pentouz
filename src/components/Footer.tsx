"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { contactInfo, navLinks, destinations } from "@/data/content";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <footer id="contact" className="bg-brand-ink text-white">
      {/* Main Footer Content */}
      <div className="container-wide py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Brand + Contact - 5 cols */}
          <div className="lg:col-span-5">
            <p className="text-2xl tracking-[0.35em] font-light mb-8">
              THE PENTOUZ
            </p>
            <div className="w-16 h-px bg-white/20 mb-8" />
            <p className="text-body-lg text-white/50 mb-10 max-w-sm leading-relaxed">
              Exceptional residences where modern luxury meets timeless elegance.
            </p>
            <div className="space-y-4 text-body-md text-white/60">
              <p>{contactInfo.address}</p>
              <p>{contactInfo.city}</p>
              <div className="pt-6 space-y-3">
                {contactInfo.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block text-white/80 hover:text-white transition-colors"
                  >
                    {phone}
                  </a>
                ))}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation - 2 cols */}
          <div className="lg:col-span-2">
            <p className="text-overline uppercase tracking-[0.25em] text-white/40 mb-8">
              Explore
            </p>
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-body-md text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Properties - 2 cols */}
          <div className="lg:col-span-2">
            <p className="text-overline uppercase tracking-[0.25em] text-white/40 mb-8">
              Properties
            </p>
            <nav className="space-y-4">
              {destinations.map((dest) => (
                <a
                  key={dest.slug}
                  href={`#${dest.slug}`}
                  className="block text-body-md text-white/60 hover:text-white transition-colors"
                >
                  {dest.subtitle}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter - 3 cols */}
          <div className="lg:col-span-3">
            <p className="text-overline uppercase tracking-[0.25em] text-white/40 mb-8">
              Stay Connected
            </p>
            <p className="text-body-md text-white/60 mb-8 leading-relaxed">
              Subscribe for exclusive offers and the latest updates from our properties.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full bg-transparent border-b border-white/20 pb-4 text-body-md outline-none focus:border-white/50 transition-colors placeholder:text-white/30"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-4 text-white/60 hover:text-white transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-caption text-white/40">
            <p>&copy; {new Date().getFullYear()} The Pentouz Hotels & Residences. All rights reserved.</p>
            <div className="flex gap-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-white/70 transition-colors uppercase tracking-[0.1em]">
                Privacy
              </a>
              <a href="#" className="hover:text-white/70 transition-colors uppercase tracking-[0.1em]">
                Terms
              </a>
              <a href="#" className="hover:text-white/70 transition-colors uppercase tracking-[0.1em]">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
