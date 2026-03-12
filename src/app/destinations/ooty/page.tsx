import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Phone, Wifi, Coffee, ShieldCheck, Car, Utensils, Home, Mountain, Snowflake, Plane, Clock, CreditCard, Building } from "lucide-react";
import { destinations, contactInfo } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookingCTA from "@/components/StickyBookingCTA";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Pentouz @ Ooty | Windsor Heights Nilgiri Hills",
  description: "Escape to the misty Nilgiri hills at Windsor Heights. Panoramic views of Doddabetta Peak, tea gardens, and colonial charm.",
  alternates: {
    canonical: withSiteUrl("/destinations/ooty"),
  },
};

const distances = [
  { icon: Plane, label: "Coimbatore International Airport", value: "84 km", time: "~2.5 hrs" },
  { icon: Clock, label: "Udhagamandalam Railway Junction", value: "10 km", time: "~25 min" },
  { icon: Building, label: "Ooty Town Center", value: "2 km", time: "~5 min" },
];

const nearbyAttractions = [
  { name: "Doddabetta Peak", desc: "Highest peak in Nilgiris with stunning views", distance: "8 km drive" },
  { name: "Botanical Gardens", desc: "Sprawling gardens with diverse flora", distance: "3 km drive" },
  { name: "Tea Gardens", desc: "Rolling tea plantations and estates", distance: "5 km drive" },
  { name: "Rose Garden", desc: "Heritage rose garden with colonial charm", distance: "2 km drive" },
];

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi", desc: "Throughout property" },
  { icon: Utensils, label: "Restaurant", desc: "In-house dining" },
  { icon: Coffee, label: "Room Service", desc: "Available daily" },
  { icon: Snowflake, label: "Heating", desc: "For chilly hill nights" },
  { icon: Car, label: "Parking", desc: "Available on site" },
  { icon: Mountain, label: "Garden Views", desc: "Tea gardens and hills" },
];

const highlights = [
  { title: "Elk Hill Location", desc: "Serene setting surrounded by Nilgiri hills" },
  { title: "Mesmerizing Views", desc: "Panoramic vistas of Doddabetta Peak" },
  { title: "Colonial Charm", desc: "Timeless architecture and atmosphere" },
  { title: "Tea Gardens Nearby", desc: "Surrounded by rolling plantations" },
  { title: "Peaceful Retreat", desc: "Escape from hustle and bustle" },
  { title: "Easy Access", desc: "Short distance to Ooty town center" },
];

