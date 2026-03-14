import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  lavelleSeoCategories,
  getLavelleSeoPagesByCategory,
  lavelleSeoPages,
  getClusterSlugForCategory,
} from "@/data/lavelleSeoPages";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lavelle Road Location Guides | Hotels Near Courts, Offices, Landmarks & Metro",
  description:
    "Explore location guides for The Pentouz Lavelle Road, including hotels near Karnataka High Court, UB City, MG Road, key offices, services, and major city landmarks.",
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
              Location Guides
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light max-w-4xl">
              Hotels Near Key <em className="italic">Bengaluru Destinations</em>
            </h1>
            <p className="mt-5 text-sm sm:text-base text-white/85 max-w-3xl leading-relaxed">
              Browse location guides designed for legal travelers, corporate guests,
              healthcare visitors, and city explorers searching for a premium stay near important
              courts, offices, transport hubs, and landmarks.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
              <Link href="/destinations/lavelle-road" className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                Lavelle Property Page
              </Link>
              <Link href="/travel" className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                Bengaluru Guidebook
              </Link>
              <Link href="/travel/clusters" className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                Guide Collections
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
                  <div className="flex items-end justify-between gap-4 mb-6">
                    <h2 className="font-display text-2xl sm:text-3xl font-light">{category}</h2>
                    <Link
                      href={`/travel/clusters/${getClusterSlugForCategory(category)}`}
                      className="text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-gold transition-colors"
                    >
                      View Guides
                    </Link>
                  </div>
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
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-4">About These Guides</h2>
            <p className="text-sm sm:text-base text-brand-body leading-relaxed max-w-4xl">
              Each guide connects back to the Lavelle Road property page, includes related location suggestions,
              and offers direct booking access. This helps you find the right stay based on your specific destination needs.
            </p>
            <p className="mt-4 text-sm sm:text-base text-brand-body leading-relaxed max-w-4xl">
              Every destination also links to dedicated travel articles covering practical tips for getting around Bengaluru,
              planning your stay, and exploring local areas.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.15em] text-brand-muted">
              Total location guides: {lavelleSeoPages.length}
            </p>
            <Link href="/travel" className="inline-flex mt-5 text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-gold transition-colors">
              Explore Bengaluru Guides
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
