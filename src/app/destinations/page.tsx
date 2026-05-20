import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import { destinations } from "@/data/content";
import type { Metadata } from "next";
import { withSiteUrl } from "@/lib/site";

const heroImages = [
  "/lavelle-road/all/terrace_1.jpg",
  "/lavelle-road/all/patio_1.jpg",
  "/indiranagar/all/06._terrace_01._terrace.jpg",
  "/fernhill/all/59_property_top_view.jpg",
  "/fernhill/all/44_swimming_pool.jpg",
  "/ooty/all/24._view.jpeg",
  "/ooty/all/22._lawn.jpeg",
];

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
      <main className="bg-brand-cream text-brand-ink">
        {/* Hero Section */}
        <HeroSlider images={heroImages} alt="The Pentouz collection">
          <div className="mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-24 pt-48 sm:px-8 lg:px-14">
            <div className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-end">
              <div className="max-w-5xl">
                <p className="text-[10px] font-ui uppercase tracking-[0.3em] text-brand-gold mb-6 animate-fade-in-up">The Pentouz Collection</p>
                <h1 className="font-display font-light leading-[1.05] text-white animate-fade-in-up [animation-delay:120ms]" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', letterSpacing: '-0.025em' }}>
                  Stays with their own mood, their own setting, and their own reason to choose them.
                </h1>
                <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl animate-fade-in-up [animation-delay:220ms]">
                  The collection is intentionally small. Each property is meant to feel distinct, from boutique city stay to private penthouse to quieter hillside retreat.
                </p>
              </div>

              {/* Collection Notes Card */}
              <div className="xl:justify-self-end xl:max-w-[380px] animate-fade-in-up [animation-delay:320ms]">
                <div className="border border-white/10 bg-white/[0.05] backdrop-blur-md text-white p-6">
                  <p className="text-[10px] font-ui uppercase tracking-[0.2em] text-brand-gold font-medium">Collection Notes</p>
                  <div className="mt-5 space-y-4">
                    {collectionNotes.map((note, i) => (
                      <p key={i} className="border-b border-white/[0.08] pb-4 font-body text-sm leading-relaxed text-white/65 last:border-b-0 last:pb-0 last:mb-0 last:mt-0">
                        {note}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeroSlider>

        {/* Property Listings */}
        <section className="bg-brand-linen">
          <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 lg:px-14 lg:py-36 space-y-20 lg:space-y-32">
            {destinations.map((destination, index) => (
              <article
                key={destination.slug}
                className={`grid gap-8 lg:gap-14 items-center ${index % 2 === 1 ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_0.9fr]"}`}
              >
                {/* Image */}
                <Link
                  href={`/destinations/${destination.slug}`}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="group relative overflow-hidden shadow-card transition-all duration-700 ease-luxury hover:shadow-card-hover">
                    <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden">
                      <Image
                        src={destination.heroImage || destination.image}
                        alt={destination.title}
                        fill
                        priority={index === 0}
                        className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                      {/* Subtle overlay */}
                      <div className="absolute inset-0 overlay-gradient-subtle" />
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="editorial-overline text-brand-accent">{destination.subtitle}</p>
                  <h2 className="mt-5 font-display font-light leading-tight text-brand-ink sm:text-5xl lg:text-6xl" style={{ letterSpacing: '-0.02em' }}>
                    {destination.title}
                  </h2>
                  <p className="mt-6 max-w-xl font-body text-base sm:text-lg leading-[1.8] text-brand-body">
                    {destination.copy}
                  </p>

                  {/* Features */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {destination.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="border border-brand-border/50 px-4 py-2 font-ui text-[10px] uppercase tracking-[0.12em] text-brand-muted">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/destinations/${destination.slug}`}
                      className="btn-luxury"
                    >
                      Explore Property
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </Link>
                    <Link
                      href={`/destinations/${destination.slug}/living`}
                      className="btn-outline"
                    >
                      View Living
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Collection Links */}
        <section className="bg-brand-dark text-white">
          <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
            <div className="grid gap-5 md:grid-cols-3">
              {collectionLinks.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 transition-all duration-500 ease-luxury hover:-translate-y-1 hover:border-brand-gold/30 hover:bg-white/[0.04] animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="font-display text-2xl sm:text-3xl font-light text-white group-hover:text-brand-gold transition-colors duration-300">{item.title}</p>
                  <p className="mt-4 font-body text-sm leading-relaxed text-white/60">{item.text}</p>
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
