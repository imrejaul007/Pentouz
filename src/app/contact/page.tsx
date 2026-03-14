"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactInfo, destinations } from "@/data/content";
import { submitLead } from "@/lib/leads";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    subject: "",
    message: "",
  });
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await submitLead({
        type: "contact",
        ...formData,
        website,
      });

      setStatus({
        type: "success",
        message: "Thank you. Our concierge team will respond within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", property: "", subject: "", message: "" });
      setWebsite("");
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Could not send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Header />
      <main className="bg-[#f8f2e8] text-brand-ink">
        <section className="relative isolate overflow-hidden text-white">
          <div className="absolute inset-0">
            <Image src="/lavelle-road/all/reception_1.jpg" alt="Contact The Pentouz" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,8,0.9)_0%,rgba(12,10,8,0.58)_42%,rgba(12,10,8,0.24)_75%,rgba(12,10,8,0.7)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.16)_0%,rgba(12,10,8,0)_30%,rgba(12,10,8,0.8)_100%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[76vh] max-w-[1440px] items-end px-5 pb-16 pt-40 sm:px-8 lg:px-14 lg:pb-24">
            <div className="max-w-4xl">
              <p className="luxury-kicker text-white/72">Contact Pentouz</p>
              <h1 className="luxury-hero-title mt-6 max-w-4xl text-white">
                Reservations, longer stays, and concierge requests should feel effortless from the first message.
              </h1>
              <p className="luxury-copy mt-8 max-w-2xl text-white/76">
                Use the contact form for booking help, group or extended stays, property guidance, and custom requests. The page is kept simple so it feels closer to a direct concierge conversation.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-18 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-14 lg:py-24">
          <div>
            <p className="luxury-kicker text-brand-accent">Concierge Details</p>
            <h2 className="luxury-section-title mt-5">Reach the reservations team directly.</h2>
            <div className="mt-10 space-y-6">
              <div className="luxury-panel bg-white/80">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-brand-accent" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">Head Office</p>
                    <p className="mt-3 text-sm leading-7 text-brand-body">{contactInfo.address}<br />{contactInfo.city}</p>
                  </div>
                </div>
              </div>
              <div className="luxury-panel bg-white/80">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-brand-accent" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">Reservations</p>
                    <div className="mt-3 space-y-1">
                      {contactInfo.phones.map((phone) => (
                        <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="block text-sm leading-7 text-brand-body transition-colors hover:text-brand-accent">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="luxury-panel bg-white/80">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-brand-accent" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="mt-3 block text-sm leading-7 text-brand-body transition-colors hover:text-brand-accent">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="luxury-panel bg-white/80">
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 text-brand-accent" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">Response Window</p>
                    <p className="mt-3 text-sm leading-7 text-brand-body">Concierge team available 24/7. Most inquiries receive a response within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="luxury-panel bg-[#fcf8f1] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <p className="luxury-kicker text-brand-accent">Send an Inquiry</p>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight text-brand-ink sm:text-5xl">
              Tell us what kind of stay you need.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-body">
              Share your dates, property preference, and any special requests. We’ll guide you to the right Pentouz stay.
            </p>
            <form onSubmit={handleSubmit} className="mt-10 space-y-7">
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">Full Name *</span>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-3 w-full border-b border-brand-border bg-white px-0 py-4 text-sm outline-none transition-colors focus:border-brand-accent" placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">Email *</span>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-3 w-full border-b border-brand-border bg-white px-0 py-4 text-sm outline-none transition-colors focus:border-brand-accent" placeholder="your@email.com" />
                </label>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">Phone Number</span>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="mt-3 w-full border-b border-brand-border bg-white px-0 py-4 text-sm outline-none transition-colors focus:border-brand-accent" placeholder="+91 98765 43210" />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">Property Interest</span>
                  <select name="property" value={formData.property} onChange={handleChange} className="mt-3 w-full appearance-none border-b border-brand-border bg-white px-0 py-4 text-sm outline-none transition-colors focus:border-brand-accent">
                    <option value="">Select property</option>
                    {destinations.map((dest) => (
                      <option key={dest.slug} value={dest.slug}>
                        {dest.subtitle}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">Subject *</span>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="mt-3 w-full border-b border-brand-border bg-white px-0 py-4 text-sm outline-none transition-colors focus:border-brand-accent" placeholder="How can we help you?" />
              </label>

              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">Message *</span>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="mt-3 w-full resize-none border-b border-brand-border bg-white px-0 py-4 text-sm outline-none transition-colors focus:border-brand-accent" placeholder="Tell us more about your inquiry, dates, or preferences..." />
              </label>

              <div className="pt-2">
                <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center rounded-full bg-brand-ink px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-50">
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
                {status ? (
                  <p className={`mt-4 text-sm ${status.type === "success" ? "text-green-700" : "text-red-700"}`}>
                    {status.message}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </section>

        <section className="bg-[#161310] text-white">
          <div className="mx-auto max-w-[1440px] px-5 py-18 sm:px-8 lg:px-14 lg:py-24">
            <div className="max-w-3xl">
              <p className="luxury-kicker text-brand-gold">Choose a Property</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                If you already know the stay, you can go straight to the property page.
              </h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {destinations.map((dest) => (
                <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="overflow-hidden border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-brand-gold/35">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={dest.image} alt={dest.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="px-6 py-6">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">{dest.subtitle}</p>
                    <h3 className="mt-4 font-display text-3xl font-light text-white">{dest.shortTitle}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/68">{dest.copy}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white">
                      View Property
                      <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
