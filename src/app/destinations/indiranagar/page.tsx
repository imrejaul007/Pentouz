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
import { indiranagarImageSet } from "@/data/propertyImageSets";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Pentouz @ Indiranagar | Three Bedroom Penthouse Bangalore",
  description:
    "A private three-bedroom penthouse on 100 Feet Road, Indiranagar, designed for families, groups, and longer city stays.",
  alternates: {
    canonical: withSiteUrl("/destinations/indiranagar"),
  },
};

const travelStats = [
  { title: "Kempegowda International Airport", distance: "37 kms", time: "60 min" },
  { title: "KSR Bengaluru City Junction", distance: "10 kms", time: "35 min" },
  { title: "Indiranagar Metro Station", distance: "1 km", time: "5 min" },
];

const amenities = [
  "Prime Location",
  "Peace & Tranquillity",
  "Great Views",
  "Safe & Secure",
  "Ultra-modern Kitchen",
  "Daily Housekeeping",
  "Laundry Room",
  "Wifi & Internet",
  "State-of-Art Entertainment",
  "Spacious Balconies",
  "Open Roof-Top Terrace",
  "Covered Car Parking",
];

function categorize(path: string): string {
  const p = path.toLowerCase();
  if (/bathroom|bath/i.test(p)) return "Bathroom";
  if (/terrace_haven/i.test(p)) return "Bedroom";
  if (/skyline_suite/i.test(p)) return "Bedroom";
  if (/vista_room/i.test(p)) return "Bedroom";
  if (/bedroom|suite/i.test(p)) return "Bedroom";
  if (/terrace|balcony/i.test(p)) return "Terrace & Outdoor";
  if (/living_room|living/i.test(p)) return "Living Room";
  if (/kitchen|dining/i.test(p)) return "Kitchen & Dining";
  if (/view/i.test(p)) return "Views";
  if (/reception|facade|entrance|exterior|staircase|lift/i.test(p)) return "Common Areas";
  return "Living Room";
}

function makeTitle(path: string): string {
  const file = path.split("/").pop()?.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").replace(/\d+\./g, "").trim() ?? "";
  return file;
}

const galleryItems = indiranagarImageSet.map((src) => ({
  src,
  title: makeTitle(src),
  category: categorize(src),
}));

const terraceHavenImages = indiranagarImageSet.filter((path) => /01\._the_terrace_haven/i.test(path));
const skylineSuiteImages = indiranagarImageSet.filter((path) => /02\._the_skyline_suite/i.test(path));
const vistaRoomImages = indiranagarImageSet.filter((path) => /03\._the_vista_room/i.test(path));
const livingDiningImages = indiranagarImageSet.filter((path) => /04\._living_room|05\._dining/i.test(path));
const terraceImages = indiranagarImageSet.filter((path) => /06\._terrace/i.test(path));

