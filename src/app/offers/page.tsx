import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { offers, destinations } from "@/data/content";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Special Offers | The Pentouz",
  description:
    "Discover exclusive seasonal offers, signature experiences, and Privé member benefits at The Pentouz collection of luxury stays in India.",
  alternates: {
    canonical: withSiteUrl("/offers"),
  },
};

const bookingUrl =
  destinations.find((d) => d.slug === "lavelle-road")?.bookingUrl ??
  "/contact";

const directBenefits = [
  {
    title: "Best rate guarantee",
    description:
      "When you book direct, we match any lower rate you find elsewhere and add a welcome amenity.",
  },
  {
    title: "Flexible scheduling",
    description:
      "Speak to our team for early check-in, late check-out, and scheduling that fits your itinerary.",
  },
  {
    title: "Curated surprises",
    description:
      "Celebrations, anniversaries, and special occasions are elevated with in-suite touches arranged by our concierge.",
  },
];

// Badge colour map — Seasonal (warm brown), Signature (gold), Privé (dark ink)
const badgeStyles: Record<string, string> = {
  Seasonal: "bg-[#7c6f5a] text-white",
  Signature: "bg-brand-gold text-white",
  "Privé": "bg-brand-ink text-white",
};

export default function OffersPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f7f1e7] text-brand-ink">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#17120e] text-white">
          <div className="absolute inset-0">
            <Image
              src="/indiranagar/all/tpi_pictures_low_res_terrace_7.jpg"
              alt="The Pentouz exclusive offers"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.92)_0%,rgba(10,8,6,0.5)_50%,rgba(10,8,6,0.88)_100%)]" />
          </div>

          <div className="relative mx-auto max-w-[1480px] px-5 pb-20 pt-36 sm:px-8 lg:px-14 lg:pb-28 lg:pt-48">
            <div className="max-w-3xl">
              <p className="luxury-kicker text-white/60 animate-fade-in-up">
                Exclusive offers
              </p>
              <h1 className="luxury-hero-title mt-6 text-white animate-fade-in-up [animation-delay:120ms]">
                Special Offers
              </h1>
              <p className="luxury-copy mt-8 max-w-2xl text-white/72 animate-fade-in-up [animation-delay:220ms]">
                Seasonal promotions, signature experiences, and Priv&#233; member benefits &mdash; curated to make every Pentouz stay exceptional.
              </p>
            </div>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="bg-[#fbf7f0]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {offers.map((offer, index) => (
                <div
                  key={offer.title}
                  className="group flex flex-col overflow-hidden bg-white shadow-[0_24px_80px_rgba(18,15,12,0.08)] animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Offer header bar with badge */}
                  <div
                    className={`px-7 py-4 flex items-center justify-between ${
                      badgeStyles[offer.badge] ?? "bg-brand-ink text-white"
                    }`}
                  >
                    <span className="text-[9px] uppercase tracking-[0.22em] font-medium">
                      {offer.badge}
                    </span>
                    <div className="w-8 h-px bg-white/30" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-8 sm:p-10">
                    <h2 className="font-display text-3xl font-light leading-tight text-brand-ink group-hover:text-brand-gold transition-colors duration-500">
                      {offer.title}
                    </h2>
                    <div className="mt-4 mb-8 w-12 h-px bg-brand-gold" />
                    <p className="text-base leading-8 text-brand-body flex-1">
                      {offer.copy}
                    </p>

                    <div className="mt-10 flex flex-col gap-3">
                      <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-ink px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-border px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Direct Benefits */}
        <section className="bg-[#f3eadf]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div className="animate-fade-in-up">
                <p className="luxury-kicker text-brand-accent">Book direct</p>
                <h2 className="luxury-section-title mt-5">
                  A more personal way to arrange your stay.
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {directBenefits.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className="luxury-panel bg-white animate-fade-in-up"
                    style={{ animationDelay: `${100 + index * 100}ms` }}
                  >
                    <h3 className="font-display text-2xl font-light text-brand-ink">
                      {benefit.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-brand-body">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Privé CTA Banner */}
        <section className="bg-[#17120e] text-white">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-14 lg:py-24">
            <div>
              <p className="luxury-kicker text-brand-gold">
                Priv&#233; membership
              </p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl">
                Unlock exclusive access and 15% savings.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Join the Priv&#233; circle for priority reservations, complimentary upgrades, and invitation-only events across all Pentouz properties.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:justify-end">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-white"
              >
                Book Your Stay
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                Contact Concierge
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
