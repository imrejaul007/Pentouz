"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero text animation
    if (heroRef.current) {
      const heroElements = heroRef.current.querySelectorAll("[data-hero-reveal]");
      gsap.fromTo(
        heroElements,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          stagger: 0.15,
          delay: 0.3,
        }
      );
    }

    // Story section animation
    if (storyRef.current) {
      const storyElements = storyRef.current.querySelectorAll("[data-reveal]");
      storyElements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    // Values cards stagger animation
    if (valuesRef.current) {
      const cards = valuesRef.current.querySelectorAll(".value-card");
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Team section animation
    if (teamRef.current) {
      gsap.fromTo(
        teamRef.current.querySelectorAll("[data-reveal]"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[700px]">
          <div className="absolute inset-0">
            <Image
              src="https://pentouz.com/wp-content/uploads/2025/01/Living-Room-5-1.jpg"
              alt="The Pentouz Story"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
          </div>

          <div
            ref={heroRef}
            className="relative h-full flex flex-col justify-end items-center text-center text-white px-8 pb-32"
          >
            <p data-hero-reveal className="text-overline uppercase tracking-[0.4em] text-white/50 mb-6 font-light">
              Our Story
            </p>
            <h1 data-hero-reveal className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light max-w-4xl mb-8">
              A Legacy of <em className="italic">Refined</em> Hospitality
            </h1>
            <div data-hero-reveal className="w-20 h-px bg-white/30 mb-8" />
            <p data-hero-reveal className="text-lg text-white/60 max-w-2xl font-light leading-relaxed">
              Where every stay becomes a cherished memory, and every guest becomes family
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section ref={storyRef} className="py-32 lg:py-48 bg-white">
          <div className="max-w-container-xl mx-auto px-8 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Image */}
              <div data-reveal className="relative">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src="https://pentouz.com/wp-content/uploads/2025/01/11.-The-Terrace-Haven_Terrace-1024x683.jpg"
                    alt="Pentouz Heritage"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-cream -z-10" />
              </div>

              {/* Content */}
              <div className="lg:py-8">
                <p data-reveal className="text-overline uppercase tracking-[0.3em] text-brand-accent mb-6 font-light">
                  The Beginning
                </p>
                <h2 data-reveal className="font-display text-display-sm lg:text-display-md font-light mb-8">
                  Born from a <em className="italic">Vision</em>
                </h2>
                <div data-reveal className="w-16 h-px bg-brand-accent mb-10" />
                <div data-reveal className="space-y-6 text-body-lg text-brand-body leading-relaxed">
                  <p>
                    The Pentouz was born from a simple yet profound vision: to create spaces where
                    travelers could experience the warmth of Indian hospitality wrapped in contemporary luxury.
                  </p>
                  <p>
                    Founded in Bangalore, our journey began with a single residence that quickly became
                    known for its exceptional service and thoughtful design. Today, we curate three
                    distinctive properties across Bangalore and Ooty, each telling its own unique story.
                  </p>
                  <p>
                    Our name, derived from the Greek word for home, reflects our core belief that
                    every guest deserves a sanctuary—a place where they can truly belong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 lg:py-48 bg-brand-cream">
          <div className="max-w-container-lg mx-auto px-8 lg:px-20 text-center">
            <p data-reveal className="text-overline uppercase tracking-[0.3em] text-brand-accent mb-8 font-light">
              Our Philosophy
            </p>
            <blockquote data-reveal className="font-display text-display-sm lg:text-display-md font-light max-w-4xl mx-auto mb-10 text-balance italic">
              &ldquo;We believe that true luxury lies not in opulence, but in the thoughtful details
              that make a moment memorable.&rdquo;
            </blockquote>
            <div data-reveal className="w-16 h-px bg-brand-accent mx-auto" />
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-32 lg:py-48 bg-white">
          <div className="max-w-container-2xl mx-auto px-8 lg:px-24">
            {/* Header */}
            <div className="text-center mb-20 lg:mb-28">
              <p className="text-overline uppercase tracking-[0.3em] text-brand-accent mb-6 font-light">
                What We Stand For
              </p>
              <h2 className="font-display text-display-md lg:text-display-lg font-light">
                Our Core <em className="italic">Values</em>
              </h2>
              <div className="w-16 h-px bg-brand-accent mx-auto mt-10" />
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {values.map((value, i) => (
                <div key={value.title} className="value-card text-center group">
                  <div className="mb-8">
                    <span className="font-display text-display-md text-brand-border group-hover:text-brand-accent transition-colors duration-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="w-12 h-px bg-brand-border mx-auto mb-8 group-hover:w-20 group-hover:bg-brand-accent transition-all duration-700" />
                  <h3 className="font-display text-heading-lg font-light mb-4">
                    {value.title}
                  </h3>
                  <p className="text-body-md text-brand-body leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="relative min-h-[80vh]">
          <div className="absolute inset-0">
            <Image
              src="https://pentouz.com/wp-content/uploads/2025/01/TPH-MB-Bath-2-1.jpg"
              alt="Luxury Experience"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>

          <div ref={teamRef} className="relative h-full flex items-center py-32 lg:py-48">
            <div className="max-w-container-xl mx-auto px-8 lg:px-20">
              <div className="max-w-2xl">
                <p data-reveal className="text-overline uppercase tracking-[0.3em] text-white/50 mb-6 font-light">
                  Our Commitment
                </p>
                <h2 data-reveal className="font-display text-display-sm lg:text-display-md font-light text-white mb-8">
                  Excellence in <em className="italic">Every</em> Detail
                </h2>
                <div data-reveal className="w-16 h-px bg-white/30 mb-10" />
                <p data-reveal className="text-body-lg text-white/70 leading-relaxed mb-8">
                  From the thread count of our linens to the aroma that greets you at the door,
                  every element of The Pentouz experience is meticulously curated. Our dedicated
                  team works tirelessly to anticipate your needs before you even express them.
                </p>
                <p data-reveal className="text-body-lg text-white/70 leading-relaxed mb-12">
                  We don&apos;t just provide accommodation; we craft experiences that linger in
                  your memory long after you&apos;ve returned home.
                </p>
                <Link
                  data-reveal
                  href="/destinations"
                  className="inline-flex items-center justify-center border border-white/40 text-white py-4 px-10 text-label uppercase tracking-[0.2em] hover:bg-white hover:text-brand-ink transition-all duration-500 font-light"
                >
                  Explore Our Properties
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 lg:py-40 bg-brand-linen">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <p className="text-overline uppercase tracking-[0.3em] text-brand-accent mb-6 font-light">
              Join Our Journey
            </p>
            <h2 className="font-display text-display-sm lg:text-display-md font-light mb-8">
              Experience The <em className="italic">Pentouz</em> Difference
            </h2>
            <p className="text-body-lg text-brand-body mb-12 max-w-2xl mx-auto">
              Discover why discerning travelers choose The Pentouz for their most memorable stays.
            </p>
            <Link
              href="/#booking"
              className="inline-flex items-center justify-center bg-brand-ink text-white py-5 px-16 text-label uppercase tracking-[0.2em] hover:bg-black transition-all duration-500 font-light"
            >
              Book Your Stay
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const values = [
  {
    title: "Authenticity",
    description:
      "We honor local traditions while embracing modern comfort, creating experiences that are genuine and rooted in culture.",
  },
  {
    title: "Excellence",
    description:
      "Every detail matters. From design to service, we pursue perfection in all that we do.",
  },
  {
    title: "Warmth",
    description:
      "True hospitality comes from the heart. We treat every guest as family, creating lasting connections.",
  },
  {
    title: "Sustainability",
    description:
      "We are committed to responsible practices that preserve the beauty of our destinations for future generations.",
  },
];
