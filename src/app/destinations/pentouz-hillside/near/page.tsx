import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Mountain, Coffee, Waves, Landmark, Sun, TreePine, Palmtree, Navigation, Compass } from "lucide-react";
import { destinations } from "@/data/content";
import { withSiteUrl } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nearby Attractions | The Pentouz Hillside Chikmagalur",
  description: "Explore attractions near The Pentouz Hillside Chikmagalur - from coffee plantations and waterfalls to trekking peaks and wildlife sanctuaries in Karnataka's coffee country.",
  alternates: {
    canonical: withSiteUrl("/destinations/pentouz-hillside/near"),
  },
};

const pentouzHillside = destinations.find(d => d.slug === "pentouz-hillside");
if (!pentouzHillside) notFound();

const nearbyAttractions = [
  {
    id: 1,
    name: "Coffee Plantations",
    distance: "0-15 km",
    time: "10-30 minutes",
    description: "Chikmagalur is famous for its sprawling coffee estates. Take guided tours through lush plantations, learn about coffee processing from cherry to cup, and enjoy freshbrew straight from the source.",
    image: "/fernhill/all/26_tea_coffee.jpg",
    icon: Coffee,
  },
  {
    id: 2,
    name: "Mullayanagiri Peak",
    distance: "21 km",
    time: "45 minutes",
    description: "The highest peak in Karnataka at 1,931 meters. A popular trekking destination with stunning views of the Western Ghats. The trail winds through dense forest and rocky terrain to the summit.",
    image: "/fernhill/all/03_exterior.jpg",
    icon: Mountain,
  },
  {
    id: 3,
    name: "Baba Budan Giri",
    distance: "22 km",
    time: "50 minutes",
    description: "A historic pilgrimage site where the legendary saint Baba Budan first planted coffee in India. Features ancient caves, a shrine, and panoramic views of the surrounding hills.",
    image: "/fernhill/all/01_exterior.jpg",
    icon: Landmark,
  },
  {
    id: 4,
    name: "Hebbe Falls",
    distance: "10 km",
    time: "30 minutes",
    description: "A majestic two-tiered waterfall cascading from a height of 168 meters. Surrounded by dense coffee plantations and forest, the falls are best visited during the monsoon season.",
    image: "/fernhill/all/04_exterior.jpg",
    icon: Waves,
  },
  {
    id: 5,
    name: "Bhadra Wildlife Sanctuary",
    distance: "35 km",
    time: "1 hour",
    description: "A biodiversity hotspot spanning 492 square kilometers. Home to tigers, leopards, elephants, and over 200 species of birds. Jeep safaris offer excellent wildlife viewing opportunities.",
    image: "/fernhill/all/05_exterior.jpg",
    icon: Compass,
  },
  {
    id: 6,
    name: "Kemmanagundi",
    distance: "55 km",
    time: "1.5 hours",
    description: "A charming hill station at 1,431 meters elevation. Known for its scenic beauty, lush gardens, and the famous Koti Basavanna statue. The Hebbe Falls is accessible from here.",
    image: "/fernhill/all/06_exterior.jpg",
    icon: Sun,
  },
  {
    id: 7,
    name: "Chikmagalur Town",
    distance: "4 km",
    time: "15 minutes",
    description: "The gateway to Karnataka's coffee country. Explore local markets for fresh coffee beans, visit the Gandhi Park, and experience the warm hospitality of this quaint hill town.",
    image: "/fernhill/all/02_exterior.jpg",
    icon: TreePine,
  },
  {
    id: 8,
    name: "Sunrise Point",
    distance: "18 km",
    time: "40 minutes",
    description: "Located on Baba Budan Hills, this vantage point offers spectacular sunrise views over the Western Ghats. A favorite spot for photographers and early morning visitors.",
    image: "/fernhill/all/08_villa_exterior.jpg",
    icon: Sun,
  },
  {
    id: 9,
    name: "Ayurvara Farmstay Area",
    distance: "8 km",
    time: "20 minutes",
    description: "A serene retreat offering Ayurvedic treatments and farm experiences. Set amidst coffee plantations and spice gardens, it's perfect for wellness seekers and nature lovers.",
    image: "/fernhill/villa/51_villa.jpg",
    icon: Palmtree,
  },
  {
    id: 10,
    name: "Jhari Waterfall",
    distance: "12 km",
    time: "35 minutes",
    description: "Also known as Butherayki Falls, this hidden gem is tucked away in the forest. The cascading waterfall is surrounded by greenery and offers a peaceful escape from the tourist trails.",
    image: "/fernhill/all/07_villa_exterior.jpg",
    icon: Waves,
  },
];

