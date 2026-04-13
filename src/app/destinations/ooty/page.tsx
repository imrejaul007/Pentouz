import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations, contactInfo } from "@/data/content";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Pentouz @ Ooty | Windsor Heights Nilgiri Hills",
  description:
    "A quieter hillside stay in Ooty with views of the Nilgiris, tea gardens, and a slower retreat atmosphere.",
  alternates: {
    canonical: withSiteUrl("/destinations/ooty"),
  },
};

const travelStats = [
  { title: "Coimbatore International Airport", distance: "84 kms", time: "3 hrs" },
  { title: "Udhagamandalam Railway Junction", distance: "10 kms", time: "25 min" },
  { title: "Ooty Lake", distance: "3 kms", time: "15 min" },
];

const amenities = [
  "Free WiFi",
  "Restaurant",
  "Room Service",
  "Fireplace",
  "Garden Views",
  "Heating",
  "Tea-Garden Atmosphere",
  "Scenic Outlooks",
];

export default function OotyPage() {
  const property = destinations.find((destination) => destination.slug === "ooty");
  if (!property) notFound();

  return (
    <>
      <Header />
      <main className="bg-[#eff1ea] text-brand-ink overflow-hidden">
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#121612] text-white">
          <div className="absolute inset-0">
            <Image
              src="/ooty/all/24._view.jpeg"
              alt={property.title}
              fill
              priority
              sizes="100vw"
              className="object-cover scale-[1.03] animate-[fade-in-up_1.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,14,10,0.9)_0%,rgba(9,14,10,0.56)_40%,rgba(9,14,10,0.18)_74%,rgba(9,14,10,0.76)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,14,10,0.14)_0%,rgba(9,14,10,0)_30%,rgba(9,14,10,0.78)_100%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24 lg:pt-48">
            <div className="max-w-5xl">
              <p className="luxury-kicker text-white/72 animate-fade-in-up">Elk Hill, Ooty</p>
              <h1 className="luxury-hero-title mt-6 max-w-5xl text-white animate-fade-in-up [animation-delay:120ms]">
                A quieter Pentouz stay, shaped by <em className="italic text-brand-gold">mist, hills, and stillness</em>.
              </h1>
              <p className="luxury-copy mt-8 max-w-3xl text-white/78 animate-fade-in-up [animation-delay:220ms]">
                Escape to the misty hills of the Nilgiris at The Pentouz Windsor Heights, Ooty. Surrounded by lush tea gardens and steeped in colonial charm, this property offers a tranquil retreat from the ordinary and a softer, more scenic expression of the Pentouz experience.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up [animation-delay:320ms]">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-white">
                  Contact Reservations
                  <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                </Link>
                <Link href="/destinations/ooty/living" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold">
                  Explore Living
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-t border-[#dbe1d7]">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-28 lg:items-center">
            <div className="animate-fade-in-up">
              <div className="relative aspect-[4/5] overflow-hidden shadow-[0_24px_80px_rgba(18,15,12,0.08)]">
                <Image src="/ooty/all/16._bedroom.jpeg" alt="Ooty living" fill className="object-cover transition-transform duration-[1400ms] hover:scale-105" sizes="(max-width: 1024px) 100vw, 44vw" />
              </div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <p className="luxury-kicker text-brand-accent">Living</p>
              <h2 className="luxury-section-title mt-5">A retreat atmosphere carried through every room and shared space.</h2>
              <p className="mt-6 text-base leading-8 text-brand-body sm:text-lg">
                The Pentouz Windsor Heights offers a warm and inviting stay in the hills, where rooms feel grounded in comfort, views, and a slower pace of travel. Whether you arrive for a quiet getaway, a family break, or a scenic reset, the stay is designed to feel restorative from the first morning.
              </p>
              <p className="mt-5 text-base leading-8 text-brand-body sm:text-lg">
                Each room and shared area is meant to complement the landscape outside, giving the property a calmer, more reflective rhythm than the city addresses in the Pentouz collection.
              </p>
              <div className="mt-8">
                <Link href="/destinations/ooty/living" className="inline-flex items-center gap-2 rounded-full border border-brand-ink px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-all duration-500 hover:bg-brand-ink hover:text-white">
                  Explore Living
                  <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#eff1ea]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="animate-fade-in-up">
                <p className="luxury-kicker text-brand-accent">The Surroundings</p>
                <h2 className="luxury-section-title mt-5">Tea gardens, viewpoints, and the softer mood of the hills.</h2>
              </div>
              <div className="space-y-6 text-base leading-8 text-brand-body sm:text-lg animate-fade-in-up animate-delay-200">
                <p>
                  The Pentouz Windsor Heights is set on Elk Hill in Ooty, where the atmosphere is defined by mist-covered mornings, tea gardens, cooler weather, and a slower pace of travel. The location balances quiet retreat value with easy access to Ooty&apos;s most loved attractions.
                </p>
                <p>
                  From viewpoints and botanical gardens to Ooty Lake and the town center, the property gives guests the freedom to explore without giving up the calm that makes a hill stay worthwhile.
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

        <section className="bg-[#111512] text-white">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="max-w-3xl animate-fade-in-up">
              <p className="luxury-kicker text-brand-gold">In-Room & Property Amenities</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                Warm comforts for a slower, scenic stay.
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
                "/ooty/all/3._facade.jpeg",
                "/ooty/all/21._restaurant.jpeg",
                "/ooty/all/22._lawn.jpeg",
              ].map((image, index) => (
                <div key={image} className="relative aspect-[4/5] overflow-hidden shadow-[0_24px_80px_rgba(18,15,12,0.06)]">
                  <Image src={image} alt={`Ooty view ${index + 1}`} fill className="object-cover transition-transform duration-[1400ms] hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#111512] text-white">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-14 lg:py-28">
            <div>
              <p className="luxury-kicker text-brand-gold">Plan the Stay</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                A Pentouz stay in a more reflective, scenic mood.
              </h2>
            </div>
            <div className="luxury-panel border-white/12 bg-white/[0.05] text-white">
              <p className="text-sm leading-7 text-white/72">The Pentouz Windsor Heights<br />Elk Hill, Ooty, Tamil Nadu, India.</p>
              <p className="mt-6 text-sm leading-7 text-white/82">Email: {contactInfo.email}</p>
              <div className="mt-6 flex items-center gap-3 text-sm text-white/82">
                <Phone className="h-4 w-4 text-brand-gold" />
                {contactInfo.phones[0]}
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:bg-brand-gold hover:text-white">
                  Contact Reservations
                </Link>
                <Link href="/destinations/ooty/living" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:border-brand-gold hover:text-brand-gold">
                  Explore Living
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
