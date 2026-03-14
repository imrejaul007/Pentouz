import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          <div className="absolute inset-0">
            <Image src="/ooty/all/21._restaurant.jpeg" alt="Pentouz experiences" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,8,0.9)_0%,rgba(12,10,8,0.58)_42%,rgba(12,10,8,0.24)_75%,rgba(12,10,8,0.7)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.15)_0%,rgba(12,10,8,0)_30%,rgba(12,10,8,0.8)_100%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[78vh] max-w-[1440px] items-end px-5 pb-16 pt-40 sm:px-8 lg:px-14 lg:pb-24">
            <div className="max-w-4xl">
              <p className="luxury-kicker text-white/72">Experiences</p>
              <h1 className="luxury-hero-title mt-6 max-w-4xl text-white">
                The best Pentouz experiences begin with the stay itself, then open into the right version of the city or landscape.
              </h1>
              <p className="luxury-copy mt-8 max-w-2xl text-white/76">
                Each property offers a different rhythm: city ease at Lavelle Road, private penthouse living in Indiranagar, and scenic quiet in Ooty.
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
            <h2 className="luxury-section-title mt-5">Three different stays, three different kinds of luxury time.</h2>
          </div>

          <div className="mt-14 space-y-12 lg:space-y-16">
            {experienceStories.map((story, index) => (
              <article key={story.title} className={index === 1 ? "grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center" : "grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"}>
                <Link href={story.href} className={index === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[4/5]">
                    <Image src={story.image} alt={story.title} fill className="object-cover transition-transform duration-1000 hover:scale-[1.02]" sizes="(max-width: 1024px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>
                </Link>
                <div className={index === 1 ? "lg:order-1" : ""}>
                  <p className="luxury-kicker text-brand-accent">{story.subtitle}</p>
                  <h3 className="mt-5 font-display text-4xl font-light leading-tight text-brand-ink sm:text-5xl">{story.title}</h3>
                  <p className="mt-6 text-base leading-8 text-brand-body sm:text-lg">{story.description}</p>
                  <div className="mt-8">
                    <Link href={story.href} className="inline-flex items-center gap-2 rounded-full border border-brand-ink px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-colors hover:bg-brand-ink hover:text-white">
                      View Property Experiences
                      <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                    </Link>
                  </div>
                </div>
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
