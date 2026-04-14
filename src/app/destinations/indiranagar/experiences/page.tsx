import type { Metadata } from "next";
import { withSiteUrl } from "@/lib/site";
import PropertyEditorialSubpage from "@/components/PropertyEditorialSubpage";
import { propertyEditorialContent } from "@/data/propertyEditorialContent";

export const metadata: Metadata = {
  title: "Experiences | The Pentouz",
  description: propertyEditorialContent["indiranagar"]["experiences"].intro,
  alternates: {
    canonical: withSiteUrl("/destinations/indiranagar/experiences"),
  },
};

export default function Page() {
  return <PropertyEditorialSubpage {...propertyEditorialContent["indiranagar"]["experiences"]} />;
}