export default function PentouzHillsideNearPage() {
  return (
    <>
      <Header />

      {/* Cinematic Hero */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/fernhill/all/59_property_top_view.jpg"
            alt="Chikmagalur Hills"
            fill
            priority
            className="object-cover scale-110 animate-fade-in"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-container-xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.5em] text-brand-gold mb-6 animate-fade-up">
                Discover Chikmagalur
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-[0.9] tracking-tight animate-fade-up stagger-2">
                Explore
                <br />
                <em className="italic font-extralight">Coffee Country</em>
              </h1>
              <div className="w-24 h-px bg-brand-gold mb-8 animate-fade-up stagger-3" />
              <p className="text-lg text-white/70 max-w-2xl font-light leading-relaxed animate-fade-up stagger-4">
                From mist-covered peaks to cascading waterfalls, discover the attractions that make Chikmagalur Karnataka's premier hill station and coffee paradise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips Banner */}
      <section className="py-8 bg-brand-gold text-brand-ink">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12 text-center">
            <div className="flex items-center gap-3">
              <Coffee className="w-5 h-5" />
              <span className="text-[11px] uppercase tracking-[0.15em] font-medium">Coffee Tours Available</span>
            </div>
            <div className="flex items-center gap-3">
              <Mountain className="w-5 h-5" />
              <span className="text-[11px] uppercase tracking-[0.15em] font-medium">Trekking Season: Oct-May</span>
            </div>
            <div className="flex items-center gap-3">
              <Waves className="w-5 h-5" />
              <span className="text-[11px] uppercase tracking-[0.15em] font-medium">Best Waterfall Season: Jun-Sep</span>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Within Reach
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Nearby
              <br />
              <em className="italic font-extralight">Attractions</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto mb-8" />
            <p className="text-body-lg text-brand-muted max-w-2xl mx-auto">
              All attractions are easily accessible from The Pentouz Hillside. Our staff can arrange guided tours, transportation, and curated experiences.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {nearbyAttractions.map((attraction, i) => (
              <div key={attraction.id} className="group">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white border border-brand-border hover:border-brand-gold/30 transition-all duration-700 overflow-hidden">
                  {/* Image Side - alternating sides */}
                  <div className={`relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="absolute inset-0 border border-brand-border translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-700" />
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content Side */}
                  <div className={`p-10 lg:p-12 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent mb-4">
                          Attraction {String(i + 1).padStart(2, '0')}
                        </p>
                        <h3 className="font-display text-3xl lg:text-4xl font-light text-brand-ink mb-4">
                          <em className="italic font-extralight">{attraction.name}</em>
                        </h3>
                      </div>
                      <attraction.icon className="w-10 h-10 text-brand-gold/20 group-hover:text-brand-gold/30 transition-colors duration-500" />
                    </div>

                    <p className="text-body-lg text-brand-body mb-8 leading-relaxed max-w-md">
                      {attraction.description}
                    </p>

                    <div className="flex items-center gap-8 pb-8 border-b border-brand-border">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-brand-gold" />
                        <span className="text-[10px] uppercase tracking-[0.15em] text-brand-muted">
                          {attraction.distance}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Navigation className="w-5 h-5 text-brand-gold" />
                        <span className="text-[10px] uppercase tracking-[0.15em] text-brand-muted">
                          {attraction.time}
                        </span>
                      </div>
                    </div>

                    <Link
                      href="https://maps.google.com/?q=Chikmagalur+Karnataka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-brand-ink hover:text-brand-accent transition-all duration-700 font-light"
                    >
                      <span>Get Directions</span>
                      <span className="w-8 h-px bg-brand-accent transition-all duration-700 group-hover:w-12" />
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-section-xl bg-brand-linen">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Plan Your Visit
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Travel
              <br />
              <em className="italic font-extralight">Tips</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Best Time to Visit",
                icon: Sun,
                tips: [
                  "October to February for pleasant weather and clear skies",
                  "June to September for waterfalls at their fullest",
                  "March to May for trekking and outdoor activities",
                  "Avoid weekends during peak season for fewer crowds"
                ]
              },
              {
                title: "Getting Around",
                icon: Navigation,
                tips: [
                  "Rent a scooter or car for flexibility",
                  "Hire a local driver for day trips",
                  "Book guided tours through plantations",
                  "Check road conditions before visiting waterfalls"
                ]
              },
              {
                title: "What to Pack",
                icon: Coffee,
                tips: [
                  "Comfortable walking shoes for treks",
                  "Light rain gear during monsoon season",
                  "Warm layers for early morning viewpoints",
                  "Reusable water bottle and snacks"
                ]
              },
            ].map((section, i) => (
              <div key={i} className="bg-white border border-brand-border p-8">
                <div className="flex items-center gap-4 mb-6">
                  <section.icon className="w-8 h-8 text-brand-gold" />
                  <h3 className="font-display text-xl font-light text-brand-ink">{section.title}</h3>
                </div>
                <ul className="space-y-4">
                  {section.tips.map((tip, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-brand-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="py-section-xl bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-6 font-medium">
            Begin Your Journey
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-tight">
            Ready to Explore
            <br />
            <em className="italic font-extralight">Chikmagalur</em>?
          </h2>
          <div className="w-24 h-px bg-brand-gold mx-auto mb-12" />
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Let The Pentouz Hillside be your base for discovering Karnataka's coffee country.
            From our doorstep to misty peaks and cascading falls.
          </p>
          <Link
            href={pentouzHillside?.bookingUrl || "https://wa.me/916366770369"}
            className="group relative inline-flex items-center justify-center bg-white text-brand-primary px-14 py-6 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-700 font-light"
          >
            <span className="relative z-10">Book Your Stay</span>
            <ArrowRight className="ml-4 w-5 h-5 transition-transform group-hover:translate-x-2 duration-500" />
          </Link>
        </div>
      </section>

      {/* Property Links */}
      <section className="py-section-xl bg-white">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Explore More
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
              Discover
              <br />
              <em className="italic font-extralight">Pentouz Hillside</em>
            </h2>
            <div className="w-24 h-px bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { href: "/destinations/pentouz-hillside/rooms", title: "Rooms", desc: "Luxurious accommodations", image: "/fernhill/villa/51_villa.jpg" },
              { href: "/destinations/pentouz-hillside/experiences", title: "Experiences", desc: "Curated activities", image: "/fernhill/all/37_restaurant.jpg" },
              { href: "/destinations/pentouz-hillside/gallery", title: "Gallery", desc: "Visual journey", image: "/fernhill/all/59_property_top_view.jpg" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group relative overflow-hidden bg-brand-linen border border-brand-border hover:border-brand-gold/30 transition-all duration-700"
              >
                {/* Image overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative p-8 h-full flex flex-col justify-between min-h-[200px]">
                  <div>
                    <ArrowRight className="w-8 h-8 text-brand-gold mb-6 transition-transform duration-700 group-hover:translate-x-2" />
                    <h3 className="font-display text-2xl font-light text-brand-ink mb-3">{item.title}</h3>
                    <p className="text-body-sm text-brand-muted group-hover:text-white/80 transition-colors duration-500">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-gold transition-all duration-700 group-hover:w-full" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Property Link */}
      <section className="py-12 bg-brand-linen border-t border-brand-border">
        <div className="max-w-container-xl mx-auto px-6 lg:px-12 text-center">
          <Link
            href="/destinations/pentouz-hillside"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-brand-ink hover:text-brand-gold transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Back to The Pentouz Hillside</span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
