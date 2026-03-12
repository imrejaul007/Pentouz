import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Users, Navigation, Train, Coffee, Building2, Home } from "lucide-react";
import { destinations, contactInfo } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Location | The Pentouz @ Indiranagar",
  description: "Prime location on Bangalore's upscale 100 Feet Road with convenient access to UB City, MG Road, and transport hubs.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/indiranagar/location",
  },
};

const indiranagar = destinations.find(d => d.slug === "indiranagar");
if (!indiranagar) notFound();

export default function IndiranagarLocationPage() {
  return (
    <>
      <Header />

      {/* Cinematic Hero */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/indiranagar/terrace-7.jpg"
            alt="The Pentouz @ Indiranagar"
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
                Location Details
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-[0.9] tracking-tight animate-fade-up stagger-2">
                100 Feet Road
              </h1>
              <div className="w-24 h-px bg-brand-gold mb-8 animate-fade-up stagger-3" />
              <p className="text-xl text-white/90 mb-6 font-light animate-fade-up stagger-4">
                Bangalore, India
              </p>
              <p className="text-lg text-white/70 max-w-2xl font-light leading-relaxed animate-fade-up stagger-5">
                Nestled in Bangalore's most prestigious neighborhood, The Pentouz Indiranagar offers urban luxury with tranquil privacy. Your private penthouse retreat in the heart of the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact & Transport */}
            <div className="space-y-12">
              {/* Contact Info */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                  Contact Information
                </p>
                <div className="w-16 h-px bg-brand-gold mb-8" />
                <p className="text-body-lg text-brand-body mb-8">
                  {contactInfo.phones[0]} • {contactInfo.email}
                </p>
                <div className="space-y-4">
                  <Link
                    href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                    className="group flex items-center gap-4 text-brand-ink hover:text-brand-accent transition-colors duration-700"
                  >
                    <div className="w-14 h-14 rounded-full bg-brand-linen border border-brand-border flex items-center justify-center group-hover:border-brand-gold/50 transition-all duration-500">
                      <Phone className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-brand-muted block">Call</span>
                      <span className="text-body-lg text-brand-ink">{contactInfo.phones[0]}</span>
                    </div>
                  </Link>
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="group flex items-center gap-4 text-brand-ink hover:text-brand-accent transition-colors duration-700"
                  >
                    <div className="w-14 h-14 rounded-full bg-brand-linen border border-brand-border flex items-center justify-center group-hover:border-brand-gold/50 transition-all duration-500">
                      <Users className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-brand-muted block">Email</span>
                      <span className="text-body-lg text-brand-ink">{contactInfo.email}</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Getting Around */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                  Getting Around
                </p>
                <div className="w-16 h-px bg-brand-gold mb-8" />
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: "UB City Mall", desc: "5-minute walk to premium shopping and dining" },
                    { icon: Train, title: "Indiranagar Metro", desc: "1 km - connect across Bangalore effortlessly" },
                    { icon: Coffee, title: "Cubbon Park", desc: "15-minute drive for peaceful mornings" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <item.icon className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <p className="font-display text-lg text-brand-ink mb-1">{item.title}</p>
                        <p className="text-body-sm text-brand-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Neighborhood */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                The Neighborhood
              </p>
              <div className="w-16 h-px bg-brand-gold mb-8" />
              <div className="relative aspect-[4/3] mb-8 overflow-hidden">
                <div className="absolute inset-0 border border-brand-border translate-x-3 translate-y-3" />
                <Image
                  src="/indiranagar/living-room-5.jpg"
                  alt="Indiranagar Neighborhood"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-body-lg text-brand-body leading-relaxed">
                100 Feet Road is one of Bangalore's most prestigious addresses. The neighborhood is alive with boutique cafes, upscale dining, and vibrant nightlife, yet our penthouse offers a peaceful retreat above it all. Perfect balance of urban accessibility and residential tranquility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terrace Section */}
      <section className="py-section-xl bg-brand-linen relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                Private Terrace
              </p>
              <div className="w-16 h-px bg-brand-gold mb-8" />
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-8 leading-tight">
                Your Outdoor
                <br />
                <em className="italic font-extralight">Sanctuary</em>
              </h2>
              <div className="w-16 h-px bg-brand-gold mb-12" />
              <p className="text-body-lg text-brand-body leading-relaxed mb-8">
                The open terrace at The Pentouz @ Indiranagar is your private space for morning coffee, evening cocktails, or simply taking in Bangalore skyline. Perfect for intimate gatherings or quiet contemplation.
              </p>
              <Link
                href="/destinations/indiranagar/gallery"
                className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink hover:text-brand-accent transition-all duration-700 font-light"
              >
                <span>View Terrace Gallery</span>
                <span className="w-8 h-px bg-brand-accent transition-all duration-700 group-hover:w-12" />
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 border border-brand-border translate-x-3 translate-y-3" />
              <Image
                src="/indiranagar/terrace-7.jpg"
                alt="Private Terrace"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map CTA */}
      <section className="py-section-xl bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
            Plan Your Journey
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-tight">
            Ready to Visit
            <br />
            <em className="italic font-extralight">Indiranagar</em>?
          </h2>
          <div className="w-24 h-px bg-brand-gold mx-auto mb-12" />
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://maps.google.com/?q=2022%20100%20Feet%20Road%2C%20Indiranagar%2C%20Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-white text-brand-primary px-12 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-700 font-light"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Navigation className="w-5 h-5" />
                Get Directions
              </span>
              <div className="absolute inset-0 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <span className="absolute inset-0 flex items-center justify-center text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                Get Directions
              </span>
            </Link>
            <Link
              href={indiranagar?.bookingUrl || "https://hotels.eglobe-solutions.com/pentouz/booking/hotels/the-pentouz-bangalore"}
              className="group border-2 border-brand-primary text-brand-primary px-12 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-primary hover:text-white transition-all duration-700 font-light"
            >
              <span className="flex items-center gap-3">
                Book Your Stay
              </span>
            </Link>
          </div>
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
              { href: "/destinations/indiranagar/rooms", title: "Rooms", desc: "Three private bedrooms", image: "/indiranagar/skyline-suite.jpg" },
              { href: "/destinations/indiranagar/experiences", title: "Experiences", desc: "Curated activities", image: "/ooty/all/22._lawn.jpeg" },
              { href: "/destinations/indiranagar/gallery", title: "Gallery", desc: "Visual journey", image: "/indiranagar/terrace-7.jpg" },
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
