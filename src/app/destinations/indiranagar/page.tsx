import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Phone, Wifi, Coffee, ShieldCheck, Car, Utensils, Star, Home, Building, Plane, Clock, CreditCard, Users } from "lucide-react";
import { destinations, contactInfo } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookingCTA from "@/components/StickyBookingCTA";
import { withSiteUrl } from "@/lib/site";


export const metadata: Metadata = {
  title: "The Pentouz @ Indiranagar | Three Bedroom Penthouse Bangalore",
  description: "Luxurious three-bedroom penthouse on 100 Feet Road, Indiranagar. Perfect for families, groups, and extended stays with private balconies.",
  alternates: {
    canonical: withSiteUrl("/destinations/indiranagar"),
  },
};

const distances = [
  { icon: Plane, label: "Kempegowda International Airport", value: "37 km", time: "~60 min" },
  { icon: Clock, label: "KSR Bengaluru City Junction", value: "10 km", time: "~35 min" },
  { icon: Building, label: "Indiranagar Metro Station", value: "1 km", time: "~5 min" },
];

const nearbyAttractions = [
  { name: "100 Feet Road", desc: "Vibrant dining and entertainment hub", distance: "2 min walk" },
  { name: "Phoenix Marketcity", desc: "Premium shopping mall", distance: "5 min drive" },
  { name: "Bangalore Golf Club", desc: "Historic golf course", distance: "8 min drive" },
  { name: "Ulsoor Lake", desc: "Scenic lake for morning walks", distance: "10 min drive" },
];

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi", desc: "Complimentary throughout" },
  { icon: Utensils, label: "Kitchen", desc: "Ultra-modern facilities" },
  { icon: Coffee, label: "Room Service", desc: "Available on request" },
  { icon: ShieldCheck, label: "24/7 Security", desc: "Your safety first" },
  { icon: Car, label: "Valet Parking", desc: "Covered parking available" },
  { icon: Home, label: "Daily Housekeeping", desc: "Fresh daily service" },
  { icon: Star, label: "City Views", desc: "From every balcony" },
  { icon: Users, label: "Spacious", desc: "6,000 sq ft penthouse" },
];

const highlights = [
  { title: "Three Bedrooms", desc: "Each with private balcony and city views" },
  { title: "Open Terrace", desc: "Perfect for gatherings and relaxation" },
  { title: "Prime Location", desc: "100 Feet Road, Indiranagar" },
  { title: "Family Friendly", desc: "Ideal for up to 6 guests" },
  { title: "Modern Kitchen", desc: "Fully equipped for extended stays" },
  { title: "Metro Connected", desc: "1 km from Indiranagar Metro" },
];

