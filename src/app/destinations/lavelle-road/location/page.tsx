import type { Metadata } from "next";
import PropertyEditorialSubpage from "@/components/PropertyEditorialSubpage";
import { propertyEditorialContent } from "@/data/propertyEditorialContent";

export const metadata: Metadata = {
  title: "Location | The Pentouz",
  description: propertyEditorialContent["lavelle-road"]["location"].intro,
  alternates: {
    canonical: "https://thepentouz.com/destinations/lavelle-road/location",
  },
};

export default function Page() {
  return <PropertyEditorialSubpage {...propertyEditorialContent["lavelle-road"]["location"]} />;
}
