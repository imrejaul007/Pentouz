import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Phone, MapPin, Building2, Wifi, Coffee, ShieldCheck, Car } from "lucide-react";
import { destinations, contactInfo } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Living at The Pentouz Lavelle Road | Bangalore Studio Hotel",
  description: "Six exquisite studio rooms with panoramic city views on Bangalore's prestigious Lavelle Road. Top floor luxury with modern amenities.",
  alternates: {
    canonical: withSiteUrl("/destinations/lavelle-road/living"),
  },
};

const lavelleRoad = destinations.find(d => d.slug === "lavelle-road");
if (!lavelleRoad) notFound();

const studioFeatures = [
  { title: "Panoramic City Views", desc: "Each studio offers stunning views of Bangalore's skyline from the top floor", icon: Building2 },
  { title: "Spacious Layouts", desc: "Thoughtfully designed studios combining elegance with modern comfort", icon: Wifi },
  { title: "Modern Amenities", desc: "High-speed WiFi, smart TVs, and premium furnishings throughout", icon: Coffee },
  { title: "Private Retreat", desc: "Quiet oasis in the heart of vibrant Lavelle Road", icon: ShieldCheck },
];

export default function LavelleRoadLivingPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={lavelleRoad?.heroImage || "/lavelle-road/terrace-1.jpg"}
            alt="The Pentouz Lavelle Road Living"
            fill
            priority
            className="object-cover scale-110"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-container-xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-4xl text-center">
              <Link
                href="/destinations/lavelle-road"
                className="inline-flex items-center gap-3 text-white/80 hover:text-brand-gold transition-colors duration-300 mb-8"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-[10px] uppercase tracking-[0.15em]">Back to Property</span>
              </Link>

              <p className="text-[11px] uppercase tracking-[0.5em] text-brand-gold mb-6">
                The Pentouz Lavelle Road
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                Luxury Living
                <br />
                <em className="italic font-extralight">in the Heart of Bangalore</em>
              </h1>
              <div className="w-24 h-px bg-brand-gold mx-auto mb-12" />
            </div>
          </div>
        </div>
      </section>

      {/* About The Living Space */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                Boutique Hotel
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-8 leading-tight">
                Six Exquisite
                <br />
                <em className="italic font-extralight">Studio Rooms</em>
              </h2>
              <div className="w-16 h-px bg-brand-gold mb-8" />
              <p className="text-body-lg text-brand-body mb-8 leading-relaxed">
                Perched in the heart of Bangalore's prestigious Lavelle Road, The Pentouz offers an unparalleled blend of tranquility and sophistication. Nestled amidst one of the city's most coveted neighborhoods, our boutique hotel provides an oasis of peace while keeping you connected to the vibrancy of urban life.
              </p>
              <p className="text-body-lg text-brand-body leading-relaxed">
                The Pentouz Lavelle Road boasts six exquisitely designed, spacious studio rooms located on the top floor, each offering stunning panoramic views of the cityscape. These well-appointed studios are thoughtfully curated to cater to the discerning traveler, combining elegance with modern comforts.
              </p>
              <p className="text-body-lg text-brand-body leading-relaxed mb-8">
                Whether you're in Bangalore for business or leisure, you'll find every detail tailored to enhance your stay. The open terrace offers a perfect space for morning coffee or evening relaxation with the city lights as your backdrop.
              </p>

              {/* Studio Features */}
              <div className="space-y-8">
                {studioFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-6 p-6 bg-brand-linen border border-brand-border hover:border-brand-gold/30 transition-all duration-500 hover:shadow-card">
                    <div className="w-14 h-14 rounded-full bg-white border border-brand-border flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl lg:text-2xl font-light text-brand-ink mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-body-sm text-brand-muted">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image Gallery */}
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 border border-brand-border translate-x-3 translate-y-3" />
                <Image
                  src={lavelleRoad?.image || "/lavelle-road/terrace-1.jpg"}
                  alt="The Pentouz Lavelle Road Terrace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden">
                  <div className="absolute inset-0 border border-brand-border translate-x-2 translate-y-2" />
                  <Image
                    src="/lavelle-road/terrace-1.jpg"
                    alt="The Pentouz Lavelle Road Terrace View"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-display text-lg">Panoramic Views</p>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <div className="absolute inset-0 border border-brand-border translate-x-2 translate-y-2" />
                  <Image
                    src="/lavelle-road/terrace-1.jpg"
                    alt="The Pentouz Lavelle Road Evening View"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-display text-lg">Evening Ambiance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-section-xl bg-brand-ink text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-24 h-px bg-brand-gold mx-auto mb-12" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
            Ready to Experience
            <br />
            <em className="italic font-extralight">Lavelle Road</em>?
          </h2>
          <p className="text-body-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Book your studio today for an unforgettable Bangalore experience.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="https://bookmystay.io/rooms/37853"
              className="group relative inline-flex items-center justify-center bg-brand-gold text-brand-ink px-14 py-6 text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-700 font-light"
            >
              <span className="relative z-10">Book Now</span>
              <ArrowRight className="ml-4 w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
            </Link>
            <Link
              href={`/destinations/lavelle-road`}
              className="group border border-white/40 px-12 py-6 text-[11px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-brand-ink transition-all duration-700 font-light"
            >
              <MapPin className="mr-3 w-5 h-5" />
              View Property
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-section-xl bg-brand-linen">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Contact Us
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6">
              Make Your Reservation
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className="flex flex-col items-center gap-4 bg-white border border-brand-border p-8 hover:border-brand-gold/50 transition-all duration-500 hover:shadow-card"
            >
              <div className="w-16 h-16 rounded-full bg-brand-linen border border-brand-border flex items-center justify-center">
                <Phone className="w-7 h-7 text-brand-accent" />
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-1">Call</p>
                <p className="text-lg font-light">{contactInfo.phones[0]}</p>
                <p className="text-body-sm text-brand-muted">24/7 available</p>
              </div>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex flex-col items-center gap-4 bg-white border border-brand-border p-8 hover:border-brand-gold/50 transition-all duration-500 hover:shadow-card"
            >
              <div className="w-16 h-16 rounded-full bg-brand-linen border border-brand-border flex items-center justify-center">
                <Coffee className="w-7 h-7 text-brand-accent" />
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-1">Email</p>
                <p className="text-lg font-light">{contactInfo.email}</p>
                <p className="text-body-sm text-brand-muted">Quick response</p>
              </div>
            </a>
            <Link
              href="/destinations/lavelle-road"
              className="flex flex-col items-center gap-4 bg-brand-ink text-white p-8 hover:bg-white hover:text-brand-ink transition-all duration-500 hover:shadow-card"
            >
              <div className="w-16 h-16 rounded-full bg-brand-linen border border-brand-border flex items-center justify-center">
                <MapPin className="w-7 h-7 text-brand-gold" />
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-1">Location</p>
                <p className="text-lg font-light">View on Map</p>
                <p className="text-body-sm text-white/70">Lavelle Road</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
