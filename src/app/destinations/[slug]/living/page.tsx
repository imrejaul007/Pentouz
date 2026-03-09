"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, MapPin, Clock, Plane, Train, Building, Check, Phone, Mail, Maximize2, Wifi, Car, Coffee } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations, contactInfo } from "@/data/content";
import { killScrollTriggersByRoots } from "@/lib/scrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const amenityIcons: { [key: string]: any } = {
  "Free WiFi": Wifi,
  "Mini Bar": Coffee,
  "Nespresso": Coffee,
  "Private Parking": Car,
  "Parking": Car,
};

export default function LivingPage({ params }: { params: { slug: string } }) {
  const destination = destinations.find((d) => d.slug === params.slug);
  const heroRef = useRef<HTMLElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);
  const amenitiesRef = useRef<HTMLDivElement>(null);
  const [selectedRoom, setSelectedRoom] = useState<number>(0);

  useEffect(() => {
    if (!heroRef.current) return;

    gsap.fromTo(
      heroRef.current.querySelectorAll("[data-reveal]"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  useEffect(() => {
    if (!roomsRef.current) return;

    const rooms = roomsRef.current.querySelectorAll(".room-section");
    rooms.forEach((room) => {
      gsap.fromTo(
        room.querySelectorAll("[data-room-reveal]"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: room,
            start: "top 75%",
          },
        }
      );
    });

    if (amenitiesRef.current) {
      gsap.fromTo(
        amenitiesRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: amenitiesRef.current,
            start: "top 80%",
          },
        }
      );
    }

    return () => {
      killScrollTriggersByRoots([
        heroRef.current,
        roomsRef.current,
        amenitiesRef.current,
      ]);
    };
  }, []);

  if (!destination) {
    notFound();
  }

  const livingRooms = destination.livingRooms || destination.rooms?.map((room, i) => ({
    name: room.name,
    size: "500 sq ft",
    description: room.description,
    features: destination.amenities?.slice(0, 4) || [],
    image: destination.gallery?.[i] || destination.image,
    images: destination.gallery?.slice(i, i + 4) || [destination.image],
  }));
  const livingLocation =
    (destination as typeof destination & {
      livingLocation?: typeof destination.location;
    }).livingLocation || destination.location;
  const livingIntro =
    (destination as typeof destination & {
      livingIntro?: string;
    }).livingIntro ||
    "Discover our collection of meticulously designed spaces, each offering a unique perspective on luxury living.";
  const isLavelleRoad = destination.slug === "lavelle-road";
  const getRoomPrimaryImage = (room: (typeof livingRooms)[number]) => {
    if ("image" in room && room.image) return room.image;
    if ("images" in room && Array.isArray(room.images) && room.images[0]) return room.images[0];
    return destination.image;
  };
  const getRoomImages = (room: (typeof livingRooms)[number]) => {
    if ("images" in room && Array.isArray(room.images) && room.images.length > 0) {
      return room.images;
    }
    const primary = getRoomPrimaryImage(room);
    return primary ? [primary] : [];
  };

  return (
    <>
      <Header />

      {/* Hero Section - Enhanced with room preview */}
      <section
        ref={heroRef}
        className="relative h-[70vh] sm:h-[80vh] min-h-[550px] flex items-end"
      >
        <Image
          src={
            (livingRooms?.[selectedRoom] && getRoomPrimaryImage(livingRooms[selectedRoom])) ||
            destination.heroImage ||
            destination.image
          }
          alt={`Living at ${destination.title}`}
          fill
          className="object-cover transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto">
            <Link
              data-reveal
              href={`/destinations/${destination.slug}`}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em]">
                Back to {destination.shortTitle}
              </span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
              <div>
                <div data-reveal className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-brand-accent" />
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/80 drop-shadow-sm">
                    {destination.subtitle}
                  </p>
                </div>
                <h1
                  data-reveal
                  className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4"
                >
                  Living at <em className="italic">{destination.shortTitle}</em>
                </h1>
                <p
                  data-reveal
                  className="text-sm sm:text-base text-white/90 max-w-xl leading-relaxed"
                >
                  {livingIntro}
                </p>
              </div>

              {/* Room quick selector - desktop only */}
              <div data-reveal className="hidden lg:block">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-4">
                  Quick View: {livingRooms?.length} Room Types
                </p>
                <div className="flex gap-2">
                  {livingRooms?.slice(0, 4).map((room, index) => (
                    <button
                      key={room.name}
                      onClick={() => setSelectedRoom(index)}
                      className={`relative w-20 h-20 overflow-hidden transition-all duration-300 ${
                        selectedRoom === index ? "ring-2 ring-white" : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={getRoomPrimaryImage(room)}
                        alt={room.name}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isLavelleRoad && (
        <section className="py-12 sm:py-16 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 sm:p-8 border border-brand-border">
                <h2 className="font-display text-xl sm:text-2xl font-light mb-3">
                  Rooms Designed for Court-Visit Schedules
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                  Ideal for outstation advocates attending hearings at the High Court of Karnataka, our studio formats offer reliable WiFi, practical workspaces, and easy city access.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 border border-brand-border">
                <h3 className="font-display text-lg sm:text-xl font-light mb-3">
                  Why Legal Travelers Choose Lavelle Road
                </h3>
                <ul className="space-y-2 text-sm text-brand-body">
                  <li>Fast check-in support for short-notice legal travel</li>
                  <li>Central location near High Court and legal offices</li>
                  <li>Comfortable extended stays for multi-day hearings</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Room Types - Enhanced with better layout */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
              Accommodations
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
              Choose Your <em className="italic">Space</em>
            </h2>
            <div className="w-16 h-px bg-brand-accent mx-auto mt-6 sm:mt-8" />
          </div>

          <div ref={roomsRef} className="space-y-16 sm:space-y-24 lg:space-y-32">
            {livingRooms?.map((room, index) => (
              <div
                key={room.name}
                className={`room-section grid lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
              >
                {/* Image - alternating sides */}
                <div className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden">
                    <Image
                      data-room-reveal
                      src={getRoomPrimaryImage(room)}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Size badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 flex items-center gap-2">
                      <Maximize2 className="w-3 h-3 text-brand-accent" />
                      <span className="text-[10px] uppercase tracking-[0.1em] text-brand-ink">
                        {room.size}
                      </span>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className={`hidden sm:block absolute -bottom-4 ${index % 2 === 1 ? "-left-4" : "-right-4"} w-full h-full border border-brand-accent/20 -z-10`} />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div data-room-reveal className="flex items-center gap-3 mb-4">
                    <span className="font-display text-4xl sm:text-5xl text-brand-border/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-8 h-px bg-brand-accent" />
                  </div>
                  <h3 data-room-reveal className="font-display text-2xl sm:text-3xl lg:text-4xl font-light mb-4">
                    {room.name}
                  </h3>
                  <p data-room-reveal className="text-sm sm:text-base text-brand-body leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Features grid */}
                  <div data-room-reveal className="grid grid-cols-2 gap-3 mb-8">
                    {room.features?.map((feature: string) => (
                      <span
                        key={feature}
                        className="flex items-center gap-2 text-xs sm:text-sm text-brand-muted"
                      >
                        <Check className="w-4 h-4 text-brand-accent flex-shrink-0" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {getRoomImages(room).length > 1 && (
                    <div data-room-reveal className="grid grid-cols-4 gap-2 mb-8">
                      {getRoomImages(room)
                        .slice(1, 5)
                        .map((img) => (
                          <div key={img} className="relative aspect-square overflow-hidden">
                            <Image
                              src={img}
                              alt={`${room.name} additional view`}
                              fill
                              className="object-cover"
                              sizes="120px"
                            />
                          </div>
                        ))}
                    </div>
                  )}

                  <div data-room-reveal className="flex flex-wrap gap-3">
                    <a
                      href={destination.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-ink text-white px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] hover:bg-brand-accent transition-colors active:scale-95"
                    >
                      Book This Room
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 border border-brand-ink text-brand-ink px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] hover:bg-brand-ink hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call to Inquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities - Enhanced grid */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
              In-Room Amenities
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
              The Essential <em className="italic">Comforts</em>
            </h2>
            <div className="w-16 h-px bg-brand-accent mx-auto mt-6 sm:mt-8" />
          </div>

          <div ref={amenitiesRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {destination.amenities?.map((amenity) => {
              const IconComponent = amenityIcons[amenity] || Check;
              return (
                <div
                  key={amenity}
                  className="group text-center p-5 sm:p-6 bg-white hover:shadow-lg transition-all duration-500 border border-transparent hover:border-brand-accent"
                >
                  <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center bg-brand-accent/10 group-hover:bg-brand-accent transition-colors duration-500">
                    <IconComponent className="w-5 h-5 text-brand-accent group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs sm:text-sm text-brand-body group-hover:text-brand-ink transition-colors">{amenity}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location - Enhanced with better cards */}
      {livingLocation && (
        <section className="py-16 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
                Getting Here
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
                Location & <em className="italic">Directions</em>
              </h2>
              <div className="w-16 h-px bg-brand-accent mx-auto mt-6 sm:mt-8" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {livingLocation.airport && (
                <div className="group p-6 sm:p-8 bg-[#f8f7f5] hover:bg-brand-ink transition-colors duration-500">
                  <Plane className="w-10 h-10 text-brand-accent group-hover:text-white mb-5" strokeWidth={1} />
                  <h3 className="font-display text-lg sm:text-xl font-light mb-2 group-hover:text-white transition-colors">
                    {livingLocation.airport.name}
                  </h3>
                  <p className="text-sm text-brand-muted group-hover:text-white/60 transition-colors">
                    {livingLocation.airport.distance} away
                  </p>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-brand-border group-hover:border-white/20 transition-colors">
                    <Clock className="w-4 h-4 text-brand-accent group-hover:text-white transition-colors" />
                    <p className="text-sm text-brand-body group-hover:text-white/80 transition-colors">
                      {livingLocation.airport.time}
                    </p>
                  </div>
                </div>
              )}

              {livingLocation.railway && (
                <div className="group p-6 sm:p-8 bg-[#f8f7f5] hover:bg-brand-ink transition-colors duration-500">
                  <Train className="w-10 h-10 text-brand-accent group-hover:text-white mb-5" strokeWidth={1} />
                  <h3 className="font-display text-lg sm:text-xl font-light mb-2 group-hover:text-white transition-colors">
                    {livingLocation.railway.name}
                  </h3>
                  <p className="text-sm text-brand-muted group-hover:text-white/60 transition-colors">
                    {livingLocation.railway.distance} away
                  </p>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-brand-border group-hover:border-white/20 transition-colors">
                    <Clock className="w-4 h-4 text-brand-accent group-hover:text-white transition-colors" />
                    <p className="text-sm text-brand-body group-hover:text-white/80 transition-colors">
                      {livingLocation.railway.time}
                    </p>
                  </div>
                </div>
              )}

              {(livingLocation.metro || livingLocation.landmark) && (
                <div className="group p-6 sm:p-8 bg-[#f8f7f5] hover:bg-brand-ink transition-colors duration-500">
                  <Building className="w-10 h-10 text-brand-accent group-hover:text-white mb-5" strokeWidth={1} />
                  <h3 className="font-display text-lg sm:text-xl font-light mb-2 group-hover:text-white transition-colors">
                    {livingLocation.metro?.name || livingLocation.landmark?.name}
                  </h3>
                  <p className="text-sm text-brand-muted group-hover:text-white/60 transition-colors">
                    {livingLocation.metro?.distance || livingLocation.landmark?.distance} away
                  </p>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-brand-border group-hover:border-white/20 transition-colors">
                    <Clock className="w-4 h-4 text-brand-accent group-hover:text-white transition-colors" />
                    <p className="text-sm text-brand-body group-hover:text-white/80 transition-colors">
                      {livingLocation.metro?.time || livingLocation.landmark?.time}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {isLavelleRoad && (
        <section className="py-14 sm:py-18 bg-white border-y border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7">
              <h2 className="font-display text-2xl sm:text-3xl font-light">
                Explore Nearby Lavelle Road Search Pages
              </h2>
              <Link
                href="/destinations/lavelle-road/near"
                className="text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:text-brand-accent transition-colors"
              >
                View Full Location Hub
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Hotel Near Karnataka High Court", href: "/destinations/lavelle-road/near/karnataka-high-court" },
                { label: "Hotel Near UB City", href: "/destinations/lavelle-road/near/ub-city" },
                { label: "Hotel Near Vidhana Soudha", href: "/destinations/lavelle-road/near/vidhana-soudha" },
                { label: "Hotel Near Cubbon Park", href: "/destinations/lavelle-road/near/cubbon-park" },
                { label: "Hotel Near MG Road Metro Station", href: "/destinations/lavelle-road/near/mg-road-metro" },
                { label: "Hotel Near KSR Railway Station", href: "/destinations/lavelle-road/near/ksr-railway-station" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-brand-border bg-[#f8f7f5] p-4 text-sm hover:bg-brand-ink hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted mb-3">
                Related Travel Guides
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { label: "Court-Day Itinerary Near Karnataka High Court", href: "/travel/guides/court-day-itinerary-near-karnataka-high-court" },
                  { label: "Luxury Evening Walks Near Lavelle Road", href: "/travel/guides/luxury-evening-walks-near-lavelle-road" },
                  { label: "Executive Breakfast Spots Around UB City", href: "/travel/guides/executive-breakfast-spots-around-ub-city" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border border-brand-border bg-white p-3 text-sm hover:bg-brand-ink hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA - Enhanced */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#1a1a1a] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
            Ready to Book?
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Reserve Your <em className="italic">Stay</em>
          </h2>
          <p className="text-sm sm:text-base text-white/90 mb-10 max-w-2xl mx-auto">
            Contact our reservations team for personalized assistance with your booking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={destination.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-ink px-8 sm:px-10 py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] hover:bg-brand-accent hover:text-white transition-colors active:scale-95"
            >
              Book Online
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 sm:px-10 py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {contactInfo.phones[0]}
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              {contactInfo.email}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
