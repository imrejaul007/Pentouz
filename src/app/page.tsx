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
          <div className="mx-auto flex min-h-[100svh] max-w-[1600px] px-5 sm:px-8 lg:px-16 pb-16 sm:pb-20 lg:pb-28 pt-24 sm:pt-32">
            <div className="w-full flex flex-col justify-end">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#c3a061] mb-4 sm:mb-6 animate-fade-in-up">
                The Pentouz Collection
              </p>
              <h1 className="font-['Cormorant_Garamond',serif] text-white font-light leading-[1.1] animate-fade-in-up [animation-delay:100ms]" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', letterSpacing: '-0.015em' }}>
                Distinct stays for privacy, space, and a quieter kind of luxury.
              </h1>
              <p className="mt-4 sm:mt-6 font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/70 max-w-lg animate-fade-in-up [animation-delay:200ms]">
                Boutique city rooms on Lavelle Road, a private penthouse in Indiranagar, and retreats in Chikmagalur and Ooty.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up [animation-delay:300ms]">
                <Link
                  href="/destinations"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-white text-[#1a1814] px-6 sm:px-10 py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:bg-[#c3a061] hover:text-white"
                >
                  Explore Properties
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/85 border border-white/25 px-6 sm:px-10 py-4 transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]"
                >
                  Contact Concierge
                </a>
              </div>
            </div>
          </div>
        </HeroSlider>

        {/* Introduction */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-start">
              <div>
                <div className="w-10 sm:w-12 h-[1px] bg-[#c3a061] mb-6 sm:mb-8" />
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-4 sm:mb-6">
                  A Pentouz Stay
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.2] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.25rem)', letterSpacing: '-0.01em' }}>
                  A more private, more personal way to stay.
                </h2>
              </div>
              <div className="space-y-5 sm:space-y-6">
                <p className="font-['Lora',serif] text-base sm:text-base leading-[1.75] text-[#4a4a44]">
                  The Pentouz offers the perfect blend of elegance, privacy, and convenience. Each room and suite is thoughtfully designed with timeless decor and modern comforts.
                </p>
                <p className="font-['Lora',serif] text-base sm:text-base leading-[1.75] text-[#4a4a44]">
                  What sets us apart is our commitment to personalized service. Every detail is tailored to ensure your stay is nothing short of exceptional.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 sm:gap-3 mt-6 text-[11px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] text-[#c3a061] font-medium hover:gap-4 transition-all duration-300"
                >
                  Discover Our Story
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Properties */}
        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-36">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3">
                  Our Properties
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.2] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.25rem)', letterSpacing: '-0.01em' }}>
                  Extraordinary accommodations
                </h2>
              </div>
              <Link
                href="/destinations"
                className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#6b6358] hover:text-[#c3a061] transition-colors duration-300 whitespace-nowrap py-2"
              >
                View All →
              </Link>
            </div>

            {/* Property Grid - 2 columns on mobile for better layout */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
              {destinations.map((destination, index) => (
                <Link
                  key={destination.slug}
                  href={`/destinations/${destination.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden aspect-[3/4] mb-3">
                    <Image
                      src={destination.heroImage || destination.image}
                      alt={destination.title}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                      <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-[#c3a061] mb-1">
                        {destination.subtitle}
                      </p>
                      <h3 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl lg:text-2xl font-light text-white leading-tight">
                        {destination.shortTitle}
                      </h3>
                    </div>
                  </div>
                  <p className="font-['Lora',serif] text-[11px] sm:text-xs leading-relaxed text-[#6b6358] line-clamp-2">
                    {destination.copy}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.12em] text-[#8b7355]">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#c3a061] font-medium mb-4">
                  The Experience
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.2] text-white" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)', letterSpacing: '-0.01em' }}>
                  Experience the luxury
                </h2>
                <div className="mt-4 w-10 h-[1px] bg-[#c3a061]" />
              </div>
              <div className="space-y-5">
                <p className="font-['Lora',serif] text-base leading-[1.7] text-white/65">
                  The Pentouz offers a mix of urban excitement and serene escapades. In the vibrant hubs of UB City and Indiranagar, indulge in world-class dining, high-end shopping, and buzzing nightlife.
                </p>
                <p className="font-['Lora',serif] text-base leading-[1.7] text-white/65">
                  For a serene retreat, head to Ooty, where lush tea gardens, misty hills, and tranquil lakes await. Whether you crave the energy of the city or the calm of the hills, The Pentouz promises unforgettable moments.
                </p>
                <div className="pt-4">
                  <Link
                    href="/experiences"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/25 text-white px-6 sm:px-8 py-3.5 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]"
                  >
                    Explore Experiences
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3">
                Guest Reviews
              </p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.2] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', letterSpacing: '-0.01em' }}>
                What our guests say
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {testimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="border border-[#e5dfd6] p-5 sm:p-6 lg:p-8 bg-[#faf7f2]"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c3a061] text-[#c3a061]" strokeWidth={1.5} />
                    ))}
                  </div>
                  <p className="font-['Lora',serif] text-sm leading-relaxed italic text-[#4a4a44] mb-5">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-[#e5dfd6]">
                    <p className="font-['Cormorant_Garamond',serif] text-base sm:text-lg text-[#1a1814]">
                      {testimonial.name}
                    </p>
                    {testimonial.location && (
                      <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.08em] text-[#8b7355] mt-1">
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
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-14 sm:py-16 lg:py-20">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-10">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#c3a061] font-medium mb-3">
                  Gallery
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.2] text-white" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', letterSpacing: '-0.01em' }}>
                  A visual journey
                </h2>
              </div>
              <Link
                href="/gallery"
                className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-white/50 hover:text-[#c3a061] transition-colors duration-300 whitespace-nowrap py-2"
              >
                View Full Gallery →
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
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
                    sizes="(max-width: 640px) 50vw, 25vw"
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
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-14 sm:py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">
                  Get in Touch
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.2] text-[#1a1814] mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', letterSpacing: '-0.01em' }}>
                  Reserve your stay
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#c3a061] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div className="font-['Lora',serif] text-sm leading-relaxed text-[#4a4a44]">
                      <p>{contactInfo.address}</p>
                      <p>{contactInfo.city}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {contactInfo.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 font-['Inter',sans-serif] text-sm text-[#4a4a44] hover:text-[#c3a061] transition-colors duration-300"
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

              <div className="bg-white border border-[#e5dfd6] p-5 sm:p-6 lg:p-8">
                <h3 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1a1814] mb-3">
                  Book Direct
                </h3>
                <p className="font-['Lora',serif] text-sm leading-relaxed text-[#4a4a44] mb-5 sm:mb-6">
                  Enjoy the best rates and exclusive benefits when you book directly with us.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/destinations"
                    className="w-full flex items-center justify-center gap-2 bg-[#0f0e0c] text-white px-6 py-3.5 font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:bg-[#c3a061]"
                  >
                    Browse Properties
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 border border-[#0f0e0c] text-[#0f0e0c] px-6 py-3.5 font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:bg-[#0f0e0c] hover:text-white"
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
