import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { offers, destinations } from "@/data/content";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Special Offers | The Pentouz",
  description:
    "Discover exclusive seasonal offers, signature experiences, and Privé member benefits at The Pentouz collection of luxury stays in India.",
  alternates: {
    canonical: withSiteUrl("/offers"),
  },
};

const bookingUrl =
  destinations.find((d) => d.slug === "lavelle-road")?.bookingUrl ?? "/contact";

const directBenefits = [
  {
    title: "Best rate guarantee",
    description:
      "When you book direct, we match any lower rate you find elsewhere and add a welcome amenity.",
  },
  {
    title: "Flexible scheduling",
    description:
      "Speak to our team for early check-in, late check-out, and scheduling that fits your itinerary.",
  },
  {
    title: "Curated surprises",
    description:
      "Celebrations, anniversaries, and special occasions are elevated with in-suite touches arranged by our concierge.",
  },
];

const badgeStyles: Record<string, string> = {
  Seasonal: "bg-[#7c6f5a] text-white",
  Signature: "bg-[#c3a061] text-white",
  "Privé": "bg-[#1a1814] text-white",
};

export default function OffersPage() {
  return (
    <>
      <Header />
      <main className="bg-[#faf7f2] text-[#1a1814]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0f0e0c] text-white">
          <div className="absolute inset-0">
            <Image
              src="/indiranagar/all/tpi_pictures_low_res_terrace_7.jpg"
              alt="The Pentouz exclusive offers"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/90" />
          </div>

          <div className="relative mx-auto flex min-h-[76vh] items-end px-5 sm:px-8 lg:px-16 pb-20 lg:pb-28 pt-32">
            <div className="max-w-3xl">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] animate-fade-in-up">Exclusive offers</p>
              <h1 className="font-['Cormorant_Garamond',serif] font-light leading-[1.1] text-white mt-4 animate-fade-in-up [animation-delay:100ms]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
                Special Offers
              </h1>
              <p className="mt-6 sm:mt-8 font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/70 max-w-xl animate-fade-in-up [animation-delay:200ms]">
                Seasonal promotions, signature experiences, and Privé member benefits — curated to make every Pentouz stay exceptional.
              </p>
            </div>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {offers.map((offer, index) => (
                <div
                  key={offer.title}
                  className="group flex flex-col overflow-hidden border border-[#e5dfd6] bg-white animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Offer header bar with badge */}
                  <div className={`px-5 sm:px-7 py-3 sm:py-4 flex items-center justify-between ${
                    badgeStyles[offer.badge] ?? "bg-[#1a1814] text-white"
                  }`}>
                    <span className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-medium">
                      {offer.badge}
                    </span>
                    <div className="w-6 sm:w-8 h-px bg-white/30" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 sm:p-8">
                    <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-light leading-tight text-[#1a1814] group-hover:text-[#c3a061] transition-colors duration-500">
                      {offer.title}
                    </h2>
                    <div className="mt-3 sm:mt-4 mb-5 sm:mb-6 w-10 sm:w-12 h-px bg-[#c3a061]" />
                    <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.7] text-[#4a4a44] flex-1">
                      {offer.copy}
                    </p>

                    <div className="mt-6 sm:mt-8 flex flex-col gap-3">
                      <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-[#0f0e0c] text-white px-6 sm:px-7 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-medium transition-all duration-500 hover:bg-[#c3a061]"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                      </a>
                      <Link
                        href="/contact"
                        className="w-full flex items-center justify-center gap-2 border border-[#e5dfd6] text-[#1a1814] px-6 sm:px-7 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-medium transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Direct Benefits */}
        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-16 lg:items-start">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">Book direct</p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  A more personal way to arrange your stay.
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {directBenefits.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className="border border-[#e5dfd6] bg-white p-5 sm:p-6 animate-fade-in-up"
                    style={{ animationDelay: `${100 + index * 100}ms` }}
                  >
                    <h3 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl lg:text-2xl font-light text-[#1a1814]">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 sm:mt-4 font-['Lora',serif] text-xs sm:text-sm leading-[1.7] text-[#4a4a44]">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Privé CTA Banner */}
        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 lg:items-center">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#c3a061] font-medium mb-3 sm:mb-4">
                  Privé membership
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-white mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  Unlock exclusive access and 15% savings.
                </h2>
                <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-white/65 max-w-xl">
                  Join the Privé circle for priority reservations, complimentary upgrades, and invitation-only events across all Pentouz properties.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 lg:justify-end">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#0f0e0c] px-8 sm:px-10 py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-medium transition-all duration-500 hover:bg-[#c3a061] hover:text-white"
                >
                  Book Your Stay
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/20 text-white px-8 sm:px-10 py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-medium transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]"
                >
                  Contact Concierge
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
