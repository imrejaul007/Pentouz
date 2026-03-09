import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  lavelleSeoCategories,
  getLavelleSeoPagesByCategory,
  lavelleSeoPages,
} from "@/data/lavelleSeoPages";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lavelle Road SEO Guide | Hotels Near Courts, Offices, Landmarks & Metro",
  description:
    "Explore all location-focused stay guides for The Pentouz Lavelle Road, including hotels near Karnataka High Court, UB City, MG Road, key offices, services, and major city landmarks.",
  alternates: {
    canonical: withSiteUrl("/destinations/lavelle-road/near"),
  },
};

export default function LavelleNearHubPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f7f5] min-h-screen">
        <section className="bg-brand-ink text-white py-20 sm:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4">
              Lavelle Road Content Hub
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light max-w-4xl">
              Hotels Near Every Key <em className="italic">Bengaluru Destination</em>
            </h1>
            <p className="mt-5 text-sm sm:text-base text-white/85 max-w-3xl leading-relaxed">
              Browse 50+ location-focused guides designed for legal travelers, corporate guests,
              healthcare visitors, and city explorers searching for a premium stay near important
              courts, offices, transport hubs, and landmarks.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
              <Link href="/destinations/lavelle-road" className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                Lavelle Property Page
              </Link>
              <a href="https://bookmystay.io/rooms/37853/2025-12-23/2025-12-24/2/0?utm_source=brandWebsite" target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-white px-4 py-2 hover:bg-brand-goldLight transition-colors">
                Book Lavelle Road
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-14">
            {lavelleSeoCategories.map((category) => {
              const pages = getLavelleSeoPagesByCategory(category);
              return (
                <div key={category}>
                  <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">{category}</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {pages.map((page) => (
                      <article key={page.slug} className="bg-white border border-brand-border p-5 sm:p-6 hover:shadow-lg transition-shadow">
                        <p className="text-[10px] uppercase tracking-[0.15em] text-brand-gold mb-2">
                          {page.category}
                        </p>
                        <h3 className="font-display text-lg sm:text-xl font-light mb-3">
                          <Link href={`/destinations/lavelle-road/near/${page.slug}`} className="hover:text-brand-gold transition-colors">
                            Hotel Near {page.place}
                          </Link>
                        </h3>
                        <p className="text-sm text-brand-body leading-relaxed">{page.keyword}</p>
                        <Link href={`/destinations/lavelle-road/near/${page.slug}`} className="inline-flex mt-4 text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-gold transition-colors">
                          Read Guide
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-14 sm:py-16 bg-white border-t border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-4">Internal Linking Structure</h2>
            <p className="text-sm sm:text-base text-brand-body leading-relaxed max-w-4xl">
              Every page in this hub links back to the Lavelle Road property page, links to related location guides,
              and links to direct booking. This creates crawl depth, relevance, and topical authority around intent-based searches.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.15em] text-brand-muted">
              Total indexed location pages: {lavelleSeoPages.length}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
