import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import PropertyGallery from "@/components/PropertyGallery";
import NearAttractions from "@/components/NearAttractions";
import { destinations, contactInfo } from "@/data/content";
import { fernhillImageSet } from "@/data/propertyImageSets";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Pentouz Hillside Chikmagalur | Coffee Country Retreat",
  description:
    "Luxury homestay in Chikmagalur's coffee country. Pool, bonfire, plantations, and warm hospitality. Perfect for families and retreats.",
  alternates: {
    canonical: withSiteUrl("/destinations/pentouz-hillside"),
  },
};

function categorize(path: string): string {
  const p = path.toLowerCase();
  if (/bathroom/i.test(p)) return "Bathroom";
  if (/bedroom|villa|cottage|four_bed|eight_bed|squad/i.test(p)) return "Bedroom";
  if (/pool|swimming/i.test(p)) return "Swimming Pool";
  if (/games_room/i.test(p)) return "Games Room";
  if (/restaurant|dining/i.test(p)) return "Restaurant";
  if (/tea_coffee/i.test(p)) return "Common Areas";
  if (/exterior|facade|villa_exterior/i.test(p)) return "Exterior";
  if (/view|top_view|night_view|front_view|side_view|gazebo|fireplace/i.test(p)) return "Views";
  if (/play_area|kids/i.test(p)) return "Play Area";
  if (/villa_living/i.test(p)) return "Living Room";
  return "Terrace & Outdoor";
}

function makeTitle(path: string): string {
  const file = path.split("/").pop()?.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").replace(/\d+\./g, "").trim() ?? "";
  return file;
}

const galleryItems = fernhillImageSet.map((src) => ({
  src,
  title: makeTitle(src),
  category: categorize(src),
}));

const villaImages = fernhillImageSet.filter((path) => /villa/i.test(path));
const cottageImages = fernhillImageSet.filter((path) => /cottage/i.test(path));
const eleganceImages = fernhillImageSet.filter((path) => /elegance/i.test(path));
const poolImages = fernhillImageSet.filter((path) => /swimming_pool|pool/i.test(path));
const restaurantImages = fernhillImageSet.filter((path) => /restaurant|dining/i.test(path));
const viewImages = fernhillImageSet.filter((path) => /view|top_view|front_view|side_view|gazebo|fireplace|night_view/i.test(path));

