import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, MapPin, Coffee, Bed, Maximize, Wifi, Home, Utensils } from "lucide-react";
import { destinations } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rooms at The Pentouz @ Indiranagar | Luxury 3-Bedroom Penthouse",
  description: "Luxurious three-bedroom penthouse in Bangalore's upscale 100 Feet Road neighborhood. Perfect for families and extended stays.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/indiranagar/rooms",
  },
};

const indiranagar = destinations.find(d => d.slug === "indiranagar");
if (!indiranagar) notFound();

const roomTypes = [
  {
    name: "Master Bedroom",
    desc: "Spacious bedroom with private balcony, ensuite bathroom, and premium linens",
    guests: 2,
    features: ["Private Balcony", "Ensuite Bath", "Premium Linens", "City Views"],
    size: "Master",
    image: "/indiranagar/vista-room.jpg",
    icon: Bed,
  },
  {
    name: "Bedroom 1",
    desc: "King-size bed with premium linens, garden access, and elegant decor",
    guests: 2,
    features: ["King Bed", "Garden Access", "Elegant Decor", "City Views"],
    size: "Bedroom 1",
    image: "/indiranagar/skyline-suite.jpg",
    icon: Coffee,
  },
  {
    name: "Bedroom 2",
    desc: "Queen-size bed with street-facing windows, premium amenities, and refined interiors",
    guests: 2,
    features: ["Queen Bed", "Street Views", "Premium Amenities", "Refined Interiors"],
    size: "Bedroom 2",
    image: "/indiranagar/living-room-10.jpg",
    icon: MapPin,
  },
  {
    name: "Terrace Haven",
    desc: "Refined suite with direct terrace access, plush bedding, and shared living areas",
    guests: 2,
    features: ["Terrace Access", "Private Balcony", "Shared Living Areas", "City Views"],
    size: "Suite",
    image: "/indiranagar/terrace-7.jpg",
    icon: Maximize,
  },
];

export default function IndiranagarRoomsPage() {
  return (
    <>
      <Header />

      {/* Cinematic Hero */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/indiranagar/terrace-7.jpg"
            alt="The Pentouz @ Indiranagar Rooms"
            fill
            priority
            className="object-cover scale-110 animate-fade-in"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-container-xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.5em] text-brand-gold mb-6 animate-fade-up">
                Accommodations
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-[0.9] tracking-tight animate-fade-up stagger-2">
                Private
                <br />
                <em className="italic font-extralight">Penthouse</em>
              </h1>
              <div className="w-24 h-px bg-brand-gold mb-8 animate-fade-up stagger-3" />
              <p className="text-lg text-white/70 max-w-2xl font-light leading-relaxed animate-fade-up stagger-4">
                Three-bedroom private penthouse nestled in Bangalore's most upscale neighborhood. Each bedroom features a private balcony with vibrant city views.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Room Collection
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Choose Your
              <br />
              <em className="italic font-extralight">Private Space</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto mb-8" />
            <p className="text-body-lg text-brand-muted max-w-2xl mx-auto">
              Each room at our penthouse offers privacy, comfort, and spectacular views. The entire penthouse is yours to enjoy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roomTypes.map((room, i) => (
              <div key={i} className="group bg-white border border-brand-border hover:border-brand-gold/30 transition-all duration-700 overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/20 to-transparent group-hover:to-black/30 transition-all duration-700" />

                  {/* Room Type Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/95 backdrop-blur-sm border border-white/20 text-brand-ink text-[10px] uppercase tracking-[0.2em]">
                      {room.size}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-display text-2xl lg:text-3xl font-light text-brand-ink mb-4">
                        <em className="italic font-extralight">{room.name}</em>
                      </h3>
                    </div>
                    <room.icon className="w-10 h-10 text-brand-gold/20 group-hover:text-brand-gold/30 transition-colors duration-500" />
                  </div>

                  <p className="text-body-lg text-brand-body mb-8 leading-relaxed">
                    {room.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8 pb-8 border-b border-brand-border">
                    {room.features.slice(0, 4).map((feature, fi) => (
                      <span
                        key={fi}
                        className="px-4 py-2 bg-brand-linen border border-brand-border text-[10px] uppercase tracking-[0.15em] text-brand-muted"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-brand-gold" />
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-muted">
                      {room.guests} Guests
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Amenities Section */}
          <div className="mt-20 p-12 bg-brand-linen border border-brand-border">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-body-lg text-brand-muted">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent">
                Entire penthouse includes:
              </span>
              {[
                { icon: Home, label: "Full Floor Penthouse" },
                { icon: Wifi, label: "High-Speed WiFi" },
                { icon: Utensils, label: "Ultra-Modern Kitchen" },
                { icon: Coffee, label: "Daily Housekeeping" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-brand-ink">
                  <item.icon className="w-5 h-5 text-brand-gold" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terrace Section */}
      <section className="py-section-xl bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="relative max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
                Private Terrace
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                Your Outdoor
                <br />
                <em className="italic font-extralight">Sanctuary</em>
              </h2>
              <div className="w-16 h-px bg-brand-gold mb-8" />
              <p className="text-body-lg text-white/80 leading-relaxed mb-12 max-w-lg">
                The open terrace at The Pentouz @ Indiranagar is your private space for morning coffee, evening cocktails, or simply taking in the Bangalore skyline. Perfect for intimate gatherings or quiet contemplation.
              </p>
              <Link
                href="/destinations/indiranagar/gallery"
                className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-white border border-white/40 px-10 py-5 hover:bg-white hover:text-brand-primary transition-all duration-700 font-light"
              >
                <span className="relative z-10">View Terrace</span>
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 border border-brand-border translate-x-3 translate-y-3" />
              <Image
                src="/indiranagar/terrace-7.jpg"
                alt="Private Terrace"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="py-section-xl bg-brand-linen relative overflow-hidden">
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

      {/* Property Links */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Explore More
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Discover
              <br />
              <em className="italic font-extralight">Indiranagar</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { href: "/destinations/indiranagar/experiences", title: "Experiences", desc: "Curated activities", image: "/ooty/all/22._lawn.jpeg" },
              { href: "/destinations/indiranagar/gallery", title: "Gallery", desc: "Visual journey", image: "/indiranagar/terrace-7.jpg" },
              { href: "/destinations/indiranagar/location", title: "Location", desc: "100 Feet Road", image: "/indiranagar/living-room-5.jpg" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group relative overflow-hidden bg-brand-linen border border-brand-border hover:border-brand-gold/30 transition-all duration-700"
              >
                {/* Image overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative p-8 h-full flex flex-col justify-between min-h-[200px]">
                  <div>
                    <ArrowRight className="w-8 h-8 text-brand-gold mb-6 transition-transform duration-700 group-hover:translate-x-2" />
                    <h3 className="font-display text-2xl font-light text-brand-ink mb-3">{item.title}</h3>
                    <p className="text-body-sm text-brand-muted group-hover:text-white/80 transition-colors duration-500">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-gold transition-all duration-700 group-hover:w-full" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
