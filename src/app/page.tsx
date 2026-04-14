"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactInfo, destinations, testimonials } from "@/data/content";

const cityMoments = [
  {
    eyebrow: "Arts & Culture",
    title: "Exhibitions & Museum",
    description:
      "Spend your day between galleries, museum collections, and cultural spaces that keep Bengaluru creative, layered, and alive.",
    image: "/lavelle-road/all/reception_3.jpg",
    href: "/stories",
  },
  {
    eyebrow: "Nature",
    title: "Nearby Parks",
    description:
      "From Cubbon Park to slower green pockets across the city, nature is never far from the Pentouz experience.",
    image: "/ooty/all/22._lawn.jpeg",
    href: "/travel/guides/luxury-evening-walks-near-lavelle-road",
  },
  {
    eyebrow: "Dining Experiences",
    title: "Local Food Tour",
    description:
      "Explore Bengaluru through its dining rooms, coffee culture, and late-evening addresses around UB City, MG Road, and Indiranagar.",
    image: "/lavelle-road/all/restaurant_4.jpg",
    href: "/experiences",
  },
];

type SectionId = "intro" | "collection" | "experiences" | "gatherings" | "city";

function useRevealSections() {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({ hero: true });
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section-id");
            if (id) {
              setVisibleSections((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    Object.values(sectionRefs.current).forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return { visibleSections, sectionRefs };
}

export default function HomePage() {
  const { visibleSections, sectionRefs } = useRevealSections();
  const lavelle = destinations.find((destination) => destination.slug === "lavelle-road") || destinations[0];

  const setSectionRef = (id: SectionId) => (element: HTMLElement | null) => {
    sectionRefs.current[id] = element;
  };

  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  // Hero parallax + word reveal
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    // Word-by-word reveal for headline
    const headline = document.querySelector(".hero-headline");
    if (headline) {
      const words = headline.textContent?.split(" ") || [];
      headline.innerHTML = words
        .map(
          (w) =>
            `<span class="word-reveal-inline overflow-hidden inline-block"><span class="word-inner inline-block">${w}</span></span>`
        )
        .join(" ");

      const wordEls = headline.querySelectorAll(".word-inner");
      gsap.fromTo(
        wordEls,
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }

    // Parallax on hero background
    if (heroBgRef.current) {
      gsap.to(heroBgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: "section:first-of-type",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }

    // Subtle text parallax (moves slower than background)
    if (heroTextRef.current) {
      gsap.to(heroTextRef.current, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: "section:first-of-type",
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <main className="bg-[#f6efe5] text-brand-ink overflow-hidden">
        <style jsx>{`
          .word-reveal-inline {
            display: inline-block;
            overflow: hidden;
          }
          .word-inner {
            display: inline-block;
          }
        `}</style>
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#15120f] text-white">
          <div ref={heroBgRef} className="absolute inset-0 will-change-transform">
            <Image
              src="/lavelle-road/all/terrace_1.jpg"
              alt="The Pentouz luxury residences"
              fill
              priority
              sizes="100vw"
              className="object-cover scale-[1.02] animate-[fade-in-up_1.4s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.82)_0%,rgba(10,8,6,0.44)_38%,rgba(10,8,6,0.14)_70%,rgba(10,8,6,0.72)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,160,97,0.1),transparent_28%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,0.08)_0%,rgba(10,8,6,0)_28%,rgba(10,8,6,0.7)_100%)]" />
          </div>

          <div ref={heroTextRef} className="relative mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24 lg:pt-48 will-change-transform">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
              <div className="max-w-5xl">
                <p className="luxury-kicker text-white/70 animate-fade-in-up">The Pentouz</p>
                <h1 className="luxury-hero-title hero-headline mt-6 max-w-5xl text-white animate-fade-in-up [animation-delay:120ms]">
                  Distinct stays for guests who want privacy, space, and a quieter kind of luxury.
                </h1>
                <p className="luxury-copy mt-8 max-w-2xl text-white/74 animate-fade-in-up [animation-delay:220ms]">
                  Boutique city rooms on Lavelle Road, a private penthouse in Indiranagar, and a slower retreat in Ooty.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up [animation-delay:320ms]">
                  <Link
                    href="/destinations"
                    className="inline-flex items-center justify-center gap-2 bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-white"
                  >
                    Explore Destinations
                    <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                  </Link>
                  <a
                    href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white/88 transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold"
                  >
                    Speak to Concierge
                  </a>
                </div>
              </div>

              <div className="animate-fade-in-up [animation-delay:420ms] xl:justify-self-end xl:max-w-[420px]">
                <div className="border-t border-white/20 pt-6 text-white">
                  <p className="luxury-kicker text-white/58">Featured Property</p>
                  <h2 className="mt-4 font-display text-3xl font-light leading-tight text-white sm:text-4xl">
                    {lavelle.title}
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-white/72 sm:text-base">{lavelle.copy}</p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Location</p>
                      <p className="mt-2 text-sm text-white/84">Lavelle Road</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Setting</p>
                      <p className="mt-2 text-sm text-white/84">Boutique hotel</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Nearby</p>
                      <p className="mt-2 text-sm text-white/84">UB City, MG Road</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href="/destinations/lavelle-road" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:text-brand-gold">
                      View Lavelle Road
                      <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={setSectionRef("intro")}
          data-section-id="intro"
          className="relative border-t border-[#e4d8c8] bg-[#f6efe5]"
        >
          <span aria-hidden="true" className="absolute -top-8 left-0 hidden sm:block text-[6rem] sm:text-[10rem] lg:text-[16rem] font-display font-light text-brand-gold/[0.04] select-none pointer-events-none leading-none">01</span>
          <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-0 lg:px-14 lg:py-28">
            <div className={`relative lg:pr-16 transition-all duration-1000 ${visibleSections.intro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="editorial-divider-left" />
              <p className="chapter-label text-brand-accent">A Pentouz Stay</p>
              <h2 className="luxury-section-title mt-5 max-w-xl">
                A more private, more personal way to stay in Bangalore and Ooty.
              </h2>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-y-0 left-0 w-px bg-brand-gold/20" />
            </div>
            <div className={`lg:pl-16 space-y-6 text-base leading-8 text-brand-body sm:text-lg transition-all duration-1000 delay-150 ${visibleSections.intro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p>
                The Pentouz, where luxury meets exclusivity. Situated in prime locations across Bangalore and beyond, our boutique accommodations offer the perfect blend of elegance, privacy, and convenience.
              </p>
              <p>
                Each room and suite is thoughtfully designed with timeless decor and modern comforts, creating a tranquil retreat in the heart of vibrant urban settings. Whether for business or leisure, our spaces promise sophistication and serenity.
              </p>
              <p>
                What sets us apart is our commitment to personalized service. At The Pentouz, every detail is tailored to ensure your stay is nothing short of exceptional.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={setSectionRef("collection")}
          data-section-id="collection"
          className="relative bg-[#fbf7f0]"
        >
          <span aria-hidden="true" className="absolute -top-8 left-0 hidden sm:block text-[6rem] sm:text-[10rem] lg:text-[16rem] font-display font-light text-brand-gold/[0.04] select-none pointer-events-none leading-none">02</span>
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className={`relative max-w-3xl transition-all duration-1000 ${visibleSections.collection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="absolute -inset-8 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(196,160,97,0.06),transparent_60%)]" />
              <p className="luxury-kicker text-brand-accent">Extraordinary Accommodations</p>
              <h2 className="luxury-section-title mt-5">Our properties</h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {destinations.map((destination, index) => (
                <Link
                  key={destination.slug}
                  href={`/destinations/${destination.slug}`}
                  className={`border-animate group overflow-hidden bg-white shadow-[0_24px_80px_rgba(18,15,12,0.06)] transition-all duration-700 hover:-translate-y-2 ${visibleSections.collection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={destination.heroImage || destination.image}
                      alt={destination.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 25vw"
                      className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="text-[11px] uppercase tracking-[0.22em] text-white">View Property <ArrowRight className="ml-1 inline h-4 w-4" strokeWidth={1.4} /></span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">{destination.subtitle}</p>
                      <h3 className="mt-3 font-display text-3xl font-light leading-tight text-white">{destination.shortTitle}</h3>
                    </div>
                  </div>
                </Link>
              ))}
              <div className={`group overflow-hidden border border-brand-border bg-[#f0e8d8] p-8 transition-all duration-700 hover:-translate-y-2 ${visibleSections.collection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${destinations.length * 90}ms` }}>
                <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">The Collection</p>
                <h3 className="mt-4 font-display text-4xl font-light leading-tight text-brand-ink">Choose the stay that matches your trip.</h3>
                <p className="mt-4 text-sm leading-7 text-brand-body">
                  Some guests need central access, some need a private residence, and some need a quieter retreat. Pentouz is built around that difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={setSectionRef("experiences")}
          data-section-id="experiences"
          className="relative bg-[#161310] text-white"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl animate-pulse pointer-events-none" />
          <span aria-hidden="true" className="absolute -top-8 left-0 hidden sm:block text-[6rem] sm:text-[10rem] lg:text-[16rem] font-display font-light text-brand-gold/[0.04] select-none pointer-events-none leading-none">03</span>
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-14 lg:py-28">
            <div className={`relative py-12 transition-all duration-1000 ${visibleSections.experiences ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="luxury-kicker text-brand-gold">Enjoy the best moment of life</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                Experience the luxury
              </h2>
            </div>
            <div className={`transition-all duration-1000 delay-150 ${visibleSections.experiences ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="text-base leading-8 text-white/72 sm:text-lg">
                The Pentouz offers a mix of urban excitement and serene escapades, making it a perfect blend of experiences. In the vibrant hubs of UB City and Indiranagar in Bangalore, indulge in world-class dining, high-end shopping, and buzzing nightlife. Explore art galleries, attend cultural events, or unwind at chic rooftop lounges with stunning city views.
              </p>
              <p className="mt-6 text-base leading-8 text-white/72 sm:text-lg">
                For a serene retreat, head to Ooty, where lush tea gardens, misty hills, and tranquil lakes await. Enjoy scenic drives, nature trails, and cozy stays in charming surroundings. Whether you crave the energy of the city or the calm of the hills, The Pentouz promises unforgettable moments.
              </p>
              <div className="mt-8">
                <Link href="/experiences" className="btn-shimmer inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-white transition-all duration-500 hover:border-brand-gold hover:text-brand-gold">
                  Start Exploring
                  <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={setSectionRef("gatherings")}
          data-section-id="gatherings"
          className="relative bg-[#f7f0e5]"
        >
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
          <span aria-hidden="true" className="absolute -top-8 left-0 hidden sm:block text-[6rem] sm:text-[10rem] lg:text-[16rem] font-display font-light text-brand-gold/[0.04] select-none pointer-events-none leading-none">04</span>
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className={`transition-all duration-1000 ${visibleSections.gatherings ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <p className="luxury-kicker text-brand-accent">High standards of hospitality</p>
                <h2 className="luxury-section-title mt-5">
                  Make your memorable get-togethers a reality.
                </h2>
                <p className="luxury-copy mt-6 text-brand-body">
                  Turn your celebrations into an unforgettable experience at our stunning destinations. Whether you&apos;re looking for a private space with beautiful views or a vast terrace for intimate parties, we have the perfect setting.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <article
                    key={`${testimonial.name}-${index}`}
                    className={`group luxury-panel relative bg-white transition-all duration-1000 hover:-translate-y-1 hover:border-t-2 hover:border-brand-gold ${visibleSections.gatherings ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="quote-mark relative pl-8 pr-4 pt-6">
                      <span className="absolute left-0 top-4 text-5xl font-display text-brand-gold/20 leading-none select-none">&ldquo;</span>
                    </div>
                    <p className="mt-2 px-6 text-base leading-7 italic text-brand-body">{testimonial.quote}</p>
                    <div className="mt-6 border-t border-brand-border px-6 pb-6 pt-4">
                      <p className="font-display text-2xl font-light text-brand-ink">{testimonial.name}</p>
                      {testimonial.location && (
                        <p className="mt-1 text-[10px] tracking-[0.15em] text-brand-muted">{testimonial.location}</p>
                      )}
                      {testimonial.sourceUrl ? (
                        <a
                          href={testimonial.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-block text-[10px] uppercase tracking-[0.2em] text-brand-accent hover:text-brand-gold transition-colors duration-300"
                        >
                          {testimonial.source} →
                        </a>
                      ) : (
                        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-brand-muted">{testimonial.source}</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          ref={setSectionRef("city")}
          data-section-id="city"
          className="relative bg-white"
        >
          <span aria-hidden="true" className="absolute -top-8 left-0 hidden sm:block text-[6rem] sm:text-[10rem] lg:text-[16rem] font-display font-light text-brand-gold/[0.04] select-none pointer-events-none leading-none">05</span>
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className={`max-w-3xl transition-all duration-1000 ${visibleSections.city ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="luxury-kicker text-brand-accent">Local Tours & Activities</p>
              <h2 className="luxury-section-title mt-5">Discover the city</h2>
              <p className="luxury-copy mt-6 text-brand-body">
                You are in a city where people are never bored. Immerse yourself in local art exhibitions, neighborhood events, seasonal activities, parks, dining rooms, and cultural spaces.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {cityMoments.map((moment, index) => (
                <Link
                  key={moment.title}
                  href={moment.href}
                  className={`group overflow-hidden bg-[#f8f2e8] shadow-[0_24px_80px_rgba(18,15,12,0.05)] transition-all duration-700 hover:-translate-y-2 ${visibleSections.city ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={moment.image} alt={moment.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">{moment.eyebrow}</p>
                    <h3 className="city-card-title mt-4 font-display text-3xl font-light text-brand-ink transition-all duration-500">{moment.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-brand-body">{moment.description}</p>
                    <div className="city-discover-link mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-brand-ink transition-all duration-500 group-hover:gap-4 group-hover:text-brand-gold">
                      Discover More
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.4} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#161310] text-white">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-14 lg:py-28">
            <div>
              <p className="luxury-kicker text-brand-gold">Getting Here</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                Our corporate office
              </h2>
              <div className="mt-8 flex items-start gap-4 text-white/74">
                <MapPin className="mt-1 h-5 w-5 text-brand-gold" />
                <div>
                  <p>{contactInfo.address}</p>
                  <p>{contactInfo.city}</p>
                  <p className="mt-3">Email: {contactInfo.email}</p>
                </div>
              </div>
            </div>
            <div className="luxury-panel border-white/12 bg-white/[0.05] text-white">
              <p className="luxury-kicker text-brand-gold">Spend Your Time With Us</p>
              <h3 className="mt-5 font-display text-4xl font-light leading-tight text-white">
                Book a room
              </h3>
              <p className="mt-6 text-base leading-8 text-white/72 sm:text-lg">
                Everything at Pentouz is designed to make your stay unforgettable.
              </p>
              <div className="mt-8 space-y-2 text-sm text-white/82">
                <a href={`tel:${contactInfo.phones[1].replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-brand-gold">
                  <Phone className="h-4 w-4 text-brand-gold" />
                  {contactInfo.phones[1]}
                </a>
                <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-brand-gold">
                  <Phone className="h-4 w-4 text-brand-gold" />
                  {contactInfo.phones[0]}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="block transition-colors hover:text-brand-gold">
                  {contactInfo.email}
                </a>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/destinations" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:bg-brand-gold hover:text-white">
                  Reserve Your Stay
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:border-brand-gold hover:text-brand-gold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