const rooms = [
  { name: "Terrace Haven", slug: "terrace-haven", images: terraceHavenImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Skyline Suite", slug: "skyline-suite", images: skylineSuiteImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Vista Room", slug: "vista-room", images: vistaRoomImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Living & Dining", slug: "living-dining", images: livingDiningImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Terrace & Views", slug: "terrace-views", images: terraceImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
];

export default function IndiranagarPage() {
  const property = destinations.find((destination) => destination.slug === "indiranagar");
  if (!property) notFound();

  const heroImages = [
    "/indiranagar/all/06._terrace_05._terrace..jpg",
    "/indiranagar/all/04._living_room_01._living_room.jpg",
    "/indiranagar/all/04._living_room_03._living_room.jpg",
    "/indiranagar/all/06._terrace_01._terrace.jpg",
  ];

  return (
    <>
      <Header />
      <main className="bg-[#faf7f2] text-[#1a1814]">
        {/* Hero */}
        <HeroSlider images={heroImages} alt={property.title}>
          <div className="mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-5 sm:px-8 lg:px-16 pb-20 lg:pb-28 pt-32">
            <div className="max-w-3xl">
              <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] mb-6 animate-fade-in-up">
                100 Feet Road, Indiranagar
              </p>
              <h1 className="font-['Cormorant_Garamond',serif] text-white font-light leading-[1.1] animate-fade-in-up [animation-delay:100ms]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
                A private three-bedroom penthouse in one of Bengaluru&apos;s most vibrant neighborhoods.
              </h1>
              <p className="mt-8 font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/75 max-w-xl animate-fade-in-up [animation-delay:200ms]">
                The Pentouz Indiranagar, a luxurious 3-bedroom penthouse nestled in the heart of one of Bangalore&apos;s most upscale neighborhoods.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-5 animate-fade-in-up [animation-delay:300ms]">
                <a href={property.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-[#1a1814] px-10 py-4 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c3a061] hover:text-white">
                  <Calendar className="h-4 w-4" strokeWidth={1.5} />
                  Book Now
                </a>
                <Link href="/destinations/indiranagar/living" className="inline-flex items-center gap-2 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] text-white/90 border border-white/30 px-10 py-4 transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]">
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
                <Image src="/indiranagar/all/04._living_room_06._living_room.jpg" alt="Indiranagar living" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">
                  The Living
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814] mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  A penthouse designed around space, light, and private city views.
                </h2>
                <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44] mb-5 sm:mb-6">
                  The centerpiece of The Pentouz Indiranagar is its spacious and thoughtfully designed penthouse. With three well-appointed bedrooms, each featuring a private balcony, guests can enjoy stunning views of the vibrant cityscape.
                </p>
                <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44]">
                  These rooms are furnished with plush bedding, ample storage, and tasteful decor to create a serene and inviting ambiance.
                </p>
                <div className="mt-6 sm:mt-8">
                  <Link href="/destinations/indiranagar/living" className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-[#0f0e0c] text-white px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c3a061]">
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
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="max-w-2xl mb-10 sm:mb-16">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">
                The Neighborhood
              </p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                At the center of Bengaluru&apos;s dining, shopping, and social life.
              </h2>
            </div>

            <div className="space-y-5 sm:space-y-6 mb-10 sm:mb-16">
              <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44]">
                Located in the heart of one of Bangalore&apos;s most upscale and happening areas, The Pentouz Indiranagar offers guests the perfect base to experience the city&apos;s dynamic energy. Situated just off the iconic 100 Feet Road, this posh locality is renowned for its vibrant lifestyle, offering a mix of the finest dining, shopping, and entertainment options.
              </p>
              <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44]">
                Indiranagar&apos;s 100 Feet Road is a culinary paradise, home to some of Bangalore&apos;s top-notch restaurants and cafes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
              {travelStats.map((stat) => (
                <div key={stat.title} className="border border-[#e5dfd6] bg-white p-6 sm:p-8">
                  <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#8b7355] mb-2 sm:mb-3">
                    {stat.title}
                  </p>
                  <p className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-light text-[#1a1814]">
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
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="max-w-2xl mb-10 sm:mb-16">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#c3a061] font-medium mb-3 sm:mb-4">
                Amenities
              </p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                A penthouse stay with all the essentials you need.
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
              <Link href="/destinations/indiranagar/gallery" className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#4a4a44] hover:text-[#c3a061] transition-colors duration-300">
                View Full Gallery →
              </Link>
            </div>
            <PropertyGallery items={galleryItems} propertyName="The Pentouz @ Indiranagar" rooms={rooms} />
          </div>
        </section>

        {/* Contact */}
        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">
                  Book Your Stay
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814] mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  Spacious penthouse living in one of the city&apos;s most desirable addresses.
                </h2>
                <p className="font-['Lora',serif] text-sm leading-relaxed text-[#4a4a44]">
                  2022, 100 Feet Road, Indiranagar, Bangalore – 560038. India.
                </p>
                <p className="font-['Lora',serif] text-sm leading-relaxed text-[#4a4a44] mt-2">
                  {contactInfo.email}
                </p>
              </div>
              <div className="bg-white border border-[#e5dfd6] p-6 sm:p-8 lg:p-10 lg:mt-12">
                <p className="font-['Lora',serif] text-sm text-[#4a4a44] mb-5 sm:mb-6">
                  For reservations and inquiries
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <a href={property.bookingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 sm:gap-3 bg-[#0f0e0c] text-white px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c3a061]">
                    Reserve Your Stay
                  </a>
                  <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 sm:gap-3 border border-[#0f0e0c] text-[#0f0e0c] px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#0f0e0c] hover:text-white">
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
