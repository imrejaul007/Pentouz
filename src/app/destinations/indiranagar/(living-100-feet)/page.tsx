import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Phone, MapPin, Home, Bath, Wifi, Coffee, ShieldCheck, Car } from "lucide-react";
import { destinations, contactInfo } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Living at The Pentouz Indiranagar | Bangalore 3-Bedroom Penthouse",
  description: "Luxurious 3-bedroom penthouse on Bangalore's upscale 100 Feet Road. Private balconies with cityscape views. Perfect for families and extended stays.",
  alternates: {
    canonical: withSiteUrl("/destinations/indiranagar/living"),
  },
};

const indiranagar = destinations.find(d => d.slug === "indiranagar");
if (!indiranagar) notFound();

const penthouseFeatures = [
  { title: "Private Penthouse", desc: "Exclusive top-floor residence with three well-appointed bedrooms", icon: Home },
  { title: "Cityscape Views", desc: "Stunning sunrise and sunset views from private balconies", icon: MapPin },
  { title: "Spacious Living", desc: "Thoughtfully designed with plush bedding and tasteful decor", icon: Bath },
  { title: "Modern Kitchen", desc: "Ultra-modern kitchen for family gatherings", icon: Coffee },
];

export default function IndiranagarLivingPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={indiranagar?.heroImage || "/indiranagar/terrace-7.jpg"}
            alt="The Pentouz Indiranagar Living"
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
                href="/destinations/indiranagar"
                className="inline-flex items-center gap-3 text-white/80 hover:text-brand-gold transition-colors duration-300 mb-8"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-[10px] uppercase tracking-[0.15em]">Back to Property</span>
              </Link>

              <p className="text-[11px] uppercase tracking-[0.5em] text-brand-gold mb-6">
                The Pentouz Indiranagar
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                Three-Bedroom
                <br />
                <em className="italic font-extralight">Penthouse Living</em>
              </h1>
              <div className="w-24 h-px bg-brand-gold mx-auto mb-12" />
            </div>
          </div>
        </div>
      </section>

      {/* About The Penthouse */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                Three Bedroom Penthouse
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-8 leading-tight">
                Urban Luxury
                <br />
                <em className="italic font-extralight">Redefined</em>
              </h2>
              <div className="w-16 h-px bg-brand-gold mb-8" />
              <p className="text-body-lg text-brand-body mb-8 leading-relaxed">
                The Pentouz Indiranagar, a luxurious 3-bedroom penthouse nestled in the heart of one of Bangalore's most upscale neighborhoods. This exclusive property offers an exquisite blend of comfort, elegance, and convenience, making it ideal destination for families, groups, or business travelers seeking a premium experience.
              </p>
              <p className="text-body-lg text-brand-body leading-relaxed mb-8">
                The centerpiece of The Pentouz Indiranagar is its spacious and thoughtfully designed penthouse. With three well-appointed bedrooms, each featuring a private balcony, guests can enjoy stunning views of the vibrant cityscape.
              </p>
              <p className="text-body-lg text-brand-body leading-relaxed mb-8">
                These rooms are furnished with plush bedding, ample storage, and tasteful decor to create a serene and inviting ambiance. Whether you're waking up to a beautiful sunrise or winding down with twinkling city lights, views from your balcony will elevate every moment of your stay.
              </p>
              <p className="text-body-lg text-brand-body leading-relaxed mb-8">
                Located in the heart of one of Bangalore's most upscale and happening areas, The Pentouz Indiranagar offers guests the perfect base to experience the city's dynamic energy. Situated just off the iconic 100 Feet Road, this posh locality is renowned for its vibrant lifestyle, offering a mix of the finest dining, shopping, and entertainment options.
              </p>

              {/* Penthouse Features */}
              <div className="space-y-8">
                {penthouseFeatures.map((feature, i) => (
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
                  src={indiranagar?.image || "/indiranagar/terrace-7.jpg"}
                  alt="The Pentouz Indiranagar Penthouse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden">
                  <div className="absolute inset-0 border border-brand-border translate-x-2 translate-y-2" />
                  <Image
                    src="/indiranagar/living-room-5.jpg"
                    alt="Indiranagar Living Room"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-display text-lg">Sunrise Views</p>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <div className="absolute inset-0 border border-brand-border translate-x-2 translate-y-2" />
                  <Image
                    src="/indiranagar/terrace-7.jpg"
                    alt="Indiranagar Balcony Views"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-display text-lg">City Lights</p>
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
            <em className="italic font-extralight">Indiranagar</em>?
          </h2>
          <p className="text-body-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Book your penthouse today for an unforgettable Bangalore experience.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href={indiranagar?.bookingUrl || "https://hotels.eglobe-solutions.com/pentouz/booking/hotels/the-pentouz-bangalore"}
              className="group relative inline-flex items-center justify-center bg-brand-gold text-brand-ink px-14 py-6 text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-700 font-light"
            >
              <span className="relative z-10">Book Now</span>
              <ArrowRight className="ml-4 w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
            </Link>
            <Link
              href={`/destinations/indiranagar`}
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
              href="/destinations/indiranagar"
              className="flex flex-col items-center gap-4 bg-brand-ink text-white p-8 hover:bg-white hover:text-brand-ink transition-all duration-500 hover:shadow-card"
            >
              <div className="w-16 h-16 rounded-full bg-brand-linen border border-brand-border flex items-center justify-center">
                <MapPin className="w-7 h-7 text-brand-gold" />
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-1">Location</p>
                <p className="text-lg font-light">View on Map</p>
                <p className="text-body-sm text-white/70">100 Feet Road</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
