import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar } from "lucide-react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import PropertyGallery from "@/components/PropertyGallery";
import { destinations, contactInfo } from "@/data/content";
import { lavelleImageSet } from "@/data/propertyImageSets";
import { withSiteUrl } from "@/lib/site";

const heroImages = [
  "/lavelle-road/facade-2.jpg",
  "/lavelle-road/entrance-1.jpg",
  "/lavelle-road/entrance-2.jpg",
];

export const metadata: Metadata = {
  title: "The Pentouz @ Lavelle Road | Luxury Studio Boutique Hotel Bangalore",
  description:
    "Refined studio suites on Bangalore's prestigious Lavelle Road, close to UB City, MG Road, and the High Court of Karnataka.",
  alternates: {
    canonical: withSiteUrl("/destinations/lavelle-road"),
  },
};

const travelStats = [
  { title: "Kempegowda International Airport", distance: "35 kms", time: "55 min" },
  { title: "KSR Bengaluru City Junction", distance: "5 kms", time: "15 min" },
  { title: "MG Road Metro Station", distance: "1 km", time: "5 min" },
];

const amenities = [
  "High-Speed WiFi",
  'Smart 55" TV',
  "Air Conditioning",
  "Kitchenette",
  "Refrigerator",
  "Microwave Oven",
  "Work Desk",
  "Daily Housekeeping",
  "Open Roof-Top Terrace",
  "Covered Car Parking",
  "Lift Access",
  "24-Hour Front Desk",
];

function categorize(path: string): string {
  const p = path.toLowerCase();
  if (/bathroom|bath/i.test(p)) return "Bathroom";
  if (/bedroom|suite|queen|king|superior/i.test(p)) return "Bedroom";
  if (/terrace|patio/i.test(p)) return "Terrace & Outdoor";
  if (/reception/i.test(p)) return "Common Areas";
  if (/restaurant/i.test(p)) return "Restaurant";
  if (/entrance|facade/i.test(p)) return "Common Areas";
  if (/lift|staircase/i.test(p)) return "Common Areas";
  if (/parking/i.test(p)) return "Common Areas";
  return "Bedroom";
}

function makeTitle(path: string): string {
  const file = path.split("/").pop()?.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").replace(/\d+\./g, "").trim() ?? "";
  return file;
}

const galleryItems = lavelleImageSet.map((src) => ({
  src,
  title: makeTitle(src),
  category: categorize(src),
}));

const queenStudioImages = lavelleImageSet.filter((path) => /9041_|9043_/i.test(path));
const kingStudioImages = lavelleImageSet.filter((path) => /9042_|9046_|9047_/i.test(path));
const superiorStudioImages = lavelleImageSet.filter((path) => /9045_/i.test(path));
const commonImages = lavelleImageSet.filter((path) => !/9041_|9043_|9042_|9046_|9047_|9045_/i.test(path));

