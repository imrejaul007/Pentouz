import Link from "next/link";
import Image from "next/image";
import { destinations, contactInfo } from "@/data/content";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Premium, Cinematic */}
      <section className="relative h-[90vh] sm:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lavelle-road/facade-1.jpg"
            alt="The Pentouz Luxury Hotels"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/40 via-brand-ink/70 to-brand-ink/90" />
        </div>

        <div className="relative z-10 max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <div className="space-y-8 animate-fade-in">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6">
              The Pentouz
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-tight">
              Exceptional Residences
              <br />
              <em className="italic font-extralight">in Prime Locations</em>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Three distinctive properties across Bengaluru and Ooty, where modern luxury meets timeless elegance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-ink px-8 py-4 text-[11px] uppercase tracking-[0.15em] hover:bg-white transition-all duration-300 font-light"
              >
                Explore Properties
              </Link>
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 text-[11px] uppercase tracking-[0.15em] hover:bg-white/10 hover:border-brand-gold transition-all duration-300 font-light"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      </section>

      {/* Destinations Preview */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6">
              Our Properties
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Discover Your
              <br />
              <em className="italic font-extralight">Perfect Stay</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto mb-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {destinations.map((dest, index) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <img
                    src={dest.heroImage || dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-2">
                      {dest.shortTitle}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-light text-white mb-2">
                      {dest.title}
                    </h3>
                    <p className="text-sm text-white/80">
                      {dest.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-section-xl bg-brand-linen">
        <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6">
                Why The Pentouz
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink mb-8 leading-tight">
                Distinctive Hospitality
                <br />
                <em className="italic font-extralight">Experience</em>
              </h2>
              <div className="space-y-4 text-base text-brand-body leading-relaxed">
                <p>
                  Each of our properties is thoughtfully designed to reflect its unique location while maintaining The Pentouz signature standards of elegance, comfort, and personalized service.
                </p>
                <p>
                  From the colonial charm of Lavelle Road to the bustling energy of Indiranagar, and the serene hillside retreat of Ooty — every stay with us is crafted to exceed expectations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-brand-border/30 p-8 text-center hover:shadow-lg hover:border-brand-gold/50 transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-linen flex items-center justify-center">
                  <span className="text-3xl font-display text-brand-accent">3</span>
                </div>
                <h3 className="font-display text-xl font-light text-brand-ink mb-2">
                  Premium Properties
                </h3>
                <p className="text-sm text-brand-muted">
                  Strategically located in Bengaluru's most sought-after neighborhoods and the Nilgiri Hills.
                </p>
              </div>
              <div className="bg-white border border-brand-border/30 p-8 text-center hover:shadow-lg hover:border-brand-gold/50 transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-linen flex items-center justify-center">
                  <span className="text-3xl font-display text-brand-accent">24/7</span>
                </div>
                <h3 className="font-display text-xl font-light text-brand-ink mb-2">
                  Dedicated Support
                </h3>
                <p className="text-sm text-brand-muted">
                  Round-the-clock assistance from our experienced team, ensuring your stay is seamless from check-in to departure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Preview */}
      <section className="py-section-xl bg-brand-ink text-white">
        <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6">
              Accommodations
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Curated Room Types
              <br />
              <em className="italic font-extralight">For Every Traveler</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto mb-12" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "King Studio", size: "475 sq ft", price: "From ₹6,800/night" },
              { name: "Queen Studio", size: "450 sq ft", price: "From ₹6,200/night" },
              { name: "Heritage Suite", size: "900 sq ft", price: "From ₹12,000/night" },
              { name: "3-Bedroom Penthouse", size: "6,000 sq ft", price: "From ₹20,000/night" },
            ].map((room) => (
              <div
                key={room.name}
                className="group bg-white/5 border border-white/10 p-6 hover:bg-white hover:border-brand-gold/50 transition-all duration-500"
              >
                <div className="text-[10px] uppercase tracking-[0.15em] text-brand-gold mb-2">
                  {room.name}
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-white/70">{room.size}</p>
                  <p className="text-lg font-display font-light text-white">{room.price}</p>
                </div>
                <div className="mt-4 h-[1px] w-0 bg-brand-gold/30 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 text-[11px] uppercase tracking-[0.15em] hover:bg-brand-gold hover:text-brand-ink transition-all duration-300"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-xl bg-brand-linen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6">
            Ready to Book
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-brand-ink mb-6 leading-tight">
            Your Exceptional Stay
            <br />
            <em className="italic font-extralight">Awaits</em>
          </h2>
          <p className="text-lg text-brand-body max-w-2xl mx-auto leading-relaxed mb-10">
            Experience The Pentouz difference — where every detail is crafted for discerning travelers who expect nothing less than extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center gap-2 bg-brand-ink text-white px-10 py-5 text-[11px] uppercase tracking-[0.15em] hover:bg-brand-accent transition-all duration-300 font-light"
            >
              Browse Properties
            </Link>
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-ink text-brand-ink px-10 py-5 text-[11px] uppercase tracking-[0.15em] hover:bg-brand-gold transition-all duration-300 font-light"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
