import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactInfo, destinations } from "@/data/content";
import { withSiteUrl } from "@/lib/site";
import ContactForm from "./ContactForm";
import { generatePageSchemas } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact | The Pentouz",
  description:
    "Contact the Pentouz reservations and concierge team directly. Available for booking help, group stays, property guidance, and custom requests.",
  alternates: {
    canonical: withSiteUrl("/contact"),
  },
};

export default function ContactPage() {
  const contactSchema = generatePageSchemas({ type: "contact" });

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <main className="bg-[#faf7f2] text-[#1a1814]">
        <section className="relative overflow-hidden text-white">
          <div className="absolute inset-0">
            <Image src="/lavelle-road/all/reception_1.jpg" alt="Contact The Pentouz" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          <div className="relative mx-auto flex min-h-[76vh] items-end px-5 sm:px-8 lg:px-16 pb-20 lg:pb-28 pt-32">
            <div className="max-w-3xl">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] mb-4 animate-fade-in-up">Contact Pentouz</p>
              <h1 className="font-['Cormorant_Garamond',serif] font-light leading-[1.1] text-white animate-fade-in-up [animation-delay:100ms]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
                Reservations, longer stays, and concierge requests should feel effortless from the first message.
              </h1>
              <p className="mt-6 sm:mt-8 font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/75 max-w-xl animate-fade-in-up [animation-delay:200ms]">
                Use the contact form for booking help, group or extended stays, property guidance, and custom requests.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-10 lg:gap-16 lg:items-start">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">Concierge Details</p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814] mb-6 sm:mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  Reach the reservations team directly.
                </h2>

                <div className="overflow-hidden border border-[#e5dfd6] mb-4">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(`${contactInfo.address}, ${contactInfo.city}`)}&output=embed&z=15&t=m`}
                    width="100%"
                    height="280"
                    style={{ border: 0, filter: "sepia(20%) saturate(80%) brightness(95%)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Pentouz location on Google Maps"
                    className="w-full"
                  />
                </div>
                <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.12em] text-[#6b6358] mb-8 sm:mb-10">
                  {contactInfo.address}, {contactInfo.city}
                </p>

                <div className="space-y-4 sm:space-y-5">
                  <div className="border border-[#e5dfd6] bg-[#faf7f2] p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-[#c3a061] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#8b7355]">Head Office</p>
                        <p className="mt-2 font-['Lora',serif] text-sm leading-[1.7] text-[#4a4a44]">{contactInfo.address}<br />{contactInfo.city}</p>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${contactInfo.address}, ${contactInfo.city}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#c3a061] hover:text-[#8b7355] transition-colors"
                        >
                          Open in Maps
                          <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#e5dfd6] bg-[#faf7f2] p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-[#c3a061] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#8b7355]">Reservations</p>
                        <div className="mt-2 space-y-1">
                          {contactInfo.phones.map((phone) => (
                            <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="block font-['Lora',serif] text-sm leading-[1.7] text-[#4a4a44] hover:text-[#c3a061] transition-colors">
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#e5dfd6] bg-[#faf7f2] p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-[#c3a061] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#8b7355]">Email</p>
                        <a href={`mailto:${contactInfo.email}`} className="mt-2 block font-['Lora',serif] text-sm leading-[1.7] text-[#4a4a44] hover:text-[#c3a061] transition-colors">
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#e5dfd6] bg-[#faf7f2] p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-[#c3a061] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#8b7355]">Response Window</p>
                        <p className="mt-2 font-['Lora',serif] text-sm leading-[1.7] text-[#4a4a44]">Concierge team available 24/7. Most inquiries receive a response within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="max-w-2xl mb-10 sm:mb-16">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#c3a061] font-medium mb-3 sm:mb-4">Choose a Property</p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                If you already know the stay, you can go straight to the property page.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {destinations.map((dest) => (
                <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="group border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[#c3a061]/30">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={dest.image} alt={dest.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#c3a061]">{dest.subtitle}</p>
                    <h3 className="mt-2 sm:mt-3 font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-white leading-tight">{dest.shortTitle}</h3>
                    <p className="mt-2 sm:mt-3 font-['Lora',serif] text-xs sm:text-sm leading-[1.7] text-white/65 line-clamp-2">{dest.copy}</p>
                    <div className="mt-4 sm:mt-5 flex items-center gap-2 text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-white/70 group-hover:text-[#c3a061] transition-colors">
                      View Property
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
