"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, MapPin, Check } from "lucide-react";
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
    if (pentouzRef.current) {
      gsap.fromTo(
        pentouzRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pentouzRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (propertiesRef.current) {
      gsap.fromTo(
        propertiesRef.current.children,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
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

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] sm:h-[70vh] min-h-[500px] flex items-center justify-center bg-[#1a1a1a]"
      >
        <Image
          src="https://pentouz.com/wp-content/uploads/2025/01/Living-Room-5-1.jpg"
          alt="The Collection"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-black/40" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p
            data-reveal
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/50 mb-6"
          >
            Our Properties
          </p>
          <h1
            data-reveal
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6"
          >
            The <em className="italic">Collection</em>
          </h1>
          <p
            data-reveal
            className="text-sm sm:text-base lg:text-lg text-white/60 max-w-2xl mx-auto"
          >
            Discover our portfolio of distinctive properties, each offering a unique blend of comfort, convenience, and character.
          </p>
        </div>
      </section>

      {/* The Pentouz Properties */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
              Signature Collection
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
              The Pentouz <em className="italic">Properties</em>
            </h2>
            <p className="text-sm sm:text-base text-brand-body mt-4 max-w-2xl mx-auto">
              Our flagship luxury residences, offering unparalleled experiences in Bangalore and Ooty.
            </p>
          </div>

          <div ref={pentouzRef} className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                href={`/destinations/${destination.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-2 flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {destination.subtitle}
                    </p>
                  </div>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-light mb-2 group-hover:text-brand-accent transition-colors">
                  {destination.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-body line-clamp-2">
                  {destination.copy}
                </p>
                <div className="flex items-center gap-2 mt-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-brand-accent">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Properties */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
              Partner Properties
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
              Extended <em className="italic">Collection</em>
            </h2>
            <p className="text-sm sm:text-base text-brand-body mt-4 max-w-2xl mx-auto">
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
                className="group bg-white flex flex-col sm:flex-row overflow-hidden"
              >
                <div className="relative aspect-[4/3] sm:aspect-auto sm:w-2/5 flex-shrink-0 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted mb-2 flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    {property.location}
                  </p>
                  <h3 className="font-display text-lg sm:text-xl font-light mb-3 group-hover:text-brand-accent transition-colors">
                    {property.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-body mb-4">
                    {property.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
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
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-light mb-4">
            Looking for Something Special?
          </h2>
          <p className="text-sm sm:text-base text-brand-body mb-8">
            Our team can help you find the perfect property for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-brand-ink px-8 py-4 text-[11px] uppercase tracking-[0.15em] text-brand-ink hover:bg-brand-ink hover:text-white transition-all"
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
