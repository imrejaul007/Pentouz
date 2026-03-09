import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial Policy | The Pentouz",
  description:
    "How The Pentouz creates and reviews destination and travel content for accuracy, clarity, and guest relevance.",
  alternates: {
    canonical: withSiteUrl("/editorial-policy"),
  },
};

export default function EditorialPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f7f5] min-h-screen py-16 sm:py-20">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 bg-white border border-brand-border p-6 sm:p-8 lg:p-10">
          <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-3">
            Editorial Policy
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-light mb-6">
            How We Publish Travel and Location Content
          </h1>
          <div className="space-y-4 text-sm sm:text-base text-brand-body leading-relaxed">
            <p>
              The Pentouz publishes destination and travel content to help guests plan practical, high-quality stays.
              Our focus is clarity, relevance, and planning value for legal, business, medical, and leisure itineraries.
            </p>
            <p>
              We use a mixed workflow: editorial writing for high-intent pages and structured templates for broader
              location coverage. All content is reviewed for readability, internal consistency, and booking relevance.
            </p>
            <p>
              We periodically update pages as routes, user intent patterns, and property details evolve. If you find
              outdated information, please contact us through the contact page so we can review and correct it.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
