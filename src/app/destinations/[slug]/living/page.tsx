"use client";

import { use, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations, contactInfo } from "@/data/content";
import { generatePageSchemas } from "@/lib/schema";

type Destination = (typeof destinations)[number];

type NormalizedRoom = {
  name: string;
  size: string;
  description: string;
  features: string[];
  image: string;
  images: string[];
};

const livingThemes: Record<
  string,
  {
    eyebrow: string;
    heading: string;
    summary: string;
    introLabel: string;
    roomLabel: string;
    notes: string[];
    featureTitle: string;
    featureBody: string;
  }
> = {
  "lavelle-road": {
    eyebrow: "Living at Lavelle Road",
    heading: "Beautifully designed studio rooms with panoramic city views.",
    summary:
      "The Pentouz Lavelle Road offers elegantly designed top-floor studio accommodations, each balancing space, privacy, and refined comfort in Bangalore's premier neighborhood.",
    introLabel: "Studio Collection",
    roomLabel: "Studio Types",
    notes: [
      "Top-floor boutique living",
      "Panoramic city outlook",
      "Kitchenette-equipped stays",
      "Refined for business and leisure",
    ],
    featureTitle: "The Essential In-Room Amenities",
    featureBody:
      "Every studio is designed to blend elegance and practicality, offering the comforts needed for a polished city stay in the heart of Bangalore.",
  },
  indiranagar: {
    eyebrow: "Living at Indiranagar",
    heading: "A spacious penthouse designed for comfort, privacy, and longer stays.",
    summary:
      "The centerpiece of The Pentouz Indiranagar is its thoughtfully designed penthouse with three well-appointed bedrooms, private balconies, and inviting shared spaces that feel warm, generous, and elevated.",
    introLabel: "Penthouse Living",
    roomLabel: "Private Suites",
    notes: [
      "Three-bedroom private penthouse",
      "Open terrace and balconies",
      "Ultra-modern kitchen",
      "Ideal for families and groups",
    ],
    featureTitle: "What Makes The Pentouz Indiranagar Special",
    featureBody:
      "This is not a standard room stay. It is a full residential-style experience, with enough space to gather, unwind, work, cook, and stay in comfort for longer periods.",
  },
  ooty: {
    eyebrow: "Living at Ooty",
    heading: "Rooms shaped by hill air, quiet mornings, and scenic views.",
    summary:
      "The Ooty rooms are designed around atmosphere and comfort, creating a slower, more restorative rhythm that fits the hills naturally.",
    introLabel: "Retreat Living",
    roomLabel: "Room Types",
    notes: [
      "Scenic retreat atmosphere",
      "Soft and quiet interiors",
      "Landscape-led stay rhythm",
      "Comfort for slower escapes",
    ],
    featureTitle: "A Softer Living Experience",
    featureBody:
      "In Ooty, the room becomes part of the reason you travelled. The mood is calmer, more scenic, and more naturally restorative.",
  },
  "pentouz-hillside": {
    eyebrow: "Living at Hillside Chikmagalur",
    heading: "Four distinct accommodations in Karnataka's coffee country.",
    summary:
      "The Pentouz Hillside offers four unique accommodations, from a full private pool homestay to a cozy dorm-style cottage, each designed for comfort in the Chikmagalur hills.",
    introLabel: "Accommodation Collection",
    roomLabel: "Stay Options",
    notes: [
      "Private pool option",
      "Four-bedroom villa",
      "Garden-accessible cottages",
      "Group-friendly dorm",
    ],
    featureTitle: "Coffee Country Living",
    featureBody:
      "Pentouz Hillside is built around the unhurried rhythm of Chikmagalur — misty mornings, poolside afternoons, and bonfire evenings under the stars.",
  },
};

function normalizeRooms(destination: Destination): NormalizedRoom[] {
  if (destination.livingRooms && destination.livingRooms.length > 0) {
    return destination.livingRooms.map((room) => ({
      name: room.name,
      size: room.size || "Signature layout",
      description: room.description,
      features: room.features || [],
      image: room.image || destination.image,
      images:
        "images" in room && Array.isArray(room.images) && room.images.length > 0
          ? room.images
          : [room.image || destination.image],
    }));
  }

  return destination.rooms.map((room, index) => ({
    name: room.name,
    size: "Signature layout",
    description: room.description,
    features: destination.amenities.slice(0, 4),
    image: room.image || destination.gallery[index] || destination.image,
    images: destination.gallery.slice(index, index + 4).length > 0
      ? destination.gallery.slice(index, index + 4)
      : [room.image || destination.image],
  }));
}

