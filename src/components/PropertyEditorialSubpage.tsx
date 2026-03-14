import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Plane, Train, Car, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type AccessItem = {
  label: string;
  value: string;
  note: string;
  icon?: "plane" | "train" | "car" | "building" | "pin";
};

type Stat = {
  label: string;
  value: string;
};

type Feature = {
  title: string;
  description: string;
};

type Card = {
  title: string;
  description: string;
  image: string;
  eyebrow?: string;
  meta?: string;
  points?: string[];
};

type ExploreLink = {
  href: string;
  title: string;
  description: string;
};

export type PropertyEditorialPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  stats: Stat[];
  narrativeTitle: string;
  narrativeBody: string;
  quote?: string;
  accessItems?: AccessItem[];
  features?: Feature[];
  cardsTitle: string;
  cardsIntro: string;
  cards: Card[];
  galleryStrip?: Card[];
  ctaTitle: string;
  ctaBody: string;
  ctaHref: string;
  ctaLabel: string;
  exploreLinks: ExploreLink[];
};

const accessIcons = {
  plane: Plane,
  train: Train,
  car: Car,
  building: Building2,
  pin: MapPin,
};

export default function PropertyEditorialSubpage({
  eyebrow,
  title,
  intro,
  heroImage,
  heroAlt,
  stats,
  narrativeTitle,
  narrativeBody,
  quote,
  accessItems,
  features,
  cardsTitle,
  cardsIntro,
  cards,
  galleryStrip,
  ctaTitle,
  ctaBody,
  ctaHref,
  ctaLabel,
  exploreLinks,
}: PropertyEditorialPageProps) {
  return (
    <>
      <Header />
      <main className="bg-[#f6f1e8] text-brand-ink">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f0d0a]/90 via-[#0f0d0a]/55 to-[#0f0d0a]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0a]/90 via-transparent to-[#0f0d0a]/20" />
          </div>

          <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-6 pb-16 pt-40 sm:px-8 lg:px-12 lg:pb-24">
            <div className="max-w-4xl">
              <p className="mb-6 text-[11px] uppercase tracking-[0.42em] text-[#d6b06a]">{eyebrow}</p>
              <h1 className="max-w-3xl font-display text-5xl font-light leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">{intro}</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="border border-white/15 bg-white/8 px-5 py-5 backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-white/55">{stat.label}</p>
                    <p className="mt-3 text-xl font-light text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-black/5 bg-[#fbf7f0]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-24">
            <div>
              <p className="text-[11px] uppercase tracking-[0.38em] text-brand-accent">Overview</p>
              <h2 className="mt-6 max-w-2xl font-display text-4xl font-light leading-tight text-brand-ink sm:text-5xl">
                {narrativeTitle}
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-base leading-8 text-brand-body sm:text-lg">{narrativeBody}</p>
              {quote ? (
                <div className="border-l border-brand-gold/40 pl-6 text-lg font-light italic leading-8 text-brand-ink/85">
                  {quote}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {accessItems?.length ? (
          <section className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-12 lg:py-20">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {accessItems.map((item) => {
                const Icon = accessIcons[item.icon || "pin"];
                return (
                  <div key={item.label} className="border border-black/8 bg-white px-6 py-6 shadow-[0_20px_60px_rgba(15,13,10,0.05)]">
                    <div className="flex items-center gap-3 text-brand-accent">
                      <Icon className="h-5 w-5" />
                      <p className="text-[10px] uppercase tracking-[0.22em]">{item.label}</p>
                    </div>
                    <p className="mt-5 text-xl font-light text-brand-ink">{item.value}</p>
                    <p className="mt-2 text-sm leading-7 text-brand-body">{item.note}</p>
                  </div>
                );
              })}
            </div>
          </section>
        ) : null}

        {features?.length ? (
          <section className="bg-[#1a1611] text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-18">
              <div className="grid gap-6 md:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.title} className="border border-white/10 px-6 py-7">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#d6b06a]">Signature Detail</p>
                    <h3 className="mt-4 font-display text-2xl font-light text-white">{feature.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/70">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.38em] text-brand-accent">Signature Spaces</p>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight text-brand-ink sm:text-5xl">{cardsTitle}</h2>
            <p className="mt-6 text-base leading-8 text-brand-body sm:text-lg">{cardsIntro}</p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {cards.map((card, index) => (
              <article key={`${card.title}-${index}`} className="overflow-hidden border border-black/8 bg-white shadow-[0_24px_80px_rgba(15,13,10,0.06)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    {card.eyebrow ? <p className="text-[10px] uppercase tracking-[0.24em] text-white/70">{card.eyebrow}</p> : null}
                    <h3 className="mt-2 font-display text-3xl font-light text-white">{card.title}</h3>
                    {card.meta ? <p className="mt-2 text-sm text-white/72">{card.meta}</p> : null}
                  </div>
                </div>
                <div className="px-6 py-7 sm:px-8">
                  <p className="text-base leading-8 text-brand-body">{card.description}</p>
                  {card.points?.length ? (
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {card.points.map((point) => (
                        <span key={point} className="border border-black/10 bg-[#f7f2ea] px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-brand-muted">
                          {point}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        {galleryStrip?.length ? (
          <section className="border-y border-black/5 bg-[#fbf7f0]">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-18">
              <div className="grid gap-5 md:grid-cols-3">
                {galleryStrip.map((card, index) => (
                  <div key={`${card.title}-${index}`} className="group overflow-hidden border border-black/8 bg-white">
                    <div className="relative aspect-[1/1.08] overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="px-5 py-5">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent">{card.eyebrow || "Signature Frame"}</p>
                      <h3 className="mt-3 font-display text-2xl font-light text-brand-ink">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-brand-body">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-[#1a1611] text-white">
          <div className="mx-auto max-w-5xl px-6 py-18 text-center sm:px-8 lg:px-12 lg:py-24">
            <p className="text-[11px] uppercase tracking-[0.38em] text-[#d6b06a]">Reservations</p>
            <h2 className="mt-6 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">{ctaTitle}</h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">{ctaBody}</p>
            <div className="mt-10">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-3 border border-[#d6b06a]/50 bg-[#d6b06a] px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-[#1a1611] transition hover:bg-transparent hover:text-[#f6f1e8]"
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-18">
          <div className="flex items-center justify-between gap-6 border-b border-black/8 pb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.38em] text-brand-accent">Continue Exploring</p>
              <h2 className="mt-4 font-display text-3xl font-light text-brand-ink sm:text-4xl">Move through the property story.</h2>
            </div>
            <Clock3 className="hidden h-8 w-8 text-brand-gold/60 sm:block" />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group border border-black/8 bg-white px-6 py-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,13,10,0.07)]"
              >
                <p className="text-[10px] uppercase tracking-[0.24em] text-brand-accent">Pentouz</p>
                <h3 className="mt-4 font-display text-2xl font-light text-brand-ink">{link.title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-body">{link.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-brand-ink">
                  Discover
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
