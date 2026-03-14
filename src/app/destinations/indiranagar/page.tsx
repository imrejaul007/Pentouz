import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar } from "lucide-react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations, contactInfo } from "@/data/content";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Pentouz @ Indiranagar | Three Bedroom Penthouse Bangalore",
  description:
    "A private three-bedroom penthouse on 100 Feet Road, Indiranagar, designed for families, groups, and longer city stays.",
  alternates: {
    canonical: withSiteUrl("/destinations/indiranagar"),
  },
};

const travelStats = [
  { title: "Kempegowda International Airport", distance: "37 kms", time: "60 min" },
  { title: "KSR Bengaluru City Junction", distance: "10 kms", time: "35 min" },
  { title: "Indiranagar Metro Station", distance: "1 km", time: "5 min" },
];

const amenities = [
  "Prime Location",
  "Peace & Tranquillity",
  "Great Views",
  "Safe & Secure",
  "Ultra-modern Kitchen",
  "Daily Housekeeping",
  "Laundry Room",
  "Wifi & Internet",
  "State-Of-Art Entertainment",
  "Spacious Balconies",
  "Open Terrace",
  "Covered Car Parking",
];

export default function IndiranagarPage() {
  const property = destinations.find((destination) => destination.slug === "indiranagar");
  if (!property) notFound();

  return (
    <>
      <Header />
      <main className="bg-[#f7f0e5] text-brand-ink overflow-hidden">
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#15120f] text-white">
          <div className="absolute inset-0">
            <Image
              src="/indiranagar/all/06._terrace_05._terrace..jpg"
              alt={property.title}
              fill
              priority
              sizes="100vw"
              className="object-cover scale-[1.03] animate-[fade-in-up_1.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.92)_0%,rgba(10,8,6,0.62)_42%,rgba(10,8,6,0.22)_76%,rgba(10,8,6,0.82)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,0.16)_0%,rgba(10,8,6,0)_30%,rgba(10,8,6,0.78)_100%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24 lg:pt-48">
            <div className="max-w-5xl">
              <p className="luxury-kicker text-white/72 animate-fade-in-up">100 Feet Road, Indiranagar</p>
              <h1 className="luxury-hero-title mt-6 max-w-5xl text-white animate-fade-in-up [animation-delay:120ms]">
                A private <em className="italic text-brand-gold">three-bedroom penthouse</em> in one of Bengaluru&apos;s most vibrant neighborhoods.
              </h1>
              <p className="luxury-copy mt-8 max-w-3xl text-white/78 animate-fade-in-up [animation-delay:220ms]">
                The Pentouz Indiranagar, a luxurious 3-bedroom penthouse nestled in the heart of one of Bangalore&apos;s most upscale neighborhoods. This exclusive property offers an exquisite blend of comfort, elegance, and convenience, making it the ideal destination for families, groups, or business travelers seeking a premium experience.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up [animation-delay:320ms]">
                <a href={property.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-white">
                  <Calendar className="h-4 w-4" strokeWidth={1.4} />
                  Book Now
                </a>
                <Link href="/destinations/indiranagar/living" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold">
                  Explore Living
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-t border-[#e5d9c9]">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-28 lg:items-center">
            <div className="animate-fade-in-up">
              <div className="relative aspect-[4/5] overflow-hidden shadow-[0_24px_80px_rgba(18,15,12,0.08)]">
                <Image src="/indiranagar/all/04._living_room_06._living_room.jpg" alt="Indiranagar living" fill className="object-cover transition-transform duration-[1400ms] hover:scale-105" sizes="(max-width: 1024px) 100vw, 44vw" />
              </div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <p className="luxury-kicker text-brand-accent">Living</p>
              <h2 className="luxury-section-title mt-5">A penthouse designed around space, light, and private city views.</h2>
              <p className="mt-6 text-base leading-8 text-brand-body sm:text-lg">
                The centerpiece of The Pentouz Indiranagar is its spacious and thoughtfully designed penthouse. With three well-appointed bedrooms, each featuring a private balcony, guests can enjoy stunning views of the vibrant cityscape.
              </p>
              <p className="mt-5 text-base leading-8 text-brand-body sm:text-lg">
                These rooms are furnished with plush bedding, ample storage, and tasteful decor to create a serene and inviting ambiance.
              </p>
              <div className="mt-8">
                <Link href="/destinations/indiranagar/living" className="inline-flex items-center gap-2 rounded-full border border-brand-ink px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-brand-ink transition-all duration-500 hover:bg-brand-ink hover:text-white">
                  Explore Living
                  <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f0e5]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="animate-fade-in-up">
                <p className="luxury-kicker text-brand-accent">The Neighborhood</p>
                <h2 className="luxury-section-title mt-5">At the center of Bengaluru&apos;s dining, shopping, and social life.</h2>
              </div>
              <div className="space-y-6 text-base leading-8 text-brand-body sm:text-lg animate-fade-in-up animate-delay-200">
                <p>
                  Located in the heart of one of Bangalore&apos;s most upscale and happening areas, The Pentouz Indiranagar offers guests the perfect base to experience the city&apos;s dynamic energy. Situated just off the iconic 100 Feet Road, this posh locality is renowned for its vibrant lifestyle, offering a mix of the finest dining, shopping, and entertainment options.
                </p>
                <p>
                  Indiranagar&apos;s 100 Feet Road is a culinary paradise, home to some of Bangalore&apos;s top-notch restaurants and cafes.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {travelStats.map((item, index) => (
                <article key={item.title} className="luxury-panel bg-white animate-fade-in-up transition-transform duration-700 hover:-translate-y-1" style={{ transitionDelay: `${index * 100}ms` }}>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Approximate Travel Time</p>
                  <h3 className="mt-4 font-display text-3xl font-light leading-tight text-brand-ink">{item.title}</h3>
                  <p className="mt-5 text-sm uppercase tracking-[0.2em] text-brand-muted">Distance {item.distance}</p>
                  <p className="mt-4 text-3xl font-display font-light text-brand-ink">{item.time}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#15120f] text-white">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="max-w-3xl animate-fade-in-up">
              <p className="luxury-kicker text-brand-gold">The Essential In-Room Amenities</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                A penthouse stay with all the essentials you need.
              </h2>
            </div>
            <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {amenities.map((item, index) => (
                <div key={item} className="border border-white/10 bg-white/[0.03] px-4 py-4 text-[11px] uppercase tracking-[0.18em] text-white/76 animate-fade-in-up" style={{ transitionDelay: `${index * 45}ms` }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                "/indiranagar/all/02._the_skyline_suite_03._the_skyline_suite_bedroom.jpg",
                "/indiranagar/all/05._dining_-_kitchen_04._dining_room.jpg",
                "/indiranagar/all/06._terrace_01._terrace.jpg",
              ].map((image, index) => (
                <div key={image} className="relative aspect-[4/5] overflow-hidden shadow-[0_24px_80px_rgba(18,15,12,0.06)]">
                  <Image src={image} alt={`Indiranagar view ${index + 1}`} fill className="object-cover transition-transform duration-[1400ms] hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#161310] text-white">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-14 lg:py-28">
            <div>
              <p className="luxury-kicker text-brand-gold">Book A Room</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                Spacious penthouse living in one of the city&apos;s most desirable addresses.
              </h2>
            </div>
            <div className="luxury-panel border-white/12 bg-white/[0.05] text-white">
              <p className="text-sm leading-7 text-white/72">THE PENTOUZ 100 FEET ROAD<br />2022, 100 Feet Road, Indiranagar, Bangalore – 560038. India.</p>
              <p className="mt-6 text-sm leading-7 text-white/82">Email: {contactInfo.email}</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href={property.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:bg-brand-gold hover:text-white">
                  Reserve Your Stay
                </a>
                <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:border-brand-gold hover:text-brand-gold">
                  Call Concierge
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
