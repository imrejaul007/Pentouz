import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { contactInfo, destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const editorialLinks = [
  {
    title: "Hotel Near Karnataka High Court",
    href: "/destinations/lavelle-road/near/karnataka-high-court",
    label: "Legal Travel",
  },
  {
    title: "Best Things to Do in MG Road Bangalore",
    href: "/travel/guides/best-things-to-do-in-mg-road-bangalore",
    label: "City Journal",
  },
  {
    title: "Lavelle Road Nearby Stay Guides",
    href: "/destinations/lavelle-road/near",
    label: "SEO Hub",
  },
];

export default function HomePage() {
  const [featured] = destinations;

  return (
    <>
      <Header />
      <main className="bg-[#f7f3ed]">
        <section className="relative min-h-[100svh] overflow-hidden bg-[#171513] text-white">
          <div className="absolute inset-0">
            <Image
              src={featured.heroImage || featured.image}
              alt={featured.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.34)_0%,rgba(10,10,10,0.18)_20%,rgba(10,10,10,0.58)_75%,rgba(10,10,10,0.82)_100%)]" />
          </div>

          <div className="relative max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 pt-36 sm:pt-44 lg:pt-52 pb-16 sm:pb-20 lg:pb-24 min-h-[100svh] flex flex-col justify-end">
            <div className="max-w-5xl">
              <p className="text-[10px] uppercase tracking-[0.45em] text-brand-gold mb-6">
                The Pentouz Collection
              </p>
              <h1 className="font-display text-[3.2rem] leading-[0.92] sm:text-[4.8rem] lg:text-[7rem] xl:text-[8.2rem] font-light max-w-5xl">
                Residences with a <em className="italic text-brand-gold">slower, richer rhythm</em>
              </h1>
              <p className="mt-8 max-w-2xl text-base sm:text-lg text-white/82 leading-relaxed">
                Private penthouses, city studios, and hillside stays designed for guests who want location, calm, and a more personal sense of luxury.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-colors hover:bg-brand-gold hover:text-white"
              >
                Explore Residences
                <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
              </Link>
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white/90 transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                Call Concierge
              </a>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border border-white/10 bg-white/[0.06] p-5 sm:p-6 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-[0.26em] text-brand-gold mb-3">{featured.subtitle}</p>
                <p className="font-display text-2xl sm:text-3xl font-light mb-3">{featured.title}</p>
                <p className="text-sm text-white/72 max-w-2xl">{featured.copy}</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {editorialLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border border-white/10 bg-black/20 px-4 py-5 hover:border-brand-gold/35 transition-colors"
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold mb-2">{item.label}</p>
                    <p className="text-sm text-white/84 leading-relaxed">{item.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f3ed] py-20 sm:py-24 lg:py-28 border-t border-[#e4dbcf]">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-5">Our Point of View</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                Fewer statements. <br />
                <em className="italic">More atmosphere.</em>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 text-brand-body">
              <p className="text-base leading-relaxed">
                The Pentouz should feel less like a directory of rooms and more like a collection of stays with distinct moods. The experience starts with stillness, material warmth, and confidence in the details.
              </p>
              <p className="text-base leading-relaxed">
                Each property carries a different texture: central business elegance at Lavelle Road, residential scale and privacy in Indiranagar, and a softer retreat language in Ooty.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-24 space-y-20 lg:space-y-24">
            {destinations.map((dest, index) => (
              <article
                key={dest.slug}
                className={index === 0 ? "grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12 items-end" : "grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"}
              >
                <Link
                  href={`/destinations/${dest.slug}`}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className={index === 0 ? "relative aspect-[16/10] overflow-hidden" : "relative aspect-[4/5] overflow-hidden"}>
                    <Image
                      src={dest.heroImage || dest.image}
                      alt={dest.title}
                      fill
                      className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                      sizes={index === 0 ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 50vw"}
                    />
                  </div>
                </Link>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-4">{dest.subtitle}</p>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink leading-tight">
                    {dest.title}
                  </h2>
                  <p className="mt-6 text-base text-brand-body leading-relaxed max-w-xl">{dest.description}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={`/destinations/${dest.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-ink px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-brand-ink transition-colors hover:bg-brand-ink hover:text-white"
                    >
                      Discover Residence
                      <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
                    </Link>
                    <a
                      href={dest.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-brand-gold transition-colors hover:text-brand-ink"
                    >
                      Book Direct
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#11100f] text-white py-20 sm:py-24 lg:py-28">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] items-start">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-4">Pentouz Journal</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                  Stay pages, city guides, and location-led travel intent
                </h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {editorialLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border border-white/10 bg-white/[0.03] p-5 hover:border-brand-gold/35 transition-colors"
                  >
                    <p className="text-[10px] uppercase tracking-[0.24em] text-brand-gold mb-3">{item.label}</p>
                    <p className="text-sm text-white/80 leading-relaxed">{item.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efe7db] py-20 sm:py-24 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-5">Reservations</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink leading-tight">
              Begin with the residence that matches your pace
            </h2>
            <p className="mt-6 text-base sm:text-lg text-brand-body leading-relaxed">
              We’ve kept the booking journey direct, whether you’re planning a legal visit, a business stay, a family trip, or a quieter weekend away.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center rounded-full bg-brand-ink px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-black"
              >
                View All Properties
              </Link>
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-brand-ink px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-colors hover:bg-brand-ink hover:text-white"
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
