import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLavelleSeoPage, lavelleSeoPages } from "@/data/lavelleSeoPages";
import { getLavelleEditorialOverride } from "@/data/lavelleEditorialOverrides";
import {
  getKeywordHubArticles,
  getRelatedKeywordArticleLinks,
  getArticleTitle,
  keywordArticleTemplates,
} from "@/data/lavelleTravelContent";
import { withSiteUrl } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return lavelleSeoPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const keyword = getLavelleSeoPage(params.slug);
  if (!keyword) return { title: "Travel Page Not Found | The Pentouz" };

  const title = `Travel Guides Near ${keyword.place} | The Pentouz Lavelle Road`;
  const description = `Explore ${keywordArticleTemplates.length} interlinked travel articles for ${keyword.keyword}, plus direct links to Lavelle Road stay and booking.`;
  const path = `/travel/near/${keyword.slug}`;

  return {
    title,
    description,
    keywords: [keyword.keyword, `travel guide ${keyword.place}`, "The Pentouz Travel"],
    alternates: {
      canonical: withSiteUrl(path),
    },
  };
}

export default function KeywordTravelHubPage({ params }: { params: Params }) {
  const keyword = getLavelleSeoPage(params.slug);
  if (!keyword) notFound();
  const editorial = getLavelleEditorialOverride(keyword.slug);

  const articles = getKeywordHubArticles(keyword.slug);
  const crossLinks = getRelatedKeywordArticleLinks(keyword.slug, "where-to-stay");

  return (
    <>
      <Header />
      <main className="bg-[#f8f7f5] min-h-screen">
        <section className="bg-brand-ink text-white py-20 sm:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4">
              Keyword Cluster Hub
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light max-w-4xl">
              Travel Guides Near <em className="italic">{keyword.place}</em>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-white/85 max-w-4xl leading-relaxed">
              {editorial ? (
                <>{editorial.travelHubIntro}</>
              ) : (
                <>
                  Built for users searching <strong>{keyword.keyword}</strong>. This hub contains multiple intent-focused articles for {keyword.audience},
                  with internal links to the Lavelle Road property page, living page, booking page, and related locations.
                </>
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
              <Link href={`/destinations/lavelle-road/near/${keyword.slug}`} className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                Keyword Landing Page
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

        <section className="py-16 sm:py-20 bg-white border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">
              {articles.length} Interlinked Articles for This Keyword
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {articles.map((article) => (
                <article key={article.slug} className="border border-brand-border p-5 bg-[#f8f7f5] hover:shadow-lg transition-shadow">
                  <h3 className="font-display text-lg font-light mb-2">
                    <Link href={article.href} className="hover:text-brand-gold transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-brand-body">{article.intent}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">Cross-Keyword Internal Links</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {crossLinks.map((link) => {
                const relatedKeyword = getLavelleSeoPage(link.slug);
                if (!relatedKeyword) return null;
                return (
                  <article key={`${link.slug}-${link.article}`} className="border border-brand-border p-5 bg-white">
                    <h3 className="font-display text-lg font-light mb-2">
                      <Link href={`/travel/near/${link.slug}/${link.article}`} className="hover:text-brand-gold transition-colors">
                        {getArticleTitle(relatedKeyword.place, { slug: link.article, titlePrefix: link.titlePrefix, intent: "travel intent", angle: "location value" })}
                      </Link>
                    </h3>
                    <p className="text-sm text-brand-body">{relatedKeyword.keyword}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
