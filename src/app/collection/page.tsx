import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations, relatedProperties } from "@/data/content";

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
      <main className="bg-[#f8f2e8] text-brand-ink">
        <section className="relative isolate overflow-hidden text-white">
          <div className="absolute inset-0">
            <Image src="/lavelle-road/all/facade_1.jpg" alt="The Pentouz collection" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,9,7,0.9)_0%,rgba(11,9,7,0.58)_40%,rgba(11,9,7,0.24)_75%,rgba(11,9,7,0.72)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,9,7,0.16)_0%,rgba(11,9,7,0)_32%,rgba(11,9,7,0.78)_100%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[78vh] max-w-[1440px] items-end px-5 pb-16 pt-40 sm:px-8 lg:px-14 lg:pb-24">
            <div className="max-w-4xl">
              <p className="luxury-kicker text-white/72">The Collection</p>
              <h1 className="luxury-hero-title mt-6 max-w-4xl text-white">
                A portfolio of city stays and retreat addresses with different reasons to be chosen.
              </h1>
              <p className="luxury-copy mt-8 max-w-2xl text-white/76">
                The Pentouz collection works best when it is presented as a set of distinct hospitality products, not one repeated format. That difference is what makes the flagship properties feel premium and the wider collection feel purposeful.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-black/5 bg-[#fdf9f3]">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-18 sm:px-8 lg:grid-cols-3 lg:px-14 lg:py-24">
            {collectionNotes.map((note) => (
              <div key={note.title} className="border-l border-brand-gold/35 pl-5">
                <h2 className="font-display text-3xl font-light leading-tight text-brand-ink">{note.title}</h2>
                <p className="mt-4 text-base leading-8 text-brand-body">{note.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-18 sm:px-8 lg:px-14 lg:py-24">
          <div className="max-w-3xl">
            <p className="luxury-kicker text-brand-accent">Pentouz Collection</p>
            <h2 className="luxury-section-title mt-5">Flagship stays with the clearest brand identity.</h2>
          </div>

          <div className="mt-14 space-y-12 lg:space-y-16">
            {destinations.map((destination, index) => (
              <article key={destination.slug} className={index === 1 ? "grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center" : "grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"}>
                <Link href={`/destinations/${destination.slug}`} className={index === 1 ? "lg:order-2" : ""}>
                  <div className={index === 0 ? "relative aspect-[16/10] overflow-hidden" : "relative aspect-[4/5] overflow-hidden"}>
                    <Image src={destination.heroImage || destination.image} alt={destination.title} fill className="object-cover transition-transform duration-1000 hover:scale-[1.02]" sizes={index === 0 ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 48vw"} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>
                </Link>

                <div className={index === 1 ? "lg:order-1" : ""}>
                  <p className="luxury-kicker text-brand-accent">{destination.subtitle}</p>
                  <h3 className="mt-5 font-display text-4xl font-light leading-tight text-brand-ink sm:text-5xl">{destination.title}</h3>
                  <p className="mt-6 text-base leading-8 text-brand-body sm:text-lg">{destination.description}</p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <div className="luxury-panel bg-white/75">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">Property</p>
                      <p className="mt-3 text-sm text-brand-ink">{destination.propertyType || destination.shortTitle}</p>
                    </div>
                    <div className="luxury-panel bg-white/75">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">Signature</p>
                      <p className="mt-3 text-sm text-brand-ink">{destination.features[0]}</p>
                    </div>
                    <div className="luxury-panel bg-white/75">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">Best Fit</p>
                      <p className="mt-3 text-sm text-brand-ink">{destination.idealFor?.[0] || "Luxury stay"}</p>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link href={`/destinations/${destination.slug}`} className="inline-flex items-center gap-2 rounded-full border border-brand-ink px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-colors hover:bg-brand-ink hover:text-white">
                      View Residence
                      <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                    </Link>
                    <a href={destination.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-2 py-3 text-[11px] uppercase tracking-[0.2em] text-brand-gold transition-colors hover:text-brand-ink">
                      Book Direct
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#171411] text-white">
          <div className="mx-auto max-w-[1440px] px-5 py-18 sm:px-8 lg:px-14 lg:py-24">
            <div className="max-w-3xl">
              <p className="luxury-kicker text-brand-gold">Extended Portfolio</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                Additional Bangalore stays for practical travel demand.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                These properties support the wider Pentouz ecosystem across Bangalore. They should still feel carefully presented, but without competing with the flagship brand story.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {relatedProperties.map((property) => (
                <a key={property.slug} href={property.bookingUrl} target="_blank" rel="noopener noreferrer" className="overflow-hidden border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-brand-gold/35">
                  <div className="grid sm:grid-cols-[0.42fr_0.58fr]">
                    <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:h-full">
                      <Image src={property.image} alt={property.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
                    </div>
                    <div className="px-6 py-6">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Partner Property</p>
                      <h3 className="mt-4 font-display text-3xl font-light text-white">{property.name}</h3>
                      <p className="mt-3 text-sm text-white/64">{property.location}</p>
                      <p className="mt-4 text-sm leading-7 text-white/68">{property.description}</p>
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
