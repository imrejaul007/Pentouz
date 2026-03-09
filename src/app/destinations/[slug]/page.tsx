"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MapPin,
  Phone,
  Bed,
  Star,
  Users,
  Maximize2,
  Clock,
  Plane,
  Train,
  Building2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations, contactInfo } from "@/data/content";
import { killScrollTriggersByRoots } from "@/lib/scrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DestinationPage({
  params,
}: {
  params: { slug: string };
}) {
  const destination = destinations.find((d) => d.slug === params.slug);
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLElement>(null);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Sticky CTA visibility
  const [showStickyCTA, setShowStickyCTA] = useState(false);

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

    // Hero image parallax
    const heroImage = heroRef.current.querySelector(".hero-image");
    if (heroImage) {
      gsap.to(heroImage, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  useEffect(() => {
    // Scroll listener for sticky CTA
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowStickyCTA(scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Stats counter animation
    if (statsRef.current) {
      const statNumbers = statsRef.current.querySelectorAll(".stat-number");
      gsap.fromTo(
        statNumbers,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );
    }

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

    // Location section animation
    if (locationRef.current) {
      const items = locationRef.current.querySelectorAll(".location-item");
      gsap.fromTo(
        items,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: locationRef.current,
            start: "top 80%",
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
      killScrollTriggersByRoots([
        heroRef.current,
        introRef.current,
        statsRef.current,
        featuresRef.current,
        roomsRef.current,
        galleryRef.current,
        locationRef.current,
      ]);
    };
  }, []);

  if (!destination) {
    notFound();
  }

  // Get next and previous destinations for navigation
  const currentIndex = destinations.findIndex((d) => d.slug === params.slug);
  const prevDestination = destinations[currentIndex - 1];
  const nextDestination = destinations[currentIndex + 1];

  // Get all gallery images
  const allGalleryImages = destination.gallery || [destination.image];
  const isLavelleRoad = destination.slug === "lavelle-road";
  const lavelleLegalSeo =
    isLavelleRoad && "legalSeo" in destination ? destination.legalSeo : null;
  const lavelleLegalJsonLd = isLavelleRoad
    ? {
        "@context": "https://schema.org",
        "@type": "Hotel",
        name: destination.title,
        description: destination.description,
        image: destination.heroImage || destination.image,
        address: {
          "@type": "PostalAddress",
          streetAddress: destination.address || "46, 6th Cross, Lavelle Road",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560001",
          addressCountry: "IN",
        },
        amenityFeature: destination.amenities?.map((item) => ({
          "@type": "LocationFeatureSpecification",
          name: item,
          value: true,
        })),
        areaServed: "Outstation advocates and legal professionals visiting High Court of Karnataka",
      }
    : null;
  const stripImages = allGalleryImages.slice(0, 8);
  const galleryStripImages =
    stripImages.length > 0 && stripImages.length <= 4
      ? [...stripImages, ...stripImages]
      : stripImages;

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % allGalleryImages.length);
  };

  const prevImage = () => {
    setLightboxIndex(
      (prev) => (prev - 1 + allGalleryImages.length) % allGalleryImages.length
    );
  };

  // Type-safe property access helpers
  const propertyType = (destination as any).propertyType;
  const rating = (destination as any).rating;
  const reviews = (destination as any).reviews;
  const totalSize = (destination as any).totalSize;
  const totalRooms = (destination as any).totalRooms;
  const capacity = (destination as any).capacity;
  const idealFor = (destination as any).idealFor as string[] | undefined;
  const coordinates = (destination as any).coordinates;

  return (
    <>
      <Header />
      {lavelleLegalJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lavelleLegalJsonLd) }}
        />
      ) : null}
      <main>
        {/* Hero Section - Enhanced with property badge and rating */}
        <section
          ref={heroRef}
          className="relative h-[100svh] min-h-[600px] sm:min-h-[700px] overflow-hidden"
        >
          <div className="absolute inset-0">
            {/* Loading placeholder */}
            <div className="absolute inset-0 video-placeholder" />

            <Image
              src={destination.heroImage || destination.image}
              alt={destination.title}
              fill
              priority
              className="object-cover hero-image"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8Aq7fudw7V1C7ggaZraYYj8kpZYpEHJgQMFgTk5HBANaOdzWdxbW9y0M0Us0SSMhXkFLKCR/DSlKiazK0M7B4j/9k="
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
          </div>

          <div className="relative h-full flex flex-col justify-end text-white px-4 sm:px-8 lg:px-24 pb-20 sm:pb-28 lg:pb-32">
            <div className="max-w-7xl mx-auto w-full">
              {/* Property Type Badge */}
              {propertyType && (
                <div
                  data-reveal
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                >
                  <Building2 className="w-4 h-4 text-brand-gold" />
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/90 font-light">
                    {propertyType}
                  </span>
                </div>
              )}

              <div data-reveal className="flex items-center gap-2 mb-4 sm:mb-6">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/80 font-light drop-shadow-sm">
                  {destination.subtitle}
                </p>
              </div>
              <h1
                data-reveal
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light max-w-4xl mb-6 sm:mb-8 drop-shadow-md"
              >
                {destination.title}
              </h1>

              {/* Rating Display */}
              {rating && (
                <div
                  data-reveal
                  className="flex items-center gap-4 mb-6 sm:mb-8"
                >
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rating
                            ? "text-brand-gold fill-brand-gold"
                            : "text-white/50"
                        }`}
                      />
                    ))}
                  </div>
                  {reviews && (
                    <span className="text-sm text-white/80">
                      {reviews} Reviews
                    </span>
                  )}
                </div>
              )}

              <div data-reveal className="w-16 sm:w-20 h-px bg-brand-gold mb-6 sm:mb-8" />
              <p
                data-reveal
                className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl font-light leading-relaxed"
              >
                {destination.copy}
              </p>

              {/* Quick action buttons */}
              <div
                data-reveal
                className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10"
              >
                <a
                  href={destination.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-gold text-white px-5 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] hover:bg-brand-goldLight transition-all active:scale-95"
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

          {/* Scroll indicator */}
          <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-white/70">
            <span className="text-[10px] uppercase tracking-[0.3em] font-light">
              Scroll
            </span>
            <div className="w-px h-10 bg-white/30 overflow-hidden">
              <div className="w-full h-full bg-white animate-pulse" />
            </div>
          </div>
        </section>

        {isLavelleRoad && (
          <section className="py-14 sm:py-20 lg:py-24 bg-brand-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
              <div className="max-w-4xl">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4 font-light">
                  Legal Travel
                </p>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light mb-5">
                  Trusted Stay for <em className="italic">Outstation Advocates</em> Near High Court of Karnataka
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6">
                  Built for legal professionals visiting Bengaluru for hearings, appeals, and trial preparation, The Pentouz Lavelle Road combines central court access, reliable short-notice stays, and business-friendly comfort.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {[
                  "Quick access to High Court of Karnataka and central legal district",
                  "Fast check-in support for short-notice court schedules",
                  "Stable high-speed WiFi and workspace-friendly studio layout",
                  "Longer-stay flexibility for multi-day hearings",
                ].map((item) => (
                  <div key={item} className="bg-white p-5 border border-brand-border">
                    <p className="text-xs sm:text-sm text-brand-body leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              {lavelleLegalSeo?.keywords?.length ? (
                <p className="mt-5 text-[11px] text-brand-muted">
                  Popular searches: {lavelleLegalSeo.keywords.join(" • ")}
                </p>
              ) : null}
            </div>
          </section>
        )}

        {/* Property Stats Bar */}
        <section
          ref={statsRef}
          className="py-8 sm:py-12 bg-brand-ink text-white border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {/* Rating */}
              {rating && (
                <div className="stat-number text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 mb-2">
                    <Star className="w-5 h-5 text-brand-gold fill-brand-gold" />
                    <span className="font-display text-2xl sm:text-3xl font-light">
                      {rating}.0
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/80">
                    Guest Rating
                  </p>
                </div>
              )}

              {/* Size */}
              {(totalSize || totalRooms) && (
                <div className="stat-number text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <Maximize2 className="w-5 h-5 text-brand-gold" />
                    <span className="font-display text-xl sm:text-2xl font-light">
                      {totalSize || totalRooms}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/80">
                    Property Size
                  </p>
                </div>
              )}

              {/* Capacity */}
              {capacity && (
                <div className="stat-number text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <Users className="w-5 h-5 text-brand-gold" />
                    <span className="font-display text-lg sm:text-xl font-light">
                      {capacity}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/80">
                    Capacity
                  </p>
                </div>
              )}

              {/* Reviews */}
              {reviews && (
                <div className="stat-number text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <span className="font-display text-2xl sm:text-3xl font-light">
                      {reviews}+
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/80">
                    Happy Guests
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Ideal For Tags */}
        {idealFor && idealFor.length > 0 && (
          <section className="py-6 sm:py-8 bg-brand-cream border-b border-brand-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-brand-muted font-light">
                  Ideal For:
                </span>
                {idealFor.map((item: string) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-white border border-brand-border text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-brand-body"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Introduction - Enhanced with decorative elements */}
        <section
          ref={introRef}
          className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
              <div className="order-2 lg:order-1">
                <p
                  data-intro
                  className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4 sm:mb-6 font-light"
                >
                  Welcome
                </p>
                <h2
                  data-intro
                  className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mb-6 sm:mb-8"
                >
                  A Place of <em className="italic">Distinction</em>
                </h2>
                <div
                  data-intro
                  className="w-12 sm:w-16 h-px bg-brand-gold mb-8 sm:mb-10"
                />
                <p
                  data-intro
                  className="text-sm sm:text-base lg:text-lg text-brand-body leading-relaxed mb-6 sm:mb-8"
                >
                  {destination.description}
                </p>
                {destination.address && (
                  <p
                    data-intro
                    className="text-sm text-brand-muted flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-brand-gold" />
                    {destination.address}
                  </p>
                )}
              </div>
              <div className="order-1 lg:order-2 relative">
                <div
                  className="intro-image aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(1)}
                >
                  <Image
                    src={destination.gallery?.[1] || destination.image}
                    alt={`${destination.title} interior`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8Aq7fudw7V1C7ggaZraYYj8kpZYpEHJgQMFgTk5HBANaOdzWdxbW9y0M0Us0SSMhXkFLKCR/DSlKiazK0M7B4j/9k="
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white px-6 py-3 text-[10px] uppercase tracking-[0.15em]">
                      View Gallery
                    </div>
                  </div>
                </div>
                {/* Decorative frame */}
                <div className="hidden sm:block absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-full h-full border border-brand-gold/20 -z-10" />
                <div className="hidden sm:block absolute -bottom-3 -right-3 lg:-bottom-5 lg:-right-5 w-24 sm:w-32 h-24 sm:h-32 bg-brand-cream -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Location & Transport */}
        {destination.location && (
          <section
            ref={locationRef}
            className="py-16 sm:py-24 lg:py-32 bg-brand-cream"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
              <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4 sm:mb-6 font-light">
                  Location
                </p>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light">
                  Getting <em className="italic">Here</em>
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {destination.location.airport && (
                  <div className="location-item bg-white p-6 sm:p-8 hover:shadow-lg transition-shadow duration-500">
                    <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center mb-6">
                      <Plane className="w-6 h-6 text-brand-gold" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-light mb-2">
                      {destination.location.airport.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-brand-muted">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {destination.location.airport.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {destination.location.airport.time}
                      </span>
                    </div>
                  </div>
                )}

                {destination.location.railway && (
                  <div className="location-item bg-white p-6 sm:p-8 hover:shadow-lg transition-shadow duration-500">
                    <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center mb-6">
                      <Train className="w-6 h-6 text-brand-gold" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-light mb-2">
                      {destination.location.railway.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-brand-muted">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {destination.location.railway.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {destination.location.railway.time}
                      </span>
                    </div>
                  </div>
                )}

                {(destination.location.landmark ||
                  destination.location.metro) && (
                  <div className="location-item bg-white p-6 sm:p-8 hover:shadow-lg transition-shadow duration-500">
                    <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center mb-6">
                      <Building2 className="w-6 h-6 text-brand-gold" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-light mb-2">
                      {destination.location.landmark?.name ||
                        destination.location.metro?.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-brand-muted">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {destination.location.landmark?.distance ||
                          destination.location.metro?.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {destination.location.landmark?.time ||
                          destination.location.metro?.time}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Map Link */}
              {coordinates && (
                <div className="text-center mt-10 sm:mt-12">
                  <a
                    href={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-brand-gold hover:text-brand-goldLight transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    View on Google Maps
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Features & Amenities - Enhanced card design */}
        <section ref={featuresRef} className="py-16 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4 sm:mb-6 font-light">
                Features
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light">
                Refined <em className="italic">Amenities</em>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {destination.features?.map((feature) => (
                <div
                  key={feature}
                  className="feature-card group flex items-start gap-4 sm:gap-5 p-5 sm:p-6 lg:p-8 bg-brand-cream hover:bg-white hover:shadow-lg transition-all duration-500 border-l-2 border-transparent hover:border-brand-gold"
                >
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold transition-colors duration-500">
                    <Check
                      className="w-4 h-4 text-brand-gold group-hover:text-white transition-colors duration-500"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-brand-ink font-light">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Amenities tags - horizontal scroll on mobile */}
            <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-3 sm:gap-4 mt-12 sm:mt-16 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
              {destination.amenities?.map((amenity) => (
                <span
                  key={amenity}
                  className="flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 border border-brand-border text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Rooms / Suites - Enhanced with hover effects */}
        <section className="py-16 sm:py-24 lg:py-32 bg-[#f8f7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4 sm:mb-6 font-light">
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
                  className="room-card group block bg-white"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {/* Loading placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
                    <Image
                      src={
                        ("image" in room ? room.image : undefined) ||
                        destination.gallery?.[index] ||
                        destination.image
                      }
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8Aq7fudw7V1C7ggaZraYYj8kpZYpEHJgQMFgTk5HBANaOdzWdxbW9y0M0Us0SSMhXkFLKCR/DSlKiazK0M7B4j/9k="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* View button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="bg-white text-brand-ink px-6 py-3 text-[10px] uppercase tracking-[0.15em]">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-light mb-2 group-hover:text-brand-gold transition-colors duration-300">
                      {room.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted">
                      {room.description}
                    </p>
                  </div>
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

        {/* Gallery Strip - Enhanced with click to open */}
        <section className="py-8 sm:py-12 lg:py-16 bg-brand-ink overflow-hidden">
          <div
            ref={galleryRef}
            className="flex gap-3 sm:gap-4 lg:gap-6 cursor-pointer"
          >
            {galleryStripImages.map((image, index) => {
              const sourceIndex = stripImages.length > 0 ? index % stripImages.length : 0;
              return (
              <div
                key={`${image}-${index}`}
                className="aspect-[16/10] w-[280px] sm:w-[400px] lg:w-[500px] relative flex-shrink-0 group"
                onClick={() => openLightbox(sourceIndex)}
              >
                {/* Loading placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 animate-shimmer bg-[length:200%_100%]" />
                <Image
                  src={image}
                  alt={`${destination.title} gallery ${index + 1}`}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  sizes="500px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8Aq7fudw7V1C7ggaZraYYj8kpZYpEHJgQMFgTk5HBANaOdzWdxbW9y0M0Us0SSMhXkFLKCR/DSlKiazK0M7B4j/9k="
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-brand-ink" />
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </section>

        {/* Booking CTA - Enhanced design */}
        <section className="py-16 sm:py-24 lg:py-32 bg-brand-ink text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4 sm:mb-6 font-light">
              Reserve Your Stay
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mb-6 sm:mb-8">
              Experience <em className="italic">{destination.shortTitle}</em>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-10 sm:mb-12 max-w-2xl mx-auto">
              Contact our concierge team to plan your perfect stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href={destination.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-gold text-white py-4 sm:py-5 px-10 sm:px-12 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] hover:bg-brand-goldLight transition-all duration-500 font-light active:scale-95"
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
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] mb-1 text-brand-muted">
                      Previous
                    </p>
                    <p className="text-sm sm:text-base font-display">
                      {prevDestination.shortTitle}
                    </p>
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
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] mb-1 text-brand-muted">
                      Next
                    </p>
                    <p className="text-sm sm:text-base font-display">
                      {nextDestination.shortTitle}
                    </p>
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

      {/* Sticky Booking CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-brand-border py-4 px-4 sm:px-8 transition-transform duration-500 ${
          showStickyCTA ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="font-display text-lg font-light">
              {destination.shortTitle}
            </p>
            <p className="text-xs text-brand-muted">{propertyType}</p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 border border-brand-ink text-brand-ink px-4 sm:px-6 py-3 text-[10px] uppercase tracking-[0.1em] hover:bg-brand-ink hover:text-white transition-all"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span>
            </a>
            <a
              href={destination.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-brand-gold text-white px-6 sm:px-8 py-3 text-[10px] uppercase tracking-[0.1em] hover:bg-brand-goldLight transition-all"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 flex items-center justify-center text-white hover:text-brand-gold transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:text-brand-gold transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:text-brand-gold transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-4 sm:mx-8">
            <Image
              src={allGalleryImages[lightboxIndex]}
              alt={`${destination.title} gallery`}
              fill
              className="object-contain"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8Aq7fudw7V1C7ggaZraYYj8kpZYpEHJgQMFgTk5HBANaOdzWdxbW9y0M0Us0SSMhXkFLKCR/DSlKiazK0M7B4j/9k="
            />
          </div>

          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {allGalleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setLightboxIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === lightboxIndex ? "bg-brand-gold" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
