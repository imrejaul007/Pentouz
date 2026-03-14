import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Phone } from "lucide-react";
import { destinations, contactInfo } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Pentouz @ Lavelle Road | Luxury Studio Boutique Hotel Bangalore",
  description:
    "Six refined studio suites on Bangalore's prestigious Lavelle Road, close to UB City, MG Road, and the High Court of Karnataka.",
  alternates: {
    canonical: withSiteUrl("/destinations/lavelle-road"),
  },
};

const reasons = [
  "Walkable access to UB City, MG Road, and central Bengaluru's business core.",
  "A strong base for advocates, consultants, and guests with precise schedules.",
  "Fewer keys, quieter floors, and a more private boutique-hotel rhythm.",
];

const anchors = [
  "Karnataka High Court",
  "UB City",
  "MG Road Metro",
  "Cubbon Park",
];

export default function LavelleRoadPage() {
  const property = destinations.find((destination) => destination.slug === "lavelle-road");
  if (!property) notFound();

  return (
    <>
      <Header />
      <main className="bg-[#f6f1ea]">
        <section className="relative min-h-[100svh] overflow-hidden bg-[#151311] text-white">
          <div className="absolute inset-0">
            <Image
              src={property.heroImage || property.image}
              alt={property.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.25)_0%,rgba(8,8,8,0.16)_24%,rgba(8,8,8,0.68)_76%,rgba(8,8,8,0.84)_100%)]" />
          </div>

          <div className="relative max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 pt-40 sm:pt-48 lg:pt-56 pb-16 sm:pb-20 min-h-[100svh] flex flex-col justify-end">
            <p className="text-[10px] uppercase tracking-[0.42em] text-brand-gold mb-6">Lavelle Road, Bengaluru</p>
            <h1 className="max-w-5xl font-display text-[3.4rem] leading-[0.92] sm:text-[5rem] lg:text-[7.2rem] xl:text-[8.4rem] font-light">
              A calmer address in the <em className="italic text-brand-gold">center of the city</em>
            </h1>
            <p className="mt-8 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
              Six studio accommodations composed for business travel, legal schedules, and guests who want a more private stay near Bengaluru&apos;s most important central corridors.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={property.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-colors hover:bg-brand-gold hover:text-white"
              >
                <Calendar className="w-4 h-4" strokeWidth={1.4} />
                Reserve Lavelle Road
              </a>
              <Link
                href="/destinations/lavelle-road/living"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white/90 transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                View Room Types
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white border-t border-[#e5dbc9]">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-24 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.34em] text-brand-accent mb-5">Why It Works</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                Boutique scale with <em className="italic">central precision</em>
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason} className="border border-[#eee4d8] bg-[#faf6f0] p-5">
                  <p className="text-sm text-brand-body leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f1ea] py-16 sm:py-20 lg:py-24">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-end">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={property.gallery?.[1] || property.image}
                alt={`${property.title} exterior`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="bg-white border border-[#eadfce] p-6 sm:p-8 lg:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-4">Location Value</p>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-brand-ink leading-tight">
                Near the city&apos;s legal, cultural, and commercial anchors
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {anchors.map((anchor) => (
                  <span
                    key={anchor}
                    className="rounded-full border border-[#e7ddcf] px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-brand-muted"
                  >
                    {anchor}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 text-sm text-brand-body">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  {property.address}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-gold" />
                  {contactInfo.phones[0]}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] text-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.34em] text-brand-gold mb-4">Linked Guides</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                Built for high-intent central Bengaluru searches
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/destinations/lavelle-road/near/karnataka-high-court", label: "Hotel Near Karnataka High Court" },
                { href: "/destinations/lavelle-road/near/ub-city", label: "Hotel Near UB City" },
                { href: "/travel/guides/court-day-itinerary-near-karnataka-high-court", label: "Court-Day Itinerary" },
                { href: "/travel/clusters/legal-courts", label: "Legal Travel Cluster" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-white/10 bg-white/[0.03] p-5 hover:border-brand-gold/35 transition-colors"
                >
                  <p className="text-sm text-white/82 leading-relaxed">{item.label}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.34em] text-brand-accent mb-5">Book Direct</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink leading-tight">
              A refined studio stay, close to where the city matters most
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={property.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-ink px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-black"
              >
                Reserve Now
                <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
              </a>
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-brand-ink px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-colors hover:bg-brand-ink hover:text-white"
              >
                Call Concierge
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
