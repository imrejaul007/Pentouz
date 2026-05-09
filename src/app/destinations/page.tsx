import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import { destinations } from "@/data/content";

const heroImages = [
  "/lavelle-road/all/terrace_1.jpg",
  "/lavelle-road/all/patio_1.jpg",
  "/indiranagar/all/06._terrace_01._terrace.jpg",
  "/fernhill/all/59_property_top_view.jpg",
  "/fernhill/all/44_swimming_pool.jpg",
  "/ooty/all/24._view.jpeg",
  "/ooty/all/22._lawn.jpeg",
];

import type { Metadata } from "next";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Destinations | The Pentouz Collection",
  description:
    "Explore The Pentouz collection: boutique city stays in Bangalore, private penthouse in Indiranagar, hillside retreat in Chikmagalur, and scenic getaway in Ooty.",
  keywords: [
    "The Pentouz destinations",
    "luxury stays Bangalore",
    "boutique hotels Karnataka",
    "Chikmagalur accommodation",
    "Ooty retreat",
    "Indiranagar penthouse",
  ],
  openGraph: {
    title: "Destinations | The Pentouz Collection",
    description:
      "Explore The Pentouz collection: boutique city stays in Bangalore, private penthouse in Indiranagar, hillside retreat in Chikmagalur, and scenic getaway in Ooty.",
    url: withSiteUrl("/destinations"),
    siteName: "The Pentouz",
    images: [
      {
        url: withSiteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "The Pentouz Collection - Luxury Destinations",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Destinations | The Pentouz Collection",
    description:
      "Explore boutique luxury stays across Bangalore, Chikmagalur, and Ooty.",
  },
  alternates: {
    canonical: withSiteUrl("/destinations"),
  },
};

const collectionNotes = [
  "Lavelle Road brings central Bangalore access with a calmer boutique feel.",
  "Indiranagar offers a true private penthouse stay with more room to settle in.",
  "The Pentouz Hillside Chikmagalur anchors the collection with the warmth of a private homestay in coffee country.",
  "Ooty slows everything down with landscape, air, and retreat atmosphere.",
];

const collectionLinks = [
  {
    title: "Gallery",
    href: "/gallery",
    text: "Browse the strongest images across the collection.",
  },
  {
    title: "Experiences",
    href: "/experiences",
    text: "See how each stay connects to its location and mood.",
  },
  {
    title: "Contact",
    href: "/contact",
    text: "Speak directly with the reservations team.",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f7f1e7] text-brand-ink">
        <HeroSlider images={heroImages} alt="The Pentouz collection">
          <div className="mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-24 pt-48 sm:px-8 lg:px-14">
            <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-end">
              <div className="max-w-5xl">
                <p className="text-[10px] uppercase tracking-[0.32em] text-brand-gold mb-4 animate-fade-in-up">The Pentouz Collection</p>
                <h1 className="font-display text-[2rem] font-light leading-[1] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] text-white animate-fade-in-up [animation-delay:120ms]">
                  Stays with their own mood, their own setting, and their own reason to choose them.
                </h1>
                <p className="mt-6 text-base leading-7 text-white/76 max-w-2xl animate-fade-in-up [animation-delay:220ms]">
                  The collection is intentionally small. Each property is meant to feel distinct, from boutique city stay to private penthouse to quieter hillside retreat.
                </p>
              </div>

              <div className="xl:justify-self-end xl:max-w-[400px] animate-fade-in-up [animation-delay:320ms]">
                <div className="border border-white/15 bg-white/[0.08] text-white p-6 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Collection Notes</p>
                  <div className="mt-6 space-y-4">
                    {collectionNotes.map((note) => (
                      <p key={note} className="border-b border-white/10 pb-4 text-sm leading-6 text-white/72 last:border-b-0 last:pb-0 last:mb-0">
                        {note}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeroSlider>

        <section className="bg-[#fbf7f0]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28 space-y-20 lg:space-y-24">
            {destinations.map((destination, index) => (
              <article
                key={destination.slug}
                className={`grid gap-8 lg:gap-14 items-center ${index % 2 === 1 ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_0.9fr]"}`}
              >
                <Link
                  href={`/destinations/${destination.slug}`}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="group relative overflow-hidden bg-[#11100f] shadow-[0_30px_90px_rgba(18,15,12,0.12)]">
                    <div className="relative aspect-[16/11] overflow-hidden lg:aspect-[5/4]">
                      <Image
                        src={destination.heroImage || destination.image}
                        alt={destination.title}
                        fill
                        priority={index === 0}
                        className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    </div>
                  </div>
                </Link>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="luxury-kicker text-brand-accent">{destination.subtitle}</p>
                  <h2 className="mt-5 font-display text-4xl font-light leading-tight text-brand-ink sm:text-5xl lg:text-6xl">
                    {destination.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-8 text-brand-body sm:text-lg">
                    {destination.copy}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {destination.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="rounded-full border border-brand-border px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-brand-muted">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      href={`/destinations/${destination.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-black"
                    >
                      Explore Property
                      <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
                    </Link>
                    <Link
                      href={`/destinations/${destination.slug}/living`}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-ink px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-ink hover:text-white"
                    >
                      View Living
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#17120e] text-white">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
            <div className="grid gap-5 md:grid-cols-3">
              {collectionLinks.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/40 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="font-display text-3xl font-light text-white">{item.title}</p>
                  <p className="mt-4 text-sm leading-7 text-white/70">{item.text}</p>
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
