import type { Metadata } from "next";
import { withSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Pentouz | Luxury Residences & Boutique Stays",
  description:
    "Discover The Pentouz collection: boutique city stays in Bangalore, private penthouse in Indiranagar, hillside retreat in Chikmagalur, and scenic getaway in Ooty.",
  keywords: [
    "The Pentouz",
    "luxury accommodation Bangalore",
    "boutique hotel Lavelle Road",
    "penthouse stay Indiranagar",
    "Chikmagalur homestay",
    "Ooty retreat",
  ],
  openGraph: {
    title: "The Pentouz | Luxury Residences & Boutique Stays",
    description:
      "Boutique city stays in Bangalore, private penthouse in Indiranagar, hillside retreat in Chikmagalur, and scenic getaway in Ooty.",
    url: withSiteUrl("/"),
    siteName: "The Pentouz",
    images: [
      {
        url: withSiteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "The Pentouz - Luxury Residences & Boutique Stays",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: withSiteUrl("/"),
  },
};
