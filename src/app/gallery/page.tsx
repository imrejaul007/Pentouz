import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const destinationMoments = [
  {
    name: "Lavelle Road",
    title: "Boutique city luxury in the heart of Bangalore.",
    href: "/destinations/lavelle-road",
    image: "/lavelle-road/all/terrace_1.jpg",
    detail: "A quieter address near UB City, MG Road, and the business core.",
  },
  {
    name: "Indiranagar",
    title: "A private penthouse made for longer, more relaxed stays.",
    href: "/destinations/indiranagar",
    image: "/indiranagar/all/04._living_room_05._living_room.jpg",
    detail: "Large interiors, open terrace, and the energy of 100 Feet Road.",
  },
  {
    name: "Ooty",
    title: "Misty hills, quiet mornings, and a gentler pace of stay.",
    href: "/destinations/ooty",
    image: "/ooty/all/24._view.jpeg",
    detail: "A hillside retreat with views, lawns, and a calmer rhythm.",
  },
];

const galleryFrames = [
  { src: "/lavelle-road/all/facade_1.jpg", alt: "Lavelle Road facade", span: "lg:col-span-5" },
  { src: "/lavelle-road/all/9042_king_suite_1.jpg", alt: "Lavelle Road king studio", span: "lg:col-span-3" },
  { src: "/lavelle-road/all/reception_2.jpg", alt: "Lavelle Road reception", span: "lg:col-span-4" },
  { src: "/indiranagar/all/tpi_pictures_low_res_terrace_7.jpg", alt: "Indiranagar terrace", span: "lg:col-span-4" },
  { src: "/indiranagar/all/02._the_skyline_suite_08._the_skyline_suite_bathroom.jpg", alt: "Indiranagar suite bath", span: "lg:col-span-3" },
  { src: "/indiranagar/all/05._dining_-_kitchen_02._kitchen.jpg", alt: "Indiranagar kitchen", span: "lg:col-span-5" },
  { src: "/ooty/all/1._facade.jpeg", alt: "Ooty facade", span: "lg:col-span-5" },
  { src: "/ooty/all/20._restaurant.jpeg", alt: "Ooty dining", span: "lg:col-span-3" },
  { src: "/ooty/all/22._lawn.jpeg", alt: "Ooty lawn", span: "lg:col-span-4" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f7f1e7] text-brand-ink">
        <section className="relative isolate overflow-hidden bg-[#17120e] text-white">
          <div className="absolute inset-0">
            <Image
              src="/lavelle-road/all/restaurant_4.jpg"
              alt="The Pentouz gallery hero"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.88)_0%,rgba(10,8,6,0.46)_45%,rgba(10,8,6,0.78)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,160,97,0.16),transparent_30%)]" />
          </div>

          <div className="relative mx-auto max-w-[1480px] px-5 pb-20 pt-36 sm:px-8 lg:px-14 lg:pb-28 lg:pt-48">
            <div className="max-w-4xl">
              <p className="luxury-kicker text-white/70 animate-fade-in-up">A closer look at The Pentouz</p>
              <h1 className="luxury-hero-title mt-6 text-white animate-fade-in-up [animation-delay:120ms]">
                Spaces shaped with warmth, privacy, and quiet luxury.
              </h1>
              <p className="luxury-copy mt-8 max-w-2xl text-white/76 animate-fade-in-up [animation-delay:220ms]">
                From central Bangalore addresses to our hillside retreat in Ooty, every stay is designed around comfort, detail, and a stronger sense of place.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf7f0]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="max-w-3xl animate-fade-in-up">
              <p className="luxury-kicker text-brand-accent">The collection</p>
              <h2 className="luxury-section-title mt-5">Three distinct stays, one signature of comfort.</h2>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {destinationMoments.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group overflow-hidden bg-white shadow-[0_24px_80px_rgba(18,15,12,0.08)] transition-all duration-700 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${120 + index * 100}ms` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">{item.name}</p>
                      <h3 className="mt-3 font-display text-3xl font-light leading-tight">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/72">{item.detail}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f4ecdf]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div className="animate-fade-in-up">
                <p className="luxury-kicker text-brand-accent">Inside the details</p>
                <h2 className="luxury-section-title mt-5">The mood of each stay lives in the small things.</h2>
              </div>
              <p className="text-base leading-8 text-brand-body sm:text-lg animate-fade-in-up [animation-delay:160ms]">
                Layered materials, calm lighting, generous room proportions, and better privacy shape the Pentouz experience. This gallery is kept simple on purpose, so the images can carry the feeling of the properties without clutter.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {galleryFrames.map((frame, index) => (
                <div
                  key={frame.src}
                  className={`${frame.span} group relative overflow-hidden bg-white animate-fade-in-up`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[5/4]">
                    <Image
                      src={frame.src}
                      alt={frame.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#17120e] text-white">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-14 lg:py-24">
            <div>
              <p className="luxury-kicker text-brand-gold">Plan your stay</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white sm:text-5xl">
                Discover the property that fits your trip best.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Boutique city rooms on Lavelle Road, a private penthouse in Indiranagar, or a slower escape in Ooty.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:justify-end">
              <Link href="/destinations" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-white">
                Explore Properties
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-white/84 transition-all duration-500 hover:border-brand-gold hover:text-brand-gold">
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
