import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations } from "@/data/content";

export const metadata = {
  title: "Destinations | The Pentouz",
  description:
    "Explore The Pentouz collection across Bengaluru and Ooty, from city studios to private penthouse living and hillside retreats.",
};

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f7f3ed]">
        <section className="relative min-h-[92svh] overflow-hidden bg-[#161311] text-white">
          <div className="absolute inset-0">
            <Image
              src="/indiranagar/living-room-10.jpg"
              alt="The Pentouz destinations"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.22)_0%,rgba(8,8,8,0.16)_24%,rgba(8,8,8,0.62)_74%,rgba(8,8,8,0.84)_100%)]" />
          </div>

          <div className="relative max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 pt-36 sm:pt-44 lg:pt-52 pb-16 sm:pb-20 min-h-[92svh] flex flex-col justify-end">
            <p className="text-[10px] uppercase tracking-[0.42em] text-brand-gold mb-6">The Pentouz Collection</p>
            <h1 className="max-w-5xl font-display text-[3.2rem] leading-[0.92] sm:text-[4.8rem] lg:text-[6.8rem] xl:text-[7.8rem] font-light">
              Three stays, each with its own <em className="italic text-brand-gold">pace and character</em>
            </h1>
            <p className="mt-8 max-w-2xl text-base sm:text-lg text-white/82 leading-relaxed">
              The collection is not built around repetition. Each destination has a different mood, from central city precision to penthouse privacy to hillside retreat.
            </p>
          </div>
        </section>

        <section className="bg-white border-t border-[#e7ddcf]">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-24 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.34em] text-brand-accent mb-5">Collection Notes</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                A smaller, more edited portfolio of stays
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Lavelle Road for business, legal, and central Bengaluru access.",
                "Indiranagar for larger residential comfort and longer city stays.",
                "Ooty for softer retreat energy, landscape, and altitude.",
              ].map((note) => (
                <div key={note} className="border border-[#eee4d8] bg-[#faf6f0] p-5">
                  <p className="text-sm text-brand-body leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f3ed]">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-24 space-y-20 lg:space-y-24">
            {destinations.map((destination, index) => (
              <article
                key={destination.slug}
                className={`grid gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:grid-cols-[0.86fr_1.14fr]" : "lg:grid-cols-[1.14fr_0.86fr]"}`}
              >
                <Link
                  href={`/destinations/${destination.slug}`}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#11100f]">
                    <Image
                      src={destination.heroImage || destination.image}
                      alt={destination.title}
                      fill
                      className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>
                </Link>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-[10px] uppercase tracking-[0.34em] text-brand-accent mb-4">
                    {destination.subtitle}
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink leading-tight">
                    {destination.title}
                  </h2>
                  <p className="mt-6 text-base text-brand-body leading-relaxed max-w-xl">
                    {destination.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={`/destinations/${destination.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-black"
                    >
                      Explore Residence
                      <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
                    </Link>
                    <Link
                      href={`/destinations/${destination.slug}/living`}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-ink px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-brand-ink transition-colors hover:bg-brand-ink hover:text-white"
                    >
                      View Living
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#11100f] text-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Travel Journal",
                href: "/travel",
                text: "Location-led content and city guides built around the collection.",
              },
              {
                title: "Gallery",
                href: "/gallery",
                text: "A more edited visual sequence across all Pentouz properties.",
              },
              {
                title: "Contact Reservations",
                href: "/contact",
                text: "Speak with the team directly to choose the right stay.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-white/10 bg-white/[0.03] p-6 hover:border-brand-gold/35 transition-colors"
              >
                <p className="font-display text-2xl font-light text-white mb-3">{item.title}</p>
                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
