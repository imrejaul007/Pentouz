import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import { withSiteUrl } from "@/lib/site";

const heroImages = [
  "/ooty/all/21._restaurant.jpeg",
  "/fernhill/all/50_top_view.jpg",
  "/indiranagar/all/tpi_pictures_low_res_terrace_7.jpg",
  "/lavelle-road/all/restaurant_1.jpg",
];

export const metadata: Metadata = {
  title: "Experiences | The Pentouz",
  description:
    "Discover curated experiences at each Pentouz property: city access at Lavelle Road, penthouse living in Indiranagar, coffee country in Chikmagalur, and scenic retreats in Ooty.",
  keywords: [
    "The Pentouz experiences",
    "luxury travel experiences",
    "Bangalore curated stays",
    "Chikmagalur activities",
    "Ooty travel experiences",
    "penthouse living",
  ],
  openGraph: {
    title: "Experiences | The Pentouz",
    description:
      "Discover curated experiences at each Pentouz property: city access, penthouse living, coffee country, and scenic retreats.",
    url: withSiteUrl("/experiences"),
    siteName: "The Pentouz",
    images: [
      {
        url: withSiteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "The Pentouz - Curated Experiences",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiences | The Pentouz",
    description:
      "Discover curated experiences at each Pentouz property.",
  },
  alternates: {
    canonical: withSiteUrl("/experiences"),
  },
};

const experienceStories = [
  {
    title: "Lavelle Road city rhythm",
    subtitle: "Business and legal travel, handled with polish",
    description:
      "Lavelle Road experiences should feel grounded in real Bangalore movement: early hearing days, UB City dinners, MG Road access, and the ability to return to a room that still feels private and composed.",
    image: "/lavelle-road/all/restaurant_2.jpg",
    href: "/destinations/lavelle-road/experiences",
  },
  {
    title: "Indiranagar penthouse living",
    subtitle: "Private gatherings, terrace time, and longer stays",
    description:
      "Indiranagar is strongest when the stay itself becomes part of the experience. The terrace, living room, and dining core support family time, hosted evenings, and a more residential luxury mood.",
    image: "/indiranagar/all/06._terrace_01._terrace.jpg",
    href: "/destinations/indiranagar/experiences",
  },
  {
    title: "Chikmagalur coffee country",
    subtitle: "Coffee plantations, misty hills, and serene escapes",
    description:
      "In Chikmagalur, the best experiences are about slowing down: morning coffee on the balcony overlooking plantations, afternoons by the pool, evenings around the bonfire, and star-lit nights in the hills.",
    image: "/fernhill/all/50_top_view.jpg",
    href: "/destinations/pentouz-hillside/experiences",
  },
  {
    title: "Ooty retreat atmosphere",
    subtitle: "Scenic pace, quiet mornings, and softer travel",
    description:
      "In Ooty, the best experiences are often the simplest: breakfast with hillside light, time on the lawn, scenic outings, and returning to a room that still feels part of the getaway.",
    image: "/ooty/all/22._lawn.jpeg",
    href: "/destinations/ooty/experiences",
  },
];

const standards = [
  {
    title: "Location first",
    description: "Each experience should feel true to the property and its surroundings, not like a copied hotel list.",
  },
  {
    title: "Useful luxury",
    description: "A great experience may be a private terrace evening, a well-timed dinner reservation, or a stay built cleanly around a packed day.",
  },
  {
    title: "Simple and refined",
    description: "The experience should feel natural and well judged rather than over-planned or over-described.",
  },
];

export default function ExperiencesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f2e8] text-brand-ink">
        <section className="relative isolate overflow-hidden text-white">
          <HeroSlider images={heroImages} alt="Pentouz experiences" />

          <div className="relative mx-auto max-w-[1440px] px-5 pb-24 pt-48 sm:px-8 lg:px-14">
            <div className="max-w-4xl">
              <p className="text-[10px] uppercase tracking-[0.32em] text-brand-gold mb-4">Experiences</p>
              <h1 className="font-display text-[2rem] font-light leading-[1] text-white sm:text-[3rem] md:text-[4rem] lg:text-[5rem]">
                The best Pentouz experiences begin with the stay itself, then open into the right version of the city or landscape.
              </h1>
              <p className="mt-6 text-base leading-7 text-white/78 max-w-2xl">
                Each property offers a different rhythm: city ease at Lavelle Road, private penthouse living in Indiranagar, coffee country escapes in Chikmagalur, and scenic quiet in Ooty.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-black/5 bg-[#fdf9f3]">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-18 sm:px-8 lg:grid-cols-3 lg:px-14 lg:py-24">
            {standards.map((item) => (
              <div key={item.title} className="border-l border-brand-gold/35 pl-5">
                <h2 className="font-display text-3xl font-light leading-tight text-brand-ink">{item.title}</h2>
                <p className="mt-4 text-base leading-8 text-brand-body">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-18 sm:px-8 lg:px-14 lg:py-24">
          <div className="max-w-3xl">
            <p className="luxury-kicker text-brand-accent">Property Experiences</p>
            <h2 className="luxury-section-title mt-5">Four distinct stays, four unique ways to experience luxury.</h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {experienceStories.map((story, index) => (
              <article key={story.title} className="group flex flex-col">
                <Link href={story.href} className="flex flex-col h-full">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e4de]">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 text-white">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-brand-gold mb-2">{story.subtitle}</p>
                      <h3 className="font-display text-xl sm:text-2xl font-light leading-tight">{story.title}</h3>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-5 sm:p-6 flex flex-col justify-between min-h-[140px]">
                    <p className="text-sm leading-relaxed text-brand-body line-clamp-3">{story.description}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-all duration-300 group-hover:gap-3 group-hover:text-brand-gold">
                      View Experiences
                      <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#161310] text-white">
          <div className="mx-auto max-w-5xl px-5 py-18 text-center sm:px-8 lg:px-14 lg:py-24">
            <p className="luxury-kicker text-brand-gold">Reservations and Concierge</p>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
              Let the stay and the itinerary support each other.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              Move from browsing into a direct booking or concierge conversation without losing the calm tone of the brand.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/destinations" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-colors hover:bg-brand-gold hover:text-white">
                Explore Stays
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:border-brand-gold hover:text-brand-gold">
                Contact Concierge
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
