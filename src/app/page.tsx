import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { contactInfo, destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lavelle = destinations.find((destination) => destination.slug === "lavelle-road") || destinations[0];

const journalLinks = [
  {
    title: "Hotel Near Karnataka High Court",
    href: "/destinations/lavelle-road/near/karnataka-high-court",
    label: "Legal Travel",
    description: "High-intent stay content built around advocates, hearings, and central Bangalore access.",
  },
  {
    title: "Best Things to Do in MG Road Bangalore",
    href: "/travel/guides/best-things-to-do-in-mg-road-bangalore",
    label: "City Journal",
    description: "A destination-led guide that brings a slower, more curated city perspective into the brand.",
  },
  {
    title: "Lavelle Road Nearby Stay Guides",
    href: "/destinations/lavelle-road/near",
    label: "SEO Hub",
    description: "Landmark-led pages designed to capture location-specific search and route users into the property.",
  },
];

const brandStandards = [
  {
    title: "Distinct property moods",
    description:
      "Lavelle Road, Indiranagar, and Ooty now behave like separate luxury stays with different personalities instead of variants of the same template.",
  },
  {
    title: "Direct booking confidence",
    description:
      "Guests should see the room, understand the atmosphere, and move into booking without friction or visual clutter.",
  },
  {
    title: "Editorial luxury language",
    description:
      "The site now leans into stillness, photography, and concise storytelling rather than over-explaining the product.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-[#f7f1e7] text-brand-ink">
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#15120f] text-white">
          <div className="absolute inset-0">
            <Image
              src={lavelle.heroImage || lavelle.image}
              alt={lavelle.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.92)_0%,rgba(10,8,6,0.62)_38%,rgba(10,8,6,0.24)_70%,rgba(10,8,6,0.68)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,0.18)_0%,rgba(10,8,6,0)_28%,rgba(10,8,6,0.64)_100%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-5 pb-14 pt-36 sm:px-8 sm:pb-18 lg:px-14 lg:pb-20 lg:pt-48">
            <div className="grid gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
              <div className="max-w-5xl">
                <p className="luxury-kicker text-white/72">The Pentouz Collection</p>
                <h1 className="luxury-hero-title mt-6 max-w-5xl text-white">
                  5-star stays that feel <em className="italic text-brand-gold">private</em>, composed, and deeply location-aware.
                </h1>
                <p className="luxury-copy mt-8 max-w-2xl text-white/76">
                  Pentouz brings together a legal-and-business city address on Lavelle Road, a high-design private penthouse in Indiranagar, and a quieter hill retreat in Ooty. The common thread is not sameness. It is control, warmth, and a more personal form of luxury.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/destinations"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-colors hover:bg-brand-gold hover:text-white"
                  >
                    Explore Collection
                    <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                  </Link>
                  <a
                    href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white/88 transition-colors hover:border-brand-gold hover:text-brand-gold"
                  >
                    Speak to Concierge
                  </a>
                </div>
              </div>

              <div className="xl:justify-self-end xl:max-w-[440px]">
                <div className="luxury-panel bg-white/[0.08] text-white backdrop-blur-md">
                  <p className="luxury-kicker text-white/58">Featured Residence</p>
                  <h2 className="mt-4 font-display text-3xl font-light leading-tight text-white sm:text-4xl">
                    {lavelle.title}
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">{lavelle.copy}</p>
                  <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Location</p>
                      <p className="mt-2 text-sm text-white/84">Lavelle Road</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Stay Type</p>
                      <p className="mt-2 text-sm text-white/84">Boutique suites</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Search Intent</p>
                      <p className="mt-2 text-sm text-white/84">Court, UB City, MG Road</p>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/destinations/lavelle-road"
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:text-brand-gold"
                    >
                      View Lavelle Road
                      <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                    </Link>
                    <a
                      href={lavelle.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-brand-gold transition-colors hover:text-white"
                    >
                      Book Direct
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="luxury-panel bg-black/30 text-white backdrop-blur-sm">
                <p className="luxury-kicker text-white/54">Brand Direction</p>
                <p className="mt-4 max-w-3xl font-display text-2xl font-light leading-tight text-white sm:text-3xl lg:text-[2.2rem]">
                  The new Pentouz should feel closer to a luxury hospitality journal than a typical room-listing website.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {journalLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="luxury-panel border-white/10 bg-white/[0.05] text-white transition-colors hover:border-brand-gold/40">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-brand-gold">{item.label}</p>
                    <h3 className="mt-4 font-display text-xl font-light leading-tight text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/64">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#e3d7c7] bg-[#f7f1e7]">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-18 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-14 lg:py-24">
            <div>
              <p className="luxury-kicker text-brand-accent">Pentouz Perspective</p>
              <h2 className="luxury-section-title mt-5 max-w-xl">
                Luxury lands best when the site feels curated, not crowded.
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {brandStandards.map((item) => (
                <div key={item.title} className="border-l border-brand-gold/35 pl-5">
                  <h3 className="font-display text-2xl font-light leading-tight text-brand-ink">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-brand-body">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fdfaf4]">
          <div className="mx-auto max-w-[1440px] px-5 py-18 sm:px-8 lg:px-14 lg:py-24">
            <div className="max-w-3xl">
              <p className="luxury-kicker text-brand-accent">Residences</p>
              <h2 className="luxury-section-title mt-5">Three stays. Three distinct luxury moods.</h2>
              <p className="luxury-copy mt-6 max-w-2xl text-brand-body">
                Rather than flattening every property into one visual system, the homepage now introduces the collection as a set of clearly differentiated stays. That makes the brand feel more premium and makes the booking decision easier.
              </p>
            </div>

            <div className="mt-14 space-y-12 lg:space-y-16">
              {destinations.map((destination, index) => (
                <article
                  key={destination.slug}
                  className={index === 1 ? "grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center" : "grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center"}
                >
                  <Link href={`/destinations/${destination.slug}`} className={index === 1 ? "lg:order-2" : ""}>
                    <div className={index === 0 ? "relative aspect-[16/10] overflow-hidden" : "relative aspect-[4/5] overflow-hidden"}>
                      <Image
                        src={destination.heroImage || destination.image}
                        alt={destination.title}
                        fill
                        sizes={index === 0 ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 48vw"}
                        className="object-cover transition-transform duration-1000 hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    </div>
                  </Link>

                  <div className={index === 1 ? "lg:order-1" : ""}>
                    <p className="luxury-kicker text-brand-accent">{destination.subtitle}</p>
                    <h3 className="mt-5 font-display text-4xl font-light leading-tight text-brand-ink sm:text-5xl">
                      {destination.title}
                    </h3>
                    <p className="mt-6 text-base leading-8 text-brand-body sm:text-lg">{destination.description}</p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      <div className="border border-black/8 bg-white/70 px-4 py-4">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">Property Type</p>
                        <p className="mt-3 text-sm text-brand-ink">{destination.propertyType || destination.shortTitle}</p>
                      </div>
                      <div className="border border-black/8 bg-white/70 px-4 py-4">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">Signature</p>
                        <p className="mt-3 text-sm text-brand-ink">{destination.features[0]}</p>
                      </div>
                      <div className="border border-black/8 bg-white/70 px-4 py-4">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">Stay Style</p>
                        <p className="mt-3 text-sm text-brand-ink">{destination.idealFor?.[0] || "Luxury stay"}</p>
                      </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        href={`/destinations/${destination.slug}`}
                        className="inline-flex items-center gap-2 rounded-full border border-brand-ink px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-colors hover:bg-brand-ink hover:text-white"
                      >
                        Discover Residence
                        <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                      </Link>
                      <a
                        href={destination.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-transparent px-2 py-3 text-[11px] uppercase tracking-[0.2em] text-brand-gold transition-colors hover:text-brand-ink"
                      >
                        Book Direct
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#15120f] text-white">
          <div className="mx-auto max-w-[1440px] px-5 py-18 sm:px-8 lg:grid lg:grid-cols-[0.84fr_1.16fr] lg:gap-12 lg:px-14 lg:py-24">
            <div>
              <p className="luxury-kicker text-brand-gold">Travel and Search Intent</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl">
                Luxury brand pages paired with deep location-led content.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
                Pentouz is no longer relying only on generic destination pages. The site now has a growing content layer around courts, landmarks, government offices, MG Road, UB City, and nearby Bangalore travel intent.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:mt-0">
              {journalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="luxury-panel border-white/10 bg-white/[0.04] text-white transition-colors hover:border-brand-gold/45">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">{item.label}</p>
                  <h3 className="mt-4 font-display text-2xl font-light leading-tight text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ece1d1]">
          <div className="mx-auto max-w-5xl px-5 py-18 text-center sm:px-8 lg:px-14 lg:py-24">
            <p className="luxury-kicker text-brand-accent">Reservations</p>
            <h2 className="luxury-section-title mt-5">Begin with the property that matches the way you travel.</h2>
            <p className="mt-6 text-base leading-8 text-brand-body sm:text-lg">
              Whether the trip is built around a court hearing, a longer family stay, a business week, or a hillside reset, the next step should feel direct and confident.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center rounded-full bg-brand-ink px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-black"
              >
                View All Properties
              </Link>
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-brand-ink px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-colors hover:bg-brand-ink hover:text-white"
              >
                Call Concierge
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
