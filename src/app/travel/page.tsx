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
      <main className="bg-[#faf7f2] min-h-screen text-[#1a1814]">
        <section className="relative overflow-hidden bg-[#0f0e0c] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,160,97,0.12),transparent_28%)]" />
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 pb-16 sm:pb-20 lg:pb-24 pt-28 sm:pt-32 lg:pt-40">
            <div className="max-w-3xl animate-fade-in-up">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061]">Bangalore Notes</p>
              <h1 className="font-['Cormorant_Garamond',serif] font-light leading-[1.1] text-white mt-4" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
                A calmer guide to the city around Lavelle Road.
              </h1>
              <p className="font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/75 mt-6 sm:mt-8 max-w-xl">
                Useful pages for guests who want to understand the neighborhoods, landmarks, and nearby addresses around The Pentouz Lavelle Road before they arrive.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-16 items-start">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">Start here</p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  Three simple ways to explore the area.
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                <Link href="/destinations/lavelle-road" className="border border-[#e5dfd6] bg-[#faf7f2] p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1">
                  <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#8b7355] mb-2">Stay</p>
                  <h3 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl lg:text-2xl font-light text-[#1a1814]">Lavelle Road</h3>
                  <p className="mt-3 sm:mt-4 font-['Lora',serif] text-xs sm:text-sm leading-[1.7] text-[#4a4a44]">See the property, room types, and booking options.</p>
                </Link>
                <Link href="/destinations/lavelle-road/near" className="border border-[#e5dfd6] bg-[#faf7f2] p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1">
                  <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#8b7355] mb-2">Nearby</p>
                  <h3 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl lg:text-2xl font-light text-[#1a1814]">Places Around You</h3>
                  <p className="mt-3 sm:mt-4 font-['Lora',serif] text-xs sm:text-sm leading-[1.7] text-[#4a4a44]">Browse nearby offices, landmarks, courts, and key addresses.</p>
                </Link>
                <Link href="/travel/guides/best-things-to-do-in-mg-road-bangalore" className="border border-[#e5dfd6] bg-[#faf7f2] p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1">
                  <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#8b7355] mb-2">City</p>
                  <h3 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl lg:text-2xl font-light text-[#1a1814]">Bangalore Guides</h3>
                  <p className="mt-3 sm:mt-4 font-['Lora',serif] text-xs sm:text-sm leading-[1.7] text-[#4a4a44]">Read a few calm, practical notes for the city around your stay.</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
            <div className="max-w-2xl mb-10 sm:mb-14">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">Nearby addresses</p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                Useful location pages near Lavelle Road.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {featuredLocations.map((page, index) => (
                <Link
                  key={page.slug}
                  href={`/destinations/lavelle-road/near/${page.slug}`}
                  className="border border-[#e5dfd6] bg-white p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#8b7355] mb-2">{page.category}</p>
                  <h3 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl lg:text-2xl font-light text-[#1a1814] leading-tight">{page.place}</h3>
                  <p className="mt-3 sm:mt-4 font-['Lora',serif] text-xs sm:text-sm leading-[1.7] text-[#4a4a44]">{page.keyword}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/destinations/lavelle-road/near" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#e5dfd6] text-[#1a1814] px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]">
                View All Nearby Pages
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-[0.74fr_1.26fr] gap-8 lg:gap-16 items-start">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">By interest</p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  Browse the city in a more natural way.
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {lavelleSeoClusters.map((cluster, index) => (
                  <Link
                    key={cluster.slug}
                    href={`/travel/clusters/${cluster.slug}`}
                    className="border border-[#e5dfd6] bg-[#faf7f2] p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#8b7355] mb-2">{cluster.category}</p>
                    <h3 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl lg:text-2xl font-light text-[#1a1814]">{cluster.title}</h3>
                    <p className="mt-3 sm:mt-4 font-['Lora',serif] text-xs sm:text-sm leading-[1.7] text-[#4a4a44]">{cluster.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
            <div className="max-w-2xl mb-10 sm:mb-14">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#c3a061] font-medium mb-3 sm:mb-4">Around the city</p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                Notes on neighborhoods, walks, dining, and nearby experiences.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {featuredGuides.map((guide, index) => (
                <Link
                  key={guide.slug}
                  href={`/travel/guides/${guide.slug}`}
                  className="border border-white/10 bg-white/[0.02] p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#c3a061]/30"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#c3a061] mb-2">{guide.focusArea}</p>
                  <h3 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl lg:text-2xl font-light text-white leading-tight">{guide.title}</h3>
                  <p className="mt-3 sm:mt-4 font-['Lora',serif] text-xs sm:text-sm leading-[1.7] text-white/65">{guide.subtitle}</p>
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
