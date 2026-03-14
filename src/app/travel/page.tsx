import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditorialTrustBar from "@/components/EditorialTrustBar";
import { lavelleSeoPages, lavelleSeoClusters } from "@/data/lavelleSeoPages";
import { genericSurroundingGuides } from "@/data/lavelleTravelContent";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Pentouz Guides | Bangalore Notes from Lavelle Road",
  description:
    "Explore city notes, neighborhood ideas, and practical location pages from The Pentouz Lavelle Road.",
  alternates: {
    canonical: withSiteUrl("/travel"),
  },
};

export default function TravelHubPage() {
  const featuredLocations = lavelleSeoPages.slice(0, 6);
  const featuredGuides = genericSurroundingGuides.slice(0, 6);

  return (
    <>
      <Header />
      <main className="bg-[#f7f1e7] min-h-screen text-brand-ink">
        <section className="relative isolate overflow-hidden bg-[#17120e] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,160,97,0.12),transparent_28%)]" />
          <div className="luxury-shell-section relative pb-20 pt-36 sm:pb-24 lg:pb-28 lg:pt-44">
            <div className="max-w-4xl animate-fade-in-up">
              <p className="luxury-kicker text-white/70">Bangalore Notes</p>
              <h1 className="luxury-hero-title mt-6 text-white">
                A calmer guide to the city around Lavelle Road.
              </h1>
              <p className="luxury-copy mt-8 max-w-2xl text-white/76">
                Useful pages for guests who want to understand the neighborhoods, landmarks, and nearby addresses around The Pentouz Lavelle Road before they arrive.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf7f0]">
          <div className="luxury-shell-section py-20 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div className="animate-fade-in-up">
                <p className="luxury-kicker text-brand-accent">Start here</p>
                <h2 className="luxury-section-title mt-5">Three simple ways to explore the area.</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <Link href="/destinations/lavelle-road" className="luxury-panel bg-white transition-all duration-500 hover:-translate-y-1 animate-fade-in-up">
                  <p className="luxury-subtitle">Stay</p>
                  <h3 className="mt-4 font-display text-2xl font-light text-brand-ink">Lavelle Road</h3>
                  <p className="mt-4 text-sm leading-7 text-brand-body">See the property, room types, and booking options.</p>
                </Link>
                <Link href="/destinations/lavelle-road/near" className="luxury-panel bg-white transition-all duration-500 hover:-translate-y-1 animate-fade-in-up [animation-delay:120ms]">
                  <p className="luxury-subtitle">Nearby</p>
                  <h3 className="mt-4 font-display text-2xl font-light text-brand-ink">Places Around You</h3>
                  <p className="mt-4 text-sm leading-7 text-brand-body">Browse nearby offices, landmarks, courts, and key addresses.</p>
                </Link>
                <Link href="/travel/guides/best-things-to-do-in-mg-road-bangalore" className="luxury-panel bg-white transition-all duration-500 hover:-translate-y-1 animate-fade-in-up [animation-delay:240ms]">
                  <p className="luxury-subtitle">City</p>
                  <h3 className="mt-4 font-display text-2xl font-light text-brand-ink">Bangalore Guides</h3>
                  <p className="mt-4 text-sm leading-7 text-brand-body">Read a few calm, practical notes for the city around your stay.</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f3eadf]">
          <div className="luxury-shell-section py-20 lg:py-28">
            <div className="max-w-3xl animate-fade-in-up">
              <p className="luxury-kicker text-brand-accent">Nearby addresses</p>
              <h2 className="luxury-section-title mt-5">Useful location pages near Lavelle Road.</h2>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featuredLocations.map((page, index) => (
                <Link
                  key={page.slug}
                  href={`/destinations/lavelle-road/near/${page.slug}`}
                  className="luxury-panel bg-white transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <p className="luxury-subtitle">{page.category}</p>
                  <h3 className="mt-4 font-display text-3xl font-light leading-tight text-brand-ink">{page.place}</h3>
                  <p className="mt-4 text-sm leading-7 text-brand-body">{page.keyword}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/destinations/lavelle-road/near" className="inline-flex items-center justify-center rounded-full border border-brand-border px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold">
                View All Nearby Pages
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf7f0]">
          <div className="luxury-shell-section py-20 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
              <div className="animate-fade-in-up">
                <p className="luxury-kicker text-brand-accent">By interest</p>
                <h2 className="luxury-section-title mt-5">Browse the city in a more natural way.</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {lavelleSeoClusters.map((cluster, index) => (
                  <Link
                    key={cluster.slug}
                    href={`/travel/clusters/${cluster.slug}`}
                    className="luxury-panel bg-white transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <p className="luxury-subtitle">{cluster.category}</p>
                    <h3 className="mt-4 font-display text-2xl font-light text-brand-ink">{cluster.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-brand-body">{cluster.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#17120e] text-white">
          <div className="luxury-shell-section py-20 lg:py-28">
            <div className="max-w-3xl animate-fade-in-up">
              <p className="luxury-kicker text-brand-gold">Around the city</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                Notes on neighborhoods, walks, dining, and nearby experiences.
              </h2>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featuredGuides.map((guide, index) => (
                <Link
                  key={guide.slug}
                  href={`/travel/guides/${guide.slug}`}
                  className="border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/40 animate-fade-in-up"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">{guide.focusArea}</p>
                  <h3 className="mt-4 font-display text-3xl font-light leading-tight text-white">{guide.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{guide.subtitle}</p>
                </Link>
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
