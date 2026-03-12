import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditorialTrustBar from "@/components/EditorialTrustBar";
import {
  getLavelleSeoCluster,
  getLavelleSeoPagesByCategory,
  lavelleSeoClusters,
} from "@/data/lavelleSeoPages";
import { withSiteUrl } from "@/lib/site";

type Params = { cluster: string };

export function generateStaticParams() {
  return lavelleSeoClusters.map((cluster) => ({ cluster: cluster.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { cluster: clusterSlug } = await params;
  const cluster = getLavelleSeoCluster(clusterSlug);
  if (!cluster) return { title: "Cluster Not Found | The Pentouz Travel" };

  const path = `/travel/clusters/${cluster.slug}`;
  return {
    title: `${cluster.title} | The Pentouz Travel`,
    description: cluster.description,
    alternates: {
      canonical: withSiteUrl(path),
    },
    keywords: [
      cluster.category,
      "The Pentouz Lavelle Road",
      "Bengaluru travel guides",
    ],
  };
}

export default async function ClusterPage({ params }: { params: Promise<Params> }) {
  const { cluster: clusterSlug } = await params;
  const cluster = getLavelleSeoCluster(clusterSlug);
  if (!cluster) notFound();

  const pages = getLavelleSeoPagesByCategory(cluster.category);
  const pageUrl = withSiteUrl(`/travel/clusters/${cluster.slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: cluster.title,
        description: cluster.description,
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: withSiteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Travel", item: withSiteUrl("/travel") },
          { "@type": "ListItem", position: 3, name: "Guides", item: withSiteUrl("/travel/clusters") },
          { "@type": "ListItem", position: 4, name: cluster.title, item: pageUrl },
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4">
              {cluster.category}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light max-w-4xl">{cluster.title}</h1>
            <p className="mt-6 text-sm sm:text-base text-white/85 max-w-4xl leading-relaxed">{cluster.description}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
              <Link href="/travel/clusters" className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                All Guides
              </Link>
              <Link href="/destinations/lavelle-road" className="border border-white/35 px-4 py-2 hover:bg-white hover:text-brand-ink transition-colors">
                Lavelle Property
              </Link>
              <a
                href="https://bookmystay.io/rooms/37853/2025-12-23/2025-12-24/2/0?utm_source=brandWebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gold text-white px-4 py-2 hover:bg-brand-goldLight transition-colors"
              >
                Book Lavelle
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">
              Location Guides in This Collection
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {pages.map((page) => (
                <article key={page.slug} className="bg-white border border-brand-border p-5 sm:p-6 hover:shadow-lg transition-shadow">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-brand-gold mb-2">{page.category}</p>
                  <h3 className="font-display text-lg sm:text-xl font-light mb-2">
                    <Link href={`/destinations/lavelle-road/near/${page.slug}`} className="hover:text-brand-gold transition-colors">
                      Hotel Near {page.place}
                    </Link>
                  </h3>
                  <p className="text-sm text-brand-body leading-relaxed">{page.keyword}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.14em]">
                    <Link href={`/travel/near/${page.slug}`} className="text-brand-ink hover:text-brand-gold transition-colors">
                      Travel Articles
                    </Link>
                    <Link href={`/destinations/lavelle-road/near/${page.slug}`} className="text-brand-ink hover:text-brand-gold transition-colors">
                      Location Guide
                    </Link>
                  </div>
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
