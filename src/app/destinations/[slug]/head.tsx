import { destinations } from "@/data/content";
import { withSiteUrl } from "@/lib/site";

export default async function Head({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) return null;

  const lavelleSeo =
    destination.slug === "lavelle-road" &&
    "legalSeo" in destination &&
    destination.legalSeo
      ? destination.legalSeo
      : null;

  const title =
    lavelleSeo?.title || `${destination.title} | The Pentouz ${destination.shortTitle}`;
  const description = lavelleSeo?.description || destination.description;
  const canonical = withSiteUrl(`/destinations/${destination.slug}`);
  const keywords = lavelleSeo?.keywords?.join(", ");

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
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