const rooms = [
  { name: "Queen Studio", slug: "queen-studio", images: queenStudioImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "King Studio", slug: "king-studio", images: kingStudioImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Superior Studio", slug: "superior-studio", images: superiorStudioImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Common Areas", slug: "common-areas", images: commonImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
];

export default function LavelleRoadPage() {
  const property = destinations.find((destination) => destination.slug === "lavelle-road");
  if (!property) notFound();

  return (
    <>
      <Header />
      <main className="bg-[#faf7f2] text-[#1a1814]">
        {/* Hero */}
        <HeroSlider images={heroImages} alt={property.title}>
          <div className="mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-6 sm:px-10 lg:px-16 pb-20 lg:pb-28 pt-32">
            <div className="max-w-3xl">
              <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] mb-6 animate-fade-in-up">
                Lavelle Road, Bangalore
              </p>
              <h1 className="font-['Cormorant_Garamond',serif] text-white font-light leading-[1.1] animate-fade-in-up [animation-delay:100ms]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
                Boutique luxury in one of Bengaluru&apos;s most prestigious neighborhoods.
              </h1>
              <p className="mt-8 font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/75 max-w-xl animate-fade-in-up [animation-delay:200ms]">
                Perched in the heart of Bangalore&apos;s prestigious Lavelle Road, The Pentouz offers an unparalleled blend of tranquility and sophistication.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-5 animate-fade-in-up [animation-delay:300ms]">
                <a href={property.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-[#1a1814] px-10 py-4 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c3a061] hover:text-white">
                  <Calendar className="h-4 w-4" strokeWidth={1.5} />
                  Book Now
                </a>
                <Link href="/destinations/lavelle-road/living" className="inline-flex items-center gap-2 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] text-white/90 border border-white/30 px-10 py-4 transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]">
                  Explore Living
                </Link>
              </div>
            </div>
          </div>
        </HeroSlider>

        {/* Living Section */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 lg:py-36">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
              <div className="relative overflow-hidden aspect-[4/5]">
                <Image src="/lavelle-road/all/9042_king_suite_4.jpg" alt="Lavelle Road living" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
              </div>
              <div>
                <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#8b7355] font-medium mb-4">
                  The Living
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814] mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  Beautifully designed studio rooms with panoramic city views.
                </h2>
                <p className="font-['Lora',serif] text-base leading-[1.85] text-[#4a4a44] mb-6">
                  The Pentouz Lavelle Road boasts exquisitely designed, spacious studio rooms located on the top floor, each offering stunning panoramic views of the cityscape. These well-appointed studios are thoughtfully curated to cater to the discerning traveler, combining elegance with modern comforts.
                </p>
                <p className="font-['Lora',serif] text-base leading-[1.85] text-[#4a4a44]">
                  Whether you&apos;re in Bangalore for business or leisure, you&apos;ll find every detail tailored to enhance your stay.
                </p>
                <div className="mt-8">
                  <Link href="/destinations/lavelle-road/living" className="inline-flex items-center gap-3 bg-[#0f0e0c] text-white px-8 py-4 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c3a061]">
                    Explore Living
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 lg:py-36">
            <div className="max-w-2xl mb-16">
              <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#8b7355] font-medium mb-4">
                The Location
              </p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                An address surrounded by culture, commerce, and quiet prestige.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {travelStats.map((stat) => (
                <div key={stat.title} className="border border-[#e5dfd6] bg-white p-8">
                  <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#8b7355] mb-3">
                    {stat.title}
                  </p>
                  <p className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[#1a1814]">
                    {stat.time}
                  </p>
                  <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.12em] text-[#6b6358] mt-2">
                    {stat.distance}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 lg:py-36">
            <div className="max-w-2xl mb-16">
              <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#c3a061] font-medium mb-4">
                Amenities
              </p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-white" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                Everything you need for a refined stay.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {amenities.map((amenity) => (
                <div key={amenity} className="border border-white/10 bg-white/[0.02] px-5 py-4 text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-white/70">
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#8b7355] font-medium mb-3">
                  Gallery
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.015em' }}>
                  A visual journey
                </h2>
              </div>
              <Link href="/destinations/lavelle-road/gallery" className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#4a4a44] hover:text-[#c3a061] transition-colors duration-300">
                View Full Gallery →
              </Link>
            </div>
            <PropertyGallery items={galleryItems} propertyName="The Pentouz @ Lavelle Road" rooms={rooms} />
          </div>
        </section>

        {/* Contact */}
        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 lg:py-36">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#8b7355] font-medium mb-4">
                  Book Your Stay
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814] mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  Experience boutique luxury on Lavelle Road.
                </h2>
                <p className="font-['Lora',serif] text-sm leading-relaxed text-[#4a4a44]">
                  46, 6th Cross, Lavelle Road, Bangalore – 560001. India.
                </p>
              </div>
              <div className="bg-white border border-[#e5dfd6] p-8 lg:p-10">
                <p className="font-['Lora',serif] text-sm text-[#4a4a44] mb-6">
                  For reservations and inquiries
                </p>
                <div className="space-y-4">
                  <a href={property.bookingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#0f0e0c] text-white px-8 py-4 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c3a061]">
                    Reserve Your Stay
                  </a>
                  <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`} className="flex items-center justify-center gap-3 border border-[#0f0e0c] text-[#0f0e0c] px-8 py-4 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#0f0e0c] hover:text-white">
                    Call Concierge
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
