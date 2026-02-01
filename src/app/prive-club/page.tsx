"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Crown, Star, Gift, Clock, Shield, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tiers = [
  {
    name: "Silver",
    description: "Begin your journey",
    benefits: [
      "10% off Best Available Rate",
      "Early check-in (subject to availability)",
      "Late checkout until 2pm",
      "Welcome amenity on arrival",
      "Complimentary WiFi upgrade",
    ],
    requirement: "Join for free",
  },
  {
    name: "Gold",
    featured: true,
    description: "Elevated experiences",
    benefits: [
      "15% off Best Available Rate",
      "Guaranteed early check-in at 12pm",
      "Late checkout until 4pm",
      "Room upgrade (subject to availability)",
      "Complimentary breakfast for two",
      "Priority reservation access",
      "Birthday celebration amenity",
    ],
    requirement: "After 10 nights",
  },
  {
    name: "Platinum",
    description: "Ultimate recognition",
    benefits: [
      "20% off Best Available Rate",
      "Guaranteed room upgrade",
      "Flexible check-in/checkout",
      "Suite upgrade (subject to availability)",
      "Complimentary airport transfers",
      "Personal concierge service",
      "Exclusive event invitations",
      "Annual wellness credit",
    ],
    requirement: "After 25 nights",
  },
];

const benefits = [
  {
    icon: Crown,
    title: "Exclusive Rates",
    description: "Members enjoy preferential pricing across all properties, with additional savings as you progress through tiers.",
  },
  {
    icon: Clock,
    title: "Flexible Stays",
    description: "Early check-in and late checkout privileges let you make the most of every moment at The Pentouz.",
  },
  {
    icon: Gift,
    title: "Special Amenities",
    description: "From welcome gifts to birthday celebrations, enjoy thoughtful touches that make your stay memorable.",
  },
  {
    icon: Shield,
    title: "Priority Access",
    description: "Be first to know about new properties, special offers, and exclusive experiences available only to members.",
  },
];

export default function PriveClubPage() {
  const heroRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const tiersRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");

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
    if (benefitsRef.current) {
      gsap.fromTo(
        benefitsRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: benefitsRef.current, start: "top 80%" },
        }
      );
    }

    if (tiersRef.current) {
      gsap.fromTo(
        tiersRef.current.children,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: tiersRef.current, start: "top 80%" },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for joining! We'll send confirmation to: ${email}`);
    setEmail("");
  };

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
          alt="Privé Club"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-black/40" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div data-reveal className="flex items-center justify-center gap-2 mb-6">
            <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent" strokeWidth={1} />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/50">
              Membership Program
            </span>
          </div>
          <h1 data-reveal className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
            The Pentouz <em className="italic">Privé</em> Club
          </h1>
          <p data-reveal className="text-sm sm:text-base lg:text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Join our exclusive membership program and unlock a world of privileges, personalized experiences, and extraordinary benefits at every stay.
          </p>
          <Link
            data-reveal
            href="#join"
            className="inline-flex items-center gap-3 bg-white text-brand-ink px-8 py-4 text-[11px] sm:text-[12px] uppercase tracking-[0.15em] font-medium hover:bg-white/90 transition-colors active:scale-95"
          >
            Become a Member
          </Link>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
              Member Benefits
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light">
              Why Join <em className="italic">Privé</em>
            </h2>
          </div>

          <div ref={benefitsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 border border-brand-border flex items-center justify-center">
                  <benefit.icon className="w-6 sm:w-8 h-6 sm:h-8 text-brand-accent" strokeWidth={1} />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-light mb-3">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-brand-body leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
              Membership Tiers
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light">
              Choose Your <em className="italic">Journey</em>
            </h2>
          </div>

          <div ref={tiersRef} className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white p-6 sm:p-8 lg:p-10 ${
                  tier.featured ? "ring-2 ring-brand-accent" : ""
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent px-4 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-white">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(tier.name === "Silver" ? 1 : tier.name === "Gold" ? 2 : 3)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-brand-accent"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-light mb-2">{tier.name}</h3>
                  <p className="text-xs sm:text-sm text-brand-muted">{tier.description}</p>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-8">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-xs sm:text-sm text-brand-body">
                      <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-brand-border">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-brand-muted text-center">
                    {tier.requirement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section id="join" className="py-16 sm:py-24 lg:py-32 bg-[#1a1a1a]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <Crown className="w-10 h-10 sm:w-12 sm:h-12 text-brand-accent mx-auto mb-6" strokeWidth={1} />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            Join Privé <em className="italic">Today</em>
          </h2>
          <p className="text-sm sm:text-base text-white/60 mb-10">
            Membership is complimentary. Simply enter your email to get started and unlock exclusive benefits on your very first stay.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-white/10 border border-white/20 px-4 sm:px-6 py-3 sm:py-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-brand-ink px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-white/90 transition-colors active:scale-95 whitespace-nowrap"
              >
                Join Now
              </button>
            </div>
            <p className="text-[10px] sm:text-xs text-white/40 mt-4">
              By joining, you agree to our Terms & Conditions and Privacy Policy.
            </p>
          </form>
        </div>
      </section>

      {/* Questions */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-light mb-4">
            Have Questions?
          </h2>
          <p className="text-sm sm:text-base text-brand-body mb-8">
            Our membership team is here to help you make the most of your Privé benefits.
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
