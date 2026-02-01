"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, MapPin, Check, Star, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { relatedProperties, destinations } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CollectionPage() {
  const heroRef = useRef<HTMLElement>(null);
  const propertiesRef = useRef<HTMLDivElement>(null);
  const pentouzRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hoveredProperty, setHoveredProperty] = useState<string | null>(null);

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
    // Stats counter animation
    if (statsRef.current) {
      const stats = statsRef.current.querySelectorAll(".stat-number");
      stats.forEach((stat) => {
        gsap.fromTo(
          stat,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
            },
          }
        );
      });
    }

    if (pentouzRef.current) {
      const cards = pentouzRef.current.querySelectorAll(".property-card");
      gsap.fromTo(
        cards,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pentouzRef.current,
            start: "top 75%",
          },
        }
      );
    }

    if (propertiesRef.current) {
      const cards = propertiesRef.current.querySelectorAll(".partner-card");
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: propertiesRef.current,
            start: "top 75%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section - Enhanced with better visual hierarchy */}
      <section
        ref={heroRef}
        className="relative h-[70vh] sm:h-[80vh] min-h-[550px] flex items-center justify-center"
      >
        <Image
          src="https://pentouz.com/wp-content/uploads/2025/01/Living-Room-5-1.jpg"
          alt="The Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div data-reveal className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-brand-accent" />
            <Building2 className="w-5 h-5 text-brand-accent" strokeWidth={1} />
            <div className="w-8 h-px bg-brand-accent" />
          </div>
          <p
            data-reveal
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-white/60 mb-4 sm:mb-6"
          >
            Our Properties
          </p>
          <h1
            data-reveal
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6"
          >
            The <em className="italic">Collection</em>
          </h1>
          <p
            data-reveal
            className="text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Discover our portfolio of distinctive properties, each offering a unique blend of comfort, convenience, and character.
          </p>

          {/* Scroll hint */}
          <div data-reveal className="mt-12 sm:mt-16">
            <div className="w-px h-16 bg-white/20 mx-auto relative overflow-hidden">
              <div className="w-full h-8 bg-white/50 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-[#1a1a1a]">
        <div ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 text-center">
            <div>
              <p className="stat-number font-display text-3xl sm:text-4xl lg:text-5xl text-white font-light mb-2">
                7+
              </p>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/50">
                Properties
              </p>
            </div>
            <div>
              <p className="stat-number font-display text-3xl sm:text-4xl lg:text-5xl text-white font-light mb-2">
                3
              </p>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/50">
                Cities
              </p>
            </div>
            <div>
              <p className="stat-number font-display text-3xl sm:text-4xl lg:text-5xl text-white font-light mb-2">
                15+
              </p>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/50">
                Years Experience
              </p>
            </div>
            <div>
              <p className="stat-number font-display text-3xl sm:text-4xl lg:text-5xl text-white font-light mb-2">
                98%
              </p>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/50">
                Guest Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Pentouz Properties - Enhanced with featured styling */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-4 h-4 text-brand-accent" fill="currentColor" />
              <Star className="w-4 h-4 text-brand-accent" fill="currentColor" />
              <Star className="w-4 h-4 text-brand-accent" fill="currentColor" />
            </div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
              Signature Collection
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
              The Pentouz <em className="italic">Properties</em>
            </h2>
            <div className="w-16 h-px bg-brand-accent mx-auto mt-6 sm:mt-8" />
            <p className="text-sm sm:text-base text-brand-body mt-6 max-w-2xl mx-auto">
              Our flagship luxury residences, offering unparalleled experiences in Bangalore and Ooty.
            </p>
          </div>

          <div ref={pentouzRef} className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {destinations.map((destination, index) => (
              <Link
                key={destination.slug}
                href={`/destinations/${destination.slug}`}
                className="property-card group block"
                onMouseEnter={() => setHoveredProperty(destination.slug)}
                onMouseLeave={() => setHoveredProperty(null)}
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className={`object-cover transition-all duration-1000 ${
                      hoveredProperty === destination.slug ? "scale-110" : "scale-100"
                    }`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Featured badge for first property */}
                  {index === 0 && (
                    <div className="absolute top-4 left-4 bg-brand-accent text-white px-3 py-1 text-[9px] uppercase tracking-[0.15em]">
                      Featured
                    </div>
                  )}

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-3 h-3 text-brand-accent" />
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                        {destination.subtitle}
                      </p>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-light text-white mb-2">
                      {destination.title}
                    </h3>

                    {/* Reveal on hover */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      hoveredProperty === destination.slug ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      <p className="text-xs text-white/60 mt-2 line-clamp-2">
                        {destination.copy}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay button */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    hoveredProperty === destination.slug ? "opacity-100" : "opacity-0"
                  }`}>
                    <span className="bg-white text-brand-ink px-6 py-3 text-[10px] uppercase tracking-[0.15em] transform transition-transform duration-500 group-hover:scale-100 scale-90">
                      Explore Property
                    </span>
                  </div>
                </div>

                {/* Mobile-visible content */}
                <div className="sm:hidden">
                  <p className="text-xs text-brand-body line-clamp-2 mb-3">
                    {destination.copy}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-brand-accent">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider with quote */}
      <section className="py-16 sm:py-24 bg-[#f8f7f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-brand-border/30 text-6xl sm:text-8xl font-display leading-none mb-4">
            &ldquo;
          </div>
          <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-light italic text-brand-ink leading-relaxed">
            Every property in our collection tells a unique story of craftsmanship, comfort, and care.
          </blockquote>
          <div className="w-12 h-px bg-brand-accent mx-auto mt-8" />
        </div>
      </section>

      {/* Related Properties - Enhanced card design */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
              Partner Properties
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
              Extended <em className="italic">Collection</em>
            </h2>
            <div className="w-16 h-px bg-brand-accent mx-auto mt-6 sm:mt-8" />
            <p className="text-sm sm:text-base text-brand-body mt-6 max-w-2xl mx-auto">
              Comfortable accommodations across Bangalore for business and leisure travelers.
            </p>
          </div>

          <div ref={propertiesRef} className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {relatedProperties.map((property) => (
              <a
                key={property.slug}
                href={property.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card group bg-[#f8f7f5] flex flex-col sm:flex-row overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] sm:aspect-auto sm:w-2/5 flex-shrink-0 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-center bg-white flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-3 h-3 text-brand-accent" />
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-brand-muted">
                      {property.location}
                    </p>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-light mb-2 sm:mb-3 group-hover:text-brand-accent transition-colors duration-300">
                    {property.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-body mb-4 line-clamp-2">
                    {property.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-[9px] sm:text-[10px] uppercase tracking-[0.1em] text-brand-muted flex items-center gap-1"
                      >
                        <Check className="w-3 h-3 text-brand-accent" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-brand-accent mt-auto">
                    <span>View Property</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Enhanced */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
            Personalized Service
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light mb-4 sm:mb-6">
            Looking for Something <em className="italic">Special</em>?
          </h2>
          <p className="text-sm sm:text-base text-white/60 mb-8 sm:mb-10 max-w-xl mx-auto">
            Our dedicated team can help you find the perfect property tailored to your unique needs and preferences.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-brand-ink px-8 sm:px-10 py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] hover:bg-brand-accent hover:text-white transition-all duration-500 active:scale-95"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