export default function LivingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const destination = destinations.find((item) => item.slug === slug);
  const [selectedRoom, setSelectedRoom] = useState(0);

  if (!destination) notFound();

  const theme = livingThemes[destination.slug] || livingThemes["lavelle-road"];
  const rooms = useMemo(() => normalizeRooms(destination), [destination]);
  const activeRoom = rooms[selectedRoom] || rooms[0];
  const supportingImages = activeRoom.images.slice(1, 5);

  const livingSchema = generatePageSchemas({
    type: "living",
    slug: destination.slug,
    propertyName: destination.title,
  });

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(livingSchema) }}
      />
      <main className="bg-[#faf7f2] text-[#1a1814] overflow-hidden">
        {/* Hero Section */}
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#0f0e0c] text-white">
          <div className="absolute inset-0">
            <Image
              src={activeRoom.image || destination.heroImage || destination.image}
              alt={`Living at ${destination.title}`}
              fill
              priority
              className="object-cover scale-[1.03]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.92)_0%,rgba(10,8,6,0.62)_42%,rgba(10,8,6,0.24)_76%,rgba(10,8,6,0.82)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,0.16)_0%,rgba(10,8,6,0)_30%,rgba(10,8,6,0.78)_100%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24 lg:pt-48 max-w-[1400px]">
            <Link
              href={`/destinations/${destination.slug}`}
              className="mb-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/78 transition-colors hover:text-[#c3a061] font-['Inter',sans-serif]"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.4} />
              Back to {destination.shortTitle}
            </Link>
            <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-white/72">{theme.eyebrow}</p>
            <h1
              className="font-['Cormorant_Garamond',serif] font-light leading-[1.1] text-white mt-4 sm:mt-6 max-w-5xl"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              {theme.heading}
            </h1>
            <p className="font-['Lora',serif] text-sm sm:text-base leading-relaxed text-white/78 mt-4 sm:mt-6 max-w-3xl">{theme.summary}</p>
            <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4 sm:flex-row">
              <a href={destination.bookingUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#1a1814] px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-medium transition-all duration-500 hover:bg-[#c3a061] hover:text-white">
                <Calendar className="h-4 w-4" strokeWidth={1.4} />
                Book Now
              </a>
              <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`} className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-medium transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]">
                Call Concierge
              </a>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="bg-white border-t border-[#e5dfd6]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">{theme.introLabel}</p>
              <h2
                className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', letterSpacing: '-0.015em' }}
              >
                Thoughtful layouts, refined details, and the space to truly settle in.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {theme.notes.map((note, index) => (
                <div key={note} className="border border-[#e5dfd6] bg-[#faf7f2] p-4 sm:p-5 animate-fade-in-up" style={{ animationDelay: `${index * 90}ms` }}>
                  <p className="font-['Lora',serif] text-sm leading-[1.7] text-[#4a4a44]">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Room Selection Section */}
        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-8 items-start">
            {/* Room Selector */}
            <div className="border border-[#e5dfd6] bg-white p-5 sm:p-6">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium">{theme.roomLabel}</p>
              <div className="mt-6 sm:mt-8 space-y-3">
                {rooms.map((room, index) => (
                  <button
                    key={room.name}
                    onClick={() => setSelectedRoom(index)}
                    className={`w-full text-left border px-4 py-4 transition-all duration-500 ${
                      selectedRoom === index
                        ? "border-[#c3a061] bg-[#fbf1e1] shadow-[0_12px_30px_rgba(195,160,97,0.12)]"
                        : "border-[#e5dfd6] bg-white hover:border-[#c3a061]/45 hover:bg-[#faf4ea]"
                    }`}
                  >
                    <p className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1a1814]">{room.name}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-[#8b7355] font-['Inter',sans-serif]">{room.size}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Room Details */}
            <div className="grid gap-5 sm:gap-6">
              <div className="relative aspect-[16/10] overflow-hidden shadow-[0_24px_80px_rgba(18,15,12,0.08)]">
                <Image src={activeRoom.image} alt={activeRoom.name} fill className="object-cover transition-transform duration-[1400ms] hover:scale-105" sizes="(max-width: 1024px) 100vw, 58vw" />
              </div>

              <div className="border border-[#e5dfd6] bg-white p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl lg:text-4xl font-light text-[#1a1814]">{activeRoom.name}</h2>
                  <span className="border border-[#e5dfd6] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] uppercase tracking-[0.18em] text-[#8b7355] font-['Inter',sans-serif]">
                    {activeRoom.size}
                  </span>
                </div>
                <p className="mt-4 sm:mt-6 font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44]">{activeRoom.description}</p>
                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeRoom.features.map((feature) => (
                    <div key={feature} className="border border-[#e5dfd6] px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] uppercase tracking-[0.16em] text-[#8b7355] font-['Inter',sans-serif] bg-[#faf7f2]">
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 sm:flex-row">
                  <a href={destination.bookingUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0f0e0c] text-white px-6 sm:px-7 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:bg-[#c3a061]">
                    Reserve This Stay
                    <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
                  </a>
                  <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`} className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#0f0e0c] text-[#1a1814] px-6 sm:px-7 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:bg-[#0f0e0c] hover:text-white">
                    <Phone className="w-4 h-4" strokeWidth={1.4} />
                    Call to Inquire
                  </a>
                </div>
              </div>

              {/* Supporting Images */}
              {supportingImages.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {supportingImages.map((image, index) => (
                    <div key={`${image}-${index}`} className="relative aspect-square overflow-hidden shadow-[0_14px_40px_rgba(18,15,12,0.05)]">
                      <Image src={image} alt={`${activeRoom.name} detail ${index + 1}`} fill className="object-cover transition-transform duration-[1200ms] hover:scale-105" sizes="(max-width: 1024px) 50vw, 14vw" />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#c3a061] font-medium mb-3 sm:mb-4">{theme.featureTitle}</p>
              <h2
                className="font-['Cormorant_Garamond',serif] font-light leading-[1.1] text-white mt-3 sm:mt-5"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
              >
                The room should feel as memorable as the destination itself.
              </h2>
            </div>
            <div className="border border-white/12 bg-white/[0.05] p-5 sm:p-6">
              <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-white/74">{theme.featureBody}</p>
              <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 sm:flex-row">
                <Link href={`/destinations/${destination.slug}`} className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-medium transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]">
                  Back to Property
                </Link>
                <a href={destination.bookingUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#1a1814] px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-medium transition-all duration-500 hover:bg-[#c3a061] hover:text-white">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
