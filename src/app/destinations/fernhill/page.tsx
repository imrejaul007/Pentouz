import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations, contactInfo } from "@/data/content";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Fernhill Luxury Homestay | Chikmagalur Coffee Country Retreat",
  description:
    "An intimate luxury homestay in Chikmagalur's coffee country. Surrounded by misty hills, lush plantations, swimming pool, bonfire, and warm hospitality.",
  alternates: {
    canonical: withSiteUrl("/destinations/fernhill"),
  },
};

const travelStats = [
  { title: "Mangalore International Airport", distance: "130 kms", time: "3 hrs" },
  { title: "Chikmagalur Railway Station", distance: "12 kms", time: "30 min" },
  { title: "Coffee Plantation Trails", distance: "Walk from property", time: "On-site" },
];

const amenities = [
  "Swimming Pool",
  "Free WiFi",
  "Free Parking",
  "Air Conditioning",
  "Smart Android TV",
  "Coffee & Tea Facilities",
  "In-room Dining",
  "Daily Housekeeping",
  "Bonfire Area",
  "Private Gardens",
  "Indoor Games",
  "Kids Play Area",
];

const roomPrices: Record<string, string> = {
  "The Fernhill Villa": "₹15,000",
  "The Fernhill Luxury Cottage": "₹12,000",
  "The Fernhill Elegance Cottage": "₹8,000",
  "Fernhill Hill Squad Cottage": "₹5,500",
};

