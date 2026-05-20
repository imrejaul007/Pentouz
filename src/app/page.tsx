"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import FAQ from "@/components/FAQ";
import { contactInfo, destinations, testimonials } from "@/data/content";
import { homepageFAQs } from "@/lib/schema";

const heroImages = [
  "/lavelle-road/all/terrace_1.jpg",
  "/lavelle-road/all/patio_1.jpg",
  "/lavelle-road/all/entrance_1.jpg",
  "/indiranagar/all/06._terrace_01._terrace.jpg",
  "/indiranagar/all/04._living_room_03._living_room.jpg",
  "/fernhill/all/59_property_top_view.jpg",
  "/fernhill/all/44_swimming_pool.jpg",
  "/ooty/all/24._view.jpeg",
  "/ooty/all/22._lawn.jpeg",
];

export default function HomePage() {
  const lavelle = destinations.find((destination) => destination.slug === "lavelle-road") || destinations[0];

  return (
    <>
      <Header />
      <main className="bg-[#faf7f2] text-[#1a1814]">
        {/* Hero Section */}
        <HeroSlider images={heroImages} alt="The Pentouz luxury residences">
          <div className="mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-6 sm:px-10 lg:px-16 pb-20 lg:pb-28 pt-32">
            <div className="max-w-3xl">
              <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] mb-6 animate-fade-in-up">
                The Pentouz Collection
              </p>
              <h1 className="font-['Cormorant_Garamond',serif] text-white font-light leading-[1.1] animate-fade-in-up [animation-delay:100ms]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
                Distinct stays for guests who want privacy, space, and a quieter kind of luxury.
              </h1>
              <p className="mt-8 font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/75 max-w-xl animate-fade-in-up [animation-delay:200ms]">
                Boutique city rooms on Lavelle Road, a private penthouse in Indiranagar, The Pentouz Hillside Chikmagalur, and a slower retreat in Ooty.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-5 animate-fade-in-up [animation-delay:300ms]">
                <Link
                  href="/destinations"
                  className="inline-flex items-center gap-3 bg-white text-[#1a1814] px-10 py-4 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c3a061] hover:text-white"
                >
                  Explore Properties
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-3 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] text-white/90 border border-white/30 px-10 py-4 transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]"
                >
                  Contact Concierge
                </a>
              </div>
            </div>
          </div>
        </HeroSlider>

        {/* Introduction */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 lg:py-36">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">
              <div>
                <div className="w-12 h-[1px] bg-[#c3a061] mb-8" />
                <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#8b7355] font-medium mb-6">
                  A Pentouz Stay
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.015em' }}>
                  A more private, more personal way to stay.
                </h2>
              </div>
              <div className="space-y-6 pt-4">
                <p className="font-['Lora',serif] text-base leading-[1.85] text-[#4a4a44]">
                  The Pentouz offers the perfect blend of elegance, privacy, and convenience. Each room and suite is thoughtfully designed with timeless decor and modern comforts, creating a tranquil retreat in the heart of vibrant urban settings.
                </p>
                <p className="font-['Lora',serif] text-base leading-[1.85] text-[#4a4a44]">
                  What sets us apart is our commitment to personalized service. At The Pentouz, every detail is tailored to ensure your stay is nothing short of exceptional.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 mt-4 text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#c3a061] font-medium hover:gap-5 transition-all duration-300"
                >
                  Discover Our Story
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Properties */}
        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 lg:py-36">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
              <div>
                <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#8b7355] font-medium mb-4">
                  Our Properties
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.015em' }}>
                  Extraordinary accommodations
                </h2>
              </div>
              <Link
                href="/destinations"
                className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#4a4a44] hover:text-[#c3a061] transition-colors duration-300"
              >
                View All Properties →
              </Link>
            </div>

            {/* Property Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((destination, index) => (
                <Link
                  key={destination.slug}
                  href={`/destinations/${destination.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden aspect-[3/4] mb-5">
                    <Image
                      src={destination.heroImage || destination.image}
                      alt={destination.title}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[9px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#c3a061] mb-2">
                        {destination.subtitle}
                      </p>
                      <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-light text-white leading-tight">
                        {destination.shortTitle}
                      </h3>
                    </div>
                  </div>
                  <p className="font-['Lora',serif] text-sm leading-relaxed text-[#6b6358] line-clamp-2">
                    {destination.copy}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#8b7355]">
                    <span>Explore</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 lg:py-40">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-center">
              <div>
                <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#c3a061] font-medium mb-6">
                  The Experience
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.015em' }}>
                  Experience the luxury
                </h2>
                <div className="mt-4 w-12 h-[1px] bg-[#c3a061]" />
              </div>
              <div className="space-y-6">
                <p className="font-['Lora',serif] text-base leading-[1.85] text-white/70">
                  The Pentouz offers a mix of urban excitement and serene escapades. In the vibrant hubs of UB City and Indiranagar in Bangalore, indulge in world-class dining, high-end shopping, and buzzing nightlife. Explore art galleries, attend cultural events, or unwind at chic rooftop lounges.
                </p>
                <p className="font-['Lora',serif] text-base leading-[1.85] text-white/70">
                  For a serene retreat, head to Ooty, where lush tea gardens, misty hills, and tranquil lakes await. Whether you crave the energy of the city or the calm of the hills, The Pentouz promises unforgettable moments.
                </p>
                <div className="pt-4">
                  <Link
                    href="/experiences"
                    className="inline-flex items-center gap-3 border border-white/30 text-white px-10 py-4 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]"
                  >
                    Explore Experiences
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 lg:py-36">
            <div className="text-center mb-16">
              <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#8b7355] font-medium mb-4">
                Guest Reviews
              </p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.015em' }}>
                What our guests say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="border border-[#e5dfd6] p-8 lg:p-10 bg-[#faf7f2]"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c3a061] text-[#c3a061]" strokeWidth={1.5} />
                    ))}
                  </div>
                  <p className="font-['Lora',serif] text-base leading-relaxed italic text-[#4a4a44] mb-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="pt-6 border-t border-[#e5dfd6]">
                    <p className="font-['Cormorant_Garamond',serif] text-lg text-[#1a1814]">
                      {testimonial.name}
                    </p>
                    {testimonial.location && (
                      <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.1em] text-[#8b7355] mt-1">
                        {testimonial.location}
                      </p>
                    )}
                    <p className="text-[10px] font-['Inter',sans-serif] text-[#8b7355] mt-2">
                      via {testimonial.source}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="bg-[#0f0e0c]">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
              <div>
                <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#c3a061] font-medium mb-4">
                  Gallery
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.015em' }}>
                  A visual journey
                </h2>
              </div>
              <Link
                href="/gallery"
                className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-white/60 hover:text-[#c3a061] transition-colors duration-300"
              >
                View Full Gallery →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "/lavelle-road/all/terrace_1.jpg",
                "/lavelle-road/all/patio_1.jpg",
                "/indiranagar/all/04._living_room_03._living_room.jpg",
                "/fernhill/all/44_swimming_pool.jpg",
              ].map((src, i) => (
                <Link key={i} href="/gallery" className="relative aspect-square overflow-hidden group">
                  <Image
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 lg:py-36">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] text-[#8b7355] font-medium mb-6">
                  Get in Touch
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814] mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.015em' }}>
                  Reserve your stay
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#c3a061] mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <div className="font-['Lora',serif] text-sm leading-relaxed text-[#4a4a44]">
                      <p>{contactInfo.address}</p>
                      <p>{contactInfo.city}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-8 gap-y-3">
                    {contactInfo.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-3 font-['Inter',sans-serif] text-sm text-[#4a4a44] hover:text-[#c3a061] transition-colors duration-300"
                      >
                        <Phone className="w-4 h-4 text-[#c3a061]" strokeWidth={1.5} />
                        {phone}
                      </a>
                    ))}
                  </div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="block font-['Inter',sans-serif] text-sm text-[#4a4a44] hover:text-[#c3a061] transition-colors duration-300"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="bg-white border border-[#e5dfd6] p-8 lg:p-12">
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-light text-[#1a1814] mb-4">
                  Book Direct
                </h3>
                <p className="font-['Lora',serif] text-sm leading-relaxed text-[#4a4a44] mb-8">
                  Enjoy the best rates and exclusive benefits when you book directly with us.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/destinations"
                    className="flex items-center justify-center gap-3 bg-[#0f0e0c] text-white px-8 py-4 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c3a061]"
                  >
                    Browse Properties
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-3 border border-[#0f0e0c] text-[#0f0e0c] px-8 py-4 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#0f0e0c] hover:text-white"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          items={homepageFAQs}
          title="Questions About Your Stay"
          subtitle="Everything you need to know"
          theme="light"
        />
      </main>
      <Footer />
    </>
  );
}
