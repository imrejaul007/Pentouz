import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntentLeadForm from "@/components/IntentLeadForm";
import EditorialTrustBar from "@/components/EditorialTrustBar";
import { getLavelleSeoPage } from "@/data/lavelleSeoPages";
import { getLavelleEditorialOverride } from "@/data/lavelleEditorialOverrides";
import { getManualArticleOverride } from "@/data/lavelleManualArticleOverrides";
import {
  genericSurroundingGuides,
  getAllKeywordArticleParams,
  getArticleTitle,
  getIntentTypeForKeyword,
  getKeywordArticleNarrative,
  getRelatedKeywordArticleLinks,
} from "@/data/lavelleTravelContent";
import { withSiteUrl } from "@/lib/site";

type Params = { slug: string; article: string };

export function generateStaticParams() {
  return getAllKeywordArticleParams();
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug, article } = await params;
  const narrative = getKeywordArticleNarrative(slug, article);
  if (!narrative) return { title: "Travel Article Not Found | The Pentouz" };

  const title = `${getArticleTitle(narrative.keyword.place, narrative.template)} | The Pentouz Travel`;
  const description = `Travel article for ${narrative.keyword.keyword}, focused on ${narrative.template.intent} and practical stay planning near Lavelle Road.`;
  const path = `/travel/near/${slug}/${article}`;

  return {
    title,
    description,
    keywords: [
      narrative.keyword.keyword,
      `${narrative.template.intent} ${narrative.keyword.place}`,
      "Lavelle Road travel guide",
      "The Pentouz Travel",
      ...narrative.anchors.map((anchor) => anchor.name),
    ],
    alternates: {
      canonical: withSiteUrl(path),
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: withSiteUrl(path),
      images: [withSiteUrl("/lavelle-road/terrace-1.jpg")],
    },
  };
}

export default async function KeywordArticlePage({ params }: { params: Promise<Params> }) {
  const { slug, article } = await params;
  const narrative = getKeywordArticleNarrative(slug, article);
  if (!narrative) notFound();

  const keyword = getLavelleSeoPage(slug);
  if (!keyword) notFound();
  const editorial = getLavelleEditorialOverride(keyword.slug);
  const manualArticle = getManualArticleOverride(slug, article);
  const intentType = getIntentTypeForKeyword(slug);
  const editorialArticleLead = editorial?.articleLeadByType[
    article as keyof typeof editorial.articleLeadByType
  ];

  const relatedLinks = getRelatedKeywordArticleLinks(slug, article);
  const genericLinks = genericSurroundingGuides.slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: getArticleTitle(narrative.keyword.place, narrative.template),
        description: `Travel guide for ${narrative.keyword.keyword}`,
        about: [narrative.keyword.place, narrative.template.intent, "Lavelle Road Bengaluru"],
        mentions: narrative.anchors.map((anchor) => anchor.name),
        mainEntityOfPage: withSiteUrl(`/travel/near/${slug}/${article}`),
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
              {narrative.template.intent}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light max-w-4xl">
              {getArticleTitle(narrative.keyword.place, narrative.template)}
            </h1>
            <p className="mt-6 text-sm sm:text-base text-white/85 max-w-4xl leading-relaxed">
              {editorialArticleLead ? (
                <>{editorialArticleLead}</>
              ) : (
                <>
                  This article provides practical recommendations for {narrative.keyword.audience} searching <strong>{narrative.keyword.keyword}</strong>.
                </>
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
              <Link href={`/travel/near/${slug}`} className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                All Travel Guides
              </Link>
              <Link href={`/destinations/lavelle-road/near/${slug}`} className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                Location Guide
              </Link>
              <Link href="/destinations/lavelle-road" className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                Lavelle Property
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 bg-white border-b border-brand-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 space-y-4 text-sm sm:text-base text-brand-body leading-relaxed">
            {narrative.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-6">
            <article className="bg-white border border-brand-border p-6 sm:p-7">
              <h2 className="font-display text-2xl font-light mb-4">Key Considerations</h2>
              <ul className="space-y-3 text-sm sm:text-base text-brand-body leading-relaxed list-disc list-inside">
                {narrative.bulletPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
            <article className="bg-white border border-brand-border p-6 sm:p-7">
              <h2 className="font-display text-2xl font-light mb-4">Nearby Area Guide</h2>
              <h3 className="font-display text-xl font-light mb-2">{narrative.nearbyGuide.title}</h3>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed">{narrative.nearbyGuide.subtitle}</p>
              <Link href={`/travel/guides/${narrative.nearbyGuide.slug}`} className="inline-flex mt-4 text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-gold transition-colors">
                Read Nearby Guide
              </Link>
            </article>
          </div>
        </section>

        <section className="py-14 sm:py-18 bg-white border-y border-brand-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">Nearby Places</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {narrative.anchors.map((anchor) => (
                <article key={anchor.name} className="border border-brand-border p-5 bg-[#f8f7f5]">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-brand-gold mb-2">
                    {anchor.type}
                  </p>
                  <h3 className="font-display text-lg font-light mb-2">{anchor.name}</h3>
                  <p className="text-sm text-brand-body leading-relaxed">{anchor.whyItMatters}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 bg-white border-y border-brand-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {relatedLinks.map((link) => {
                const relatedKeyword = getLavelleSeoPage(link.slug);
                if (!relatedKeyword) return null;
                return (
                  <article key={`${link.slug}-${link.article}`} className="border border-brand-border p-5 bg-[#f8f7f5]">
                    <h3 className="font-display text-lg font-light mb-2">
                      <Link href={`/travel/near/${link.slug}/${link.article}`} className="hover:text-brand-gold transition-colors">
                        {link.titlePrefix} {relatedKeyword.place}
                      </Link>
                    </h3>
                    <p className="text-sm text-brand-body">{relatedKeyword.keyword}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">More Travel Guides</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {genericLinks.map((guide) => (
                <article key={guide.slug} className="border border-brand-border bg-white p-4">
                  <h3 className="font-display text-lg font-light mb-2">
                    <Link href={`/travel/guides/${guide.slug}`} className="hover:text-brand-gold transition-colors">
                      {guide.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-brand-body">{guide.focusArea}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-brand-ink text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light mb-5">
              Stay Near {keyword.place} with The Pentouz
            </h2>
            <p className="text-sm sm:text-base text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
              Book The Pentouz @ Lavelle Road for central access, premium comfort, and dependable support across legal, business, and city itineraries.
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

        {manualArticle ? (
          <IntentLeadForm
            intent={intentType}
            keyword={keyword.keyword}
            place={keyword.place}
            articleTitle={getArticleTitle(narrative.keyword.place, narrative.template)}
            keywordSlug={slug}
            articleSlug={article}
          />
        ) : null}

        <EditorialTrustBar />
      </main>
      <Footer />
    </>
  );
}
