import type { Metadata } from "next";
import { withSiteUrl } from "@/lib/site";
import PropertyEditorialSubpage from "@/components/PropertyEditorialSubpage";
import { propertyEditorialContent } from "@/data/propertyEditorialContent";

export const metadata: Metadata = {
  title: "Location | The Pentouz",
  description: propertyEditorialContent["ooty"]["location"].intro,
  alternates: {
    canonical: withSiteUrl("/destinations/ooty/location"),
  },
};

export default function Page() {
  return <PropertyEditorialSubpage {...propertyEditorialContent["ooty"]["location"]} />;
}
