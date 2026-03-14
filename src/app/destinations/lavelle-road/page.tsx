import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations, contactInfo } from "@/data/content";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Pentouz @ Lavelle Road | Luxury Studio Boutique Hotel Bangalore",
  description:
    "Six refined studio suites on Bangalore's prestigious Lavelle Road, close to UB City, MG Road, and the High Court of Karnataka.",
  alternates: {
    canonical: withSiteUrl("/destinations/lavelle-road"),
  },
};

const travelStats = [
  { title: "Kempegowda International Airport", distance: "35 kms", time: "55 min" },
  { title: "KSR Bengaluru City Junction", distance: "5 kms", time: "15 min" },
  { title: "MG Road Metro Station", distance: "1 km", time: "5 min" },
];

const amenities = [
  "High-Speed WiFi",
  "Smart TV",
  "Air Conditioning",
  "Kitchenette",
  "Refrigerator",
  "Microwave Oven",
  "Work Desk",
  "Daily Housekeeping",
  "Open Terrace",
  "Covered Car Parking",
  "Lift Access",
  "24-Hour Front Desk",
];

export default function LavelleRoadPage() {
  const property = destinations.find((destination) => destination.slug === "lavelle-road");
  if (!property) notFound();

  return (
    <>
      <Header />
      <main className="bg-[#f7f0e5] text-brand-ink overflow-hidden">
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#15120f] text-white">
          <div className="absolute inset-0">
            <Image
              src="/lavelle-road/all/facade_2.jpg"
              alt={property.title}
              fill
              priority
              sizes="100vw"
              className="object-cover scale-[1.03] animate-[fade-in-up_1.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.92)_0%,rgba(10,8,6,0.62)_42%,rgba(10,8,6,0.22)_76%,rgba(10,8,6,0.82)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,0.16)_0%,rgba(10,8,6,0)_30%,rgba(10,8,6,0.78)_100%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24 lg:pt-48">
            <div className="max-w-5xl">
              <p className="luxury-kicker text-white/72 animate-fade-in-up">Lavelle Road, Bangalore</p>
              <h1 className="luxury-hero-title mt-6 max-w-5xl text-white animate-fade-in-up [animation-delay:120ms]">
                Boutique luxury in one of Bengaluru&apos;s most <em className="italic text-brand-gold">prestigious</em> neighborhoods.
              </h1>
              <p className="luxury-copy mt-8 max-w-3xl text-white/78 animate-fade-in-up [animation-delay:220ms]">
                Perched in the heart of Bangalore&apos;s prestigious Lavelle Road, The Pentouz offers an unparalleled blend of tranquility and sophistication. Nestled amidst one of the city&apos;s most coveted neighborhoods, it provides an oasis of peace while keeping you connected to the vibrancy of urban life.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up [animation-delay:320ms]">
                <a href={property.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-white">
                  <Calendar className="h-4 w-4" strokeWidth={1.4} />
                  Book Now
                </a>
                <Link href="/destinations/lavelle-road/living" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold">
                  Explore Living
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-t border-[#e5d9c9]">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-28 lg:items-center">
            <div className="animate-fade-in-up">
              <div className="relative aspect-[4/5] overflow-hidden shadow-[0_24px_80px_rgba(18,15,12,0.08)]">
                <Image src="/lavelle-road/all/9042_king_suite_4.jpg" alt="Lavelle Road living" fill className="object-cover transition-transform duration-[1400ms] hover:scale-105" sizes="(max-width: 1024px) 100vw, 44vw" />
              </div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <p className="luxury-kicker text-brand-accent">Living</p>
              <h2 className="luxury-section-title mt-5">Six beautifully designed studio rooms with panoramic city views.</h2>
              <p className="mt-6 text-base leading-8 text-brand-body sm:text-lg">
                The Pentouz Lavelle Road boasts six exquisitely designed, spacious studio rooms located on the top floor, each offering stunning panoramic views of the cityscape. These well-appointed studios are thoughtfully curated to cater to the discerning traveler, combining elegance with modern comforts.
              </p>
              <p className="mt-5 text-base leading-8 text-brand-body sm:text-lg">
                Whether you&apos;re in Bangalore for business or leisure, you&apos;ll find every detail tailored to enhance your stay.
              </p>
              <div className="mt-8">
                <Link href="/destinations/lavelle-road/living" className="inline-flex items-center gap-2 rounded-full border border-brand-ink px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-all duration-500 hover:bg-brand-ink hover:text-white">
                  Explore Living
                  <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f0e5]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="animate-fade-in-up">
                <p className="luxury-kicker text-brand-accent">The Neighborhood</p>
                <h2 className="luxury-section-title mt-5">An address surrounded by culture, commerce, and quiet prestige.</h2>
              </div>
              <div className="space-y-6 text-base leading-8 text-brand-body sm:text-lg animate-fade-in-up animate-delay-200">
                <p>
                  The Pentouz Lavelle Road is nestled in one of Bangalore&apos;s most coveted and sophisticated neighborhoods, offering the perfect blend of urban vibrancy and serene green spaces. Located in the heart of the city, Lavelle Road is a hub for the elite, known for its upscale lifestyle, vibrant culture, and proximity to some of Bangalore&apos;s most iconic landmarks.
                </p>
                <p>
                  Just a short stroll away lies the luxurious UB City, a destination for high-end shopping, gourmet dining, and exclusive experiences.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {travelStats.map((item, index) => (
                <article key={item.title} className="luxury-panel bg-white animate-fade-in-up transition-transform duration-700 hover:-translate-y-1" style={{ transitionDelay: `${index * 100}ms` }}>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Approximate Travel Time</p>
                  <h3 className="mt-4 font-display text-3xl font-light leading-tight text-brand-ink">{item.title}</h3>
                  <p className="mt-5 text-sm uppercase tracking-[0.2em] text-brand-muted">Distance {item.distance}</p>
                  <p className="mt-4 text-3xl font-display font-light text-brand-ink">{item.time}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#15120f] text-white">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="max-w-3xl animate-fade-in-up">
              <p className="luxury-kicker text-brand-gold">The Essential In-Room Amenities</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                Everything you need for a polished city stay.
              </h2>
            </div>
            <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {amenities.map((item, index) => (
                <div key={item} className="border border-white/10 bg-white/[0.03] px-4 py-4 text-[11px] uppercase tracking-[0.18em] text-white/76 animate-fade-in-up" style={{ transitionDelay: `${index * 45}ms` }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                "/lavelle-road/all/reception_2.jpg",
                "/lavelle-road/all/restaurant_2.jpg",
                "/lavelle-road/all/terrace_2.jpg",
              ].map((image, index) => (
                <div key={image} className="relative aspect-[4/5] overflow-hidden shadow-[0_24px_80px_rgba(18,15,12,0.06)]">
                  <Image src={image} alt={`Lavelle Road view ${index + 1}`} fill className="object-cover transition-transform duration-[1400ms] hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#161310] text-white">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-14 lg:py-28">
            <div>
              <p className="luxury-kicker text-brand-gold">Book A Room</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                Everything at Pentouz is designed to make your stay unforgettable.
              </h2>
            </div>
            <div className="luxury-panel border-white/12 bg-white/[0.05] text-white">
              <p className="text-sm leading-7 text-white/72">THE PENTOUZ LAVELLE ROAD<br />46, 6th Cross, Lavelle Road, Bangalore – 560001. India.</p>
              <p className="mt-6 text-sm leading-7 text-white/82">Email: {contactInfo.email}</p>
              <div className="mt-6 space-y-2 text-sm text-white/82">
                <a href={`tel:${contactInfo.phones[1].replace(/\s/g, "")}`} className="block transition-colors hover:text-brand-gold">{contactInfo.phones[1]}</a>
                <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`} className="block transition-colors hover:text-brand-gold">{contactInfo.phones[0]}</a>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href={property.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:bg-brand-gold hover:text-white">
                  Reserve Your Stay
                </a>
                <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:border-brand-gold hover:text-brand-gold">
                  Call Concierge
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
