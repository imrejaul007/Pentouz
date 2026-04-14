import type { Metadata } from "next";
import { withSiteUrl } from "@/lib/site";
import PropertyEditorialSubpage from "@/components/PropertyEditorialSubpage";
import { propertyEditorialContent } from "@/data/propertyEditorialContent";

export const metadata: Metadata = {
  title: "Rooms | The Pentouz",
  description: propertyEditorialContent["lavelle-road"]["rooms"].intro,
  alternates: {
    canonical: withSiteUrl("/destinations/lavelle-road/rooms"),
  },
};

export default function Page() {
  return <PropertyEditorialSubpage {...propertyEditorialContent["lavelle-road"]["rooms"]} />;
}
