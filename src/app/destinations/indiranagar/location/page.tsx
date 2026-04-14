import type { Metadata } from "next";
import { withSiteUrl } from "@/lib/site";
import PropertyEditorialSubpage from "@/components/PropertyEditorialSubpage";
import { propertyEditorialContent } from "@/data/propertyEditorialContent";

export const metadata: Metadata = {
  title: "Location | The Pentouz",
  description: propertyEditorialContent["indiranagar"]["location"].intro,
  alternates: {
    canonical: withSiteUrl("/destinations/indiranagar/location"),
  },
};

export default function Page() {
  return <PropertyEditorialSubpage {...propertyEditorialContent["indiranagar"]["location"]} />;
}
