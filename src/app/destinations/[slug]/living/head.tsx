import { destinations } from "@/data/content";
import { withSiteUrl } from "@/lib/site";

export default async function Head({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) return null;

  const isLavelle = destination.slug === "lavelle-road";
  const title = isLavelle
    ? "Living at Lavelle Road | Hotel Near High Court of Karnataka"
    : `Living at ${destination.shortTitle} | The Pentouz`;
  const description = isLavelle
    ? "Explore studio options at The Pentouz Lavelle Road, preferred by outstation advocates and business travelers seeking quick access to High Court of Karnataka."
    : `Explore room and suite options at The Pentouz ${destination.shortTitle}.`;
  const canonical = withSiteUrl(`/destinations/${destination.slug}/living`);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={withSiteUrl(destination.heroImage || destination.image)} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={withSiteUrl(destination.heroImage || destination.image)} />
    </>
  );
}
