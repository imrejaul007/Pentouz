import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | The Pentouz",
  description:
    "The Pentouz brand story: boutique luxury hospitality shaped around how guests actually travel, with stays in Lavelle Road, Indiranagar, Ooty, and Chikmagalur.",
  alternates: {
    canonical: withSiteUrl("/about"),
  },
};

const principles = [
  {
    title: "Location with purpose",
    description:
      "Pentouz chooses addresses that already carry weight: Lavelle Road for legal and business travel, Indiranagar for private city living, Ooty for scenic retreat value, and Chikmagalur for immersive coffee-country warmth.",
  },
  {
    title: "Hospitality without noise",
    description:
      "The brand should feel polished and deeply looked after, but never over-performed. Quiet confidence is part of the product.",
  },
  {
    title: "Useful luxury",
    description:
      "Large rooms, private terraces, work-ready layouts, and direct booking clarity matter more than decorative excess.",
  },
  {
    title: "Distinctive stays",
    description:
      "Each property should feel unmistakably itself, not like a duplicated website experience with a different address pasted in.",
  },
];

const brandNotes = [
  {
    title: "Lavelle Road",
    body: "A central Bangalore address designed for advocates, executives, and guests who want premium proximity to the High Court, UB City, MG Road, and the civic core.",
    image: "/lavelle-road/all/reception_2.jpg",
  },
  {
    title: "Indiranagar",
    body: "A large private penthouse that feels more like an elevated residence than a conventional hotel product, with strong appeal for families, groups, and longer urban stays.",
    image: "/indiranagar/all/04._living_room_05._living_room.jpg",
  },
  {
    title: "Ooty",
    body: "A softer, slower retreat expression built around view, weather, lawns, and the emotional comfort expected from a premium hill-stay experience.",
    image: "/ooty/all/24._view.jpeg",
  },
  {
    title: "Pentouz Hillside",
    body: "A warm luxury homestay in Chikmagalur's coffee country. Gardens, plantation views, and the unhurried pace of the Western Ghats make it ideal for families, groups, and contemplative getaways.",
    image: "/fernhill/overview-1.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f2e8] text-brand-ink">
        <section className="relative isolate overflow-hidden text-white">
          <div className="absolute inset-0">
            <Image
              src="/indiranagar/all/04._living_room_03._living_room.jpg"
              alt="The Pentouz brand story"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,8,0.9)_0%,rgba(12,10,8,0.56)_40%,rgba(12,10,8,0.25)_75%,rgba(12,10,8,0.7)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.12)_0%,rgba(12,10,8,0)_35%,rgba(12,10,8,0.75)_100%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[82vh] max-w-[1440px] items-end px-5 pb-16 pt-40 sm:px-8 lg:px-14 lg:pb-24">
            <div className="max-w-4xl">
              <p className="luxury-kicker text-white/72">About Pentouz</p>
              <h1 className="luxury-hero-title mt-6 max-w-4xl text-white">
                Pentouz was built to feel more personal than a hotel, and more polished than a rental.
              </h1>
              <p className="luxury-copy mt-8 max-w-2xl text-white/76">
                The brand sits in the space between private residence and premium hospitality. That is why the strongest Pentouz stays rely on room scale, calm atmosphere, and strong city or landscape positioning rather than generic luxury promises.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-black/5 bg-[#fdf9f3]">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-18 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-14 lg:py-24">
            <div>
              <p className="luxury-kicker text-brand-accent">Brand Story</p>
              <h2 className="luxury-section-title mt-5 max-w-xl">
                A boutique hospitality brand shaped around how guests actually travel.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-brand-body sm:text-lg">
              <p>
                Pentouz began with the idea that premium accommodation should not be loud to feel luxurious. A well-positioned address, thoughtful interiors, clean service, and a more residential sense of privacy often create a stronger impression than excess styling ever could.
              </p>
              <p>
                That philosophy now informs every part of the collection. Lavelle Road serves business and court-related stays with a calmer boutique tone. Indiranagar offers rare penthouse scale in one of Bangalore&apos;s most social neighborhoods. Ooty softens the experience into a retreat built around air, view, and slower time. Fernhill anchors it all with the warmth of a private homestay in Chikmagalur&apos;s coffee country.
              </p>
              <p>
                The result is a brand that should feel refined, useful, and specific to place. Pentouz is strongest when the guest immediately understands why this stay belongs in this location and why it fits the way they want to travel.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-18 sm:px-8 lg:px-14 lg:py-24">
          <div className="max-w-3xl">
            <p className="luxury-kicker text-brand-accent">What Matters</p>
            <h2 className="luxury-section-title mt-5">The principles that make the brand feel premium.</h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((principle) => (
              <article key={principle.title} className="luxury-panel bg-white/80">
                <p className="text-[10px] uppercase tracking-[0.24em] text-brand-accent">Pentouz Standard</p>
                <h3 className="mt-4 font-display text-3xl font-light leading-tight text-brand-ink">{principle.title}</h3>
                <p className="mt-5 text-sm leading-7 text-brand-body">{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#161310] text-white">
          <div className="mx-auto max-w-[1440px] px-5 py-18 sm:px-8 lg:px-14 lg:py-24">
            <div className="max-w-3xl">
              <p className="luxury-kicker text-brand-gold">Property Character</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                One brand, four clearly different hospitality moods.
              </h2>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-4">
              {brandNotes.map((note) => (
                <article key={note.title} className="overflow-hidden border border-white/10 bg-white/[0.03]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={note.image} alt={note.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>
                  <div className="px-6 py-6">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Signature Mood</p>
                    <h3 className="mt-4 font-display text-3xl font-light text-white">{note.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/68">{note.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ede2d1]">
          <div className="mx-auto max-w-5xl px-5 py-18 text-center sm:px-8 lg:px-14 lg:py-24">
            <p className="luxury-kicker text-brand-accent">Stay With Pentouz</p>
            <h2 className="luxury-section-title mt-5">See how the brand translates across the collection.</h2>
            <p className="mt-6 text-base leading-8 text-brand-body sm:text-lg">
              The clearest way to understand Pentouz is to move through the properties themselves. Each one now carries its own story, booking path, and visual tone.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/destinations" className="inline-flex items-center justify-center rounded-full bg-brand-ink px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-black">
                Explore Properties
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-ink px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-colors hover:bg-brand-ink hover:text-white">
                Contact Concierge
                <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