const rooms = [
  { name: "Villa", slug: "villa", images: villaImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Garden Cottage", slug: "garden-cottage", images: cottageImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Elegance Rooms", slug: "elegance-rooms", images: eleganceImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Swimming Pool", slug: "swimming-pool", images: poolImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Restaurant", slug: "restaurant", images: restaurantImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
  { name: "Views & Gardens", slug: "views-gardens", images: viewImages.map((src) => ({ src, title: makeTitle(src), category: categorize(src) })) },
];

const heroImages = [
  "/fernhill/all/59_property_top_view.jpg",
  "/fernhill/all/44_swimming_pool.jpg",
  "/fernhill/all/50_top_view.jpg",
  "/fernhill/all/03_exterior.jpg",
  "/fernhill/all/60_night_view.jpg",
  "/fernhill/all/55_fireplace.jpg",
  "/fernhill/villa/51_villa.jpg",
];

const travelStats = [
  { title: "Mangalore International Airport", distance: "130 kms", time: "3 hrs" },
  { title: "Chikmagalur Railway Station", distance: "12 kms", time: "30 min" },
  { title: "Coffee Plantation Trails", distance: "Walk from property", time: "On-site" },
];

const amenities = [
  "Swimming Pool",
  "Free WiFi",
  "Free Parking",
  "Air Conditioning",
  "Smart Android TV",
  "Coffee & Tea Facilities",
  "In-room Dining",
  "Daily Housekeeping",
  "Bonfire Area",
  "Private Gardens",
  "Indoor Games",
  "Kids Play Area",
];

const roomPrices: Record<string, string> = {
  "Entire Homestay with Private Pool": "₹1,20,000",
  "Ultra-Luxurious Four Bedroom Villa": "₹50,000",
  "Luxury Cottage with Private Garden": "₹16,000",
  "Luxury 8 Beds Squad Cottage": "₹30,000",
};

export default function PentouzHillsidePage() {
  const property = destinations.find((destination) => destination.slug === "pentouz-hillside");
  if (!property) notFound();

  return (
    <>
      <Header />
      <main className="bg-[#faf7f2] text-[#1a1814]">
        {/* Hero */}
        <HeroSlider images={heroImages} alt={property.title}>
          <div className="mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-5 sm:px-8 lg:px-16 pb-20 lg:pb-28 pt-32">
            <div className="max-w-3xl">
              <p className="text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] mb-6 animate-fade-in-up">
                Chikmagalur, Karnataka
              </p>
              <h1 className="font-['Cormorant_Garamond',serif] text-white font-light leading-[1.1] animate-fade-in-up [animation-delay:100ms]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
                Wake up in Karnataka&apos;s coffee country, wrapped in mist and green.
              </h1>
              <p className="mt-8 font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/75 max-w-xl animate-fade-in-up [animation-delay:200ms]">
                The Pentouz Hillside is an intimate retreat in the Western Ghats of Chikmagalur, surrounded by sprawling coffee plantations and misty hills.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-5 animate-fade-in-up [animation-delay:300ms]">
                <a href={property.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-[#1a1814] px-10 py-4 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c3a061] hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" strokeWidth={0}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V24h3.75v-1.146C18.612 22.954 24 18 24 12c0-6.627-5.373-12-12-12zm0 19.25c-4.347 0-8-2.953-8-7.25 0-2.015.776-3.87 2.106-5.303L12 1.875l5.894 4.822A8.255 8.255 0 0 1 20 12.25c0 4.297-3.653 7.25-8 7.25z"/></svg>
                  Enquire on WhatsApp
                </a>
                <Link href="/destinations/pentouz-hillside/living" className="inline-flex items-center gap-2 font-['Inter',sans-serif] text-[11px] uppercase tracking-[0.2em] text-white/90 border border-white/30 px-10 py-4 transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]">
                  Explore Living
                </Link>
              </div>
            </div>
          </div>
        </HeroSlider>

        {/* Living Section */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 sm:gap-12 lg:gap-20 items-center">
              <div className="relative overflow-hidden aspect-[4/5]">
                <Image src="/fernhill/all/50_top_view.jpg" alt="The Pentouz Hillside living" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">
                  The Living
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814] mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  Four distinct accommodations, each designed for comfort in the hills.
                </h2>
                <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44] mb-5 sm:mb-6">
                  The Pentouz Hillside offers four thoughtfully designed accommodations, from an expansive four-bedroom villa to a cozy dorm-style cottage. Every unit balances rustic charm with modern comfort, featuring private sit-out areas, garden or hill views, and the unhurried rhythm of coffee country.
                </p>
                <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44]">
                  Spend mornings on your private balcony with freshly brewed coffee, afternoons by the swimming pool, and evenings around a bonfire under the stars.
                </p>
                <div className="mt-6 sm:mt-8">
                  <Link href="/destinations/pentouz-hillside/living" className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-[#0f0e0c] text-white px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c3a061]">
                    Explore Living
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="mb-10 sm:mb-16">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">
                Rooms & Rates
              </p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                Find your perfect space in the hills.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
              {property.rooms.map((room, index) => (
                <article key={room.name} className="border border-[#e5dfd6] bg-white overflow-hidden">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      priority={index === 0}
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1a1814]">{room.name}</h3>
                    <p className="mt-2 font-['Lora',serif] text-xs sm:text-sm leading-relaxed text-[#4a4a44]">{room.description}</p>
                    <div className="mt-4 sm:mt-5 flex items-baseline justify-between gap-2">
                      <p className="text-[9px] sm:text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] sm:tracking-[0.18em] text-[#6b6358]">Starting from</p>
                      <p className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl font-light text-[#1a1814]">
                        {roomPrices[room.name] ?? room.price}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Here Section */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="max-w-2xl mb-10 sm:mb-16">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">
                Getting Here
              </p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                The journey to Pentouz Hillside is part of the experience.
              </h2>
            </div>

            <div className="space-y-5 sm:space-y-6 mb-10 sm:mb-16">
              <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44]">
                Pentouz Hillside is nestled in the heart of Chikmagalur, Karnataka&apos;s beloved hill station and coffee capital. The drive up through the Western Ghats is a treat in itself — winding roads flanked by coffee plantations, spice estates, and misty valleys.
              </p>
              <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44]">
                The nearest railway station is Chikmagalur Railway Station, just 30 minutes from the property. Mangalore International Airport is approximately 3 hours away by road.
              </p>
              <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44]">
                Once you arrive, the estate&apos;s private gardens, swimming pool, and walking trails invite you to slow down immediately.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
              {travelStats.map((stat) => (
                <div key={stat.title} className="border border-[#e5dfd6] bg-[#f5f0e8] p-6 sm:p-8">
                  <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#8b7355] mb-2 sm:mb-3">
                    {stat.title}
                  </p>
                  <p className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-light text-[#1a1814]">
                    {stat.time}
                  </p>
                  <p className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.12em] text-[#6b6358] mt-2">
                    {stat.distance}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="max-w-2xl mb-10 sm:mb-16">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#c3a061] font-medium mb-3 sm:mb-4">
                Amenities
              </p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                Everything you need for a memorable stay in the hills.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
              {amenities.map((amenity) => (
                <div key={amenity} className="border border-white/10 bg-white/[0.02] px-4 sm:px-5 py-3 sm:py-4 text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-white/70">
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-2 sm:mb-3">
                  Gallery
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.015em' }}>
                  A visual journey
                </h2>
              </div>
              <Link href="/destinations/pentouz-hillside/gallery" className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.15em] text-[#4a4a44] hover:text-[#c3a061] transition-colors duration-300">
                View Full Gallery →
              </Link>
            </div>
            <PropertyGallery items={galleryItems} propertyName="The Pentouz Hillside Chikmagalur" rooms={rooms} />
          </div>
        </section>

        {/* Nearby Attractions */}
        <NearAttractions
          title="Explore Chikmagalur"
          subtitle="From misty peaks to cascading waterfalls, discover the best attractions near The Pentouz Hillside."
          maxItems={6}
          showFilter={true}
        />

        {/* Booking Section */}
        <section className="bg-[#0f0e0c] text-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#c3a061] font-medium mb-3 sm:mb-4">
                  Plan Your Stay
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-white mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  Coffee-scented mornings and star-lit evenings await.
                </h2>
                <p className="font-['Lora',serif] text-sm leading-relaxed text-white/60">
                  The Pentouz Hillside Estate<br />
                  Chikmagalur, Karnataka, India
                </p>
                <p className="mt-4 font-['Lora',serif] text-sm leading-relaxed text-white/60">
                  {contactInfo.email}
                </p>
                <div className="mt-4 space-y-2 font-['Lora',serif] text-sm text-white/60">
                  <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`} className="block hover:text-[#c3a061] transition-colors">
                    {contactInfo.phones[0]}
                  </a>
                  <a href={`tel:${contactInfo.phones[1].replace(/\s/g, "")}`} className="block hover:text-[#c3a061] transition-colors">
                    {contactInfo.phones[1]}
                  </a>
                </div>
              </div>
              <div className="border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10 lg:mt-12">
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href={property.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-white text-[#0f0e0c] px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#c3a061] hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" strokeWidth={0}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V24h3.75v-1.146C18.612 22.954 24 18 24 12c0-6.627-5.373-12-12-12zm0 19.25c-4.347 0-8-2.953-8-7.25 0-2.015.776-3.87 2.106-5.303L12 1.875l5.894 4.822A8.255 8.255 0 0 1 20 12.25c0 4.297-3.653 7.25-8 7.25z"/></svg>
                    Enquire on WhatsApp
                  </a>
                  <a
                    href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 border border-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]"
                  >
                    Call Concierge
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
