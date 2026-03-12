import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Users, Navigation } from "lucide-react";
import { destinations, contactInfo } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Location | The Pentouz @ Ooty",
  description: "The Pentouz Windsor Heights is located on Elk Hill in Ooty, offering easy access to Ooty Lake, Botanical Gardens, and other attractions.",
  alternates: {
    canonical: "https://thepentouz.com/destinations/ooty/location",
  },
};

const ooty = destinations.find(d => d.slug === "ooty");
if (!ooty) notFound();

export default function OotyLocationPage() {
  return (
    <>
      <Header />

      {/* Full-Screen Hero */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/ooty/view-24.jpeg"
            alt="The Pentouz @ Ooty"
            fill
            priority
            className="object-cover scale-105 animate-fade-in"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-container-xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.4em] text-brand-gold mb-6 animate-fade-up">
                Location Details
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight animate-fade-up stagger-2">
                Elk Hill,
                <br />
                <em className="italic font-extralight">Ooty</em>
              </h1>
              <div className="w-24 h-px bg-brand-gold mb-8 animate-fade-up stagger-3" />
              <p className="text-xl text-white/90 mb-6 font-light animate-fade-up stagger-4">
                Tamil Nadu, India
              </p>
              <p className="text-lg text-white/70 max-w-2xl font-light leading-relaxed animate-fade-up stagger-5">
                Perched on Elk Hill, surrounded by mist-covered tea gardens and colonial charm, The Pentouz Windsor Heights offers a tranquil retreat with easy access to Ooty town.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                  Contact Information
                </p>
                <p className="text-body-lg text-brand-body mb-8">
                  {contactInfo.phones[0]} • {contactInfo.email}
                </p>
                <div className="space-y-4">
                  <Link
                    href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                    className="group flex items-center gap-4 text-brand-ink hover:text-brand-accent transition-colors duration-700"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-linen border border-brand-border flex items-center justify-center group-hover:border-brand-gold transition-all duration-500">
                      <Phone className="w-5 h-5 text-brand-gold" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-light">
                      Call {contactInfo.phones[0].replace(/\s/g, "")}
                    </span>
                  </Link>
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="group flex items-center gap-4 text-brand-ink hover:text-brand-accent transition-colors duration-700"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-linen border border-brand-border flex items-center justify-center group-hover:border-brand-gold transition-all duration-500">
                      <Users className="w-5 h-5 text-brand-gold" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-light">
                      Email {contactInfo.email}
                    </span>
                  </Link>
                </div>
              </div>

              {/* Getting Around */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                  Getting Around
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-gold text-sm font-light">1</span>
                    </div>
                    <div>
                      <p className="font-display text-lg text-brand-ink mb-1">Ooty Town Center</p>
                      <p className="text-body-sm text-brand-muted">10 minutes by auto to main market area</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-gold text-sm font-light">2</span>
                    </div>
                    <div>
                      <p className="font-display text-lg text-brand-ink mb-1">Ooty Railway Station</p>
                      <p className="text-body-sm text-brand-muted">15 minutes - board heritage Nilgiri Mountain Railway</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-gold text-sm font-light">3</span>
                    </div>
                    <div>
                      <p className="font-display text-lg text-brand-ink mb-1">Ooty Lake</p>
                      <p className="text-body-sm text-brand-muted">3 km - popular for boating and evening walks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Neighborhood */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                The Neighborhood
              </p>
              <div className="relative aspect-[4/3] mb-8">
                <Image
                  src="/ooty/view-24.jpeg"
                  alt="Ooty Neighborhood"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-body-lg text-brand-body leading-relaxed">
                Elk Hill offers panoramic views of Nilgiri hills and tea gardens. The area is peaceful yet accessible, with easy connections to Ooty's main attractions including Ooty Lake, Botanical Gardens, and Doddabetta Peak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directions CTA */}
      <section className="py-section-xl bg-brand-primary">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
              Plan Your Journey
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
            Ready to Visit?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://maps.google.com/?q=Windsor%20Heights%2C%20Elk%20Hill%2C%20Ooty"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-white text-brand-primary px-10 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-700 font-light"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Navigation className="w-5 h-5" />
                Get Directions
              </span>
            </Link>
            <Link
              href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
              className="group border border-white/40 px-10 py-5 text-[11px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-brand-primary transition-all duration-700 font-light"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { href: "/destinations/ooty/rooms", title: "Rooms", desc: "Choose your perfect room" },
              { href: "/destinations/ooty/near", title: "Nearby", desc: "Explore attractions" },
              { href: "/destinations/ooty", title: "Property", desc: "Back to overview" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group p-8 bg-brand-linen border border-brand-border hover:border-brand-gold/30 transition-all duration-700"
              >
                <ArrowRight className="w-6 h-6 text-brand-gold mb-6 transition-transform duration-700 group-hover:translate-x-2" />
                <h3 className="font-display text-2xl font-light text-brand-ink mb-3">{item.title}</h3>
                <p className="text-body-sm text-brand-muted">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
