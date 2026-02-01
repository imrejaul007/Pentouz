"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Utensils, Leaf, Star, Users, Gift, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experienceCategories = [
  {
    icon: Utensils,
    title: "Culinary Journeys",
    subtitle: "Private Dining",
    description:
      "From intimate in-suite dinners crafted by private chefs to curated food tours through local markets, every meal becomes a discovery.",
    image: "https://pentouz.com/wp-content/uploads/elementor/thumbs/21.-Restaurant-r0jnyygf1k0ah24wt4u2efy4f5tmx0hugjfogzpfeo.jpeg",
    features: ["Private chef experiences", "Wine pairing dinners", "Local food tours", "Cooking classes"],
  },
  {
    icon: Leaf,
    title: "Wellness & Rejuvenation",
    subtitle: "Spa & Wellness",
    description:
      "Discover inner peace through personalized wellness programs, from traditional Ayurvedic treatments to contemporary spa therapies.",
    image: "https://pentouz.com/wp-content/uploads/2025/01/TPH-MB-Bath-2-1.jpg",
    features: ["Ayurvedic treatments", "Yoga sessions", "Meditation retreats", "Wellness consultations"],
  },
  {
    icon: MapPin,
    title: "Local Discoveries",
    subtitle: "Curated Tours",
    description:
      "Explore hidden gems and cultural treasures with our expertly curated tours, designed to reveal the authentic spirit of each destination.",
    image: "https://pentouz.com/wp-content/uploads/2025/01/24.-Terrace-550x367.jpg",
    features: ["Heritage walks", "Art gallery visits", "Tea garden tours", "Temple & culture tours"],
  },
  {
    icon: Star,
    title: "Bespoke Celebrations",
    subtitle: "Special Occasions",
    description:
      "Whether it's an intimate anniversary or a milestone birthday, we craft celebrations that exceed expectations and create lasting memories.",
    image: "https://pentouz.com/wp-content/uploads/2025/01/11.-The-Terrace-Haven_Terrace-1024x683.jpg",
    features: ["Anniversary packages", "Birthday celebrations", "Proposal setups", "Family gatherings"],
  },
];

const privilegeFeatures = [
  {
    icon: Gift,
    title: "Complimentary Upgrades",
    description: "Room upgrades based on availability at check-in",
  },
  {
    icon: Star,
    title: "Early Check-in & Late Check-out",
    description: "Flexible timing to suit your schedule",
  },
  {
    icon: Users,
    title: "Priority Reservations",
    description: "First access to new properties and exclusive events",
  },
  {
    icon: Utensils,
    title: "Dining Credits",
    description: "Complimentary dining experiences during your stay",
  },
];