export default function FernhillPage() {
  const property = destinations.find((destination) => destination.slug === "fernhill");
  if (!property) notFound();

  return (
    <>
      <Header />
      <main className="bg-[#f5f0e8] text-brand-ink overflow-hidden">
        {/* Hero */}
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#1a1410] text-white">
          <div className="absolute inset-0">
            <Image
              src="/fernhill/facade-1.jpg"
              alt={property.title}
              fill
              priority
              sizes="100vw"
              className="object-cover scale-[1.03] animate-[fade-in-up_1.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.92)_0%,rgba(18,14,10,0.58)_42%,rgba(18,14,10,0.2)_76%,rgba(18,14,10,0.84)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,14,10,0.12)_0%,rgba(18,14,10,0)_30%,rgba(18,14,10,0.78)_100%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24 lg:pt-48">
            <div className="max-w-5xl">
              <p className="luxury-kicker text-white/72 animate-fade-in-up">Chikmagalur, Karnataka</p>
              <h1 className="luxury-hero-title mt-6 max-w-5xl text-white animate-fade-in-up [animation-delay:120ms]">
                Wake up in Karnataka&apos;s <em className="italic text-brand-gold">coffee country</em>, wrapped in mist and green.
              </h1>
              <p className="luxury-copy mt-8 max-w-3xl text-white/78 animate-fade-in-up [animation-delay:220ms]">
                The Fernhill Luxury Homestay is an intimate retreat in the Western Ghats of Chikmagalur, surrounded by sprawling coffee plantations and misty hills. Whether you seek contemplative solitude, a romantic escape, or quality time with loved ones, Fernhill delivers with charm, comfort, and a genuine sense of place.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up [animation-delay:320ms]">
                <a href={property.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" strokeWidth={0}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V24h3.75v-1.146C18.612 22.954 24 18 24 12c0-6.627-5.373-12-12-12zm0 19.25c-4.347 0-8-2.953-8-7.25 0-2.015.776-3.87 2.106-5.303L12 1.875l5.894 4.822A8.255 8.255 0 0 1 20 12.25c0 4.297-3.653 7.25-8 7.25z"/></svg>
                  Enquire on WhatsApp
                </a>
                <Link href="/destinations/fernhill/living" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold">
                  Explore Living
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Living */}
        <section className="bg-white border-t border-[#e0d6c8]">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-28 lg:items-center">
            <div className="animate-fade-in-up">
              <div className="relative aspect-[4/5] overflow-hidden shadow-[0_24px_80px_rgba(18,15,12,0.08)]">
                <Image src="/fernhill/overview-1.jpg" alt="Fernhill living" fill className="object-cover transition-transform duration-[1400ms] hover:scale-105" sizes="(max-width: 1024px) 100vw, 44vw" />
              </div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <p className="luxury-kicker text-brand-accent">Living</p>
              <h2 className="luxury-section-title mt-5">Four distinct accommodations, each designed for comfort in the hills.</h2>
              <p className="mt-6 text-base leading-8 text-brand-body sm:text-lg">
                The Fernhill Luxury Homestay offers four thoughtfully designed accommodations, from an expansive four-bedroom villa to a cozy dorm-style cottage. Every unit balances rustic charm with modern comfort, featuring private sit-out areas, garden or hill views, and the unhurried rhythm of coffee country.
              </p>
              <p className="mt-5 text-base leading-8 text-brand-body sm:text-lg">
                Spend mornings on your private balcony with freshly brewed coffee, afternoons by the swimming pool, and evenings around a bonfire under the stars. Fernhill is made for lingering.
              </p>
              <div className="mt-8">
                <Link href="/destinations/fernhill/living" className="inline-flex items-center gap-2 rounded-full border border-brand-ink px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-all duration-500 hover:bg-brand-ink hover:text-white">
                  Explore Living
                  <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms */}
        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="mb-14 animate-fade-in-up">
              <p className="luxury-kicker text-brand-accent">Rooms & Rates</p>
              <h2 className="luxury-section-title mt-5">Find your perfect space in the hills.</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {property.rooms.map((room, index) => (
                <article
                  key={room.name}
                  className="luxury-panel bg-white animate-fade-in-up overflow-hidden transition-transform duration-700 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-[1400ms] hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-light leading-tight text-brand-ink">{room.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-body">{room.description}</p>
                    <div className="mt-5 flex items-baseline justify-between">
                      <p className="text-sm uppercase tracking-[0.18em] text-brand-muted">Starting from</p>
                      <p className="font-display text-xl font-light text-brand-ink">
                        {roomPrices[room.name] ?? room.price}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Here */}
        <section className="bg-[#eff1ea]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="animate-fade-in-up">
                <p className="luxury-kicker text-brand-accent">Getting Here</p>
                <h2 className="luxury-section-title mt-5">The journey to Fernhill is part of the experience.</h2>
              </div>
              <div className="space-y-6 text-base leading-8 text-brand-body sm:text-lg animate-fade-in-up animate-delay-200">
                <p>
                  Fernhill is nestled in the heart of Chikmagalur, Karnataka&apos;s beloved hill station and coffee capital. The drive up through the Western Ghats is a treat in itself — winding roads flanked by coffee plantations, spice estates, and misty valleys.
                </p>
                <p>
                  The nearest railway station is Chikmagalur Railway Station, just 30 minutes from the property. Mangalore International Airport is approximately 3 hours away by road. Private car transfers can be arranged in advance.
                </p>
                <p>
                  Once you arrive, the estate&apos;s private gardens, swimming pool, and walking trails invite you to slow down immediately.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {travelStats.map((item, index) => (
                <article
                  key={item.title}
                  className="luxury-panel bg-white animate-fade-in-up transition-transform duration-700 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Approximate Travel Time</p>
                  <h3 className="mt-4 font-display text-3xl font-light leading-tight text-brand-ink">{item.title}</h3>
                  <p className="mt-5 text-sm uppercase tracking-[0.2em] text-brand-muted">Distance {item.distance}</p>
                  <p className="mt-4 text-3xl font-display font-light text-brand-ink">{item.time}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="bg-[#1c241c] text-white">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="max-w-3xl animate-fade-in-up">
              <p className="luxury-kicker text-brand-gold">Amenities</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                Everything you need for a memorable stay in the hills.
              </h2>
            </div>
            <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {amenities.map((item, index) => (
                <div
                  key={item}
                  className="border border-white/10 bg-white/[0.03] px-4 py-4 text-[11px] uppercase tracking-[0.18em] text-white/76 animate-fade-in-up"
                  style={{ transitionDelay: `${index * 45}ms` }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="mb-10 animate-fade-in-up">
              <p className="luxury-kicker text-brand-accent">Gallery</p>
              <h2 className="luxury-section-title mt-5">Life at Fernhill.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                "/fernhill/pool-1.jpg",
                "/fernhill/restaurant-1.jpg",
                "/fernhill/villa-1.jpg",
                "/fernhill/view-1.jpg",
                "/fernhill/dining-1.jpg",
                "/fernhill/night-1.jpg",
              ].map((image, index) => (
                <div key={image} className="relative aspect-[4/5] overflow-hidden shadow-[0_24px_80px_rgba(18,15,12,0.06)]">
                  <Image
                    src={image}
                    alt={`Fernhill view ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-[1400ms] hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking */}
        <section className="bg-[#1c241c] text-white">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-14 lg:py-28">
            <div>
              <p className="luxury-kicker text-brand-gold">Plan Your Stay</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                Coffee-scented mornings and star-lit evenings await.
              </h2>
            </div>
            <div className="luxury-panel border-white/12 bg-white/[0.05] text-white">
              <p className="text-sm leading-7 text-white/72">
                Fernhill Estate<br />
                Chikmagalur, Karnataka, India
              </p>
              <p className="mt-6 text-sm leading-7 text-white/82">Email: {contactInfo.email}</p>
              <div className="mt-6 space-y-2 text-sm text-white/82">
                <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`} className="block transition-colors hover:text-brand-gold">
                  {contactInfo.phones[0]}
                </a>
                <a href={`tel:${contactInfo.phones[1].replace(/\s/g, "")}`} className="block transition-colors hover:text-brand-gold">
                  {contactInfo.phones[1]}
                </a>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={property.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:bg-brand-gold hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" strokeWidth={0}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="MM12 0C5.373 0 0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V24h3.75v-1.146C18.612 22.954 24 18 24 12c0-6.627-5.373-12-12-12zm0 19.25c-4.347 0-8-2.953-8-7.25 0-2.015.776-3.87 2.106-5.303L12 1.875l5.894 4.822A8.255 8.255 0 0 1 20 12.25c0 4.297-3.653 7.25-8 7.25z"/></svg>
                  Enquire on WhatsApp
                </a>
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:border-brand-gold hover:text-brand-gold"
                >
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
