import Link from "next/link";
import Image from "next/image";
import { destinations, contactInfo } from "@/data/content";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full Screen with Video/Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-ink">
        {/* Background Video with overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-container-xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <div className="animate-fade-in">
            <p className="text-[11px] uppercase tracking-[0.4em] text-brand-gold mb-4 font-medium">
              The Pentouz
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
              Exceptional Residences
              <br className="hidden sm:block" />
              in Prime Locations
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
              Three distinctive properties across Bengaluru and Ooty, where modern luxury meets timeless elegance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-3 bg-brand-gold text-brand-ink px-8 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-brand-ink transition-all duration-500 font-light"
              >
                Explore Properties
              </Link>
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] hover:border-brand-gold hover:bg-white/10 transition-all duration-500 font-light"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Decorative Gold Line */}
          <div className="absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2">
          <div className="flex items-center gap-2 text-white/60">
            <span className="w-2 h-2 rounded-full bg-white/20 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          </div>
        </div>
      </section>

      {/* Destinations Showcase - Full Width Cards */}
      <section className="relative py-section-2xl bg-white">
        <div className="absolute top-0 left-1/2 w-24 h-px bg-brand-gold" />
        <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Our Properties
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-4 leading-tight">
              Discover Your
              <br className="hidden sm:block" />
              <em className="italic font-extralight">Perfect Stay</em>
            </h2>
            <p className="text-lg text-brand-body max-w-2xl mx-auto leading-relaxed">
              Each property is thoughtfully designed to reflect its unique location while maintaining The Pentouz signature standards of elegance, comfort, and personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {destinations.map((dest, index) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group relative h-[70vh] sm:h-[80vh] overflow-hidden"
              >
                {/* Full Card Image */}
                <div className="relative h-full">
                  <Image
                    src={dest.heroImage || dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="100vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-60" />

                  {/* Card Content - Bottom Centered */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-center">
                    {/* Location Badge */}
                    <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-3 font-medium">
                      {dest.shortTitle}
                    </p>

                    {/* Property Name */}
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2">
                      {dest.title}
                    </h3>

                    {/* Location/Description */}
                    <p className="text-sm sm:text-base text-white/90 max-w-md mx-auto leading-relaxed mb-4">
                      {dest.subtitle}
                    </p>

                    {/* Divider */}
                    <div className="w-16 h-px bg-white/30 mx-auto mb-4" />

                    {/* Explore Button */}
                    <span className="inline-block">
                      <Link
                        href={`/destinations/${dest.slug}`}
                        className="inline-flex items-center gap-2 bg-brand-gold text-brand-ink px-6 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-brand-ink transition-all duration-500 font-light"
                      >
                        Explore Property
                      </Link>
                    </span>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-4 border-brand-gold/0 group-hover:border-brand-gold transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Elegant Feature Highlight */}
      <section className="py-section-2xl bg-brand-linen relative overflow-hidden">
        <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
                The Pentouz Experience
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-brand-ink mb-6 leading-tight">
                Distinctive Hospitality
                <br className="hidden sm:block" />
                <em className="italic font-extralight">Tailored for You</em>
              </h2>
              <div className="space-y-4 text-lg text-brand-body leading-relaxed">
                <p>
                  Each of our properties is thoughtfully designed to reflect its unique location while maintaining The Pentouz signature standards of elegance, comfort, and personalized service.
                </p>
                <p>
                  From colonial charm of Lavelle Road to the bustling energy of Indiranagar, and the serene hillside retreat of Ooty — every stay with us is crafted to exceed expectations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white border border-brand-border/30 p-8 text-center hover:shadow-xl hover:border-brand-gold/50 transition-all duration-500">
                <div className="text-5xl font-display text-brand-accent mb-3">3</div>
                <h3 className="font-display text-xl font-light text-brand-ink mb-2">Premium Properties</h3>
                <p className="text-sm text-brand-muted">Strategically located in Bengaluru's most sought-after neighborhoods and Nilgiri Hills.</p>
              </div>
              <div className="bg-white border border-brand-border/30 p-8 text-center hover:shadow-xl hover:border-brand-gold/50 transition-all duration-500">
                <div className="text-5xl font-display text-brand-accent mb-3">24/7</div>
                <h3 className="font-display text-xl font-light text-brand-ink mb-2">Dedicated Support</h3>
                <p className="text-sm text-brand-muted">Round-the-clock assistance from our experienced team, ensuring your stay is seamless from check-in to departure.</p>
              </div>
              <div className="bg-white border border-brand-border/30 p-8 text-center hover:shadow-xl hover:border-brand-gold/50 transition-all duration-500">
                <div className="text-5xl font-display text-brand-accent mb-3">100%</div>
                <h3 className="font-display text-xl font-light text-brand-ink mb-2">Personalized Service</h3>
                <p className="text-sm text-brand-muted">Every detail crafted to your preferences for an exceptional stay experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width Dark */}
      <section className="py-section-2xl bg-brand-ink relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-transparent via-brand-gold/10 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center text-white relative">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
            Ready to Book
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-6 leading-tight">
            Your Exceptional
            <br className="hidden sm:block" />
            <em className="italic font-extralight">Stay Awaits</em>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Experience The Pentouz difference — where every detail is crafted for discerning travelers who expect nothing less than extraordinary.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-ink px-10 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-500 font-light"
            >
              Browse Properties
            </Link>
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-10 py-5 text-[11px] uppercase tracking-[0.2em] hover:border-brand-gold hover:bg-white/10 transition-all duration-500 font-light"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
