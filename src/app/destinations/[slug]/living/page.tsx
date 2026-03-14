"use client";

import { use, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, MapPin, Phone } from "lucide-react";
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
    palette: string;
    panel: string;
    accent: string;
    notes: string[];
  }
> = {
  "lavelle-road": {
    eyebrow: "Lavelle Road Living",
    heading: "Studio stays for city-center precision",
    summary:
      "Composed for business travel, legal schedules, and short central stays, Lavelle Road living is about clarity, privacy, and a polished boutique rhythm.",
    palette: "bg-[#f6f1ea]",
    panel: "bg-white border border-[#eadfce]",
    accent: "text-brand-gold",
    notes: ["Kitchenette-equipped studios", "Designed for shorter, sharper city itineraries", "Close to UB City, MG Road, and legal districts"],
  },
  indiranagar: {
    eyebrow: "Indiranagar Living",
    heading: "Penthouse scale with a residential sense of ease",
    summary:
      "Indiranagar living is larger, warmer, and more social. It is designed for families, longer stays, and guests who want room to gather without losing luxury.",
    palette: "bg-[#f7f2ea]",
    panel: "bg-white border border-[#eadfce]",
    accent: "text-brand-accent",
    notes: ["Three-bedroom penthouse layout", "Private balconies and open terrace", "Built for families, groups, and extended stays"],
  },
  ooty: {
    eyebrow: "Ooty Living",
    heading: "Rooms framed by hill air and slower mornings",
    summary:
      "Ooty living is softer and more atmospheric, shaped by cooler weather, landscape views, and a retreat mindset rather than city urgency.",
    palette: "bg-[#f2efe7]",
    panel: "bg-white border border-[#dde2d8]",
    accent: "text-brand-gold",
    notes: ["Retreat-led room experience", "Landscape-oriented stay rhythm", "A quieter Pentouz expression in the hills"],
  },
};

function getTheme(slug: string) {
  return livingThemes[slug] || livingThemes["lavelle-road"];
}

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

  if (!destination) {
    notFound();
  }

  const theme = getTheme(destination.slug);
  const rooms = useMemo(() => normalizeRooms(destination), [destination]);
  const activeRoom = rooms[selectedRoom] || rooms[0];
  const supportingImages = activeRoom.images.slice(1, 5);
  const location = destination.livingLocation || destination.location;

  return (
    <>
      <Header />
      <main className={theme.palette}>
        <section className="relative min-h-[92svh] overflow-hidden bg-[#141210] text-white">
          <div className="absolute inset-0">
            <Image
              src={activeRoom.image || destination.heroImage || destination.image}
              alt={`Living at ${destination.title}`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.20)_0%,rgba(8,8,8,0.16)_24%,rgba(8,8,8,0.62)_74%,rgba(8,8,8,0.84)_100%)]" />
          </div>

          <div className="relative max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 pt-36 sm:pt-44 lg:pt-52 pb-16 sm:pb-20 min-h-[92svh] flex flex-col justify-end">
            <Link
              href={`/destinations/${destination.slug}`}
              className="mb-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/78 hover:text-brand-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.4} />
              Back to {destination.shortTitle}
            </Link>

            <p className={`text-[10px] uppercase tracking-[0.4em] mb-6 ${theme.accent}`}>{theme.eyebrow}</p>
            <h1 className="max-w-5xl font-display text-[3.2rem] leading-[0.94] sm:text-[4.8rem] lg:text-[6.8rem] xl:text-[7.8rem] font-light">
              {theme.heading}
            </h1>
            <p className="mt-8 max-w-2xl text-base sm:text-lg text-white/82 leading-relaxed">
              {destination.livingIntro || theme.summary}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={destination.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-colors hover:bg-brand-gold hover:text-white"
              >
                <Calendar className="w-4 h-4" strokeWidth={1.4} />
                Reserve This Stay
              </a>
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white/90 transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                Call Concierge
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white border-t border-[#e6dccf]">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-24 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.34em] text-brand-accent mb-5">Living Notes</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                Every room type is part of a more <em className="italic">intentional stay rhythm</em>
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {theme.notes.map((note) => (
                <div key={note} className={theme.panel}>
                  <div className="p-5">
                    <p className="text-sm text-brand-body leading-relaxed">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
            <div className={theme.panel}>
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-5">Room Types</p>
                <div className="space-y-3">
                  {rooms.map((room, index) => (
                    <button
                      key={room.name}
                      onClick={() => setSelectedRoom(index)}
                      className={`w-full text-left border px-4 py-4 transition-colors ${
                        selectedRoom === index
                          ? "border-brand-gold bg-[#f9f3e8]"
                          : "border-brand-border bg-white hover:border-brand-gold/40"
                      }`}
                    >
                      <p className="font-display text-2xl font-light text-brand-ink">{room.name}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-brand-muted">{room.size}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#11100f]">
                <Image
                  src={activeRoom.image}
                  alt={activeRoom.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>

              <div className={theme.panel}>
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-4 mb-5">
                    <h2 className="font-display text-3xl sm:text-4xl font-light text-brand-ink">{activeRoom.name}</h2>
                    <span className="rounded-full border border-brand-border px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-brand-muted">
                      {activeRoom.size}
                    </span>
                  </div>
                  <p className="text-base text-brand-body leading-relaxed">{activeRoom.description}</p>

                  <div className="mt-8 grid sm:grid-cols-2 gap-3">
                    {activeRoom.features.map((feature) => (
                      <div key={feature} className="border border-brand-border px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-brand-muted">
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href={destination.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-ink px-7 py-4 text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-black"
                    >
                      Book This Room
                      <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
                    </a>
                    <a
                      href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-ink px-7 py-4 text-[11px] uppercase tracking-[0.18em] text-brand-ink transition-colors hover:bg-brand-ink hover:text-white"
                    >
                      <Phone className="w-4 h-4" strokeWidth={1.4} />
                      Call to Inquire
                    </a>
                  </div>
                </div>
              </div>

              {supportingImages.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {supportingImages.map((image, index) => (
                    <div key={`${image}-${index}`} className="relative aspect-square overflow-hidden">
                      <Image
                        src={image}
                        alt={`${activeRoom.name} detail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 14vw"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="bg-white border-y border-[#e6dccf] py-16 sm:py-20">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.34em] text-brand-accent mb-5">Stay Context</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                Location still shapes how the room feels
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className={theme.panel}>
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-2">Airport</p>
                  <p className="text-sm text-brand-body">{location.airport.name}</p>
                  <p className="mt-1 text-xs text-brand-muted">{location.airport.distance} • {location.airport.time}</p>
                </div>
              </div>
              <div className={theme.panel}>
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-2">Rail</p>
                  <p className="text-sm text-brand-body">{location.railway.name}</p>
                  <p className="mt-1 text-xs text-brand-muted">{location.railway.distance} • {location.railway.time}</p>
                </div>
              </div>
              <div className={theme.panel}>
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-2">Local Anchor</p>
                  <p className="text-sm text-brand-body">{location.metro?.name || destination.subtitle}</p>
                  <p className="mt-1 text-xs text-brand-muted">
                    {location.metro?.distance || "Central location"} {location.metro?.time ? `• ${location.metro.time}` : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] text-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.34em] text-brand-gold mb-5">Finish the Journey</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              The room is only the beginning of the stay
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={`/destinations/${destination.slug}`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white/90 transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                Return to Property Page
              </Link>
              <a
                href={destination.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-colors hover:bg-brand-gold hover:text-white"
              >
                Reserve Now
                <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
