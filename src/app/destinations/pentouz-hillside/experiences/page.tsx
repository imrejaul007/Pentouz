import type { Metadata } from "next";
import { withSiteUrl } from "@/lib/site";
import PropertyEditorialSubpage from "@/components/PropertyEditorialSubpage";
import { propertyEditorialContent } from "@/data/propertyEditorialContent";

export const metadata: Metadata = {
  title: "Experiences | The Pentouz Hillside Chikmagalur",
  description: propertyEditorialContent["pentouz-hillside"]["experiences"].intro,
  alternates: {
    canonical: withSiteUrl("/destinations/pentouz-hillside/experiences"),
  },
};

export default function Page() {
  return <PropertyEditorialSubpage {...propertyEditorialContent["pentouz-hillside"]["experiences"]} />;
}
