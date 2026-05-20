import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { withSiteUrl } from "@/lib/site";
import PriveForm from "./PriveForm";

export const metadata: Metadata = {
  title: "Prive Club | The Pentouz",
  description:
    "Join The Pentouz Prive guest list for priority assistance, celebration support, longer-stay guidance, and first access to new Pentouz stays and offers.",
  alternates: {
    canonical: withSiteUrl("/prive-club"),
  },
};

const privileges = [
  {
    title: "Priority assistance",
    description: "Faster help with stay planning, room selection, and special requests.",
  },
  {
    title: "Celebration support",
    description: "A better way to arrange birthdays, anniversaries, and intimate private moments.",
  },
  {
    title: "Longer-stay guidance",
    description: "Useful for guests who want more space, more privacy, or an extended city stay.",
  },
  {
    title: "First access to updates",
    description: "Be the first to hear about new stays, quiet offers, and private Pentouz news.",
  },
];

export default function PriveClubPage() {
  return (
    <>
      <Header />
      <main className="bg-[#faf7f2] text-[#1a1814]">
        <section className="relative overflow-hidden text-white">
          <div className="absolute inset-0">
            <Image
              src="/indiranagar/all/04._living_room_05._living_room.jpg"
              alt="The Pentouz prive club"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/85" />
          </div>

          <div className="relative mx-auto flex min-h-[76vh] items-end px-5 sm:px-8 lg:px-16 pb-20 lg:pb-28 pt-32">
            <div className="max-w-3xl">
              <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.25em] text-[#c3a061] animate-fade-in-up">The Pentouz Prive</p>
              <h1 className="font-['Cormorant_Garamond',serif] font-light leading-[1.1] text-white mt-4 animate-fade-in-up [animation-delay:100ms]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
                A more private line to The Pentouz.
              </h1>
              <p className="mt-6 sm:mt-8 font-['Lora',serif] text-base sm:text-lg leading-relaxed text-white/75 max-w-xl animate-fade-in-up [animation-delay:200ms]">
                For guests who return often, travel for longer, or want a more personal level of attention before and during their stay.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-[0.76fr_1.24fr] gap-8 lg:gap-16 lg:items-start">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">For frequent guests</p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  A quieter, more considered guest relationship.
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {privileges.map((item, index) => (
                  <div key={item.title} className="border border-[#e5dfd6] bg-[#faf7f2] p-5 sm:p-6">
                    <h3 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl lg:text-2xl font-light text-[#1a1814]">{item.title}</h3>
                    <p className="mt-3 sm:mt-4 font-['Lora',serif] text-xs sm:text-sm leading-[1.7] text-[#4a4a44]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="bg-[#f5f0e8]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-start">
              <div>
                <p className="text-[10px] sm:text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b7355] font-medium mb-3 sm:mb-4">Register interest</p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light leading-[1.15] text-[#1a1814] mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.015em' }}>
                  Join the Pentouz guest list.
                </h2>
                <p className="font-['Lora',serif] text-sm sm:text-base leading-[1.8] text-[#4a4a44] mb-6 sm:mb-8 max-w-xl">
                  Share your email and our team will contact you with details. This is best suited for repeat guests, extended stays, and private stay planning.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#e5dfd6] text-[#1a1814] px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:border-[#c3a061] hover:text-[#c3a061]">
                    Contact Concierge
                  </Link>
                  <Link href="/destinations" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0f0e0c] text-white px-6 sm:px-8 py-3.5 sm:py-4 font-['Inter',sans-serif] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-500 hover:bg-[#c3a061]">
                    View Properties
                  </Link>
                </div>
              </div>

              <PriveForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
