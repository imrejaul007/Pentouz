import type { Metadata } from "next";
import { withSiteUrl } from "@/lib/site";
import PropertyEditorialSubpage from "@/components/PropertyEditorialSubpage";
import { propertyEditorialContent } from "@/data/propertyEditorialContent";

export const metadata: Metadata = {
  title: "Location | The Pentouz Hillside Chikmagalur",
  description: propertyEditorialContent["pentouz-hillside"]["location"].intro,
  alternates: {
    canonical: withSiteUrl("/destinations/pentouz-hillside/location"),
  },
};

export default function Page() {
  return <PropertyEditorialSubpage {...propertyEditorialContent["pentouz-hillside"]["location"]} />;
}
