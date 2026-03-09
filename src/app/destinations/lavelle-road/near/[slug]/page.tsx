import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  getLavelleSeoPage,
  getRelatedLavelleSeoPages,
  lavelleSeoPages,
} from "@/data/lavelleSeoPages";
import { withSiteUrl } from "@/lib/site";

const categoryCopy = {
  "Legal & Courts": {
    pain: "Legal travel is usually date-sensitive and cannot afford delays from long commutes.",
    fit: "Lavelle Road is preferred by legal professionals because it keeps court days structured, efficient, and less stressful.",
  },
  "Government Offices": {
    pain: "Government appointments, documentation, and office meetings often run on rigid time windows.",
    fit: "A central Lavelle Road stay helps reduce transfer uncertainty and gives flexible city access across the workday.",
  },
  "Business Districts": {
    pain: "Business trips require predictable movement between meetings, dining, and evening networking zones.",
    fit: "The Pentouz Lavelle Road is positioned for executives who want premium comfort with quick access to central Bengaluru business circuits.",
  },
  "Healthcare & Services": {
    pain: "Medical and service-related travel often needs calm spaces, reliable support, and adaptable schedules.",
    fit: "Lavelle Road offers an upscale, quieter base for attendants and families who need stability during city appointments.",
  },
  "Landmarks & Culture": {
    pain: "Leisure travelers want a central, premium base that cuts travel time to key attractions.",
    fit: "From Lavelle Road, guests can plan efficient sightseeing days while returning to a refined, peaceful stay environment.",
  },
  "Transport Hubs": {
    pain: "Transit-driven travelers need smooth arrivals, quick transfers, and a dependable city center anchor.",
    fit: "The property supports short and extended itineraries with strong access to metro, rail, and airport routes.",
  },
} as const;

type Params = { slug: string };

export function generateStaticParams() {
  return lavelleSeoPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const page = getLavelleSeoPage(params.slug);
  if (!page) {
    return {
      title: "Page Not Found | The Pentouz Lavelle Road",
    };
  }

  const title = `Hotel Near ${page.place} | The Pentouz Lavelle Road, Bengaluru`;
  const description = `Looking for a hotel near ${page.place}? The Pentouz Lavelle Road is a premium central stay for ${page.audience}. Explore room options, location benefits, and direct booking.`;
  const canonicalPath = `/destinations/lavelle-road/near/${page.slug}`;

  return {
    title,
    description,
    keywords: [
      page.keyword,
      `hotel near ${page.place}`,
      "The Pentouz Lavelle Road",
      "central Bangalore hotel",
      "premium stay in Bengaluru",
    ],
    alternates: {
      canonical: withSiteUrl(canonicalPath),
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: withSiteUrl(canonicalPath),
      images: [withSiteUrl("/lavelle-road/terrace-1.jpg")],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [withSiteUrl("/lavelle-road/terrace-1.jpg")],
    },
  };
}

export default function LavelleNearPlacePage({ params }: { params: Params }) {
  const page = getLavelleSeoPage(params.slug);
  if (!page) notFound();

  const relatedPages = getRelatedLavelleSeoPages(page.slug, 6);
  const copy = categoryCopy[page.category];
  const pageUrl = withSiteUrl(`/destinations/lavelle-road/near/${page.slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "The Pentouz @ Lavelle Road",
    url: withSiteUrl("/destinations/lavelle-road"),
    image: withSiteUrl("/lavelle-road/terrace-1.jpg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: "46, 6th Cross, Lavelle Road",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    areaServed: page.place,
    sameAs: [pageUrl],
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="bg-[#f8f7f5] min-h-screen">
        <section className="bg-brand-ink text-white py-20 sm:py-24 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4">
              {page.category}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light max-w-4xl">
              Hotel Near {page.place}
            </h1>
            <p className="mt-6 text-sm sm:text-base text-white/85 max-w-4xl leading-relaxed">
              If you are searching for <strong>{page.keyword}</strong>, The Pentouz @ Lavelle Road offers a premium,
              city-central stay for {page.audience}. This page is designed to help guests compare location intent,
              travel practicality, and stay quality before booking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
              <Link href="/destinations/lavelle-road" className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                View Lavelle Property
              </Link>
              <Link href="/destinations/lavelle-road/living" className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                View Room Types
              </Link>
              <a
                href="https://bookmystay.io/rooms/37853/2025-12-23/2025-12-24/2/0?utm_source=brandWebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gold text-white px-4 py-2 hover:bg-brand-goldLight transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 bg-white border-b border-brand-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-6">
            <article className="border border-brand-border p-6 sm:p-7">
              <h2 className="font-display text-2xl font-light mb-4">Why This Search Intent Matters</h2>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed">{copy.pain}</p>
              <p className="mt-4 text-sm sm:text-base text-brand-body leading-relaxed">
                Guests using this keyword usually prioritize reliability, commute control, and responsive support from the stay team.
              </p>
            </article>
            <article className="border border-brand-border p-6 sm:p-7">
              <h2 className="font-display text-2xl font-light mb-4">Why The Pentouz Lavelle Road Fits</h2>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed">{copy.fit}</p>
              <p className="mt-4 text-sm sm:text-base text-brand-body leading-relaxed">
                Our rooms support both short-notice trips and planned city schedules, with direct booking support and premium hospitality standards.
              </p>
            </article>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-5">Recommended Stay Plan for {page.place} Visitors</h2>
            <div className="bg-white border border-brand-border p-6 sm:p-8">
              <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                Start your day with a focused commute plan, complete your primary appointment near {page.place}, and return to Lavelle Road for recovery,
                calls, or evening meetings. This location-first strategy works especially well for {page.audience}, who typically need both productivity and comfort
                in one stay experience.
              </p>
              <p className="mt-4 text-sm sm:text-base text-brand-body leading-relaxed">
                Guests often choose this property for central city positioning, reliable service communication, and easy access to premium dining and work-friendly
                zones around Lavelle Road, UB City, MG Road, and adjoining commercial corridors.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 bg-white border-y border-brand-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">Related Bengaluru Location Guides</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {relatedPages.map((related) => (
                <article key={related.slug} className="border border-brand-border p-5 hover:shadow-lg transition-shadow">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-brand-gold mb-2">{related.category}</p>
                  <h3 className="font-display text-lg font-light mb-2">
                    <Link href={`/destinations/lavelle-road/near/${related.slug}`} className="hover:text-brand-gold transition-colors">
                      Hotel Near {related.place}
                    </Link>
                  </h3>
                  <p className="text-sm text-brand-body">{related.keyword}</p>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/destinations/lavelle-road/near" className="inline-flex text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-gold transition-colors">
                View All Location Pages
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-brand-ink text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light mb-5">
              Booking a Stay Near {page.place}
            </h2>
            <p className="text-sm sm:text-base text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
              The Pentouz @ Lavelle Road is built for central Bengaluru itineraries. If your trip includes {page.place}, book directly for faster assistance,
              stay planning, and room guidance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
              <Link href="/destinations/lavelle-road" className="border border-white/35 px-5 py-3 hover:bg-white hover:text-brand-ink transition-colors">
                Lavelle Property Details
              </Link>
              <a href="https://bookmystay.io/rooms/37853/2025-12-23/2025-12-24/2/0?utm_source=brandWebsite" target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-white px-5 py-3 hover:bg-brand-goldLight transition-colors">
                Reserve Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
