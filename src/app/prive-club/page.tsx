"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { submitLead } from "@/lib/leads";

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
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await submitLead({ type: "prive", email, website });
      setStatus({
        type: "success",
        message: "Thanks. Your request has been received and our team will get back to you shortly.",
      });
      setEmail("");
      setWebsite("");
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "We could not submit your request right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-[#f7f1e7] text-brand-ink">
        <section className="relative isolate overflow-hidden bg-[#17120e] text-white">
          <div className="absolute inset-0">
            <Image
              src="/indiranagar/all/04._living_room_05._living_room.jpg"
              alt="The Pentouz prive club"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.9)_0%,rgba(10,8,6,0.48)_44%,rgba(10,8,6,0.84)_100%)]" />
          </div>

          <div className="relative mx-auto max-w-[1480px] px-5 pb-20 pt-36 sm:px-8 lg:px-14 lg:pb-28 lg:pt-48">
            <div className="max-w-4xl">
              <p className="luxury-kicker text-white/70 animate-fade-in-up">The Pentouz Privé</p>
              <h1 className="luxury-hero-title mt-6 text-white animate-fade-in-up [animation-delay:120ms]">
                A more private line to The Pentouz.
              </h1>
              <p className="luxury-copy mt-8 max-w-2xl text-white/76 animate-fade-in-up [animation-delay:220ms]">
                For guests who return often, travel for longer, or want a more personal level of attention before and during their stay.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf7f0]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
              <div className="animate-fade-in-up">
                <p className="luxury-kicker text-brand-accent">For frequent guests</p>
                <h2 className="luxury-section-title mt-5">A quieter, more considered guest relationship.</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {privileges.map((item, index) => (
                  <div key={item.title} className="luxury-panel bg-white animate-fade-in-up" style={{ animationDelay: `${100 + index * 90}ms` }}>
                    <h3 className="font-display text-2xl font-light text-brand-ink">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-brand-body">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="bg-[#f3eadf]">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-28">
            <div className="animate-fade-in-up">
              <p className="luxury-kicker text-brand-accent">Register interest</p>
              <h2 className="luxury-section-title mt-5">Join the Pentouz guest list.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-brand-body sm:text-lg">
                Share your email and our team will contact you with details. This is best suited for repeat guests, extended stays, and private stay planning.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-brand-border px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-brand-ink transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold">
                  Contact Concierge
                </Link>
                <Link href="/destinations" className="inline-flex items-center justify-center rounded-full bg-brand-ink px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold">
                  View Properties
                </Link>
              </div>
            </div>

            <div className="luxury-panel bg-white animate-fade-in-up [animation-delay:180ms]">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="prive-email" className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">
                    Email address
                  </label>
                  <input
                    id="prive-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-3 w-full border border-brand-border bg-[#fcf8f1] px-4 py-4 text-sm text-brand-ink outline-none transition-colors duration-300 focus:border-brand-gold"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="hidden">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand-ink px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Request Access"}
                </button>

                {status ? (
                  <p className={`text-sm ${status.type === "success" ? "text-[#356143]" : "text-[#8a3f30]"}`}>
                    {status.message}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
