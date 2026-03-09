import { destinations } from "@/data/content";

export default function Head({ params }: { params: { slug: string } }) {
  const destination = destinations.find((item) => item.slug === params.slug);
  if (!destination) return null;

  const isLavelle = destination.slug === "lavelle-road";
  const title = isLavelle
    ? "Living at Lavelle Road | Hotel Near High Court of Karnataka"
    : `Living at ${destination.shortTitle} | The Pentouz`;
  const description = isLavelle
    ? "Explore studio options at The Pentouz Lavelle Road, preferred by outstation advocates and business travelers seeking quick access to High Court of Karnataka."
    : `Explore room and suite options at The Pentouz ${destination.shortTitle}.`;
  const canonical = `https://pentouz-web.onrender.com/destinations/${destination.slug}/living`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={destination.heroImage || destination.image} />
    </>
  );
}
