import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditorialTrustBar from "@/components/EditorialTrustBar";
import {
  type GenericGuide,
  genericSurroundingGuides,
  getGenericGuide,
} from "@/data/lavelleTravelContent";
import { lavelleSeoPages } from "@/data/lavelleSeoPages";
import { withSiteUrl } from "@/lib/site";

type Params = { slug: string };

function getGuideIntentLabel(guide: GenericGuide) {
  const query = `${guide.title} ${guide.subtitle} ${guide.keywords.join(" ")}`.toLowerCase();
  if (query.includes("court") || query.includes("advocate") || query.includes("high court")) {
    return "legal visits";
  }
  if (query.includes("hospital") || query.includes("medical")) {
    return "medical and support travel";
  }
  if (query.includes("airport") || query.includes("metro") || query.includes("station")) {
    return "transit connections";
  }
  if (query.includes("business") || query.includes("executive") || query.includes("meeting")) {
    return "business itinerary";
  }
  return "city exploration";
}

function buildGuideFaqs(guide: GenericGuide) {
  const intent = getGuideIntentLabel(guide);
  const keyword = guide.keywords[0] || `travel near ${guide.focusArea}`;

  return [
    {
      question: `Is this guide useful for visiting "${keyword}"?`,
      answer: `Yes. The guide covers practical planning for ${intent} with routing from a Lavelle Road stay.`,
    },
    {
      question: `How early should I start a day planned around ${guide.focusArea}?`,
      answer: `Start early on busy days and keep 20-40 minute transfer buffers between major stops around ${guide.focusArea}.`,
    },
    {
      question: `Can I combine this ${guide.focusArea} guide with The Pentouz Lavelle Road booking?`,
      answer:
        "Yes. This page supports direct Lavelle Road booking with practical location planning for both short and extended stays.",
    },
    {
      question: `What should I prioritize first when planning near ${guide.focusArea}?`,
      answer: guide.highlights[0] || "Focus on one key stop first, then sequence supporting stops around time and distance efficiency.",
    },
    {
      question: `Which traveler profile benefits most from this ${guide.focusArea} route?`,
      answer: `Guests planning ${intent} get the best value when using central positioning and pre-planned transit windows.`,
    },
  ];
}

export function generateStaticParams() {
  return genericSurroundingGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGenericGuide(slug);
  if (!guide) return { title: "Guide Not Found | The Pentouz Travel" };

  const path = `/travel/guides/${guide.slug}`;

  return {
    title: `${guide.title} | The Pentouz Travel`,
    description: guide.subtitle,
    keywords: [...guide.keywords, "The Pentouz Lavelle Road", "Bengaluru travel guide"],
    alternates: {
      canonical: withSiteUrl(path),
    },
    openGraph: {
      title: `${guide.title} | The Pentouz Travel`,
      description: guide.subtitle,
      type: "article",
      url: withSiteUrl(path),
      images: [withSiteUrl("/lavelle-road/terrace-1.jpg")],
    },
  };
}

export default async function GenericGuidePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const guide = getGenericGuide(slug);
  if (!guide) notFound();

  const related = genericSurroundingGuides.filter((item) => item.slug !== guide.slug).slice(0, 6);
  const matchedKeywordPages = lavelleSeoPages.filter((page) => {
    const query = `${guide.title} ${guide.subtitle} ${guide.keywords.join(" ")}`.toLowerCase();
    return query.includes(page.place.toLowerCase()) || query.includes(page.keyword.toLowerCase());
  });
  const relatedKeywordPages =
    matchedKeywordPages.length > 0
      ? matchedKeywordPages.slice(0, 6)
      : lavelleSeoPages.slice(0, 6);
  const pageUrl = withSiteUrl(`/travel/guides/${guide.slug}`);

  const faqItems = buildGuideFaqs(guide);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.subtitle,
        mainEntityOfPage: pageUrl,
        about: [guide.focusArea, "Bengaluru Travel", "Lavelle Road"],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
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
            name: "Travel",
            item: withSiteUrl("/travel"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: guide.title,
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
              Area Guide
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light max-w-4xl">
              {guide.title}
            </h1>
            <p className="mt-6 text-sm sm:text-base text-white/85 max-w-4xl leading-relaxed">
              {guide.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
              <Link href="/travel" className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                Travel Hub
              </Link>
              <Link href="/destinations/lavelle-road" className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                Lavelle Property
              </Link>
              <a href="https://bookmystay.io/rooms/37853/2025-12-23/2025-12-24/2/0?utm_source=brandWebsite" target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-white px-4 py-2 hover:bg-brand-goldLight transition-colors">
                Book Now
              </a>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 bg-white border-b border-brand-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-6">
            <article className="border border-brand-border p-6 sm:p-7">
              <h2 className="font-display text-2xl font-light mb-4">Key Highlights</h2>
              <ul className="space-y-3 text-sm sm:text-base text-brand-body leading-relaxed list-disc list-inside">
                {guide.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="border border-brand-border p-6 sm:p-7">
              <h2 className="font-display text-2xl font-light mb-4">Practical Tips</h2>
              <ul className="space-y-3 text-sm sm:text-base text-brand-body leading-relaxed list-disc list-inside">
                {guide.tips.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">Related Area Guides</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {related.map((item) => (
                <article key={item.slug} className="bg-white border border-brand-border p-5 hover:shadow-lg transition-shadow">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-brand-gold mb-2">{item.focusArea}</p>
                  <h3 className="font-display text-lg font-light mb-2">
                    <Link href={`/travel/guides/${item.slug}`} className="hover:text-brand-gold transition-colors">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-brand-body">{item.subtitle}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {relatedKeywordPages.length > 0 ? (
          <section className="py-14 sm:py-18 bg-white border-y border-brand-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
              <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">Related Stay Locations Near Lavelle Road</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {relatedKeywordPages.map((page) => (
                  <article key={page.slug} className="border border-brand-border p-5 bg-[#f8f7f5]">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-brand-gold mb-2">{page.category}</p>
                    <h3 className="font-display text-lg font-light mb-2">
                      <Link href={`/destinations/lavelle-road/near/${page.slug}`} className="hover:text-brand-gold transition-colors">
                        Hotel Near {page.place}
                      </Link>
                    </h3>
                    <p className="text-sm text-brand-body">{page.keyword}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="py-14 sm:py-18 bg-white border-y border-brand-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
              {faqItems.map((faq) => (
                <article key={faq.question} className="border border-brand-border p-5 bg-[#f8f7f5]">
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
