"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, MapPin, Clock, Plane, Train, Building, Check, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations, contactInfo } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LivingPage({ params }: { params: { slug: string } }) {
  const destination = destinations.find((d) => d.slug === params.slug);
  const heroRef = useRef<HTMLElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);

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

    gsap.fromTo(
      roomsRef.current.children,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: roomsRef.current,
          start: "top 75%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
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
  }));

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] sm:h-[70vh] min-h-[500px] flex items-center justify-center"
      >
        <Image
          src={destination.heroImage || destination.image}
          alt={`Living at ${destination.title}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Link
            data-reveal
            href={`/destinations/${destination.slug}`}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em]">
              Back to {destination.shortTitle}
            </span>
          </Link>

          <p
            data-reveal
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/50 mb-4"
          >
            {destination.subtitle}
          </p>
          <h1
            data-reveal
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4"
          >
            Living at <em className="italic">{destination.shortTitle}</em>
          </h1>
          <p
            data-reveal
            className="text-sm sm:text-base lg:text-lg text-white/60 max-w-2xl mx-auto"
          >
            Discover our collection of meticulously designed spaces, each offering a unique perspective on luxury living.
          </p>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
              Accommodations
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
              Choose Your <em className="italic">Space</em>
            </h2>
          </div>

          <div ref={roomsRef} className="space-y-12 sm:space-y-16 lg:space-y-24">
            {livingRooms?.map((room, index) => (
              <div
                key={room.name}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-brand-accent mb-3">
                    {room.size}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light mb-4">
                    {room.name}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6">
                    {room.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {room.features?.map((feature: string) => (
                      <span
                        key={feature}
                        className="flex items-center gap-2 text-xs sm:text-sm text-brand-muted"
                      >
                        <Check className="w-4 h-4 text-brand-accent" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href={destination.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-brand-ink text-white px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] hover:bg-brand-ink/90 transition-colors"
                  >
                    Book This Room
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
              In-Room Amenities
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
              The Essential <em className="italic">Comforts</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {destination.amenities?.map((amenity) => (
              <div key={amenity} className="text-center p-4 sm:p-6 bg-white">
                <Check className="w-6 h-6 text-brand-accent mx-auto mb-3" />
                <p className="text-xs sm:text-sm text-brand-body">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      {destination.location && (
        <section className="py-16 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
                Getting Here
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
                Location & <em className="italic">Directions</em>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {destination.location.airport && (
                <div className="p-6 sm:p-8 border border-brand-border">
                  <Plane className="w-8 h-8 text-brand-accent mb-4" strokeWidth={1} />
                  <h3 className="font-display text-lg sm:text-xl font-light mb-2">
                    {destination.location.airport.name}
                  </h3>
                  <p className="text-sm text-brand-muted">
                    {destination.location.airport.distance} away
                  </p>
                  <p className="text-sm text-brand-body flex items-center gap-2 mt-2">
                    <Clock className="w-4 h-4" />
                    {destination.location.airport.time}
                  </p>
                </div>
              )}

              {destination.location.railway && (
                <div className="p-6 sm:p-8 border border-brand-border">
                  <Train className="w-8 h-8 text-brand-accent mb-4" strokeWidth={1} />
                  <h3 className="font-display text-lg sm:text-xl font-light mb-2">
                    {destination.location.railway.name}
                  </h3>
                  <p className="text-sm text-brand-muted">
                    {destination.location.railway.distance} away
                  </p>
                  <p className="text-sm text-brand-body flex items-center gap-2 mt-2">
                    <Clock className="w-4 h-4" />
                    {destination.location.railway.time}
                  </p>
                </div>
              )}

              {(destination.location.metro || destination.location.landmark) && (
                <div className="p-6 sm:p-8 border border-brand-border">
                  <Building className="w-8 h-8 text-brand-accent mb-4" strokeWidth={1} />
                  <h3 className="font-display text-lg sm:text-xl font-light mb-2">
                    {destination.location.metro?.name || destination.location.landmark?.name}
                  </h3>
                  <p className="text-sm text-brand-muted">
                    {destination.location.metro?.distance || destination.location.landmark?.distance} away
                  </p>
                  <p className="text-sm text-brand-body flex items-center gap-2 mt-2">
                    <Clock className="w-4 h-4" />
                    {destination.location.metro?.time || destination.location.landmark?.time}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4 sm:mb-6">
            Ready to Book?
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Reserve Your <em className="italic">Stay</em>
          </h2>
          <p className="text-sm sm:text-base text-white/60 mb-10 max-w-2xl mx-auto">
            Contact our reservations team for personalized assistance with your booking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={destination.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-brand-ink px-8 py-4 text-[11px] uppercase tracking-[0.15em] hover:bg-white/90 transition-colors"
            >
              Book Online
            </a>
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 text-[11px] uppercase tracking-[0.15em] hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {contactInfo.phones[0]}
            </a>
          </div>

          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            {contactInfo.email}
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
