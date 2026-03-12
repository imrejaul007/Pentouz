import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Phone, Wifi, Coffee, ShieldCheck, Car, Utensils, Home, Building2, Plane, Clock, CreditCard } from "lucide-react";
import { destinations, contactInfo } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookingCTA from "@/components/StickyBookingCTA";
import { withSiteUrl } from "@/lib/site";


export const metadata: Metadata = {
  title: "The Pentouz @ Lavelle Road | Luxury Studio Boutique Hotel Bangalore",
  description: "Six exquisite studio rooms with panoramic city views on Bangalore's prestigious Lavelle Road. Walking distance to UB City, MG Road metro.",
  alternates: {
    canonical: withSiteUrl("/destinations/lavelle-road"),
  },
};

const distances = [
  { icon: Plane, label: "Kempegowda International Airport", value: "35 km", time: "~45 min" },
  { icon: Clock, label: "KSR Bengaluru City Junction", value: "5 km", time: "~15 min" },
  { icon: Building2, label: "MG Road Metro Station", value: "1 km", time: "~5 min" },
];

const nearbyAttractions = [
  { name: "UB City", desc: "Luxury shopping, fine dining, and exclusive experiences", distance: "5 min walk" },
  { name: "MG Road", desc: "Vibrant cafes, boutiques, and cultural attractions", distance: "10 min walk" },
  { name: "Cubbon Park", desc: "Sprawling green space and botanical gardens", distance: "12 min drive" },
  { name: "Vidhana Soudha", desc: "Seat of Karnataka government and landmark architecture", distance: "15 min drive" },
];

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi", desc: "Complimentary throughout property" },
  { icon: Coffee, label: "Room Service", desc: "Available on request" },
  { icon: ShieldCheck, label: "24/7 Security", desc: "Your safety first" },
  { icon: Car, label: "Valet Parking", desc: "Covered parking available" },
  { icon: Utensils, label: "Kitchenette", desc: "In every studio" },
  { icon: Home, label: "Daily Housekeeping", desc: "Fresh daily service" },
  { icon: Wifi, label: "Premium Views", desc: "Panoramic cityscape" },
  { icon: Wifi, label: "Spacious Studios", desc: "6 well-appointed rooms" },
];

const highlights = [
  { title: "Top Floor Studios", desc: "Six exclusive studios with panoramic views of Bangalore skyline" },
  { title: "Prime Lavelle Road", desc: "Located on prestigious address in heart of upscale Bangalore" },
  { title: "UB City Proximity", desc: "Short stroll to luxury shopping, dining, and entertainment" },
  { title: "Business Ready", desc: "Ideal for executives, consultants, and extended stays" },
  { title: "Quiet Retreat", desc: "Oasis of calm amidst vibrant urban energy" },
  { title: "Metro Connected", desc: "1 km from MG Road Metro for city-wide access" },
];

export default function LavelleRoadPage() {
  const lavelleRoad = destinations.find(d => d.slug === "lavelle-road");
  if (!lavelleRoad) notFound();

  return (
    <>
      <Header />

      {/* Full-Screen Hero - Minimal Text, Large Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-ink">
        <div className="absolute inset-0 z-0">
          <Image
            src={lavelleRoad?.heroImage || "/lavelle-road/terrace-1.jpg"}
            alt={lavelleRoad?.title || "The Pentouz @ Lavelle Road"}
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
              Bangalore
            </p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-none tracking-tight">
              Lavelle Road
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="https://bookmystay.io/rooms/37853"
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
            Six Studios,
            <br />
            <span className="italic font-extralight">Unforgettable Views</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-body leading-relaxed">
            The Pentouz Lavelle Road boasts six exquisitely designed, spacious studio rooms located on the top floor, each offering stunning panoramic views of the cityscape. These well-appointed studios are thoughtfully curated to cater to the discerning traveler, combining elegance with modern comforts.
          </p>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative h-[70vh] overflow-hidden bg-brand-ink">
        <Image
          src={lavelleRoad?.image || "/lavelle-road/facade-1.jpg"}
          alt={lavelleRoad?.title || "The Pentouz @ Lavelle Road"}
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
                46, 6th Cross,
                <br />
                <span className="italic font-extralight">Lavelle Road</span>
              </h2>
              <p className="text-base text-brand-body mb-8 leading-relaxed">
                Bangalore – 560001, India
              </p>
              <Link
                href="https://maps.google.com/?q=12.971722,77.599697"
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
              <MapPin className="w-5 h-5 text-brand-gold/40 mb-4" />
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
              Everything You Need
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-10">
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
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-border/30">
          {[
            { href: "/destinations/lavelle-road/rooms", title: "Rooms", subtitle: "Six spacious studios", image: "/lavelle-road/king-suite-1.jpg" },
            { href: "/destinations/lavelle-road/experiences", title: "Experiences", subtitle: "Curated activities", image: "/ooty/all/22._lawn.jpeg" },
            { href: "/destinations/lavelle-road/gallery", title: "Gallery", subtitle: "Visual journey", image: "/lavelle-road/terrace-1.jpg" },
            { href: "/travel/near/karnataka-high-court", title: "Area Guide", subtitle: "Nearby attractions", image: "/lavelle-road/facade-1.jpg" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="25vw"
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
            <span className="italic font-extralight">Lavelle Road Experience</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://bookmystay.io/rooms/37853"
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
        bookingUrl={lavelleRoad?.bookingUrl || "https://bookmystay.io/rooms/37853/2025-12-23/2025-12-24/2/0?utm_source=brandWebsite"}
        phone={contactInfo.phones[0]}
        whatsapp={contactInfo.whatsapp}
      />

      <Footer />
    </>
  );
}
