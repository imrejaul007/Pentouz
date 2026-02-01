"use client";

import { useState } from "react";
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
    <footer id="contact" className="bg-brand-ink text-white py-section-md">
      <div className="container-luxury">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand + Contact - 4 cols */}
          <div className="lg:col-span-4">
            <p className="text-2xl tracking-[0.2em] font-light mb-6">
              <span className="font-medium">THE</span> PENTOUZ
            </p>
            <div className="space-y-3 text-body-sm text-white/70">
              <p>{contactInfo.address}</p>
              <p>{contactInfo.city}</p>
              <div className="pt-4 space-y-2">
                {contactInfo.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block hover:text-white transition-colors"
                  >
                    {phone}
                  </a>
                ))}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation - 2 cols */}
          <div className="lg:col-span-2">
            <p className="text-caption uppercase tracking-[0.15em] text-white/50 mb-6">
              Explore
            </p>
            <nav className="space-y-3 text-body-sm text-white/70">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Properties - 3 cols */}
          <div className="lg:col-span-3">
            <p className="text-caption uppercase tracking-[0.15em] text-white/50 mb-6">
              Our Properties
            </p>
            <nav className="space-y-3 text-body-sm text-white/70">
              {destinations.map((dest) => (
                <a
                  key={dest.slug}
                  href={`#${dest.slug}`}
                  className="block hover:text-white transition-colors"
                >
                  {dest.subtitle}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter - 3 cols */}
          <div className="lg:col-span-3">
            <p className="text-caption uppercase tracking-[0.15em] text-white/50 mb-6">
              Stay Connected
            </p>
            <p className="text-body-sm text-white/70 mb-4">
              Receive exclusive offers and updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="flex-1 bg-transparent border-b border-white/30 pb-2 text-body-sm outline-none focus:border-white transition-colors placeholder:text-white/40"
              />
              <button
                type="submit"
                className="ml-4 text-caption uppercase tracking-[0.1em] hover:text-white/70 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-caption text-white/50">
          <p>&copy; {new Date().getFullYear()} The Pentouz Hotels & Residences</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
