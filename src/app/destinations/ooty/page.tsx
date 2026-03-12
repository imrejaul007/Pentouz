import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Mountain, Snowflake, Coffee, Car, Wifi, Utensils, Camera } from "lucide-react";
import { destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Pentouz @ Ooty | Windsor Heights",
  description: "Escape to the hills at The Pentouz Windsor Heights in Ooty. Panoramic views of Nilgiri mountains and tea gardens.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/ooty",
  },
};

const ooty = destinations.find(d => d.slug === "ooty");
if (!ooty) notFound();

export default function OotyPage() {
  return (
    <>
      <Header />

      {/* Cinematic Full-Screen Hero */}
      <section className="relative h-screen min-h-[900px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={ooty?.heroImage || "/ooty/facade-3.jpeg"}
            alt={ooty?.title || "The Pentouz @ Ooty"}
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
                Ooty
              </h1>
              <div className="w-24 h-px bg-brand-gold mb-8 animate-fade-up stagger-3" />
              <p className="text-xl lg:text-2xl text-white/90 mb-6 font-light animate-fade-up stagger-4">
                Windsor Heights, Elk Hill, Nilgiris
              </p>
              <p className="text-lg text-white/70 mb-12 font-light leading-relaxed max-w-2xl animate-fade-up stagger-5">
                Perched on Elk Hill, surrounded by mist-covered tea gardens and colonial charm. A tranquil retreat with easy access to Ooty town and its timeless attractions.
              </p>

              {/* Quick Stats with Icons */}
              <div className="flex flex-wrap gap-8 lg:gap-16 mb-12 animate-fade-up stagger-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-brand-gold/40 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                    <Mountain className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Altitude</p>
                    <p className="text-white text-lg font-light">2,240m</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-brand-gold/40 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                    <Snowflake className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Climate</p>
                    <p className="text-white text-lg font-light">Pleasant</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-brand-gold/40 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                    <Coffee className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Nearby</p>
                    <p className="text-white text-lg font-light">Tea Gardens</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-fade-up stagger-5">
                <Link
                  href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
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
                  href="/destinations/ooty/near"
                  className="group border border-white/40 px-10 py-5 text-[11px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-brand-primary transition-all duration-700 font-light"
                >
                  <span className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    Explore Attractions
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
                Your Hillside
                <br />
                <em className="italic font-extralight">Retreat</em>
              </h2>
              <div className="w-16 h-px bg-brand-gold mb-8" />
              <p className="text-body-lg text-brand-body mb-8 leading-relaxed">
                {ooty?.copy || "Windsor Heights offers panoramic views of Nilgiri hills and tea gardens. The area is peaceful yet accessible, with easy connections to Ooty's main attractions."}
              </p>
              <p className="text-body-lg text-brand-body leading-relaxed">
                Whether you're seeking a peaceful escape or adventures in the Nilgiris, our property serves as the perfect base. From heritage train rides on the Nilgiri Mountain Railway to botanical gardens and tea plantations, experience Ooty at your own pace. The colonial charm of Windsor Heights, combined with modern comforts, creates an atmosphere of timeless elegance.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 border border-brand-border translate-x-3 translate-y-3" />
              <Image
                src={ooty?.image || "/ooty/view-24.jpeg"}
                alt={ooty?.title || "The Pentouz @ Ooty"}
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
              Comfort in the
              <br />
              <em className="italic font-extralight">Hills</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Wifi, label: "Free WiFi", desc: "Throughout property" },
              { icon: Utensils, label: "Restaurant", desc: "In-house dining" },
              { icon: Coffee, label: "Room Service", desc: "Available daily" },
              { icon: Snowflake, label: "Heating", desc: "For chilly nights" },
              { icon: Car, label: "Parking", desc: "Available on site" },
              { icon: Mountain, label: "Garden Views", desc: "Tea gardens" },
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
              <em className="italic font-extralight">Ooty</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/destinations/ooty/rooms", title: "Rooms", desc: "Comfortable hillside accommodations", image: "/ooty/bedroom-10.jpeg" },
              { href: "/destinations/ooty/experiences", title: "Experiences", desc: "Curated activities in Nilgiris", image: "/ooty/all/8._corridor.jpeg" },
              { href: "/destinations/ooty/gallery", title: "Gallery", desc: "Visual journey through property", image: "/ooty/all/24._view.jpeg" },
              { href: "/destinations/ooty/near", title: "Nearby", desc: "Explore Ooty attractions", image: "/ooty/facade-3.jpeg" },
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
            <em className="italic font-extralight">Ooty</em> Escape?
          </h2>
          <div className="w-24 h-px bg-brand-gold mx-auto mb-12" />
          <p className="text-body-lg text-brand-body max-w-2xl mx-auto mb-12 leading-relaxed">
            Let us curate your perfect hillside retreat. Book now for an unforgettable stay in the misty Nilgiris.
          </p>
          <Link
            href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
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
