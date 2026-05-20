import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, Plane, Train, MapPin } from "lucide-react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import PropertyGallery from "@/components/PropertyGallery";
import { destinations, contactInfo } from "@/data/content";
import { ootyImageSet } from "@/data/propertyImageSets";
import { withSiteUrl } from "@/lib/site";

const heroImages = [
  "/ooty/all/1._facade.jpeg",
  "/ooty/all/3._facade.jpeg",
  "/ooty/all/22._lawn.jpeg",
  "/ooty/all/24._view.jpeg",
];

export const metadata: Metadata = {
  title: "The Pentouz @ Ooty | Windsor Heights Nilgiri Hills",
  description:
    "A quieter hillside stay in Ooty with views of the Nilgiris, tea gardens, and a slower retreat atmosphere.",
  alternates: {
    canonical: withSiteUrl("/destinations/ooty"),
  },
};

const travelStats = [
  {
    title: "Coimbatore International Airport",
    distance: "84 kms",
    time: "3 hrs",
    icon: Plane,
    highlight: "Nearest airport"
  },
  {
    title: "Udhagamandalam Railway",
    distance: "10 kms",
    time: "25 min",
    icon: Train,
    highlight: "Scenic rail journey"
  },
  {
    title: "Ooty Lake",
    distance: "3 kms",
    time: "15 min",
    icon: MapPin,
    highlight: "Local attraction"
  },
];

const amenities = [
  "Free WiFi",
  "Restaurant",
  "Room Service",
  "Fireplace",
  "Garden Views",
  "Heating",
  "Laundry Service",
  "Bonfire",
  "Nature Walks",
  "Sightseeing Assistance",
  "Airport Transfer",
  "Doctor on Call",
];

function categorize(path: string): string {
  const p = path.toLowerCase();
  if (/bathroom/i.test(p)) return "Bathroom";
  if (/bedroom/i.test(p)) return "Bedroom";
  if (/lawn/i.test(p)) return "Lawn & Gardens";
  if (/view/i.test(p)) return "Views";
  if (/reception/i.test(p)) return "Common Areas";
  if (/restaurant/i.test(p)) return "Restaurant";
  if (/facade/i.test(p)) return "Exterior";
  if (/lift|corridor|parking/i.test(p)) return "Common Areas";
  return "Views";
}

function makeTitle(path: string): string {
  const file = path.split("/").pop()?.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").replace(/\d+\./g, "").trim() ?? "";
  return file;
}

const galleryItems = ootyImageSet.map((src) => ({
  src,
  title: makeTitle(src),
  category: categorize(src),
}));

const bedroomImages = ootyImageSet.filter((path) => /bedroom/i.test(path));
const bathroomImages = ootyImageSet.filter((path) => /bathroom/i.test(path));
const restaurantImages = ootyImageSet.filter((path) => /restaurant/i.test(path));
const lawnImages = ootyImageSet.filter((path) => /lawn/i.test(path));
const viewImages = ootyImageSet.filter((path) => /view/i.test(path));
const commonImages = ootyImageSet.filter((path) => /facade|reception|lift|corridor|parking/i.test(path));

