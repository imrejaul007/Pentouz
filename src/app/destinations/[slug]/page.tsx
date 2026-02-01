"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, Check, MapPin, Phone, Bed } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations, contactInfo } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const destination = destinations.find((d) => d.slug === params.slug);
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Hero animation
    gsap.fromTo(
      heroRef.current.querySelectorAll("[data-reveal]"),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  useEffect(() => {
    // Intro section parallax
    if (introRef.current) {
      const image = introRef.current.querySelector(".intro-image");
      const content = introRef.current.querySelectorAll("[data-intro]");

      if (image) {
        gsap.fromTo(
          image,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: introRef.current,
              start: "top 80%",
            },
          }
        );
      }

      gsap.fromTo(
        content,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 75%",
          },
        }
      );
    }

    // Features animation
    if (featuresRef.current) {
      const cards = featuresRef.current.querySelectorAll(".feature-card");
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 75%",
          },
        }
      );
    }

    // Rooms animation
    if (roomsRef.current) {
      const cards = roomsRef.current.querySelectorAll(".room-card");
      gsap.fromTo(
        cards,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: roomsRef.current,
            start: "top 75%",
          },
        }
      );
    }

    // Gallery horizontal scroll effect
    if (galleryRef.current) {
      gsap.to(galleryRef.current, {
        x: -200,
        ease: "none",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  if (!destination) {
    notFound();
  }

  // Get next and previous destinations for navigation
  const currentIndex = destinations.findIndex((d) => d.slug === params.slug);
  const prevDestination = destinations[currentIndex - 1];
  const nextDestination = destinations[currentIndex + 1];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Enhanced with better mobile responsiveness */}
        <section ref={heroRef} className="relative h-[100svh] min-h-[600px] sm:min-h-[700px]">
          <div className="absolute inset-0">
            <Image
              src={destination.heroImage || destination.image}
              alt={destination.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
          </div>

          <div className="relative h-full flex flex-col justify-end text-white px-4 sm:px-8 lg:px-24 pb-20 sm:pb-28 lg:pb-32">
            <div className="max-w-7xl mx-auto w-full">
              <div data-reveal className="flex items-center gap-2 mb-4 sm:mb-6">
                <MapPin className="w-4 h-4 text-brand-accent" />
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/60 font-light">
                  {destination.subtitle}
                </p>
              </div>
              <h1 data-reveal className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light max-w-4xl mb-6 sm:mb-8">
                {destination.title}
              </h1>
              <div data-reveal className="w-16 sm:w-20 h-px bg-brand-accent mb-6 sm:mb-8" />
              <p data-reveal className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl font-light leading-relaxed">
                {destination.copy}
              </p>

              {/* Quick action buttons */}
              <div data-reveal className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
                <a
                  href={destination.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-brand-ink px-5 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] hover:bg-white/90 transition-all active:scale-95"
                >
                  Book Now
                </a>
                <Link
                  href={`/destinations/${destination.slug}/living`}
                  className="inline-flex items-center gap-2 border border-white/40 text-white px-5 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] hover:bg-white/10 transition-all"
                >
                  <Bed className="w-4 h-4" />
                  View Rooms
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator - hidden on mobile */}
          <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-white/50">
            <span className="text-[10px] uppercase tracking-[0.3em] font-light">Scroll</span>
            <div className="w-px h-10 bg-white/30 overflow-hidden">
              <div className="w-full h-full bg-white animate-pulse" />
            </div>
          </div>
        </section>

        {/* Introduction - Enhanced with decorative elements */}
        <section ref={introRef} className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
              <div className="order-2 lg:order-1">
                <p data-intro className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6 font-light">
                  Welcome
                </p>
                <h2 data-intro className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mb-6 sm:mb-8">
                  A Place of <em className="italic">Distinction</em>
                </h2>
                <div data-intro className="w-12 sm:w-16 h-px bg-brand-accent mb-8 sm:mb-10" />
                <p data-intro className="text-sm sm:text-base lg:text-lg text-brand-body leading-relaxed mb-6 sm:mb-8">
                  {destination.description}
                </p>
                {destination.address && (
                  <p data-intro className="text-sm text-brand-muted flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-accent" />
                    {destination.address}
                  </p>
                )}
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="intro-image aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={destination.gallery?.[1] || destination.image}
                    alt={`${destination.title} interior`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative frame */}
                <div className="hidden sm:block absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-full h-full border border-brand-accent/20 -z-10" />
                <div className="hidden sm:block absolute -bottom-3 -right-3 lg:-bottom-5 lg:-right-5 w-24 sm:w-32 h-24 sm:h-32 bg-brand-cream -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Features & Amenities - Enhanced card design */}
        <section ref={featuresRef} className="py-16 sm:py-24 lg:py-32 bg-[#f8f7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6 font-light">
                Features
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light">
                Refined <em className="italic">Amenities</em>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {destination.features?.map((feature, index) => (
                <div
                  key={feature}
                  className="feature-card group flex items-start gap-4 sm:gap-5 p-5 sm:p-6 lg:p-8 bg-white hover:shadow-lg transition-all duration-500 border-l-2 border-transparent hover:border-brand-accent"
                >
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-brand-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent transition-colors duration-500">
                    <Check className="w-4 h-4 text-brand-accent group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-brand-ink font-light">{feature}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Amenities tags - horizontal scroll on mobile */}
            <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-3 sm:gap-4 mt-12 sm:mt-16 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
              {destination.amenities?.map((amenity) => (
                <span
                  key={amenity}
                  className="flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 border border-brand-border text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-brand-muted hover:border-brand-accent hover:text-brand-accent transition-colors duration-300"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Rooms / Suites - Enhanced with hover effects */}
        <section className="py-16 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6 font-light">
                Accommodations
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light">
                Our <em className="italic">Suites</em>
              </h2>
            </div>

            <div ref={roomsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {destination.rooms?.map((room, index) => (
                <Link
                  key={room.name}
                  href={`/destinations/${destination.slug}/living`}
                  className="room-card group block"
                >
                  <div className="aspect-[4/3] relative overflow-hidden mb-5 sm:mb-6">
                    <Image
                      src={destination.gallery?.[index] || destination.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* View button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="bg-white text-brand-ink px-6 py-3 text-[10px] uppercase tracking-[0.15em]">
                        View Details
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-light mb-2 group-hover:text-brand-accent transition-colors duration-300">
                    {room.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted">
                    {room.description}
                  </p>
                </Link>
              ))}
            </div>

            {/* View All Rooms Link */}
            <div className="text-center mt-12 sm:mt-16">
              <Link
                href={`/destinations/${destination.slug}/living`}
                className="inline-flex items-center gap-3 border border-brand-ink px-8 sm:px-10 py-3 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:bg-brand-ink hover:text-white transition-all duration-500 active:scale-95"
              >
                <span>View All Living Options</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Strip - Enhanced with parallax */}
        <section className="py-8 sm:py-12 lg:py-16 bg-[#1a1a1a] overflow-hidden">
          <div ref={galleryRef} className="flex gap-3 sm:gap-4 lg:gap-6">
            {[...destination.gallery || [], ...destination.gallery || []].map((image, index) => (
              <div key={index} className="aspect-[16/10] w-[280px] sm:w-[400px] lg:w-[500px] relative flex-shrink-0">
                <Image
                  src={image}
                  alt={`${destination.title} gallery ${index + 1}`}
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                  sizes="500px"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Booking CTA - Enhanced design */}
        <section className="py-16 sm:py-24 lg:py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6 font-light">
              Reserve Your Stay
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mb-6 sm:mb-8">
              Experience <em className="italic">{destination.shortTitle}</em>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/60 mb-10 sm:mb-12 max-w-2xl mx-auto">
              Contact our concierge team to plan your perfect stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href={destination.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-brand-ink py-4 sm:py-5 px-10 sm:px-12 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] hover:bg-brand-accent hover:text-white transition-all duration-500 font-light active:scale-95"
              >
                Book Now
              </a>
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white py-4 sm:py-5 px-10 sm:px-12 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-500 font-light"
              >
                <Phone className="w-4 h-4" />
                {contactInfo.phones[0]}
              </a>
            </div>
          </div>
        </section>

        {/* Navigation to other properties - Enhanced */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white border-t border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex justify-between items-center">
              {prevDestination ? (
                <Link
                  href={`/destinations/${prevDestination.slug}`}
                  className="group flex items-center gap-3 sm:gap-4 text-brand-muted hover:text-brand-ink transition-colors duration-500"
                >
                  <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:-translate-x-2 duration-500" />
                  <div>
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] mb-1 text-brand-muted">Previous</p>
                    <p className="text-sm sm:text-base font-display">{prevDestination.shortTitle}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              <Link
                href="/destinations"
                className="hidden sm:block text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-brand-muted hover:text-brand-ink transition-colors px-4 py-2 border border-brand-border hover:border-brand-ink"
              >
                All Destinations
              </Link>

              {nextDestination ? (
                <Link
                  href={`/destinations/${nextDestination.slug}`}
                  className="group flex items-center gap-3 sm:gap-4 text-brand-muted hover:text-brand-ink transition-colors duration-500 text-right"
                >
                  <div>
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] mb-1 text-brand-muted">Next</p>
                    <p className="text-sm sm:text-base font-display">{nextDestination.shortTitle}</p>
                  </div>
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-2 duration-500" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
