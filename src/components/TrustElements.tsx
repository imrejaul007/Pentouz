"use client";

import { Award, Globe, ShieldCheck, CheckCircle, TrendingUp, Star } from "lucide-react";

interface Award {
  year: string;
  name: string;
  icon: any;
}

interface PressLogo {
  name: string;
  url: string;
}

const awards: Award[] = [
  { year: "2024", name: "Excellence in Hospitality", icon: Award },
  { year: "2023", name: "Best Luxury Hotel", icon: TrendingUp },
  { year: "2023", name: "Traveler's Choice", icon: Globe },
  { year: "2022", name: "Outstanding Service", icon: Star },
];

const pressLogos: PressLogo[] = [
  { name: "Times of India", url: "https://timesofindia.indiatimes.com" },
  { name: "Economic Times", url: "https://economictimes.indiatimes.com" },
  { name: "The Hindu", url: "https://thehindu.com" },
  { name: "Travel + Leisure", url: "https://travelandleisure.in" },
  { name: "Luxury Lifestyle", url: "https://luxurylifestyle.in" },
];

interface TrustElementsProps {
  title?: string;
  subtitle?: string;
}

export default function TrustElements({ title = "Awards & Recognition", subtitle }: TrustElementsProps) {
  return (
    <section className="py-section-xl bg-brand-linen relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
            Awards & Recognition
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-body-lg text-brand-body max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-px bg-brand-gold mx-auto mb-12"></div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {awards.map((award) => (
            <div key={award.year} className="text-center group p-6 lg:p-8 bg-white border border-brand-border/30 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-brand-linen border border-brand-border/30 flex items-center justify-center mb-4">
                <award.icon className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />
              </div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-2">
                {award.year}
              </p>
              <h3 className="text-xl font-display font-light text-brand-ink mb-1">
                {award.name}
              </h3>
              <div className="w-12 h-[1px] bg-brand-gold/30 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* Press Coverage */}
        <div className="mt-20 pt-16 border-t border-brand-border/20">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
              Featured In
            </p>
            <h3 className="font-display text-2xl lg:text-3xl font-light text-brand-ink">
              Leading Publications
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
            {pressLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block text-center p-8 bg-white border border-brand-border/30 hover:border-brand-gold/50 hover:shadow-xl transition-all duration-500"
              >
                <span className="text-lg font-medium text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
                  {logo.name}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-16 border-t border-brand-border/20">
          <div className="max-w-container-xl mx-auto px-4">
            <h3 className="font-display text-2xl lg:text-3xl font-light text-brand-ink mb-12 text-center">
              Why Trust Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center gap-4 bg-white border border-brand-border/30 p-8 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-500">
                <ShieldCheck className="w-12 h-12 text-brand-accent" strokeWidth={1.5} />
                <div>
                  <h4 className="text-xl font-display font-light text-brand-ink mb-2">
                    Verified Host
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    Officially verified hospitality provider on major platforms
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 bg-white border border-brand-border/30 p-8 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-500">
                <CheckCircle className="w-12 h-12 text-brand-accent" strokeWidth={1.5} />
                <div>
                  <h4 className="text-xl font-display font-light text-brand-ink mb-2">
                    Secure Booking
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    End-to-end encrypted reservations with instant confirmation
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 bg-white border border-brand-border/30 p-8 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-500">
                <Star className="w-12 h-12 text-brand-accent" strokeWidth={1.5} />
                <div>
                  <h4 className="text-xl font-display font-light text-brand-ink mb-2">
                    Excellent Reviews
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    Consistently rated 4.8+ across all booking platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