export default function OotyPage() {
  const ooty = destinations.find(d => d.slug === "ooty");
  if (!ooty) notFound();

  return (
    <>
      <Header />

      {/* Full-Screen Hero - Minimal Text, Large Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-ink">
        <div className="absolute inset-0 z-0">
          <Image
            src={ooty?.heroImage || "/ooty/facade-3.jpeg"}
            alt={ooty?.title || "The Pentouz @ Ooty"}
            fill
            priority
            className="object-cover scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/45" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.5em] text-brand-gold">
              Nilgiri Hills
            </p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-none tracking-tight">
              Ooty
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
                className="group inline-flex items-center gap-3 bg-brand-gold text-brand-ink px-10 py-4 text-[10px] uppercase tracking-[0.25em] hover:bg-white transition-all duration-500 font-light"
              >
                <Calendar className="w-4 h-4" />
                Reserve
              </Link>
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 border border-white/40 text-white px-10 py-4 text-[10px] uppercase tracking-[0.25em] hover:border-brand-gold hover:bg-white/10 transition-all duration-500 font-light"
              >
                <Phone className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
      </section>

      {/* Introduction - Minimal Text */}
      <section className="py-24 sm:py-32 lg:py-40 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-8">
            The Property
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink mb-8 leading-tight">
            Your Hillside
            <br />
            <span className="italic font-extralight">Retreat</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-body leading-relaxed">
            Windsor Heights is ideally located in the scenic hill station of Ooty, offering guests a perfect blend of tranquility and accessibility. Perched in the serene Elk Hill area, the property provides mesmerizing views of the surrounding Nilgiri Hills.
          </p>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative h-[70vh] overflow-hidden bg-brand-ink">
        <Image
          src={ooty?.image || "/ooty/view-24.jpeg"}
          alt={ooty?.title || "The Pentouz @ Ooty"}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </section>

      {/* Location & Distance */}
      <section className="py-24 sm:py-32 lg:py-40 bg-brand-linen">
        <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-8">
                Getting Here
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-brand-ink mb-12 leading-tight">
                Approximate
                <br />
                <span className="italic font-extralight">Travel Time</span>
              </h2>
              <div className="space-y-8">
                {distances.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-brand-border/30 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-light text-brand-ink mb-1">
                        {item.label}
                      </h3>
                      <p className="text-brand-muted text-sm">{item.value} • {item.time} by car</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-8">
                Location
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-brand-ink mb-12 leading-tight">
                Elk Hill,
                <br />
                <span className="italic font-extralight">Ooty</span>
              </h2>
              <p className="text-base text-brand-body mb-8 leading-relaxed">
                Tamil Nadu, India
              </p>
              <Link
                href="https://maps.google.com/?q=Ooty,Nilgiris"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-brand-ink text-[10px] uppercase tracking-[0.25em] hover:text-brand-accent transition-colors duration-300"
              >
                <MapPin className="w-4 h-4" />
                View on Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions - Full Width Cards */}
      <section className="bg-white border-t border-brand-border/30">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-border/30">
          {nearbyAttractions.map((item, i) => (
            <div key={i} className="group p-8 lg:p-12 hover:bg-brand-linen/50 transition-colors duration-500">
              <Mountain className="w-5 h-5 text-brand-gold/40 mb-4" />
              <h3 className="font-display text-lg font-light text-brand-ink mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-brand-muted mb-3 leading-relaxed">
                {item.desc}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent">
                {item.distance}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities - Minimal Grid */}
      <section className="py-24 sm:py-32 lg:py-40 bg-white">
        <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-8">
              Amenities
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-brand-ink leading-tight">
              Comfort in Hills
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-10">
            {amenities.map((amenity, i) => (
              <div key={i} className="text-center">
                <amenity.icon className="w-6 h-6 mx-auto mb-4 text-brand-gold/60" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-ink mb-1">
                  {amenity.label}
                </p>
                <p className="text-xs text-brand-muted">
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights - Minimal List */}
      <section className="py-24 sm:py-32 lg:py-40 bg-brand-linen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-8">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-brand-ink leading-tight">
              Property Highlights
            </h2>
          </div>
          <div className="space-y-6">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="flex-shrink-0 font-display text-2xl text-brand-gold/20">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-lg font-light text-brand-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore - Image Cards */}
      <section className="bg-white border-t border-brand-border/30">
        <div className="grid grid-cols-2 lg:grid-cols-3 divide-x divide-brand-border/30">
          {[
            { href: "/destinations/ooty/rooms", title: "Rooms", subtitle: "Comfortable hillside accommodations", image: "/ooty/bedroom-10.jpeg" },
            { href: "/destinations/ooty/experiences", title: "Experiences", subtitle: "Curated activities in Nilgiris", image: "/ooty/all/8._corridor.jpeg" },
            { href: "/destinations/ooty/gallery", title: "Gallery", subtitle: "Visual journey through property", image: "/ooty/all/24._view.jpeg" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/60" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-2">
                  {item.title}
                </p>
                <p className="text-sm text-white/80">
                  {item.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact - Minimal */}
      <section className="py-24 sm:py-32 lg:py-40 bg-brand-ink text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8">
            Reserve Your Stay
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-8 leading-tight">
            Your Exceptional
            <br />
            <span className="italic font-extralight">Ooty Escape</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
              className="inline-flex items-center gap-3 bg-brand-gold text-brand-ink px-10 py-4 text-[10px] uppercase tracking-[0.25em] hover:bg-white transition-all duration-500 font-light"
            >
              Book Now
            </Link>
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 border border-white/40 text-white px-10 py-4 text-[10px] uppercase tracking-[0.25em] hover:border-brand-gold hover:bg-white/10 transition-all duration-500 font-light"
            >
              <Phone className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>
      </section>

      <StickyBookingCTA
        bookingUrl={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
        phone={contactInfo.phones[0]}
        whatsapp={contactInfo.whatsapp}
      />

      <Footer />
    </>
  );
}