export default function ExperiencesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const privilegeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll("[data-hero-reveal]");
      gsap.fromTo(
        elements,
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

    // Categories animation
    if (categoriesRef.current) {
      const cards = categoriesRef.current.querySelectorAll(".experience-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    // Privilege section
    if (privilegeRef.current) {
      const elements = privilegeRef.current.querySelectorAll("[data-reveal]");
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
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
              src="https://pentouz.com/wp-content/uploads/2025/01/Living-Room-10-2.jpg"
              alt="Pentouz Experiences"
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
              Signature Experiences
            </p>
            <h1 data-hero-reveal className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light max-w-5xl mb-8">
              Moments That <em className="italic">Become</em> Memories
            </h1>
            <div data-hero-reveal className="w-20 h-px bg-white/30 mb-8" />
            <p data-hero-reveal className="text-lg text-white/60 max-w-2xl font-light leading-relaxed">
              Curated experiences designed to enrich your stay and create unforgettable moments
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-32 lg:py-40 bg-white">
          <div className="max-w-container-lg mx-auto px-8 lg:px-20 text-center">
            <p className="text-overline uppercase tracking-[0.3em] text-brand-accent mb-8 font-light">
              Beyond Accommodation
            </p>
            <p className="font-display text-display-sm lg:text-display-md font-light max-w-4xl mx-auto mb-10 text-balance">
              At The Pentouz, we believe that extraordinary experiences transform a stay into a journey.
              Every detail is thoughtfully curated to create moments of wonder, connection, and joy.
            </p>
            <div className="w-16 h-px bg-brand-accent mx-auto" />
          </div>
        </section>

        {/* Experience Categories */}
        <section ref={categoriesRef} className="py-24 lg:py-40 bg-brand-cream">
          <div className="max-w-container-2xl mx-auto px-8 lg:px-24">
            <div className="space-y-32 lg:space-y-48">
              {experienceCategories.map((category, index) => (
                <ExperienceCard
                  key={category.title}
                  category={category}
                  index={index}
                  reversed={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pentouz Privé Section */}
        <section className="relative min-h-[90vh]">
          <div className="absolute inset-0">
            <Image
              src="https://pentouz.com/wp-content/uploads/elementor/thumbs/04.-The-Skyline-Suite_Bedroom-r0jo1p5gz5rec45jsthw691ismb6d8dnu3xnv1n39c.jpg"
              alt="Pentouz Privé"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          </div>

          <div ref={privilegeRef} className="relative py-32 lg:py-48">
            <div className="max-w-container-xl mx-auto px-8 lg:px-20">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Content */}
                <div>
                  <p data-reveal className="text-overline uppercase tracking-[0.4em] text-white/50 mb-6 font-light">
                    Exclusive Membership
                  </p>
                  <h2 data-reveal className="font-display text-display-sm lg:text-display-md font-light text-white mb-8">
                    Pentouz <em className="italic">Privé</em>
                  </h2>
                  <div data-reveal className="w-16 h-px bg-white/30 mb-10" />
                  <p data-reveal className="text-body-lg text-white/70 leading-relaxed mb-8">
                    Join our exclusive membership program and unlock a world of privileges.
                    Pentouz Privé members enjoy preferential rates, room upgrades, and access
                    to invitation-only experiences.
                  </p>
                  <p data-reveal className="text-body-lg text-white/70 leading-relaxed mb-12">
                    Whether you&apos;re a frequent traveler or planning a special occasion,
                    Privé membership elevates every stay into something extraordinary.
                  </p>

                  {/* Features Grid */}
                  <div data-reveal className="grid grid-cols-2 gap-8 mb-12">
                    {privilegeFeatures.map((feature) => (
                      <div key={feature.title} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-brand-accent" />
                        </div>
                        <div>
                          <p className="text-body-sm text-white font-light mb-1">
                            {feature.title}
                          </p>
                          <p className="text-caption text-white/50">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    data-reveal
                    href="/contact"
                    className="inline-flex items-center justify-center border border-white/40 text-white py-4 px-10 text-label uppercase tracking-[0.2em] hover:bg-white hover:text-brand-ink transition-all duration-500 font-light"
                  >
                    Inquire About Membership
                  </Link>
                </div>

                {/* Decorative Card */}
                <div data-reveal className="hidden lg:block">
                  <div className="glass-dark p-12 lg:p-16">
                    <p className="text-overline uppercase tracking-[0.4em] text-white/40 mb-6 font-light">
                      Member Benefits
                    </p>
                    <ul className="space-y-5">
                      <li className="flex items-center gap-4 text-body-md text-white/70">
                        <span className="w-2 h-2 bg-brand-accent rounded-full" />
                        15% savings on all bookings
                      </li>
                      <li className="flex items-center gap-4 text-body-md text-white/70">
                        <span className="w-2 h-2 bg-brand-accent rounded-full" />
                        Complimentary airport transfers
                      </li>
                      <li className="flex items-center gap-4 text-body-md text-white/70">
                        <span className="w-2 h-2 bg-brand-accent rounded-full" />
                        Priority spa reservations
                      </li>
                      <li className="flex items-center gap-4 text-body-md text-white/70">
                        <span className="w-2 h-2 bg-brand-accent rounded-full" />
                        Exclusive event invitations
                      </li>
                      <li className="flex items-center gap-4 text-body-md text-white/70">
                        <span className="w-2 h-2 bg-brand-accent rounded-full" />
                        Dedicated concierge line
                      </li>
                      <li className="flex items-center gap-4 text-body-md text-white/70">
                        <span className="w-2 h-2 bg-brand-accent rounded-full" />
                        Birthday & anniversary surprises
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 lg:py-40 bg-white">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <p className="text-overline uppercase tracking-[0.3em] text-brand-accent mb-6 font-light">
              Plan Your Experience
            </p>
            <h2 className="font-display text-display-sm lg:text-display-md font-light mb-8">
              Let Us <em className="italic">Curate</em> Your Stay
            </h2>
            <p className="text-body-lg text-brand-body mb-12 max-w-2xl mx-auto">
              Our concierge team is ready to design a bespoke experience tailored to your preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/#booking"
                className="inline-flex items-center justify-center bg-brand-ink text-white py-5 px-12 text-label uppercase tracking-[0.2em] hover:bg-black transition-all duration-500 font-light"
              >
                Check Availability
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-brand-ink text-brand-ink py-5 px-12 text-label uppercase tracking-[0.2em] hover:bg-brand-ink hover:text-white transition-all duration-500 font-light"
              >
                Contact Concierge
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

interface ExperienceCardProps {
  category: (typeof experienceCategories)[0];
  index: number;
  reversed: boolean;
}

function ExperienceCard({ category, index, reversed }: ExperienceCardProps) {
  const Icon = category.icon;

  return (
    <div
      className={`experience-card grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
        reversed ? "" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        {/* Number badge */}
        <div className="absolute -bottom-8 -right-8 lg:-bottom-12 lg:-right-12 w-24 h-24 lg:w-32 lg:h-32 bg-white flex items-center justify-center shadow-subtle">
          <span className="font-display text-4xl lg:text-5xl text-brand-border">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`${reversed ? "lg:order-1" : ""} lg:py-8`}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 border border-brand-border flex items-center justify-center">
            <Icon className="w-5 h-5 text-brand-accent" />
          </div>
          <p className="text-overline uppercase tracking-[0.2em] text-brand-accent font-light">
            {category.subtitle}
          </p>
        </div>
        <h2 className="font-display text-display-sm lg:text-display-md font-light mb-6">
          {category.title}
        </h2>
        <div className="w-16 h-px bg-brand-accent mb-8" />
        <p className="text-body-lg text-brand-body mb-10 leading-relaxed">
          {category.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {category.features.map((feature) => (
            <p
              key={feature}
              className="text-body-sm text-brand-muted flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
              {feature}
            </p>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-4 text-label uppercase tracking-[0.15em] text-brand-ink hover:text-brand-accent transition-colors duration-500 group"
        >
          <span>Inquire Now</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2 duration-500" />
        </Link>
      </div>
    </div>
  );
}
