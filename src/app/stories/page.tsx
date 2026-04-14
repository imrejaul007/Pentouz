import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stories | The Pentouz",
  description:
    "A closer look at the addresses, spaces, and atmospheres that shape the Pentouz experience across Lavelle Road, Indiranagar, and Ooty.",
  alternates: {
    canonical: withSiteUrl("/stories"),
  },
};

const feature = {
  title: "A stay near Lavelle Road, shaped by the city around it.",
  text: "From UB City and Cubbon Park to MG Road, the Lavelle Road address places guests close to the best-known parts of central Bangalore while still feeling quieter and more private once you return.",
  image: "/lavelle-road/all/facade_1.jpg",
  href: "/destinations/lavelle-road",
};

const stories = [
  {
    title: "Lavelle Road",
    subtitle: "City address",
    description: "A boutique stay for guests who want central access without giving up calm, privacy, and a more personal atmosphere.",
    image: "/lavelle-road/all/restaurant_1.jpg",
    href: "/destinations/lavelle-road",
    category: "Property",
    date: "2025-11-12",
    author: "The Pentouz",
  },
  {
    title: "Indiranagar",
    subtitle: "Private living",
    description: "For families, longer stays, and guests who prefer a residence-style experience with more room to settle in.",
    image: "/indiranagar/all/04._living_room_05._living_room.jpg",
    href: "/destinations/indiranagar",
    category: "Property",
    date: "2025-10-08",
    author: "The Pentouz",
  },
  {
    title: "Ooty",
    subtitle: "Retreat mood",
    description: "Quiet landscapes, slower mornings, and a very different rhythm from the city.",
    image: "/ooty/all/24._view.jpeg",
    href: "/destinations/ooty",
    category: "Property",
    date: "2025-09-20",
    author: "The Pentouz",
  },
  {
    title: "Pentouz Hillside",
    subtitle: "Coffee country",
    description: "A luxury homestay in Chikmagalur's plantation heart — swimming pool, bonfire evenings, and the smell of fresh coffee every morning.",
    image: "/fernhill/facade-1.jpg",
    href: "/destinations/fernhill",
    category: "Property",
    date: "2025-08-14",
    author: "The Pentouz",
  },
  {
    title: "The King Studio at Lavelle Road",
    subtitle: "Room story",
    description: "A close look at the 475 sq. ft. King Studio — kitchenette, work desk, city views, and the kind of quiet that city hotels rarely offer.",
    image: "/lavelle-road/all/9042_king_suite_1.jpg",
    href: "/destinations/lavelle-road/living",
    category: "Rooms",
    date: "2025-11-01",
    author: "The Pentouz",
  },
  {
    title: "The Three-Bedroom Penthouse",
    subtitle: "Extended stay",
    description: "When you need more room to breathe — the 6,000 sq. ft. Indiranagar penthouse and what makes it ideal for families and longer visits.",
    image: "/indiranagar/all/tpi_pictures_low_res_terrace_7.jpg",
    href: "/destinations/indiranagar/living",
    category: "Rooms",
    date: "2025-10-22",
    author: "The Pentouz",
  },
  {
    title: "A Weekend in the Nilgiris",
    subtitle: "Travel guide",
    description: "From Ooty Lake to the botanical gardens and the narrow-gauge toy train — how to spend two unhurried days in the Nilgiris.",
    image: "/ooty/all/01._facade_1.jpeg",
    href: "/destinations/ooty",
    category: "Travel Guide",
    date: "2025-09-05",
    author: "The Pentouz",
  },
  {
    title: "Coffee Plantations of Chikmagalur",
    subtitle: "Travel guide",
    description: "What to see, drink, and do around the estates — a practical guide to Chikmagalur's best coffee country trails and viewpoints.",
    image: "/fernhill/pool-1.jpg",
    href: "/destinations/fernhill",
    category: "Travel Guide",
    date: "2025-08-30",
    author: "The Pentouz",
  },
  {
    title: "Why Lavelle Road Is the Best Address in Bangalore",
    subtitle: "City guide",
    description: "UB City, Cubbon Park, and MG Road — all within a 10-minute walk. The case for choosing Lavelle Road as your Bangalore base.",
    image: "/lavelle-road/terrace-1.jpg",
    href: "/destinations/lavelle-road",
    category: "City Guide",
    date: "2025-10-15",
    author: "The Pentouz",
  },
  {
    title: "The Art of the Extended Stay",
    subtitle: "Lifestyle",
    description: "When a stay shifts from days to weeks, what matters changes. Space, kitchen, quiet, and the rhythm of a neighborhood that feels like home.",
    image: "/indiranagar/all/01._living_room_02._living_room.jpg",
    href: "/destinations/indiranagar",
    category: "Lifestyle",
    date: "2025-09-28",
    author: "The Pentouz",
  },
  {
    title: "Planning a Court Visit to Bangalore",
    subtitle: "Travel guide",
    description: "A practical guide for outstation advocates — routing from Lavelle Road, nearby accommodation options, and what makes a multi-day stay comfortable.",
    image: "/lavelle-road/reception-1.jpg",
    href: "/destinations/lavelle-road",
    category: "Travel Guide",
    date: "2025-07-18",
    author: "The Pentouz",
  },
  {
    title: "The Prive Club Experience",
    subtitle: "Membership",
    description: "Priority access, complimentary upgrades, and the kind of attention that turns a good stay into a lasting relationship. Inside Prive by The Pentouz.",
    image: "/indiranagar/skyline-suite.jpg",
    href: "/prive-club",
    category: "Lifestyle",
    date: "2025-06-10",
    author: "The Pentouz",
  },
];

