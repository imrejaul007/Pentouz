import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import { withSiteUrl } from "@/lib/site";

const heroImages = [
  "/indiranagar/all/tpi_pictures_low_res_terrace_7.jpg",
  "/fernhill/all/03_exterior.jpg",
  "/lavelle-road/all/facade_1.jpg",
  "/ooty/all/01._facade_1.jpeg",
];

export const metadata: Metadata = {
  title: "Stories | The Pentouz",
  description:
    "A closer look at the addresses, spaces, and atmospheres that shape the Pentouz experience across Lavelle Road, Indiranagar, Chikmagalur, and Ooty.",
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
  },
  {
    title: "Indiranagar",
    subtitle: "Private living",
    description: "For families, longer stays, and guests who prefer a residence-style experience with more room to settle in.",
    image: "/indiranagar/all/04._living_room_05._living_room.jpg",
    href: "/destinations/indiranagar",
    category: "Property",
  },
  {
    title: "Ooty",
    subtitle: "Retreat mood",
    description: "Quiet landscapes, slower mornings, and a very different rhythm from the city.",
    image: "/ooty/all/24._view.jpeg",
    href: "/destinations/ooty",
    category: "Property",
  },
  {
    title: "Pentouz Hillside",
    subtitle: "Coffee country",
    description: "A luxury homestay in Chikmagalur's plantation heart — swimming pool, bonfire evenings, and fresh coffee every morning.",
    image: "/fernhill/all/03_exterior.jpg",
    href: "/destinations/pentouz-hillside",
    category: "Property",
  },
  {
    title: "The King Studio at Lavelle Road",
    subtitle: "Room story",
    description: "A close look at the 475 sq. ft. King Studio — kitchenette, work desk, city views, and the kind of quiet that city hotels rarely offer.",
    image: "/lavelle-road/all/9042_king_suite_1.jpg",
    href: "/destinations/lavelle-road/living",
    category: "Rooms",
  },
  {
    title: "The Three-Bedroom Penthouse",
    subtitle: "Extended stay",
    description: "When you need more room to breathe — the 6,000 sq. ft. Indiranagar penthouse and what makes it ideal for families.",
    image: "/indiranagar/all/tpi_pictures_low_res_terrace_7.jpg",
    href: "/destinations/indiranagar/living",
    category: "Rooms",
  },
  {
    title: "A Weekend in the Nilgiris",
    subtitle: "Travel guide",
    description: "From Ooty Lake to the botanical gardens and the narrow-gauge toy train — how to spend two unhurried days in the Nilgiris.",
    image: "/ooty/all/01._facade_1.jpeg",
    href: "/destinations/ooty",
    category: "Travel Guide",
  },
  {
    title: "Coffee Plantations of Chikmagalur",
    subtitle: "Travel guide",
    description: "What to see, drink, and do around the estates — a practical guide to Chikmagalur's best coffee country trails and viewpoints.",
    image: "/fernhill/all/50_top_view.jpg",
    href: "/destinations/pentouz-hillside",
    category: "Travel Guide",
  },
  {
    title: "Why Lavelle Road Is the Best Address in Bangalore",
    subtitle: "City guide",
    description: "UB City, Cubbon Park, and MG Road — all within a 10-minute walk. The case for choosing Lavelle Road as your Bangalore base.",
    image: "/lavelle-road/terrace-1.jpg",
    href: "/destinations/lavelle-road",
    category: "City Guide",
  },
  {
    title: "The Art of the Extended Stay",
    subtitle: "Lifestyle",
    description: "When a stay shifts from days to weeks, what matters changes. Space, kitchen, quiet, and the rhythm of a neighborhood.",
    image: "/indiranagar/all/01._living_room_02._living_room.jpg",
    href: "/destinations/indiranagar",
    category: "Lifestyle",
  },
];

export default function StoriesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#faf7f2] text-[#1a1814]">
        <section className="relative overflow-hidden text-white">
          <HeroSlider images={heroImages} alt="The Pentouz stories" />

          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8 lg:px-16 pb-20 lg:pb-28 pt-32">
              <div className="max-w-3xl">
                <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] mb-6 animate-fade-in-up">Discover The Pentouz</p>
                <h1 className="font-['Cormorant_Garamond',serif] text-white font-light leading-[1.1] animate-fade-in-up [animation-delay:100ms]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
                  Places, moods, and the feeling behind each stay.
                </h1>
                <p className="mt-8 font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/75 max-w-xl animate-fade-in-up [animation-delay:200ms]">
                  A closer look at the addresses, spaces, and atmospheres that shape the Pentouz experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-16 items-center">
              <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden">
                <Image src={feature.image} alt={feature.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">Featured stay story</p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814] mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>{feature.title}</h2>
                <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44] mb-6 sm:mb-8">{feature.text}</p>
                <Link href={feature.href} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0f0e0c] text-white px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:bg-[#c3a061]">
                  Explore Lavelle Road
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="max-w-2xl mb-10 sm:mb-16">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">More from The Pentouz</p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                A simple guide to the stays and the way they feel.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {stories.map((story, index) => (
                <Link
                  key={story.title}
                  href={story.href}
                  className="group border border-[#e5dfd6] bg-white overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${120 + index * 100}ms` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={story.image} alt={story.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#8b7355]">{story.subtitle}</p>
                    <h3 className="mt-2 sm:mt-3 font-['Cormorant_Garamond',serif] text-lg sm:text-xl lg:text-2xl font-light text-[#1a1814] leading-tight">{story.title}</h3>
                    <p className="mt-3 sm:mt-4 font-['Lora',serif] text-xs sm:text-sm leading-[1.7] text-[#4a4a44] line-clamp-3">{story.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#c3a061] font-medium mb-3 sm:mb-4">Continue exploring</p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-white mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  Start with the property that matches your trip.
                </h2>
                <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-white/65 max-w-xl">
                  See the rooms, location, and feel of each Pentouz stay before you book.
                </p>
              </div>
              <div className="lg:justify-end">
                <Link href="/destinations" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#0f0e0c] px-8 sm:px-10 py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:bg-[#c3a061] hover:text-white">
                  View Properties
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
