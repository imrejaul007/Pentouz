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

const collectionNotes = [
  "Lavelle Road brings central Bangalore access with a calmer boutique feel.",
  "Indiranagar offers a true private penthouse stay with more room to settle in.",
  "Ooty slows everything down with landscape, air, and retreat atmosphere.",
  "Fernhill anchors the collection with the warmth of a private homestay in Chikmagalur's coffee country.",
];

const collectionLinks = [
  {
    title: "Gallery",
    href: "/gallery",
    text: "Browse the strongest images across the collection.",
  },
  {
    title: "Experiences",
    href: "/experiences",
    text: "See how each stay connects to its location and mood.",
  },
  {
    title: "Contact",
    href: "/contact",
    text: "Speak directly with the reservations team.",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f7f1e7] text-brand-ink">
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#161310] text-white">
          <div className="absolute inset-0">
            <Image
              src="/lavelle-road/all/terrace_1.jpg"
              alt="The Pentouz collection"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.9)_0%,rgba(10,8,6,0.5)_40%,rgba(10,8,6,0.82)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,160,97,0.15),transparent_32%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24 lg:pt-48">
            <div className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-end">
              <div className="max-w-5xl">
                <p className="luxury-kicker text-white/72 animate-fade-in-up">The Pentouz Collection</p>
                <h1 className="luxury-hero-title mt-6 max-w-5xl text-white animate-fade-in-up [animation-delay:120ms]">
                  Stays with their own mood, their own setting, and their own reason to choose them.
                </h1>
                <p className="luxury-copy mt-8 max-w-2xl text-white/76 animate-fade-in-up [animation-delay:220ms]">
                  The collection is intentionally small. Each property is meant to feel distinct, from boutique city stay to private penthouse to quieter hillside retreat.
                </p>
              </div>

              <div className="xl:justify-self-end xl:max-w-[430px] animate-fade-in-up [animation-delay:320ms]">
                <div className="luxury-panel border-white/15 bg-white/[0.08] text-white backdrop-blur-md">
                  <p className="luxury-kicker text-white/58">Collection Notes</p>
                  <div className="mt-6 space-y-5">
                    {collectionNotes.map((note) => (
                      <p key={note} className="border-b border-white/10 pb-5 text-sm leading-7 text-white/72 last:border-b-0 last:pb-0">
                        {note}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf7f0]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28 space-y-20 lg:space-y-24">
            {destinations.map((destination, index) => (
              <article
                key={destination.slug}
                className={`grid gap-8 lg:gap-14 items-center ${index % 2 === 1 ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_0.9fr]"}`}
              >
                <Link
                  href={`/destinations/${destination.slug}`}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="group relative overflow-hidden bg-[#11100f] shadow-[0_30px_90px_rgba(18,15,12,0.12)]">
                    <div className="relative aspect-[16/11] overflow-hidden lg:aspect-[5/4]">
                      <Image
                        src={destination.heroImage || destination.image}
                        alt={destination.title}
                        fill
                        className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    </div>
                  </div>
                </Link>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="luxury-kicker text-brand-accent">{destination.subtitle}</p>
                  <h2 className="mt-5 font-display text-4xl font-light leading-tight text-brand-ink sm:text-5xl lg:text-6xl">
                    {destination.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-8 text-brand-body sm:text-lg">
                    {destination.copy}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {destination.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="rounded-full border border-brand-border px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-brand-muted">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      href={`/destinations/${destination.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-black"
                    >
                      Explore Property
                      <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
                    </Link>
                    <Link
                      href={`/destinations/${destination.slug}/living`}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-ink px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-ink hover:text-white"
                    >
                      View Living
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#17120e] text-white">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
            <div className="grid gap-5 md:grid-cols-3">
              {collectionLinks.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/40 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="font-display text-3xl font-light text-white">{item.title}</p>
                  <p className="mt-4 text-sm leading-7 text-white/70">{item.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
