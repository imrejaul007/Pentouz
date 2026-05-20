import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations, relatedProperties } from "@/data/content";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Collection | The Pentouz",
  description:
    "Explore the Pentouz collection of luxury city stays and retreat addresses: Lavelle Road, Indiranagar, Ooty, and extended partner properties.",
  alternates: {
    canonical: withSiteUrl("/collection"),
  },
};

const collectionNotes = [
  {
    title: "Flagship Pentouz stays",
    description: "These are the properties where the brand language is strongest and most differentiated: Lavelle Road, Indiranagar, and Ooty.",
  },
  {
    title: "Useful companion inventory",
    description: "The wider collection supports practical city demand across Bangalore, but the presentation should still stay clean and premium.",
  },
  {
    title: "Direct, trust-building discovery",
    description: "The collection page should help guests understand the offer quickly rather than forcing them through dense card grids and generic feature labels.",
  },
];

export default function CollectionPage() {
  return (
    <>
      <Header />
      <main className="bg-[#faf7f2] text-[#1a1814]">
        <section className="relative overflow-hidden text-white">
          <div className="absolute inset-0">
            <Image src="/lavelle-road/all/facade_1.jpg" alt="The Pentouz collection" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />
          </div>

          <div className="relative mx-auto flex min-h-[76vh] items-end px-5 sm:px-8 lg:px-16 pb-20 lg:pb-28 pt-32">
            <div className="max-w-3xl">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] animate-fade-in-up">The Collection</p>
              <h1 className="font-['Cormorant_Garamond',serif] font-light leading-[1.1] text-white mt-4 animate-fade-in-up [animation-delay:100ms]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
                A portfolio of city stays and retreat addresses with different reasons to be chosen.
              </h1>
              <p className="mt-6 font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/75 max-w-xl animate-fade-in-up [animation-delay:200ms]">
                The Pentouz collection works best when it is presented as a set of distinct hospitality products, not one repeated format.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {collectionNotes.map((note) => (
                <div key={note.title} className="border-l-2 border-[#c3a061]/40 pl-5">
                  <h2 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl lg:text-3xl font-light text-[#1a1814] leading-tight">{note.title}</h2>
                  <p className="mt-3 sm:mt-4 font-['Lora',serif] text-sm sm:text-base leading-[1.7] text-[#4a4a44]">{note.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="max-w-2xl mb-10 sm:mb-16">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">Pentouz Collection</p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                Flagship stays with the clearest brand identity.
              </h2>
            </div>

            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              {destinations.map((destination, index) => (
                <article key={destination.slug} className={index % 2 === 1 ? "grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-center" : "grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-center"}>
                  <Link href={`/destinations/${destination.slug}`} className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden">
                      <Image src={destination.heroImage || destination.image} alt={destination.title} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 55vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  </Link>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">{destination.subtitle}</p>
                    <h3 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814] mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>{destination.title}</h3>
                    <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44] mb-6 sm:mb-8">{destination.description || destination.copy}</p>
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <div className="border border-[#e5dfd6] bg-white p-4 sm:p-5">
                        <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#8b7355]">Property</p>
                        <p className="mt-2 font-['Lora',serif] text-xs sm:text-sm text-[#4a4a44]">{destination.propertyType || destination.shortTitle}</p>
                      </div>
                      <div className="border border-[#e5dfd6] bg-white p-4 sm:p-5">
                        <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#8b7355]">Signature</p>
                        <p className="mt-2 font-['Lora',serif] text-xs sm:text-sm text-[#4a4a44]">{destination.features[0]}</p>
                      </div>
                      <div className="border border-[#e5dfd6] bg-white p-4 sm:p-5">
                        <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#8b7355]">Best Fit</p>
                        <p className="mt-2 font-['Lora',serif] text-xs sm:text-sm text-[#4a4a44]">{destination.idealFor?.[0] || "Luxury stay"}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                      <Link href={`/destinations/${destination.slug}`} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0f0e0c] text-white px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:bg-[#c3a061]">
                        View Residence
                        <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                      </Link>
                      <a href={destination.bookingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-[#c3a061] hover:text-[#8b7355] transition-colors">
                        Book Direct
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="max-w-2xl mb-10 sm:mb-16">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#c3a061] font-medium mb-3 sm:mb-4">Extended Portfolio</p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                Additional Bangalore stays for practical travel demand.
              </h2>
              <p className="mt-5 sm:mt-6 font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-white/65 max-w-xl">
                These properties support the wider Pentouz ecosystem across Bangalore. They should still feel carefully presented, but without competing with the flagship brand story.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {relatedProperties.map((property) => (
                <a key={property.slug} href={property.bookingUrl} target="_blank" rel="noopener noreferrer" className="group border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[#c3a061]/30">
                  <div className="grid grid-cols-[0.42fr_0.58fr]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={property.image} alt={property.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 42vw, 40vw" />
                    </div>
                    <div className="p-5 sm:p-6">
                      <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#c3a061]">Partner Property</p>
                      <h3 className="mt-2 sm:mt-3 font-['Cormorant_Garamond',serif] text-lg sm:text-xl lg:text-2xl font-light text-white leading-tight">{property.name}</h3>
                      <p className="mt-2 font-['Lora',serif] text-xs sm:text-sm text-white/60">{property.location}</p>
                      <p className="mt-3 sm:mt-4 font-['Lora',serif] text-xs sm:text-sm leading-[1.7] text-white/65 line-clamp-2">{property.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