const rooms = [
  { name: "Bedrooms", slug: "bedrooms", images: bedroomImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Bathrooms", slug: "bathrooms", images: bathroomImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Restaurant", slug: "restaurant", images: restaurantImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Lawn & Gardens", slug: "lawn-gardens", images: lawnImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Views", slug: "views", images: viewImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Common Areas", slug: "common-areas", images: commonImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
];

export default function OotyPage() {
  const property = destinations.find((destination) => destination.slug === "ooty");
  if (!property) notFound();

  return (
    <>
      <Header />
      <main className="bg-[#faf7f2] text-[#1a1814]">
        {/* Hero */}
        <HeroSlider images={heroImages} alt={property.title}>
          <div className="mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-5 sm:px-8 lg:px-16 pb-20 lg:pb-28 pt-32">
            <div className="max-w-3xl">
              <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] mb-6 animate-fade-in-up">
                Elk Hill, Ooty
              </p>
              <h1 className="font-['Cormorant_Garamond',serif] text-white font-light leading-[1.1] animate-fade-in-up [animation-delay:100ms]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
                A quieter Pentouz stay, shaped by mist, hills, and stillness.
              </h1>
              <p className="mt-8 font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/75 max-w-xl animate-fade-in-up [animation-delay:200ms]">
                Escape to the misty hills of the Nilgiris at The Pentouz Windsor Heights, Ooty. Surrounded by lush tea gardens and steeped in colonial charm.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-5 animate-fade-in-up [animation-delay:300ms]">
                <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-[#1a1814] px-10 py-4 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c3a061] hover:text-white">
                  Contact Reservations
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link href="/destinations/ooty/living" className="inline-flex items-center gap-2 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] text-white/90 border border-white/30 px-10 py-4 transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]">
                  Explore Living
                </Link>
              </div>
            </div>
          </div>
        </HeroSlider>

        {/* Living Section */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 sm:gap-12 lg:gap-20 items-center">
              <div className="relative overflow-hidden aspect-[4/5]">
                <Image src="/ooty/all/16._bedroom.jpeg" alt="Ooty living" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">
                  The Living
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814] mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  A retreat atmosphere carried through every room and shared space.
                </h2>
                <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44] mb-5 sm:mb-6">
                  The Pentouz Windsor Heights offers a warm and inviting stay in the hills, where rooms feel grounded in comfort, views, and a slower pace of travel. Whether you arrive for a quiet getaway, a family break, or a scenic reset, the stay is designed to feel restorative from the first morning.
                </p>
                <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44]">
                  Each room and shared area is meant to complement the landscape outside, giving the property a calmer, more reflective rhythm.
                </p>
                <div className="mt-6 sm:mt-8">
                  <Link href="/destinations/ooty/living" className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-[#0f0e0c] text-white px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c3a061]">
                    Explore Living
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Surroundings Section */}
        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-14 sm:py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-center">
              <div>
                <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#8b7355] font-medium mb-3">
                  The Surroundings
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814] mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.015em' }}>
                  Tea gardens, viewpoints, and the softer mood of the hills.
                </h2>
                <p className="font-['Lora',serif] text-sm text-[#4a4a44] leading-relaxed">
                  Set on Elk Hill in Ooty, the atmosphere is defined by mist-covered mornings, tea gardens, and a slower pace of travel.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {travelStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.title}
                      className="relative group bg-white border border-[#e5dfd6] p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(18,15,12,0.08)] hover:border-[#c3a061]/30"
                    >
                      {/* Gold accent line */}
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#c3a061] to-[#c3a061]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Icon */}
                      <div className="w-10 h-10 rounded-full bg-[#f5f0e8] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-[#c3a061]" strokeWidth={1.5} />
                      </div>

                      {/* Highlight tag */}
                      <p className="text-[9px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#c3a061] mb-2">
                        {stat.highlight}
                      </p>

                      {/* Title */}
                      <p className="font-['Cormorant_Garamond',serif] text-base sm:text-lg font-light text-[#1a1814] leading-tight mb-3">
                        {stat.title}
                      </p>

                      {/* Stats */}
                      <div className="flex items-baseline gap-3">
                        <p className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-light text-[#1a1814]">
                          {stat.time}
                        </p>
                        <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.1em] text-[#8b7355]">
                          {stat.distance}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="max-w-2xl mb-10 sm:mb-16">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#c3a061] font-medium mb-3 sm:mb-4">
                Amenities
              </p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                Warm comforts for a slower, scenic stay.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
              {amenities.map((amenity) => (
                <div key={amenity} className="border border-white/10 bg-white/[0.02] px-4 sm:px-5 py-3 sm:py-4 text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-white/70">
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-2 sm:mb-3">
                  Gallery
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.015em' }}>
                  A visual journey
                </h2>
              </div>
              <Link href="/destinations/ooty/gallery" className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#4a4a44] hover:text-[#c3a061] transition-colors duration-300">
                View Full Gallery →
              </Link>
            </div>
            <PropertyGallery items={galleryItems} propertyName="The Pentouz @ Windsor Heights Ooty" rooms={rooms} />
          </div>
        </section>

        {/* Contact */}
        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#c3a061] font-medium mb-3 sm:mb-4">
                  Plan the Stay
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-white mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  A Pentouz stay in a more reflective, scenic mood.
                </h2>
                <p className="font-['Lora',serif] text-sm leading-relaxed text-white/60">
                  The Pentouz Windsor Heights<br />
                  Elk Hill, Ooty, Tamil Nadu, India.
                </p>
                <div className="mt-4 flex items-center gap-3 font-['Lora',serif] text-sm text-white/60">
                  <Phone className="w-4 h-4 text-[#c3a061]" />
                  {contactInfo.phones[0]}
                </div>
              </div>
              <div className="border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10 lg:mt-12">
                <p className="font-['Lora',serif] text-sm text-white/60 mb-5 sm:mb-6">
                  {contactInfo.email}
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <Link href="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-white text-[#0f0e0c] px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c3a061] hover:text-white">
                    Contact Reservations
                  </Link>
                  <Link href="/destinations/ooty/living" className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 border border-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]">
                    Explore Living
                  </Link>
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
