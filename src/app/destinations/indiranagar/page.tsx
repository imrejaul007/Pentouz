import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Users, Home, Wifi, Coffee, Car, ShieldCheck, Utensils, Star } from "lucide-react";
import { destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Pentouz @ Indiranagar | Luxury 3-Bedroom Penthouse",
  description: "Luxurious three-bedroom penthouse on Bangalore's upscale 100 Feet Road. Perfect for families and extended stays.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/indiranagar",
  },
};

const indiranagar = destinations.find(d => d.slug === "indiranagar");
if (!indiranagar) notFound();

export default function IndiranagarPage() {
  return (
    <>
      <Header />

      {/* Cinematic Full-Screen Hero */}
      <section className="relative h-screen min-h-[900px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={indiranagar?.heroImage || "/indiranagar/living-room-5.jpg"}
            alt={indiranagar?.title || "The Pentouz @ Indiranagar"}
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
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.5em] text-brand-gold mb-6 animate-fade-up stagger-1">
                The Pentouz Collection
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 leading-[0.9] tracking-tight animate-fade-up stagger-2">
                Indiranagar
              </h1>
              <div className="w-24 h-px bg-brand-gold mb-8 animate-fade-up stagger-3" />
              <p className="text-xl lg:text-2xl text-white/90 mb-6 font-light animate-fade-up stagger-4">
                100 Feet Road, Bangalore
              </p>
              <p className="text-lg text-white/70 mb-12 font-light leading-relaxed max-w-2xl animate-fade-up stagger-5">
                A luxurious three-bedroom penthouse nestled in Bangalore's most upscale neighborhood. Private balconies, city views, and refined comfort for discerning travelers.
              </p>

              {/* Quick Stats with Icons */}
              <div className="flex flex-wrap gap-8 lg:gap-16 mb-12 animate-fade-up stagger-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-brand-gold/40 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                    <Home className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Bedrooms</p>
                    <p className="text-white text-lg font-light">3 Private</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-brand-gold/40 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Size</p>
                    <p className="text-white text-lg font-light">6,000 sq ft</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-brand-gold/40 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                    <Star className="w-6 h-6 text-brand-gold fill-current" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Rating</p>
                    <p className="text-white text-lg font-light">5 Star</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-fade-up stagger-5">
                <Link
                  href={indiranagar?.bookingUrl || "https://hotels.eglobe-solutions.com/pentouz/booking/hotels/the-pentouz-bangalore"}
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
                  href="/destinations/indiranagar/gallery"
                  className="group border border-white/40 px-10 py-5 text-[11px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-brand-primary transition-all duration-700 font-light"
                >
                  <span className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    View Gallery
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                About The Property
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-8 leading-tight">
                Urban Luxury
                <br />
                <em className="italic font-extralight">Redefined</em>
              </h2>
              <div className="w-16 h-px bg-brand-gold mb-8" />
              <p className="text-body-lg text-brand-body mb-8 leading-relaxed">
                {indiranagar?.copy || "A luxurious three-bedroom penthouse nestled in one of Bangalore's most upscale neighborhoods. This exclusive residence blends comfort, elegance, and convenience."}
              </p>
              <p className="text-body-lg text-brand-body leading-relaxed">
                Located on 100 Feet Road, Indiranagar's most prestigious address, The Pentouz offers a private penthouse experience. Three well-appointed bedrooms, each with its own balcony, provide privacy and comfort for families or groups of friends. The neighborhood is alive with boutique cafes, upscale dining, and vibrant nightlife, yet our penthouse offers a peaceful retreat above it all.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 border border-brand-border translate-x-3 translate-y-3" />
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

      {/* Amenities Grid with Icons */}
      <section className="py-section-xl bg-brand-linen">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Amenities
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Exceptional
              <br />
              <em className="italic font-extralight">Comfort</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Wifi, label: "Free WiFi", desc: "High-speed internet" },
              { icon: Utensils, label: "Ultra-Modern Kitchen", desc: "Fully equipped" },
              { icon: Coffee, label: "Daily Housekeeping", desc: "Fresh daily service" },
              { icon: Car, label: "Covered Parking", desc: "Secure parking" },
              { icon: ShieldCheck, label: "Safe & Secure", desc: "24/7 security" },
              { icon: Home, label: "Open Terrace", desc: "Private outdoor space" },
            ].map((amenity, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-white border border-brand-border flex items-center justify-center group-hover:border-brand-gold/50 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-card">
                  <amenity.icon className="w-8 h-8 text-brand-accent group-hover:text-brand-gold transition-colors duration-500" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-brand-ink mb-1 group-hover:text-brand-accent transition-colors duration-500">
                  {amenity.label}
                </p>
                <p className="text-body-sm text-brand-muted">
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Property Highlights
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Designed for
              <br />
              <em className="italic font-extralight">You</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {(indiranagar?.features || []).slice(0, 6).map((feature, i) => (
              <div key={i} className="group p-8 lg:p-10 bg-brand-linen border border-brand-border hover:border-brand-gold/30 transition-all duration-700 hover:shadow-card">
                <span className="font-display text-6xl text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors duration-700 block mb-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-body-lg text-brand-ink mb-3 group-hover:translate-x-2 transition-transform duration-700">
                  {feature}
                </p>
                <div className="w-8 h-px bg-brand-accent transition-all duration-700 group-hover:w-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore The Pentouz - Premium Cards with Images */}
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
              <em className="italic font-extralight">Indiranagar</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/destinations/indiranagar/rooms", title: "Rooms", desc: "Three private bedrooms with balconies", image: "/indiranagar/skyline-suite.jpg" },
              { href: "/destinations/indiranagar/experiences", title: "Experiences", desc: "Curated activities and discoveries", image: "/ooty/all/22._lawn.jpeg" },
              { href: "/destinations/indiranagar/gallery", title: "Gallery", desc: "Visual journey through property", image: "/indiranagar/terrace-7.jpg" },
              { href: "/destinations/indiranagar/location", title: "Location", desc: "100 Feet Road, Bangalore", image: "/indiranagar/living-room-5.jpg" },
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
            Ready to Experience
            <br />
            <em className="italic font-extralight">Indiranagar</em>?
          </h2>
          <div className="w-24 h-px bg-brand-gold mx-auto mb-12" />
          <p className="text-body-lg text-brand-body max-w-2xl mx-auto mb-12 leading-relaxed">
            Let us curate your perfect Bangalore escape. Book now for an unforgettable stay in our private penthouse.
          </p>
          <Link
            href={indiranagar?.bookingUrl || "https://hotels.eglobe-solutions.com/pentouz/booking/hotels/the-pentouz-bangalore"}
            className="group relative inline-flex items-center justify-center bg-brand-primary text-white px-14 py-6 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-700 font-light"
          >
            <span className="relative z-10">Book Now</span>
            <ArrowRight className="ml-4 w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
