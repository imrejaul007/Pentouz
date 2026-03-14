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
  title: "The Pentouz @ Indiranagar | Three Bedroom Penthouse Bangalore",
  description:
    "A private three-bedroom penthouse on 100 Feet Road, Indiranagar, designed for families, groups, and longer city stays.",
  alternates: {
    canonical: withSiteUrl("/destinations/indiranagar"),
  },
};

const livingReasons = [
  "A rare full-floor penthouse feel in one of Bengaluru's most social neighborhoods.",
  "Three bedrooms with private balconies, ideal for families and longer stays.",
  "A strong fit for guests who want residential scale instead of hotel-style compression.",
];

const lifestyleMoments = [
  "Private Balconies",
  "Open Terrace",
  "Ultra-modern Kitchen",
  "100 Feet Road Access",
];

export default function IndiranagarPage() {
  const property = destinations.find((destination) => destination.slug === "indiranagar");
  if (!property) notFound();

  return (
    <>
      <Header />
      <main className="bg-[#f7f2ea]">
        <section className="relative min-h-[100svh] overflow-hidden bg-[#191613] text-white">
          <div className="absolute inset-0">
            <Image
              src={property.heroImage || property.image}
              alt={property.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,12,10,0.22)_0%,rgba(14,12,10,0.16)_22%,rgba(14,12,10,0.64)_74%,rgba(14,12,10,0.84)_100%)]" />
          </div>

          <div className="relative max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 pt-40 sm:pt-48 lg:pt-56 pb-16 sm:pb-20 min-h-[100svh] flex flex-col justify-end">
            <p className="text-[10px] uppercase tracking-[0.42em] text-brand-gold mb-6">100 Feet Road, Indiranagar</p>
            <h1 className="max-w-5xl font-display text-[3.4rem] leading-[0.92] sm:text-[5rem] lg:text-[7rem] xl:text-[8.2rem] font-light">
              Penthouse living with a more <em className="italic text-brand-gold">private urban scale</em>
            </h1>
            <p className="mt-8 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
              Designed for guests who want room to gather, cook, work, and stay longer, The Pentouz Indiranagar feels more like a refined residence than a conventional city stay.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={property.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-colors hover:bg-brand-gold hover:text-white"
              >
                <Calendar className="w-4 h-4" strokeWidth={1.4} />
                Reserve Indiranagar
              </a>
              <Link
                href="/destinations/indiranagar/living"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white/90 transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                Explore Living
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white border-t border-[#e6dccf]">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-24 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.34em] text-brand-accent mb-5">Residence Character</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                More home than hotel, <em className="italic">without losing polish</em>
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {livingReasons.map((reason) => (
                <div key={reason} className="border border-[#eee4d8] bg-[#fbf7f1] p-5">
                  <p className="text-sm text-brand-body leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f2ea] py-16 sm:py-20 lg:py-24">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] items-center">
            <div className="bg-white border border-[#eadfce] p-6 sm:p-8 lg:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-4">How It Lives</p>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-brand-ink leading-tight">
                Built around group comfort and longer city stays
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {lifestyleMoments.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e7ddcf] px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-brand-muted"
                  >
                    {item}
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

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={property.gallery?.[0] || property.image}
                alt={`${property.title} interior`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                property.gallery?.[2] || property.image,
                property.gallery?.[8] || property.image,
                property.gallery?.[15] || property.image,
              ].map((image, index) => (
                <div key={`${image}-${index}`} className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={image}
                    alt={`${property.title} view ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] text-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.34em] text-brand-gold mb-5">Reserve</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              For families, groups, and guests who want a fuller city stay
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={property.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-colors hover:bg-brand-gold hover:text-white"
              >
                Book Direct
                <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
              </a>
              <Link
                href="/destinations/indiranagar/living"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white/90 transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                View Penthouse Layout
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
