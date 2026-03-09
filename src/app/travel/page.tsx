import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditorialTrustBar from "@/components/EditorialTrustBar";
import { lavelleSeoPages } from "@/data/lavelleSeoPages";
import {
  genericSurroundingGuides,
  keywordArticleTemplates,
} from "@/data/lavelleTravelContent";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Pentouz Travel | Bengaluru Guides Near Lavelle Road",
  description:
    "Explore The Pentouz Travel hub with keyword-focused guides near courts, offices, landmarks, and transport hubs, plus surrounding area content around Lavelle Road.",
  alternates: {
    canonical: withSiteUrl("/travel"),
  },
};

export default function TravelHubPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f7f5] min-h-screen">
        <section className="bg-brand-ink text-white py-20 sm:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4">
              The Pentouz Travel
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light max-w-4xl">
              Bengaluru Location & City Guides from <em className="italic">Lavelle Road</em>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-white/85 max-w-4xl leading-relaxed">
              This hub connects location-intent travel pages, surrounding neighborhood articles, and stay planning resources.
              Every guide is internally linked to The Pentouz Lavelle Road property and booking pages.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
              <Link href="/destinations/lavelle-road" className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                Lavelle Property
              </Link>
              <Link href="/destinations/lavelle-road/near" className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                50+ Keyword Pages
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-3">Keyword Article Clusters</h2>
            <p className="text-sm sm:text-base text-brand-body max-w-4xl leading-relaxed mb-6">
              For each core location keyword, we publish {keywordArticleTemplates.length} interlinked articles covering stay choice,
              commute planning, short/extended travel, local area utility, and practical itinerary support.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {lavelleSeoPages.slice(0, 18).map((page) => (
                <article key={page.slug} className="border border-brand-border p-5 bg-[#f8f7f5] hover:shadow-lg transition-shadow">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-brand-gold mb-2">{page.category}</p>
                  <h3 className="font-display text-lg font-light mb-2">
                    <Link href={`/travel/near/${page.slug}`} className="hover:text-brand-gold transition-colors">
                      Travel Guides Near {page.place}
                    </Link>
                  </h3>
                  <p className="text-sm text-brand-body">{page.keyword}</p>
                </article>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/destinations/lavelle-road/near" className="text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-gold transition-colors">
                View All Keyword Locations
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-3">Surrounding Area Guides</h2>
            <p className="text-sm sm:text-base text-brand-body max-w-4xl leading-relaxed mb-6">
              Editorial guides for MG Road, UB City, Cubbon Park, legal-day itineraries, nightlife, shopping, and arrival planning.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {genericSurroundingGuides.map((guide) => (
                <article key={guide.slug} className="bg-white border border-brand-border p-5 hover:shadow-lg transition-shadow">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-brand-gold mb-2">{guide.focusArea}</p>
                  <h3 className="font-display text-lg font-light mb-2">
                    <Link href={`/travel/guides/${guide.slug}`} className="hover:text-brand-gold transition-colors">
                      {guide.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-brand-body">{guide.subtitle}</p>
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
