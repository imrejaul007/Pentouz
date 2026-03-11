import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Users } from "lucide-react";
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
      <main className="bg-[#f8f7f5] min-h-screen">
        {/* Location Hero */}
        <section className="relative h-[40vh] min-h-[500px] bg-gradient-to-br from-black/80 via-brand-gold/50 to-black/40">
          <div className="absolute inset-0 left-0 right-0 bottom-0 w-full h-full">
            <Image
              src="/ooty/view-24.jpeg"
              alt="The Pentouz @ Ooty"
              fill
              priority
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(max-width: 1920px) 100vw, 50vw"
            />
            <div className="absolute inset-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-t from-black/60 via-white/30 to-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end items-end p-12">
                <div className="max-w-3xl">
                  <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-light max-w-4xl mb-4 drop-shadow-lg">
                    Ooty Location
                  </h1>
                  <p className="text-2xl text-white mb-6 max-w-3xl">
                    Elk Hill, Ooty, Tamil Nadu
                  </p>
                  <p className="text-lg text-brand-accent mb-4">
                    Perched on Elk Hill, surrounded by mist-covered tea gardens and colonial charm, The Pentouz Windsor Heights offers a tranquil retreat with easy access to Ooty town.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Details */}
        <section className="py-20 bg-[#f8f7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <h3 className="font-display text-2xl font-light mb-6 text-brand-accent">
                  Contact Information
                </h3>
                <p className="text-base text-brand-body mb-6">
                  {contactInfo.phones[0]} • {contactInfo.email}
                </p>
                <div className="mt-8">
                  <Link
                    href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-3 text-brand-ink hover:text-brand-accent transition-colors duration-500 group"
                  >
                    <Phone className="w-5 h-5 text-brand-gold" />
                    <span className="ml-3 text-[10px] uppercase tracking-[0.18em]">
                      Call {contactInfo.phones[0].replace(/\s/g, "")}
                    </span>
                  </Link>
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center gap-3 text-brand-ink hover:text-brand-accent transition-colors duration-500 group"
                  >
                    <Users className="w-5 h-5 text-brand-gold" />
                    <span className="ml-3 text-[10px] uppercase tracking-[0.18em]">Email {contactInfo.email}</span>
                  </Link>
                </div>
              </div>

              {/* Getting Around */}
              <div className="lg:col-span-1">
                <h3 className="font-display text-2xl font-light mb-6 text-brand-accent">
                  Getting Around
                </h3>
                <div className="space-y-4">
                  <p className="text-base text-brand-body">
                    <strong>Ooty Town Center:</strong> 10 minutes by auto to main market area.
                  </p>
                  <p className="text-base text-brand-body">
                    <strong>Ooty Railway Station:</strong> 15 minutes - board heritage Nilgiri Mountain Railway here.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="https://maps.google.com/?q=Windsor%20Heights%2C%20Elk%20Hill%2C%20Ooty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-brand-ink hover:text-brand-accent transition-colors duration-500 group"
                    >
                      <MapPin className="w-5 h-5 text-brand-gold" />
                      <span className="ml-3 text-[10px] uppercase tracking-[0.18em]">
                        Get Directions
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Neighborhood */}
              <div className="lg:col-span-1 bg-white border border-brand-border p-8">
                <h3 className="font-display text-2xl font-light mb-6 text-brand-accent">
                  The Neighborhood
                </h3>
                <p className="text-base text-brand-body">
                  Elk Hill offers panoramic views of Nilgiri hills and tea gardens. The area is peaceful yet accessible, with easy connections to Ooty's main attractions including Ooty Lake, Botanical Gardens, and Doddabetta Peak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-ink text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <p className="text-lg mb-8 max-w-3xl">
              Ready to experience The Pentouz @ Ooty?
            </p>
            <Link
              href={ooty?.bookingUrl || "https://bookmystay.io/rooms/37853"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-brand-ink px-8 py-4 mt-6 hover:bg-brand-accent transition-all duration-500 font-light"
            >
              Book Your Stay
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
