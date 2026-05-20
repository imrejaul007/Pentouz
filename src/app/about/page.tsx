import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import FAQ from "@/components/FAQ";
import { withSiteUrl } from "@/lib/site";
import { generatePageSchemas } from "@/lib/schema";

const heroImages = [
  "/indiranagar/all/04._living_room_03._living_room.jpg",
  "/fernhill/all/63_overview.jpg",
  "/lavelle-road/all/reception_2.jpg",
  "/ooty/all/24._view.jpeg",
];

export const metadata: Metadata = {
  title: "About | The Pentouz",
  description:
    "The Pentouz brand story: boutique luxury hospitality shaped around how guests actually travel. Properties include The Pentouz Lavelle Road, Indiranagar, Hillside Chikmagalur, and Windsor Heights Ooty.",
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
    title: "The Pentouz Lavelle Road",
    body: "A central Bangalore address designed for advocates, executives, and guests who want premium proximity to the High Court, UB City, MG Road, and the civic core.",
    image: "/lavelle-road/all/reception_2.jpg",
  },
  {
    title: "The Pentouz 100 Feet Road, Indiranagar",
    body: "A large private penthouse that feels more like an elevated residence than a conventional hotel product, with strong appeal for families, groups, and longer urban stays.",
    image: "/indiranagar/all/04._living_room_05._living_room.jpg",
  },
  {
    title: "The Pentouz Hillside Chikmagalur",
    body: "A warm luxury homestay in Chikmagalur's coffee country. Gardens, plantation views, and the unhurried pace of the Western Ghats make it ideal for families, groups, and contemplative getaways.",
    image: "/fernhill/all/63_overview.jpg",
  },
  {
    title: "The Pentouz Windsor Heights Ooty",
    body: "A softer, slower retreat expression built around view, weather, lawns, and the emotional comfort expected from a premium hill-stay experience.",
    image: "/ooty/all/24._view.jpeg",
  },
];

export default function AboutPage() {
  const aboutSchema = generatePageSchemas({ type: "about" });

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <main className="bg-[#faf7f2] text-[#1a1814]">
        <section className="relative overflow-hidden text-white">
          <HeroSlider images={heroImages} alt="About Pentouz" />

          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8 lg:px-16 pb-20 lg:pb-28 pt-32">
              <div className="max-w-3xl">
                <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] mb-6 animate-fade-in-up">About Pentouz</p>
                <h1 className="font-['Cormorant_Garamond',serif] text-white font-light leading-[1.1] animate-fade-in-up [animation-delay:100ms]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
                  Pentouz was built to feel more personal than a hotel, and more polished than a rental.
                </h1>
                <p className="mt-8 font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/75 max-w-xl animate-fade-in-up [animation-delay:200ms]">
                  The brand sits in the space between private residence and premium hospitality. That is why the strongest Pentouz stays rely on room scale, calm atmosphere, and strong city or landscape positioning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-20 items-start">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">Brand Story</p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  A boutique hospitality brand shaped around how guests actually travel.
                </h2>
              </div>
              <div className="space-y-5 sm:space-y-6">
                <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44]">
                  Pentouz began with the idea that premium accommodation should not be loud to feel luxurious. A well-positioned address, thoughtful interiors, clean service, and a more residential sense of privacy often create a stronger impression than excess styling ever could.
                </p>
                <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44]">
                  That philosophy now informs every part of the collection. Lavelle Road serves business and court-related stays with a calmer boutique tone. Indiranagar offers rare penthouse scale in one of Bangalore&apos;s most social neighborhoods. The Pentouz Hillside Chikmagalur anchors the collection with warmth and natural beauty in coffee country. Ooty softens the experience into a retreat built around air, view, and slower time.
                </p>
                <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44]">
                  The result is a brand that should feel refined, useful, and specific to place. Pentouz is strongest when the guest immediately understands why this stay belongs in this location.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="max-w-2xl mb-10 sm:mb-16">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">What Matters</p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                The principles that make the brand feel premium.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {principles.map((principle) => (
                <article key={principle.title} className="border border-[#e5dfd6] bg-white p-6 sm:p-8">
                  <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[#8b7355]">Pentouz Standard</p>
                  <h3 className="mt-3 sm:mt-4 font-['Cormorant_Garamond',serif] text-xl sm:text-2xl lg:text-3xl font-light text-[#1a1814] leading-tight">{principle.title}</h3>
                  <p className="mt-4 sm:mt-5 font-['Lora',serif] text-xs sm:text-sm leading-[1.7] text-[#4a4a44]">{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="max-w-2xl mb-10 sm:mb-16">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#c3a061] font-medium mb-3 sm:mb-4">Property Character</p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                One brand, four clearly different hospitality moods.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
              {brandNotes.map((note) => (
                <article key={note.title} className="border border-white/10 overflow-hidden bg-white/[0.02]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={note.image} alt={note.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#c3a061]">Signature Mood</p>
                    <h3 className="mt-3 sm:mt-4 font-['Cormorant_Garamond',serif] text-xl sm:text-2xl lg:text-3xl font-light text-white leading-tight">{note.title}</h3>
                    <p className="mt-3 sm:mt-4 font-['Lora',serif] text-xs sm:text-sm leading-[1.7] text-white/65">{note.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">Stay With Pentouz</p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814] mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                See how the brand translates across the collection.
              </h2>
              <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44] mb-8 sm:mb-10">
                The clearest way to understand Pentouz is to move through the properties themselves. Each one carries its own story, booking path, and visual tone.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link href="/destinations" className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-[#0f0e0c] text-white px-8 sm:px-10 py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:bg-[#c3a061]">
                  Explore Properties
                </Link>
                <Link href="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 border border-[#0f0e0c] text-[#0f0e0c] px-8 sm:px-10 py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:bg-[#0f0e0c] hover:text-white">
                  Contact Concierge
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQ
          items={[
            {
              question: "What is The Pentouz brand philosophy?",
              answer: "The Pentouz was built on the idea that premium accommodation should not be loud to feel luxurious. A well-positioned address, thoughtful interiors, clean service, and a more residential sense of privacy create a stronger impression than excess styling.",
            },
            {
              question: "How many properties does The Pentouz have?",
              answer: "The Pentouz currently operates four properties: The Pentouz Lavelle Road (Bangalore city center), The Pentouz Indiranagar (Bangalore's vibrant neighborhood), The Pentouz Hillside Chikmagalur (coffee country retreat), and The Pentouz Windsor Heights Ooty (mountain escape).",
            },
            {
              question: "What makes each Pentouz property unique?",
              answer: "Each Pentouz property has a distinct character. Lavelle Road serves business and court-related stays. Indiranagar offers rare penthouse scale. Hillside Chikmagalur anchors the collection with warmth and natural beauty. Ooty provides a softer, slower retreat experience.",
            },
            {
              question: "Does The Pentouz offer direct booking benefits?",
              answer: "Direct booking through the website or concierge team typically offers the best rates, personalized service, and flexibility for special requests. The Privé Club membership provides additional benefits including priority reservations and exclusive offers.",
            },
          ]}
          title="About The Pentouz"
          subtitle="Brand Insights"
          theme="light"
        />
      </main>
      <Footer />
    </>
  );
}
