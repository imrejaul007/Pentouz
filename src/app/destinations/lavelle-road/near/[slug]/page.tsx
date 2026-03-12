import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditorialTrustBar from "@/components/EditorialTrustBar";
import {
  getLavelleSeoPage,
  getRelatedLavelleSeoPages,
  lavelleSeoPages,
} from "@/data/lavelleSeoPages";
import { getLavelleEditorialOverride } from "@/data/lavelleEditorialOverrides";
import { withSiteUrl } from "@/lib/site";

const categoryCopy = {
  "Legal & Courts": {
    travelReason: "Legal proceedings often require early starts and follow-up visits across multiple days.",
    whyLavelle: "Lavelle Road offers a convenient base near Bengaluru's courts with comfortable rooms for rest and document preparation.",
  },
  "Government Offices": {
    travelReason: "Government appointments and documentation visits need reliable access and predictable timing.",
    whyLavelle: "A central location on Lavelle Road helps reduce travel uncertainty and provides easy access to key administrative areas.",
  },
  "Business Districts": {
    travelReason: "Business trips require smooth movement between meetings, dining, and evening networking.",
    whyLavelle: "The Pentouz Lavelle Road offers premium comfort with quick access to UB City, MG Road, and central Bengaluru business areas.",
  },
  "Healthcare & Services": {
    travelReason: "Medical visits and service appointments require calm spaces, reliable support, and flexible schedules.",
    whyLavelle: "Lavelle Road provides an upscale, quieter base for visitors who need stability during city appointments.",
  },
  "Landmarks & Culture": {
    travelReason: "Leisure travelers want a premium base close to attractions with minimal travel time.",
    whyLavelle: "From Lavelle Road, guests can efficiently visit Bengaluru's landmarks while returning to a refined, peaceful stay.",
  },
  "Transport Hubs": {
    travelReason: "Transit-focused travelers need easy arrivals, quick transfers, and a dependable city center location.",
    whyLavelle: "The property offers strong access to metro, rail, and airport routes for both short and extended stays.",
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
      `Finding the right hotel near ${page.place} comes down to convenience and comfort during your visit.`,
      `When visiting ${page.place}, staying nearby makes your day-to-day plans much easier.`,
      `For a trip to ${page.place}, location matters as much as room quality.`,
    ],
    seed,
    1
  );

  const commuteAngle = pickVariant(
    [
      `From Lavelle Road, reaching ${page.place} is straightforward without stretching your day too thin.`,
      `Lavelle Road serves as an excellent base for visits to ${page.place}, especially when timing matters.`,
      `For appointments and events near ${page.place}, staying central helps reduce travel time.`,
    ],
    seed,
    2
  );

  const qualityAngle = pickVariant(
    [
      "Beyond location, a comfortable stay with reliable support makes any trip more manageable.",
      "When schedules are unpredictable, having a premium, dependable place to return to becomes valuable.",
      "A well-located stay with practical amenities helps when plans include long days and consecutive commitments.",
    ],
    seed,
    3
  );

  const planningTips = [
    `Check reporting times at ${page.place} in advance and keep buffer for traffic variations.`,
    "Use a central stay to split your day between appointments and rest.",
    "Keep key documents, device chargers, and essentials organized the night before.",
    "If your itinerary may extend, choose a room that supports both work and relaxation.",
  ];

  const longFormParagraphs = [
    `${introLead} At The Pentouz @ Lavelle Road, you get a city-central location, refined room experience, and dependable support for visits near ${page.place}.`,
    `${commuteAngle} This works well for ${page.audience}, who typically want shorter commutes, easier planning, and a reliable evening base. The property is positioned near key commercial and dining corridors, so you can complete your day's tasks and still have flexibility.`,
    `${qualityAngle} When choosing a hotel near ${page.place}, it helps to consider location, room comfort, service reliability, and easy booking. The Pentouz Lavelle Road is designed to provide all these practical advantages.`,
  ];

  const faqs: FaqItem[] = [
    {
      question: `Is The Pentouz convenient for visiting ${page.place}?`,
      answer: `Yes. The Pentouz @ Lavelle Road is well-positioned for ${page.audience} who need access to ${page.place}, with premium rooms and direct booking support.`,
    },
    {
      question: `Who typically stays here when visiting ${page.place}?`,
      answer: `Most bookings come from ${page.audience} who want central Bengaluru access, responsive assistance, and a comfortable base for their plans.`,
    },
    {
      question: `Can I book directly?`,
      answer: "Yes. You can use the direct booking link on this page for faster reservations.",
    },
    {
      question: `Is Lavelle Road well-connected for business and appointments?`,
      answer: "Lavelle Road is one of Bengaluru's most practical central areas for managing meetings, official work, and time-sensitive visits.",
    },
    {
      question: `What should I consider before booking?`,
      answer: "Consider location proximity, room comfort, and how quickly you can reach key areas from the property.",
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
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: withSiteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Lavelle Road Nearby",
            item: withSiteUrl("/destinations/lavelle-road/near"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.place,
            item: pageUrl,
          },
        ],
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
                  If you're visiting {page.place}, The Pentouz @ Lavelle Road offers a premium,
                  city-central stay for {page.audience}. This guide covers location benefits,
                  travel planning, and booking options.
                </>
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
              <Link href="/destinations/lavelle-road" className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                View Lavelle Property
              </Link>
              <Link href={`/travel/near/${page.slug}`} className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                Travel Guides
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
              <h2 className="font-display text-2xl font-light mb-4">Why Location Matters</h2>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed">{copy.travelReason}</p>
            </article>
            <article className="border border-brand-border p-6 sm:p-7">
              <h2 className="font-display text-2xl font-light mb-4">Why The Pentouz Lavelle Road</h2>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed">{copy.whyLavelle}</p>
              <p className="mt-4 text-sm sm:text-base text-brand-body leading-relaxed">
                Our rooms support both short-notice trips and planned city schedules, with direct booking support and premium hospitality standards.
              </p>
            </article>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-5">Planning Your Visit Near {page.place}</h2>
            <div className="bg-white border border-brand-border p-6 sm:p-8">
              <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                Start your day with a clear plan, complete your primary appointment near {page.place}, and return to Lavelle Road for rest,
                calls, or evening meetings. This approach works especially well for {page.audience}, who typically need both productivity and comfort
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
              What to Expect When Staying Near {page.place}
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
              <h2 className="font-display text-2xl font-light mb-4">Planning Tips</h2>
              <ul className="space-y-3 text-sm sm:text-base text-brand-body leading-relaxed list-disc list-inside">
                {narrative.planningTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </article>
            <article className="bg-white border border-brand-border p-6 sm:p-7">
              <h2 className="font-display text-2xl font-light mb-4">Choosing the Right Stay</h2>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                For visits near {page.place}, location proximity is usually the first priority, followed by room comfort, reliable communication,
                and a smooth booking experience. The Pentouz Lavelle Road is designed around these practical priorities.
              </p>
              <p className="mt-4 text-sm sm:text-base text-brand-body leading-relaxed">
                If your trip around {page.place} may involve schedule changes, choosing a central base with easy access to core Bengaluru
                routes can save valuable time.
              </p>
            </article>
          </div>
        </section>

        <section className="py-14 sm:py-18 bg-white border-y border-brand-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-5">
              Explore More Guides Near {page.place}
            </h2>
            <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6 max-w-4xl">
              Find additional travel guidance covering commute strategies, short-stay tips, extended-stay planning, and local area recommendations around {page.place}.
            </p>
            <Link href={`/travel/near/${page.slug}`} className="inline-flex mb-8 text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-gold transition-colors">
              View All Travel Guides
            </Link>

            <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">Related Bengaluru Locations</h2>
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
              Book Your Stay Near {page.place}
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

        <EditorialTrustBar />
      </main>
      <Footer />
    </>
  );
}
