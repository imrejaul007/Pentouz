import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { destinations, contactInfo } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Pentouz @ Ooty | Windsor Heights Nilgiri Hills",
  description:
    "A quieter hillside stay in Ooty with views of the Nilgiris, tea gardens, and a slower retreat atmosphere.",
  alternates: {
    canonical: withSiteUrl("/destinations/ooty"),
  },
};

const retreatMoments = [
  "Tea-garden atmosphere",
  "Elk Hill setting",
  "Cool-weather comfort",
  "Views across the Nilgiris",
];

const nearbyExperiences = [
  "Doddabetta Peak",
  "Government Botanical Garden",
  "Tea estates and viewpoints",
  "Ooty town center",
];

export default function OotyPage() {
  const property = destinations.find((destination) => destination.slug === "ooty");
  if (!property) notFound();

  return (
    <>
      <Header />
      <main className="bg-[#f2efe7]">
        <section className="relative min-h-[100svh] overflow-hidden bg-[#141613] text-white">
          <div className="absolute inset-0">
            <Image
              src={property.heroImage || property.image}
              alt={property.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,9,0.16)_0%,rgba(8,12,9,0.14)_22%,rgba(8,12,9,0.54)_72%,rgba(8,12,9,0.82)_100%)]" />
          </div>

          <div className="relative max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 pt-40 sm:pt-48 lg:pt-56 pb-16 sm:pb-20 min-h-[100svh] flex flex-col justify-end">
            <p className="text-[10px] uppercase tracking-[0.42em] text-brand-gold mb-6">Elk Hill, Ooty</p>
            <h1 className="max-w-5xl font-display text-[3.4rem] leading-[0.94] sm:text-[5rem] lg:text-[7rem] xl:text-[8.2rem] font-light">
              A hillside stay shaped by <em className="italic text-brand-gold">mist, light, and quiet</em>
            </h1>
            <p className="mt-8 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
              Windsor Heights brings a softer rhythm to the Pentouz collection, with Nilgiri views, cooler air, and a setting designed more for retreat than rush.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-colors hover:bg-brand-gold hover:text-white"
              >
                Inquire About Ooty
                <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
              </Link>
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white/90 transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                Call Concierge
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white border-t border-[#e1ddd2]">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-24 grid gap-10 lg:grid-cols-[0.78fr_1.22fr] items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.34em] text-brand-accent mb-5">Atmosphere</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                Less city energy, <em className="italic">more horizon and air</em>
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-4">
              {retreatMoments.map((moment) => (
                <div key={moment} className="border border-[#e8e3d8] bg-[#f8f5ef] p-5">
                  <p className="text-sm text-brand-body leading-relaxed">{moment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eef1eb] py-16 sm:py-20 lg:py-24">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={property.gallery?.[1] || property.image}
                alt={`${property.title} landscape`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            <div className="bg-white border border-[#dde2d8] p-6 sm:p-8 lg:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-4">Nearby</p>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-brand-ink leading-tight">
                Close to Ooty&apos;s classic hillside experiences
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {nearbyExperiences.map((experience) => (
                  <div key={experience} className="border border-[#e6e3db] px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-brand-muted">
                    {experience}
                  </div>
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

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.34em] text-brand-accent mb-4">Retreat Notes</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink leading-tight">
                  A Pentouz stay for slower mornings and longer views
                </h2>
                <p className="mt-6 text-base text-brand-body leading-relaxed">
                  Ooty should feel different from the Bengaluru properties, and this page now leans into that difference: more landscape, softer pacing, and less emphasis on city urgency.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  property.gallery?.[2] || property.image,
                  property.gallery?.[5] || property.image,
                ].map((image, index) => (
                  <div key={`${image}-${index}`} className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={image}
                      alt={`${property.title} frame ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#111512] text-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.34em] text-brand-gold mb-5">Plan the Stay</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              The Pentouz in a more reflective mood
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-colors hover:bg-brand-gold hover:text-white"
              >
                Contact Reservations
                <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
              </Link>
              <Link
                href="/destinations/ooty/living"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white/90 transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                Explore Ooty Living
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
