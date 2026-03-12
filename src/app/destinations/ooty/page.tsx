import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Mountain, Snowflake, Coffee, Car } from "lucide-react";
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

      {/* Full-Screen Hero */}
      <section className="relative h-screen min-h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={ooty?.heroImage || "/ooty/view-24.jpeg"}
            alt={ooty?.title || "The Pentouz @ Ooty"}
            fill
            priority
            className="object-cover scale-105 animate-fade-in"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-container-xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.4em] text-brand-gold mb-6 animate-fade-up stagger-1">
                The Pentouz Collection
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 leading-[0.9] tracking-tight animate-fade-up stagger-2">
                <em className="italic font-extralight">Ooty</em>
              </h1>
              <div className="w-24 h-px bg-brand-gold mb-8 animate-fade-up stagger-3" />
              <p className="text-xl lg:text-2xl text-white/90 mb-6 font-light animate-fade-up stagger-4">
                Windsor Heights, Elk Hill, Nilgiris
              </p>
              <p className="text-lg text-white/70 mb-12 font-light leading-relaxed max-w-2xl animate-fade-up stagger-5">
                Perched on Elk Hill, surrounded by mist-covered tea gardens and colonial charm. A tranquil retreat with easy access to Ooty town and its timeless attractions.
              </p>

              <div className="flex flex-wrap gap-8 lg:gap-16 mb-12 animate-fade-up stagger-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center">
                    <Mountain className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Altitude</p>
                    <p className="text-white text-sm">2,240m</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center">
                    <Snowflake className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Climate</p>
                    <p className="text-white text-sm">Pleasant</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Nearby</p>
                    <p className="text-white text-sm">Tea Gardens</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 animate-fade-up stagger-5">
                <Link
                  href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
                  className="group relative bg-white text-brand-primary px-8 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-700 font-light"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Calendar className="w-4 h-4" />
                    Book Your Stay
                  </span>
                </Link>
                <Link
                  href="/destinations/ooty/location"
                  className="group border border-white/40 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-brand-primary transition-all duration-700 font-light"
                >
                  <span className="flex items-center gap-3">
                    <MapPin className="w-4 h-4" />
                    View Location
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                <em className="italic">Retreat</em>
              </h2>
              <p className="text-body-lg text-brand-body mb-8 leading-relaxed">
                {ooty?.copy || "Windsor Heights offers panoramic views of Nilgiri hills and tea gardens. The area is peaceful yet accessible, with easy connections to Ooty's main attractions."}
              </p>
              <p className="text-body-lg text-brand-body leading-relaxed">
                Whether you're seeking a peaceful escape or adventures in the Nilgiris, our property serves as the perfect base. From heritage train rides to botanical gardens, experience Ooty at your own pace.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
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

      {/* Amenities Section */}
      <section className="py-section-xl bg-brand-linen">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Amenities
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Comfort in the <em className="italic">Hills</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Coffee, label: "Room Service" },
              { icon: Car, label: "Parking" },
              { icon: Mountain, label: "Mountain Views" },
              { icon: Snowflake, label: "Climate Control" },
              { icon: MapPin, label: "Central Location" },
              { icon: Calendar, label: "Flexible Stays" },
            ].map((amenity, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white border border-brand-border flex items-center justify-center group-hover:border-brand-gold transition-all duration-500 group-hover:-translate-y-2">
                  <amenity.icon className="w-6 h-6 text-brand-accent group-hover:text-brand-gold transition-colors duration-500" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-brand-muted group-hover:text-brand-ink transition-colors duration-500">
                  {amenity.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-section-xl bg-brand-primary">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
              Discover More
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Explore <em className="italic">Ooty</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/destinations/ooty/rooms", title: "Rooms", desc: "Comfortable hillside rooms" },
              { href: "/destinations/ooty/experiences", title: "Experiences", desc: "Curated activities" },
              { href: "/destinations/ooty/near", title: "Nearby", desc: "Explore attractions" },
              { href: "/destinations/ooty/location", title: "Location", desc: "Elk Hill, Ooty" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group relative overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-700"
              >
                <div className="p-8">
                  <ArrowRight className="w-6 h-6 text-brand-gold mb-6 transition-transform duration-700 group-hover:translate-x-2" />
                  <h3 className="font-display text-2xl font-light text-white mb-3">{item.title}</h3>
                  <p className="text-body-sm text-white/60">{item.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-brand-gold transition-all duration-700 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="py-section-xl bg-brand-linen relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
            Reserve Your Stay
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-brand-ink mb-8 leading-tight">
            Ready for Your
            <br />
            <em className="italic">Ooty</em> Escape?
          </h2>
          <p className="text-body-lg text-brand-body max-w-2xl mx-auto mb-12">
            Let us curate your perfect hillside retreat. Book now for an unforgettable stay in the Nilgiris.
          </p>
          <Link
            href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
            className="group relative inline-flex items-center justify-center bg-brand-primary text-white px-12 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-700 font-light"
          >
            <span className="relative z-10">Book Now</span>
            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
