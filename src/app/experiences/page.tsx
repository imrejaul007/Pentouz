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
      <main className="bg-[#faf7f2] text-[#1a1814]">
        <section className="relative overflow-hidden text-white">
          <HeroSlider images={heroImages} alt="Pentouz experiences" />

          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8 lg:px-16 pb-20 lg:pb-28 pt-32">
              <div className="max-w-3xl">
                <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] mb-6 animate-fade-in-up">Experiences</p>
                <h1 className="font-['Cormorant_Garamond',serif] text-white font-light leading-[1.1] animate-fade-in-up [animation-delay:100ms]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
                  The best Pentouz experiences begin with the stay itself, then open into the right version of the city or landscape.
                </h1>
                <p className="mt-8 font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/75 max-w-xl animate-fade-in-up [animation-delay:200ms]">
                  Each property offers a different rhythm: city ease at Lavelle Road, private penthouse living in Indiranagar, coffee country escapes in Chikmagalur, and scenic quiet in Ooty.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {standards.map((item) => (
                <div key={item.title} className="border-l-2 border-[#c3a061]/40 pl-5 sm:pl-6">
                  <h2 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl lg:text-3xl font-light text-[#1a1814] leading-tight">{item.title}</h2>
                  <p className="mt-3 sm:mt-4 font-['Lora',serif] text-sm sm:text-base leading-[1.7] text-[#4a4a44]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="max-w-2xl mb-10 sm:mb-16">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">Property Experiences</p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                Four distinct stays, four unique ways to experience luxury.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 lg:gap-10">
              {experienceStories.map((story) => (
                <article key={story.title} className="group flex flex-col bg-white border border-[#e5dfd6] overflow-hidden">
                  <Link href={story.href} className="flex flex-col h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 text-white">
                        <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#c3a061] mb-1 sm:mb-2">{story.subtitle}</p>
                        <h3 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl lg:text-2xl font-light leading-tight">{story.title}</h3>
                      </div>
                    </div>
                    <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between min-h-[120px] sm:min-h-[140px]">
                      <p className="font-['Lora',serif] text-xs sm:text-sm leading-[1.7] text-[#4a4a44] line-clamp-3">{story.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#4a4a44] group-hover:gap-3 group-hover:text-[#c3a061] transition-all duration-300">
                        View Experiences
                        <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#c3a061] font-medium mb-3 sm:mb-4">Reservations and Concierge</p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-white mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                Let the stay and the itinerary support each other.
              </h2>
              <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-white/65 mb-8 sm:mb-10">
                Move from browsing into a direct booking or concierge conversation without losing the calm tone of the brand.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link href="/destinations" className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-white text-[#0f0e0c] px-8 sm:px-10 py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:bg-[#c3a061] hover:text-white">
                  Explore Stays
                </Link>
                <Link href="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 border border-white/20 text-white px-8 sm:px-10 py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]">
                  Contact Concierge
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
