import type { Metadata } from "next";
import { withSiteUrl } from "@/lib/site";
import PropertyEditorialSubpage from "@/components/PropertyEditorialSubpage";
import { propertyEditorialContent } from "@/data/propertyEditorialContent";

export const metadata: Metadata = {
  title: "Experiences | The Pentouz",
  description: propertyEditorialContent["lavelle-road"]["experiences"].intro,
  alternates: {
    canonical: withSiteUrl("/destinations/lavelle-road/experiences"),
  },
};

export default function Page() {
  return <PropertyEditorialSubpage {...propertyEditorialContent["lavelle-road"]["experiences"]} />;
}