export default function StoriesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f7f1e7] text-brand-ink">
        <section className="relative isolate overflow-hidden bg-[#17120e] text-white">
          <div className="absolute inset-0">
            <Image
              src="/indiranagar/all/tpi_pictures_low_res_terrace_7.jpg"
              alt="The Pentouz stories"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.9)_0%,rgba(10,8,6,0.48)_44%,rgba(10,8,6,0.84)_100%)]" />
          </div>

          <div className="relative mx-auto max-w-[1480px] px-5 pb-20 pt-36 sm:px-8 lg:px-14 lg:pb-28 lg:pt-48">
            <div className="max-w-4xl">
              <p className="luxury-kicker text-white/70 animate-fade-in-up">Discover The Pentouz</p>
              <h1 className="luxury-hero-title mt-6 text-white animate-fade-in-up [animation-delay:120ms]">
                Places, moods, and the feeling behind each stay.
              </h1>
              <p className="luxury-copy mt-8 max-w-2xl text-white/76 animate-fade-in-up [animation-delay:220ms]">
                A closer look at the addresses, spaces, and atmospheres that shape the Pentouz experience.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf7f0]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="relative min-h-[420px] overflow-hidden bg-white animate-fade-in-up">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="animate-fade-in-up [animation-delay:160ms]">
                <p className="luxury-kicker text-brand-accent">Featured stay story</p>
                <h2 className="luxury-section-title mt-5">{feature.title}</h2>
                <p className="mt-6 text-base leading-8 text-brand-body sm:text-lg">{feature.text}</p>
                <div className="mt-8">
                  <Link href={feature.href} className="inline-flex items-center justify-center rounded-full bg-brand-ink px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold">
                    Explore Lavelle Road
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f3eadf]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="max-w-3xl animate-fade-in-up">
              <p className="luxury-kicker text-brand-accent">More from The Pentouz</p>
              <h2 className="luxury-section-title mt-5">A simple guide to the stays and the way they feel.</h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {stories.map((story, index) => (
                <Link
                  key={story.title}
                  href={story.href}
                  className="group overflow-hidden bg-white shadow-[0_24px_80px_rgba(18,15,12,0.08)] transition-all duration-700 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${120 + index * 100}ms` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 25vw"
                      className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">{story.subtitle}</p>
                    <h3 className="mt-3 font-display text-3xl font-light leading-tight text-brand-ink">{story.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-brand-body">{story.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#17120e] text-white">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-14 lg:py-24">
            <div>
              <p className="luxury-kicker text-brand-gold">Continue exploring</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl">
                Start with the property that matches your trip.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                See the rooms, location, and feel of each Pentouz stay before you book.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:justify-end">
              <Link href="/destinations" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-white">
                View Properties
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
