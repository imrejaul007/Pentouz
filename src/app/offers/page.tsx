import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations } from "@/data/content";

const stayOptions = [
  {
    title: "Lavelle Road",
    label: "Boutique hotel",
    description:
      "A central Bangalore stay near UB City, MG Road, business addresses, dining, and the city’s cultural core.",
    image: "/lavelle-road/all/facade_2.jpg",
    href: "/destinations/lavelle-road",
    bookingUrl: destinations.find((item) => item.slug === "lavelle-road")?.bookingUrl || "/contact",
    highlights: ["Central location", "Private studio stays", "Open terrace", "Quick city access"],
  },
  {
    title: "Indiranagar",
    label: "Private penthouse",
    description:
      "A larger, more residential luxury stay with generous living spaces, terraces, and privacy for families or longer visits.",
    image: "/indiranagar/all/04._living_room_05._living_room.jpg",
    href: "/destinations/indiranagar",
    bookingUrl: destinations.find((item) => item.slug === "indiranagar")?.bookingUrl || "/contact",
    highlights: ["Three-bedroom penthouse", "100 Feet Road address", "Open terrace", "Long-stay comfort"],
  },
  {
    title: "Ooty",
    label: "Hillside retreat",
    description:
      "A quieter mountain stay for scenic mornings, slower evenings, and a change of pace from the city.",
    image: "/ooty/all/24._view.jpeg",
    href: "/destinations/ooty",
    bookingUrl: "/contact",
    highlights: ["Hill views", "Quiet setting", "Lawns and open air", "Retreat atmosphere"],
  },
];

const directBenefits = [
  {
    title: "Direct communication",
    description: "Speak to our team directly for availability, special requests, and the best room for your stay.",
  },
  {
    title: "Better stay planning",
    description: "We help with arrival timing, local guidance, and room selection based on your trip.",
  },
  {
    title: "More personal service",
    description: "Celebrations, longer stays, and custom needs are easier to arrange when you book with us directly.",
  },
];

export default function OffersPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f7f1e7] text-brand-ink">
        <section className="relative isolate overflow-hidden bg-[#17120e] text-white">
          <div className="absolute inset-0">
            <Image
              src="/indiranagar/all/tpi_pictures_low_res_terrace_7.jpg"
              alt="The Pentouz stay collection"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.9)_0%,rgba(10,8,6,0.44)_42%,rgba(10,8,6,0.82)_100%)]" />
          </div>

          <div className="relative mx-auto max-w-[1480px] px-5 pb-20 pt-36 sm:px-8 lg:px-14 lg:pb-28 lg:pt-48">
            <div className="max-w-4xl">
              <p className="luxury-kicker text-white/70 animate-fade-in-up">Plan your stay</p>
              <h1 className="luxury-hero-title mt-6 text-white animate-fade-in-up [animation-delay:120ms]">
                Choose the Pentouz stay that fits the way you travel.
              </h1>
              <p className="luxury-copy mt-8 max-w-2xl text-white/76 animate-fade-in-up [animation-delay:220ms]">
                Each property offers a different kind of luxury, from central city convenience to private penthouse living and quiet hillside retreat.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf7f0]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="max-w-3xl animate-fade-in-up">
              <p className="luxury-kicker text-brand-accent">Our stays</p>
              <h2 className="luxury-section-title mt-5">Different destinations, the same promise of comfort.</h2>
            </div>

            <div className="mt-14 space-y-8">
              {stayOptions.map((stay, index) => (
                <div
                  key={stay.title}
                  className="grid overflow-hidden bg-white shadow-[0_24px_80px_rgba(18,15,12,0.08)] lg:grid-cols-[0.95fr_1.05fr] animate-fade-in-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="relative min-h-[320px] overflow-hidden">
                    <Image
                      src={stay.image}
                      alt={stay.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1400ms] hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-accent">{stay.label}</p>
                      <h2 className="mt-4 font-display text-4xl font-light leading-tight text-brand-ink sm:text-5xl">{stay.title}</h2>
                      <p className="mt-6 text-base leading-8 text-brand-body sm:text-lg">{stay.description}</p>
                      <div className="mt-8 flex flex-wrap gap-3">
                        {stay.highlights.map((item) => (
                          <span key={item} className="rounded-full border border-brand-border px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-brand-muted">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                      <Link href={stay.href} className="inline-flex items-center justify-center rounded-full border border-brand-border px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold">
                        View Property
                      </Link>
                      <Link href={stay.bookingUrl} className="inline-flex items-center justify-center rounded-full bg-brand-ink px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f3eadf]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div className="animate-fade-in-up">
                <p className="luxury-kicker text-brand-accent">Booking direct</p>
                <h2 className="luxury-section-title mt-5">A more personal way to arrange your stay.</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {directBenefits.map((benefit, index) => (
                  <div key={benefit.title} className="luxury-panel bg-white animate-fade-in-up" style={{ animationDelay: `${100 + index * 100}ms` }}>
                    <h3 className="font-display text-2xl font-light text-brand-ink">{benefit.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-brand-body">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#17120e] text-white">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-14 lg:py-24">
            <div>
              <p className="luxury-kicker text-brand-gold">Need help choosing?</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl">
                Our team can help you select the right stay.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Tell us whether you need a central business stay, a larger private residence, or a quieter retreat, and we’ll guide you.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:justify-end">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-white">
                Contact Concierge
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
