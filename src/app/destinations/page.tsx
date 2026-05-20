import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import { destinations } from "@/data/content";
import type { Metadata } from "next";
import { withSiteUrl } from "@/lib/site";

const heroImages = [
  "/lavelle-road/all/terrace_1.jpg",
  "/lavelle-road/all/patio_1.jpg",
  "/indiranagar/all/06._terrace_01._terrace.jpg",
  "/fernhill/all/59_property_top_view.jpg",
  "/fernhill/all/44_swimming_pool.jpg",
  "/ooty/all/24._view.jpeg",
  "/ooty/all/22._lawn.jpeg",
];

export const metadata: Metadata = {
  title: "Destinations | The Pentouz Collection",
  description:
    "Explore The Pentouz collection: boutique city stays in Bangalore, private penthouse in Indiranagar, hillside retreat in Chikmagalur, and scenic getaway in Ooty.",
  openGraph: {
    title: "Destinations | The Pentouz Collection",
    description:
      "Explore The Pentouz collection: boutique city stays in Bangalore, private penthouse in Indiranagar, hillside retreat in Chikmagalur, and scenic getaway in Ooty.",
    url: withSiteUrl("/destinations"),
    siteName: "The Pentouz",
    images: [{ url: withSiteUrl("/og-image.jpg"), width: 1200, height: 630, alt: "The Pentouz Collection" }],
    type: "website",
  },
  alternates: {
    canonical: withSiteUrl("/destinations"),
  },
};

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#faf7f2] text-[#1a1814]">
        {/* Hero */}
        <HeroSlider images={heroImages} alt="The Pentouz collection">
          <div className="mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-6 sm:px-10 lg:px-16 pb-20 lg:pb-28 pt-32">
            <div className="max-w-3xl">
              <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] mb-6 animate-fade-in-up">
                The Pentouz Collection
              </p>
              <h1 className="font-['Cormorant_Garamond',serif] text-white font-light leading-[1.1] animate-fade-in-up [animation-delay:100ms]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
                Stays with their own mood, setting, and reason to choose them.
              </h1>
              <p className="mt-8 font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/75 max-w-xl animate-fade-in-up [animation-delay:200ms]">
                The collection is intentionally small. Each property feels distinct, from boutique city stay to private penthouse to quieter hillside retreat.
              </p>
            </div>
          </div>
        </HeroSlider>

        {/* Properties */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-40">
            {/* Property List */}
            <div className="space-y-16 sm:space-y-20 lg:space-y-32">
              {destinations.map((destination, index) => (
                <article
                  key={destination.slug}
                  className={`grid lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-10 lg:gap-20 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Image */}
                  <Link
                    href={`/destinations/${destination.slug}`}
                    className={`group block ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <div className="relative overflow-hidden aspect-[4/3] lg:aspect-[5/4]">
                      <Image
                        src={destination.heroImage || destination.image}
                        alt={destination.title}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">
                      {destination.subtitle}
                    </p>
                    <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814] mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                      {destination.title}
                    </h2>
                    <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44] mb-6 sm:mb-8">
                      {destination.copy}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                      {destination.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="border border-[#e5dfd6] px-3 sm:px-4 py-2 text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.1em] sm:tracking-[0.12em] text-[#6b6358]">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                      <Link
                        href={`/destinations/${destination.slug}`}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-[#0f0e0c] text-white px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c3a061]"
                      >
                        Explore Property
                        <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                      </Link>
                      <Link
                        href={`/destinations/${destination.slug}/living`}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#4a4a44] hover:text-[#c3a061] transition-colors duration-300 py-3.5 sm:py-0"
                      >
                        View Living →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-14 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              <Link href="/gallery" className="group border border-white/10 p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[#c3a061] hover:bg-white/[0.03]">
                <h3 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl lg:text-3xl font-light text-white group-hover:text-[#c3a061] transition-colors duration-300 mb-2 sm:mb-3">
                  Gallery
                </h3>
                <p className="font-['Lora',serif] text-xs sm:text-sm text-white/60">
                  Browse our curated collection of property images.
                </p>
              </Link>
              <Link href="/experiences" className="group border border-white/10 p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[#c3a061] hover:bg-white/[0.03]">
                <h3 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl lg:text-3xl font-light text-white group-hover:text-[#c3a061] transition-colors duration-300 mb-2 sm:mb-3">
                  Experiences
                </h3>
                <p className="font-['Lora',serif] text-xs sm:text-sm text-white/60">
                  Discover what makes each destination unique.
                </p>
              </Link>
              <Link href="/contact" className="group border border-white/10 p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[#c3a061] hover:bg-white/[0.03]">
                <h3 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl lg:text-3xl font-light text-white group-hover:text-[#c3a061] transition-colors duration-300 mb-2 sm:mb-3">
                  Contact
                </h3>
                <p className="font-['Lora',serif] text-xs sm:text-sm text-white/60">
                  Speak directly with our reservations team.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
