import type { Metadata } from "next";
import { withSiteUrl } from "@/lib/site";
import PropertyEditorialSubpage from "@/components/PropertyEditorialSubpage";
import { propertyEditorialContent } from "@/data/propertyEditorialContent";

export const metadata: Metadata = {
  title: "Rooms | The Pentouz Hillside Chikmagalur",
  description: propertyEditorialContent["pentouz-hillside"]["rooms"].intro,
  alternates: {
    canonical: withSiteUrl("/destinations/pentouz-hillside/rooms"),
  },
};

export default function Page() {
  return <PropertyEditorialSubpage {...propertyEditorialContent["pentouz-hillside"]["rooms"]} />;
}
