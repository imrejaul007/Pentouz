import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Phone, Wifi, Coffee, ShieldCheck, Car, Utensils, Star, Home, Building2, Plane, Clock, CreditCard, Users } from "lucide-react";
import { destinations, contactInfo } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Pentouz @ Lavelle Road | Luxury Studio Boutique Hotel Bangalore",
  description: "Six exquisite studio rooms with panoramic city views on Bangalore's prestigious Lavelle Road. Walking distance to UB City, MG Road metro.",
  alternates: {
    canonical: withSiteUrl("/destinations/lavelle-road"),
  },
};

const lavelleRoad = destinations.find(d => d.slug === "lavelle-road");
if (!lavelleRoad) notFound();

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
  { icon: Star, label: "Premium Views", desc: "Panoramic cityscape views" },
  { icon: Users, label: "Spacious Studios", desc: "6 well-appointed rooms" },
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
  return (
    <>
      <Header />

      {/* Cinematic Full-Screen Hero with Enhanced CTAs */}
      <section className="relative h-screen min-h-[900px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={lavelleRoad?.heroImage || "/lavelle-road/terrace-1.jpg"}
            alt={lavelleRoad?.title || "The Pentouz @ Lavelle Road"}
            fill
            priority
            className="object-cover scale-110 animate-fade-in"
            sizes="100vw"
          />
          {/* Multi-layer gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/50" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-container-xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-4xl">
              <p className="text-[11px] uppercase tracking-[0.5em] text-brand-gold mb-6 animate-fade-up stagger-1">
                The Pentouz Collection
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 leading-[0.9] tracking-tight animate-fade-up stagger-2">
                Lavelle Road
              </h1>
              <div className="w-24 h-px bg-brand-gold mb-8 animate-fade-up stagger-3" />
              <p className="text-xl lg:text-2xl text-white/90 mb-6 font-light animate-fade-up stagger-4">
                Bangalore's Premier Boutique Hotel
              </p>
              <p className="text-lg text-white/70 mb-12 font-light leading-relaxed max-w-2xl animate-fade-up stagger-5">
                Six exquisitely designed studio rooms with panoramic city views. Located on prestigious Lavelle Road, moments from UB City and MG Road.
              </p>

              {/* Booking CTAs */}
              <div className="flex flex-wrap gap-4 animate-fade-up stagger-5">
                <Link
                  href="https://bookmystay.io/rooms/37853"
                  className="group relative bg-brand-gold text-brand-primary px-10 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-700 font-light"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    Book Your Stay
                  </span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  <span className="absolute inset-0 flex items-center justify-center text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    Book Your Stay
                  </span>
                </Link>
                <Link
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="group border border-white/40 px-10 py-5 text-[11px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-brand-primary transition-all duration-700 font-light"
                >
                  <span className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    Call to Book
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Property Details */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                The Property
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-8 leading-tight">
                Six Studios,
                <br />
                <em className="italic font-extralight">Unforgettable Views</em>
              </h2>
              <div className="w-16 h-px bg-brand-gold mb-8" />
              <p className="text-body-lg text-brand-body mb-6 leading-relaxed">
                The Pentouz Lavelle Road boasts six exquisitely designed, spacious studio rooms located on the top floor, each offering stunning panoramic views of the cityscape. These well-appointed studios are thoughtfully curated to cater to the discerning traveler, combining elegance with modern comforts.
              </p>
              <p className="text-body-lg text-brand-body leading-relaxed">
                Whether you're in Bangalore for business or leisure, you'll find every detail tailored to enhance your stay. The open terrace offers perfect space for morning coffee or evening relaxation with the city lights as your backdrop.
              </p>

              {/* Contact Box */}
              <div className="mt-10 p-8 bg-brand-linen border border-brand-border">
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-4 font-medium">
                  Contact & Reservations
                </p>
                <div className="space-y-4">
                  <a
                    href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                    className="flex items-center gap-4 text-brand-ink hover:text-brand-accent transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white border border-brand-border flex items-center justify-center group-hover:border-brand-gold/50 transition-all duration-500">
                      <Phone className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-1">Phone</p>
                      <p className="text-lg font-light">{contactInfo.phones[0]}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-4 text-brand-ink hover:text-brand-accent transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white border border-brand-border flex items-center justify-center group-hover:border-brand-gold/50 transition-all duration-500">
                      <CreditCard className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-1">Email</p>
                      <p className="text-lg font-light">{contactInfo.email}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Image & Address */}
            <div>
              <div className="relative aspect-[4/3] overflow-hidden mb-8">
                <div className="absolute inset-0 border border-brand-border translate-x-3 translate-y-3" />
                <Image
                  src={lavelleRoad?.image || "/lavelle-road/facade-1.jpg"}
                  alt={lavelleRoad?.title || "The Pentouz @ Lavelle Road"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Address Card */}
              <div className="bg-brand-ink p-8 text-white">
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
                  Exact Location
                </p>
                <h3 className="font-display text-2xl lg:text-3xl font-light mb-4">
                  The Pentouz Lavelle Road
                </h3>
                <p className="text-white/80 mb-6 font-light leading-relaxed">
                  46, 6th Cross, Lavelle Road<br />
                  Bangalore – 560001, India
                </p>
                <div className="w-16 h-px bg-brand-gold/50 mb-6" />
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-4 font-medium">
                  Coordinates
                </p>
                <p className="text-white/60 font-mono text-sm">
                  12°58'18.2″N  77°35'58.9″E
                </p>
                <div className="mt-8">
                  <Link
                    href="https://maps.google.com/?q=12.971722,77.599697"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-brand-gold hover:text-white transition-colors duration-300"
                  >
                    <MapPin className="w-5 h-5" />
                    Open in Google Maps
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distances Section */}
      <section className="py-section-xl bg-brand-linen">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Getting Here
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Approximate
              <br />
              <em className="italic font-extralight">Travel Time</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {distances.map((item, i) => (
              <div key={i} className="bg-white border border-brand-border p-8 lg:p-10 hover:border-brand-gold/30 transition-all duration-500 hover:shadow-card">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-brand-linen border border-brand-gold/20">
                  <item.icon className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-light text-brand-ink mb-3">
                  {item.label}
                </h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <p className="text-3xl lg:text-4xl font-display font-light text-brand-accent">{item.value}</p>
                  <p className="text-sm text-brand-muted">from property</p>
                </div>
                <p className="text-body-sm text-brand-muted">
                  {item.time} by car
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions Section */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Neighborhood
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Explore
              <br />
              <em className="italic font-extralight">Lavelle Road</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
            <p className="text-body-lg text-brand-body max-w-3xl mx-auto leading-relaxed">
              Lavelle Road is one of Bangalore's most coveted and sophisticated neighborhoods, offering the perfect blend of urban vibrancy and serene green spaces. Just a short stroll away lies luxurious UB City.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyAttractions.map((item, i) => (
              <div key={i} className="group relative bg-brand-linen border border-brand-border p-6 hover:border-brand-gold/30 transition-all duration-500 hover:shadow-card">
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-brand-gold/30 transition-all duration-500 group-hover:scale-125" />
                <ArrowRight className="absolute top-4 right-4 w-5 h-5 text-brand-accent transition-transform duration-500 group-hover:rotate-45" />
                <MapPin className="w-6 h-6 text-brand-gold/50 mb-4" />
                <h3 className="font-display text-lg lg:text-xl font-light text-brand-ink mb-2">
                  {item.name}
                </h3>
                <p className="text-body-sm text-brand-muted mb-3">
                  {item.desc}
                </p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-brand-accent font-medium">
                  {item.distance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-section-xl bg-brand-ink text-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
              Amenities
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Everything You
              <br />
              <em className="italic font-extralight">Need</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {amenities.map((amenity, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-white/5 border border-white/20 flex items-center justify-center group-hover:border-brand-gold/50 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-card">
                  <amenity.icon className="w-8 h-8 text-brand-gold group-hover:text-brand-accent transition-colors duration-500" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/80 mb-1 group-hover:text-brand-gold transition-colors duration-500">
                  {amenity.label}
                </p>
                <p className="text-body-sm text-white/60">
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Why Choose Us
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Property
              <br />
              <em className="italic font-extralight">Highlights</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {highlights.map((item, i) => (
              <div key={i} className="group p-8 lg:p-10 bg-brand-linen border border-brand-border hover:border-brand-gold/30 transition-all duration-700 hover:shadow-card">
                <span className="font-display text-6xl text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors duration-700 block mb-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-body-lg text-brand-ink mb-3 group-hover:translate-x-2 transition-transform duration-700">
                  {item.title}
                </p>
                <p className="text-body-sm text-brand-muted leading-relaxed">
                  {item.desc}
                </p>
                <div className="w-8 h-px bg-brand-accent transition-all duration-700 group-hover:w-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-section-xl bg-brand-primary relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="relative max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
              Discover More
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Explore
              <br />
              <em className="italic font-extralight">Lavelle Road</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/destinations/lavelle-road/rooms", title: "Rooms", desc: "Six spacious studios with city views", image: "/lavelle-road/king-suite-1.jpg" },
              { href: "/destinations/lavelle-road/experiences", title: "Experiences", desc: "Curated activities and discoveries", image: "/ooty/all/22._lawn.jpeg" },
              { href: "/destinations/lavelle-road/gallery", title: "Gallery", desc: "Visual journey through property", image: "/lavelle-road/terrace-1.jpg" },
              { href: "/travel/near/karnataka-high-court", title: "Legal District", desc: "Near Karnataka High Court", image: "/lavelle-road/facade-1.jpg" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-700"
              >
                {/* Image overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-between min-h-[280px]">
                  <div>
                    <ArrowRight className="w-8 h-8 text-brand-gold mb-6 transition-transform duration-700 group-hover:translate-x-2" />
                    <h3 className="font-display text-2xl lg:text-3xl font-light text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-body-sm text-white/70 group-hover:text-white/90 transition-colors duration-500">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-brand-gold">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-light">Discover</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-700 group-hover:translate-x-3" />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-gold transition-all duration-700 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="py-section-xl bg-brand-linen relative overflow-hidden">
        {/* Decorative blurred elements */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
            Reserve Your Stay
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-brand-ink mb-8 leading-tight">
            Ready for Your
            <br />
            <em className="italic font-extralight">Lavelle Road</em> Experience?
          </h2>
          <div className="w-24 h-px bg-brand-gold mx-auto mb-12" />
          <p className="text-body-lg text-brand-body max-w-2xl mx-auto mb-12 leading-relaxed">
            Let us curate your perfect Bangalore escape. Book now for an unforgettable stay in the heart of the city.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="https://bookmystay.io/rooms/37853"
              className="group relative inline-flex items-center justify-center bg-brand-primary text-white px-14 py-6 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-700 font-light"
            >
              <span className="relative z-10">Book Now</span>
              <ArrowRight className="ml-4 w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
            </Link>
            <Link
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className="group border border-brand-border px-12 py-5 text-[11px] uppercase tracking-[0.2em] text-brand-ink hover:border-brand-gold hover:text-brand-accent transition-all duration-700 font-light"
            >
              <Phone className="mr-3 w-5 h-5" />
              Call Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
