import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditorialTrustBar from "@/components/EditorialTrustBar";
import { lavelleSeoClusters, getLavelleSeoPagesByCategory } from "@/data/lavelleSeoPages";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Travel Intent Clusters | The Pentouz Bengaluru SEO Guides",
  description:
    "Explore intent-cluster landing pages for legal, government, business, healthcare, landmark, and transport search journeys near Lavelle Road.",
  alternates: {
    canonical: withSiteUrl("/travel/clusters"),
  },
};

export default function TravelClustersPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f7f5] min-h-screen">
        <section className="bg-brand-ink text-white py-20 sm:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4">
              The Pentouz Travel Architecture
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light max-w-4xl">
              Search Intent Clusters for <em className="italic">Bengaluru Stay Demand</em>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-white/85 max-w-4xl leading-relaxed">
              These cluster pages group keyword pages by traveler intent. Each cluster links to dedicated location pages,
              travel article hubs, and direct Lavelle Road conversion paths.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {lavelleSeoClusters.map((cluster) => {
              const count = getLavelleSeoPagesByCategory(cluster.category).length;
              return (
                <article key={cluster.slug} className="bg-white border border-brand-border p-6 sm:p-7 hover:shadow-lg transition-shadow">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-brand-gold mb-2">{cluster.primaryIntent}</p>
                  <h2 className="font-display text-xl sm:text-2xl font-light mb-3">
                    <Link href={`/travel/clusters/${cluster.slug}`} className="hover:text-brand-gold transition-colors">
                      {cluster.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-brand-body leading-relaxed">{cluster.description}</p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-brand-muted">{count} keyword pages</p>
                  <Link
                    href={`/travel/clusters/${cluster.slug}`}
                    className="inline-flex mt-4 text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-gold transition-colors"
                  >
                    Open Cluster
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <EditorialTrustBar />
      </main>
      <Footer />
    </>
  );
}