export default function IndiranagarPage() {
  const indiranagar = destinations.find(d => d.slug === "indiranagar");
  if (!indiranagar) notFound();

  return (
    <>
      <Header />

      {/* Cinematic Full-Screen Hero */}
      <section className="relative h-screen min-h-[900px] overflow-hidden bg-brand-ink">
        <div className="absolute inset-0 z-0">
          <Image
            src={indiranagar?.heroImage || "/indiranagar/living-room-5.jpg"}
            alt={indiranagar?.title || "The Pentouz @ Indiranagar"}
            fill
            priority
            className="object-cover scale-105"
            sizes="100vw"
          />
          {/* Elegant gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
            <div className="max-w-4xl">
              <p className="text-[11px] uppercase tracking-[0.4em] text-brand-gold mb-4 font-medium">
                The Pentouz
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-tight mb-6">
                Indiranagar
                <br />
                <span className="font-extralight italic">Bengaluru</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed mb-10 font-light">
                A luxurious three-bedroom penthouse in the heart of Indiranagar, crafted for families, groups, and business travelers seeking premium comfort.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href={indiranagar?.bookingUrl || "https://hotels.eglobe-solutions.com/pentouz/booking/hotels/the-pentouz-bangalore"}
                  className="inline-flex items-center gap-3 bg-brand-gold text-brand-ink px-10 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-brand-ink transition-all duration-500 font-light"
                >
                  <Calendar className="w-5 h-5" />
                  Book Your Stay
                </Link>
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-3 border border-white/30 text-white px-10 py-5 text-[11px] uppercase tracking-[0.2em] hover:border-brand-gold hover:bg-white/10 transition-all duration-500 font-light"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Gold Line */}
        <div className="absolute bottom-0 left-0 right-1/2 h-px bg-gradient-to-r from-brand-gold to-transparent" />
      </section>

      {/* Introduction Section */}
      <section className="py-section-2xl bg-white relative">
        <div className="absolute top-0 left-1/2 w-24 h-px bg-brand-gold" />
        <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                The Property
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink mb-8 leading-tight">
                Penthouse Living,
                <br />
                <em className="italic font-extralight">Unmatched Comfort</em>
              </h2>
              <p className="text-base sm:text-lg text-brand-body mb-6 leading-relaxed">
                The Pentouz Indiranagar is a luxurious 3-bedroom penthouse nestled in one of Bangalore's most upscale neighborhoods. Each bedroom features a private balcony with vibrant city views, plush bedding, and tasteful decor.
              </p>
              <p className="text-base sm:text-lg text-brand-body leading-relaxed">
                The open terrace provides the perfect space for gatherings, while the ultra-modern kitchen makes extended stays comfortable. Daily housekeeping ensures a pristine environment throughout your visit.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 border border-brand-border translate-x-3 translate-y-3 -z-10" />
              <Image
                src={indiranagar?.image || "/indiranagar/terrace-7.jpg"}
                alt={indiranagar?.title || "The Pentouz @ Indiranagar"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Distances Section */}
      <section className="py-section-2xl bg-brand-linen relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Getting Here
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink mb-6 leading-tight">
              Approximate
              <br />
              <em className="italic font-extralight">Travel Time</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {distances.map((item, i) => (
              <div key={i} className="bg-white border border-brand-border/30 p-8 lg:p-10 text-center hover:shadow-xl hover:border-brand-gold/50 transition-all duration-500">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-brand-linen border border-brand-gold/20">
                  <item.icon className="w-7 h-7 text-brand-accent" />
                </div>
                <h3 className="font-display text-xl font-light text-brand-ink mb-3">
                  {item.label}
                </h3>
                <p className="text-3xl lg:text-4xl font-display text-brand-accent mb-2">{item.value}</p>
                <p className="text-sm text-brand-muted">{item.time} by car</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions Section */}
      <section className="py-section-2xl bg-white relative">
        <div className="absolute top-0 left-1/2 w-24 h-px bg-brand-gold" />
        <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Neighborhood
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink mb-6 leading-tight">
              Explore
              <br />
              <em className="italic font-extralight">Indiranagar</em>
            </h2>
            <p className="text-base text-brand-body max-w-3xl mx-auto leading-relaxed">
              Indiranagar is one of Bangalore's most vibrant neighborhoods, offering an exciting mix of dining, shopping, and entertainment. From upscale restaurants to bustling cafes, everything you need is within reach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyAttractions.map((item, i) => (
              <div key={i} className="group bg-brand-linen border border-brand-border/30 p-6 hover:border-brand-gold/50 transition-all duration-500 hover:shadow-xl">
                <MapPin className="w-6 h-6 text-brand-gold/50 mb-4" />
                <h3 className="font-display text-lg font-light text-brand-ink mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-brand-muted mb-3">
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
      <section className="py-section-2xl bg-brand-ink text-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
              Amenities
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Everything You
              <br />
              <em className="italic font-extralight">Need</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {amenities.map((amenity, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 border border-white/20 flex items-center justify-center group-hover:border-brand-gold/50 transition-all duration-500">
                  <amenity.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/80 mb-1">
                  {amenity.label}
                </p>
                <p className="text-sm text-white/60">
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-section-2xl bg-white relative">
        <div className="absolute top-0 left-1/2 w-24 h-px bg-brand-gold" />
        <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink mb-6 leading-tight">
              Property
              <br />
              <em className="italic font-extralight">Highlights</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {highlights.map((item, i) => (
              <div key={i} className="group p-8 lg:p-10 bg-brand-linen border border-brand-border/30 hover:border-brand-gold/50 transition-all duration-700 hover:shadow-xl">
                <span className="font-display text-5xl text-brand-gold/10 block mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-base text-brand-ink mb-3 font-light">
                  {item.title}
                </p>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-section-2xl bg-brand-linen relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Discover More
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink mb-6 leading-tight">
              Explore
              <br />
              <em className="italic font-extralight">Indiranagar</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/destinations/indiranagar/living-100-feet", title: "Living", desc: "Penthouse details", image: "/indiranagar/living-room-5.jpg" },
              { href: "/destinations/indiranagar/rooms", title: "Rooms", desc: "Three bedroom suites", image: "/indiranagar/terrace-7.jpg" },
              { href: "/destinations/indiranagar/gallery", title: "Gallery", desc: "Visual journey", image: "/indiranagar/skyline-suite.jpg" },
              { href: "/travel/near/indiranagar-100-feet-road", title: "Nearby", desc: "Local attractions", image: "/indiranagar/vista-room.jpg" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group relative overflow-hidden bg-white border border-brand-border/30 hover:border-brand-gold/50 transition-all duration-700"
              >
                <div className="aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-display text-xl font-light mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 mb-4">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2 text-brand-gold">
                    <span className="text-[10px] uppercase tracking-[0.2em]">Discover</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-section-2xl bg-white relative">
        <div className="absolute top-0 left-1/2 w-24 h-px bg-brand-gold" />
        <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                Contact & Reservations
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink mb-8 leading-tight">
                Ready to
                <br />
                <em className="italic font-extralight">Book?</em>
              </h2>
              <p className="text-base text-brand-body mb-8 leading-relaxed">
                Book our spacious penthouse for an unforgettable Bangalore experience. Perfect for families, groups, and extended stays.
              </p>
              <div className="space-y-4">
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="flex items-center gap-4 text-brand-ink hover:text-brand-accent transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-linen border border-brand-border/30 flex items-center justify-center group-hover:border-brand-gold/50 transition-all duration-500">
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
                  <div className="w-12 h-12 rounded-full bg-brand-linen border border-brand-border/30 flex items-center justify-center group-hover:border-brand-gold/50 transition-all duration-500">
                    <CreditCard className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-1">Email</p>
                    <p className="text-lg font-light">{contactInfo.email}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-brand-ink p-8 lg:p-10 text-white">
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
                Location
              </p>
              <h3 className="font-display text-2xl font-light mb-4">
                The Pentouz Indiranagar
              </h3>
              <p className="text-white/80 mb-8 font-light leading-relaxed">
                2022, 100 Feet Road, Indiranagar<br />
                Bangalore – 560038, India
              </p>
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-2 font-medium">Coordinates</p>
                <p className="text-white/60 font-mono text-sm">12°58'01.7″N  77°38'30.2″E</p>
              </div>
              <Link
                href="https://maps.google.com/?q=12.9767,77.641"
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
      </section>

      {/* CTA Section */}
      <section className="py-section-2xl bg-brand-ink text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-transparent via-brand-gold/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center relative">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
            Reserve Your Stay
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-8 leading-tight">
            Your Exceptional
            <br />
            <em className="italic font-extralight">Indiranagar</em> Experience Awaits
          </h2>
          <p className="text-base text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience The Pentouz difference — where every detail is crafted for discerning travelers who expect nothing less than extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href={indiranagar?.bookingUrl || "https://hotels.eglobe-solutions.com/pentouz/booking/hotels/the-pentouz-bangalore"}
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-ink px-12 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-500 font-light"
            >
              Book Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-12 py-5 text-[11px] uppercase tracking-[0.2em] hover:border-brand-gold hover:bg-white/10 transition-all duration-500 font-light"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      <StickyBookingCTA
        bookingUrl={indiranagar?.bookingUrl || "https://hotels.eglobe-solutions.com/pentouz/booking/hotels/the-pentouz-bangalore"}
        phone={contactInfo.phones[0]}
        whatsapp={contactInfo.whatsapp}
      />

      <Footer />
    </>
  );
}
