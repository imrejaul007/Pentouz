import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditorialTrustBar from "@/components/EditorialTrustBar";
import {
  genericSurroundingGuides,
  getGenericGuide,
} from "@/data/lavelleTravelContent";
import { withSiteUrl } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return genericSurroundingGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const guide = getGenericGuide(params.slug);
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

export default function GenericGuidePage({ params }: { params: Params }) {
  const guide = getGenericGuide(params.slug);
  if (!guide) notFound();

  const related = genericSurroundingGuides.filter((item) => item.slug !== guide.slug).slice(0, 6);

  return (
    <>
      <Header />
      <main className="bg-[#f8f7f5] min-h-screen">
        <section className="bg-brand-ink text-white py-20 sm:py-24 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4">
              Surrounding Area Guide
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
              <h2 className="font-display text-2xl font-light mb-4">What to Prioritize</h2>
              <ul className="space-y-3 text-sm sm:text-base text-brand-body leading-relaxed list-disc list-inside">
                {guide.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="border border-brand-border p-6 sm:p-7">
              <h2 className="font-display text-2xl font-light mb-4">Execution Tips</h2>
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
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">Related Travel Articles</h2>
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

        <EditorialTrustBar />
      </main>
      <Footer />
    </>
  );
}
