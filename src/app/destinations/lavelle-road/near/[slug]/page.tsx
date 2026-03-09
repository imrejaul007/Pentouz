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
import { getLavelleEditorialOverride } from "@/data/lavelleEditorialOverrides";
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

interface FaqItem {
  question: string;
  answer: string;
}

function hashSeed(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function pickVariant<T>(items: readonly T[], seed: number, offset = 0) {
  return items[(seed + offset) % items.length];
}

function getPageNarrative(page: NonNullable<ReturnType<typeof getLavelleSeoPage>>) {
  const seed = hashSeed(page.slug);

  const introLead = pickVariant(
    [
      "Guests searching this route usually want location certainty before they confirm a stay.",
      "This keyword is intent-rich because travelers are choosing convenience over generic city stays.",
      "Most users on this query are not browsing casually, they are solving a real schedule problem.",
    ],
    seed,
    1
  );

  const commuteAngle = pickVariant(
    [
      `From Lavelle Road, guests can plan efficient travel windows around ${page.place} without over-stretching the day.`,
      `Lavelle Road works as a strong base for visits to ${page.place}, especially when timing and reliability matter.`,
      `For appointments and events near ${page.place}, central positioning helps reduce avoidable travel friction.`,
    ],
    seed,
    2
  );

  const qualityAngle = pickVariant(
    [
      "Instead of choosing only by price, many guests prefer a premium base that supports rest, work, and responsive support.",
      "Travelers in this segment often choose comfort and service consistency because schedules are hard to predict.",
      "A premium stay with practical amenities becomes important when plans include long days and back-to-back commitments.",
    ],
    seed,
    3
  );

  const planningTips = [
    `Confirm your ${page.place} reporting time in advance and keep a time buffer for city traffic variations.`,
    "Use a central stay to split your day into high-focus appointments and low-stress recovery windows.",
    "Keep key documents, device chargers, and meeting essentials organized the night before.",
    "If your itinerary may extend, choose a room setup that supports both work calls and comfortable downtime.",
  ];

  const longFormParagraphs = [
    `Searching for ${page.keyword} usually means a guest already knows where they need to be and now needs the right stay partner. ${introLead} At The Pentouz @ Lavelle Road, this is addressed through a city-central location, refined room experience, and dependable hospitality support for time-sensitive travel days.`,
    `${commuteAngle} This matters for ${page.audience}, who typically optimize for shorter transfers, easier day planning, and a reliable evening base. The property is also positioned near key commercial and dining corridors, so guests can complete obligations and still maintain schedule flexibility.`,
    `${qualityAngle} That is why this page focuses on practical decision factors: location intent, stay comfort, service predictability, and direct booking access. When travelers compare options for ${page.place}, this balanced approach often leads to better outcomes than choosing a generic hotel listing.`,
  ];

  const faqs: FaqItem[] = [
    {
      question: `Is The Pentouz a good hotel near ${page.place}?`,
      answer: `Yes. The Pentouz @ Lavelle Road is a strong fit for travelers who need central Bengaluru access for visits to ${page.place}, with premium rooms and practical booking support.`,
    },
    {
      question: `Who usually books this stay for ${page.place}?`,
      answer: `Most bookings come from ${page.audience} who want predictable city movement, responsive assistance, and a comfortable base for short or extended schedules.`,
    },
    {
      question: `Can I book directly for a visit near ${page.place}?`,
      answer: "Yes. You can use the direct booking link on this page for faster reservation flow and property-specific support.",
    },
    {
      question: `Is Lavelle Road suitable for business and appointment-focused travel?`,
      answer: "Lavelle Road is one of Bengaluru's most practical central zones for travelers managing meetings, official work, and time-sensitive plans.",
    },
    {
      question: `What should I check before booking a hotel near ${page.place}?`,
      answer: "Check location relevance, room comfort, flexible support, and how quickly you can reach key city corridors from the property.",
    },
  ];

  return {
    planningTips,
    longFormParagraphs,
    faqs,
  };
}

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
  const editorial = getLavelleEditorialOverride(page.slug);
  const narrative = editorial
    ? {
        planningTips: editorial.planningTips,
        longFormParagraphs: editorial.longFormParagraphs,
        faqs: editorial.faqs,
      }
    : getPageNarrative(page);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
      },
      {
        "@type": "FAQPage",
        mainEntity: narrative.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
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
              {editorial ? (
                <>{editorial.heroIntro}</>
              ) : (
                <>
                  If you are searching for <strong>{page.keyword}</strong>, The Pentouz @ Lavelle Road offers a premium,
                  city-central stay for {page.audience}. This page is designed to help guests compare location intent,
                  travel practicality, and stay quality before booking.
                </>
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
              <Link href="/destinations/lavelle-road" className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                View Lavelle Property
              </Link>
              <Link href={`/travel/near/${page.slug}`} className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                6 Article Cluster
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
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">
              Human-Centered Guide: Staying Near {page.place}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-brand-body leading-relaxed">
              {narrative.longFormParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-6">
            <article className="bg-white border border-brand-border p-6 sm:p-7">
              <h2 className="font-display text-2xl font-light mb-4">Pre-Arrival Planning Checklist</h2>
              <ul className="space-y-3 text-sm sm:text-base text-brand-body leading-relaxed list-disc list-inside">
                {narrative.planningTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </article>
            <article className="bg-white border border-brand-border p-6 sm:p-7">
              <h2 className="font-display text-2xl font-light mb-4">Decision Factors That Improve Stay Quality</h2>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                For this keyword, travelers usually rank location relevance first, followed by room comfort, reliable communication,
                and smooth booking flow. The Pentouz Lavelle Road is designed around these practical priorities rather than generic
                one-size-fits-all positioning.
              </p>
              <p className="mt-4 text-sm sm:text-base text-brand-body leading-relaxed">
                If your trip around {page.place} may involve schedule changes, choose a central base with easy access to core Bengaluru
                routes. That flexibility often saves more time than short-term rate differences.
              </p>
            </article>
          </div>
        </section>

        <section className="py-14 sm:py-18 bg-white border-y border-brand-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-5">
              Expand This Topic with Interconnected Travel Articles
            </h2>
            <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6 max-w-4xl">
              For broader keyword depth, this page is supported by a dedicated travel cluster covering commute guidance,
              short-stay strategy, extended-stay planning, and local area utility around {page.place}.
            </p>
            <Link href={`/travel/near/${page.slug}`} className="inline-flex mb-8 text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-gold transition-colors">
              Open Travel Cluster for {page.place}
            </Link>

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

        <section className="py-14 sm:py-18 bg-white border-t border-brand-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">
              Frequently Asked Questions: Hotel Near {page.place}
            </h2>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
              {narrative.faqs.map((faq) => (
                <article key={faq.question} className="border border-brand-border p-5 sm:p-6 bg-[#f8f7f5]">
                  <h3 className="font-display text-lg font-light mb-2">{faq.question}</h3>
                  <p className="text-sm text-brand-body leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
