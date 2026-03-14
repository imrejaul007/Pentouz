"use client";

import { use, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations, contactInfo } from "@/data/content";

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
      "The Pentouz Lavelle Road offers six elegantly designed top-floor studio accommodations, each balancing space, privacy, and refined comfort in Bangalore's premier neighborhood.",
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

  return (
    <>
      <Header />
      <main className="bg-[#f7f0e5] text-brand-ink overflow-hidden">
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#15120f] text-white">
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

          <div className="relative mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24 lg:pt-48">
            <Link
              href={`/destinations/${destination.slug}`}
              className="mb-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/78 transition-colors hover:text-brand-gold"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.4} />
              Back to {destination.shortTitle}
            </Link>
            <p className="luxury-kicker text-white/72">{theme.eyebrow}</p>
            <h1 className="luxury-hero-title mt-6 max-w-5xl text-white">{theme.heading}</h1>
            <p className="luxury-copy mt-8 max-w-3xl text-white/78">{theme.summary}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={destination.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-white">
                <Calendar className="h-4 w-4" strokeWidth={1.4} />
                Book Now
              </a>
              <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold">
                Call Concierge
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white border-t border-[#e5d9c9]">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-14 lg:py-28 lg:items-start">
            <div>
              <p className="luxury-kicker text-brand-accent">{theme.introLabel}</p>
              <h2 className="luxury-section-title mt-5">Thoughtful layouts, refined details, and the space to truly settle in.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {theme.notes.map((note, index) => (
                <div key={note} className="luxury-panel bg-[#fbf7f0] animate-fade-in-up" style={{ animationDelay: `${index * 90}ms` }}>
                  <p className="text-sm leading-7 text-brand-body">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f0e5]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28 grid gap-8 lg:grid-cols-[0.4fr_0.6fr]">
            <div className="luxury-panel bg-white">
              <p className="luxury-kicker text-brand-accent">{theme.roomLabel}</p>
              <div className="mt-8 space-y-3">
                {rooms.map((room, index) => (
                  <button
                    key={room.name}
                    onClick={() => setSelectedRoom(index)}
                    className={`w-full text-left border px-4 py-4 transition-all duration-500 ${
                      selectedRoom === index
                        ? "border-brand-gold bg-[#fbf1e1] shadow-[0_12px_30px_rgba(195,160,97,0.12)]"
                        : "border-brand-border bg-white hover:border-brand-gold/45 hover:bg-[#faf4ea]"
                    }`}
                  >
                    <p className="font-display text-2xl font-light text-brand-ink">{room.name}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-brand-muted">{room.size}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="relative aspect-[16/10] overflow-hidden shadow-[0_24px_80px_rgba(18,15,12,0.08)]">
                <Image src={activeRoom.image} alt={activeRoom.name} fill className="object-cover transition-transform duration-[1400ms] hover:scale-105" sizes="(max-width: 1024px) 100vw, 58vw" />
              </div>

              <div className="luxury-panel bg-white">
                <div className="flex flex-wrap items-center gap-4">
                  <h2 className="font-display text-4xl font-light text-brand-ink">{activeRoom.name}</h2>
                  <span className="rounded-full border border-brand-border px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-brand-muted">
                    {activeRoom.size}
                  </span>
                </div>
                <p className="mt-6 text-base leading-8 text-brand-body sm:text-lg">{activeRoom.description}</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {activeRoom.features.map((feature) => (
                    <div key={feature} className="border border-brand-border px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-brand-muted bg-[#fbf7f0]">
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a href={destination.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-ink px-7 py-4 text-[11px] uppercase tracking-[0.18em] text-white transition-all duration-500 hover:bg-black">
                    Reserve This Stay
                    <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
                  </a>
                  <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-ink px-7 py-4 text-[11px] uppercase tracking-[0.18em] text-brand-ink transition-all duration-500 hover:bg-brand-ink hover:text-white">
                    <Phone className="w-4 h-4" strokeWidth={1.4} />
                    Call to Inquire
                  </a>
                </div>
              </div>

              {supportingImages.length > 0 ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
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

        <section className="bg-[#15120f] text-white">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-14 lg:py-28">
            <div>
              <p className="luxury-kicker text-brand-gold">{theme.featureTitle}</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                The room should feel as memorable as the destination itself.
              </h2>
            </div>
            <div className="luxury-panel border-white/12 bg-white/[0.05] text-white">
              <p className="text-base leading-8 text-white/74 sm:text-lg">{theme.featureBody}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href={`/destinations/${destination.slug}`} className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:border-brand-gold hover:text-brand-gold">
                  Back to Property
                </Link>
                <a href={destination.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:bg-brand-gold hover:text-white">
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
