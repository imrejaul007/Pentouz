export type AttractionCategory = "Nature" | "Adventure" | "Heritage" | "Food" | "Wellness";

export interface Attraction {
  name: string;
  description: string;
  distance: string;
  category: AttractionCategory;
  image: string;
  highlights: string[];
}

export const chikmagalurAttractions: Attraction[] = [
  {
    name: "Coffee Plantation Tours",
    description:
      "Experience the heart of Karnataka's coffee country with guided tours through lush arabica and robusta plantations. Learn about coffee processing from bean to cup, enjoy fresh brews amidst the estates, and stroll through aromatic plantations shrouded in morning mist.",
    distance: "Walk from property",
    category: "Nature",
    image: "/fernhill/all/50_top_view.jpg",
    highlights: [
      "Guided estate walks",
      "Coffee tasting sessions",
      "Learn roasting techniques",
      "Scenic plantation trails",
    ],
  },
  {
    name: "Mullayanagiri Peak",
    description:
      "The highest peak in Karnataka at 1,930 meters, Mullayanagiri offers breathtaking panoramic views of the Western Ghats. Popular among trekkers and nature lovers, the summit rewards visitors with sweeping vistas of valleys, coffee plantations, and on clear days, even the distant Arabian Sea.",
    distance: "22 kms",
    category: "Adventure",
    image: "/fernhill/all/03_exterior.jpg",
    highlights: [
      "Trekking to summit",
      "Panoramic viewpoints",
      "Cave temple at peak",
      "Stunning sunrise views",
    ],
  },
  {
    name: "Baba Budan Giri",
    description:
      "Named after the Sufi saint Baba Budan, this historic hill range is a significant pilgrimage site and trekker's paradise. The region features the famous Dattatreya Peetha, dramatic cliff faces, and the confluence of three rivers visible from the summit. The winding trails through shola forests are unforgettable.",
    distance: "18 kms",
    category: "Heritage",
    image: "/fernhill/all/57_front_view.jpg",
    highlights: [
      "Sacred pilgrimage site",
      "Trekking trails",
      "Dattatreya Peetha temple",
      "Three river confluence view",
    ],
  },
  {
    name: "Hebbe Falls",
    description:
      "Nestled within a coffee plantation, Hebbe Falls cascades down in two stages — the big Hebbe and the smaller, more intimate Chemake. The falls are accessed via a scenic drive followed by a short trek through aromatic coffee estates, making the journey as memorable as the destination.",
    distance: "35 kms",
    category: "Nature",
    image: "/fernhill/all/48_swimming_pool.jpg",
    highlights: [
      "Two-tiered waterfall",
      "Coffee plantation setting",
      "Trek through estates",
      "Natural pool at base",
    ],
  },
  {
    name: "Kemmanagundi",
    description:
      "Often called the 'Kashmir of Karnataka,' Kemmanagundi is a serene hill station known for its lush gardens, misty hills, and waterfalls. The Rajiv Gandhi National Park offers wildlife encounters, while the Hebbe Falls and Kalhatti Falls provide spectacular natural beauty. Ideal for a day trip from Pentouz Hillside.",
    distance: "55 kms",
    category: "Nature",
    image: "/fernhill/all/06_exterior.jpg",
    highlights: [
      "Terraced gardens",
      "Kalhatti Falls viewpoint",
      "Wildlife sanctuary",
      "Trekking opportunities",
    ],
  },
  {
    name: "Bhadra Reservoir",
    description:
      "A sprawling reservoir surrounded by forested hills, Bhadra offers boating, wildlife watching, and serene sunset views. The Bhadra Wildlife Sanctuary nearby is home to tigers, leopards, and over 200 species of birds. Perfect for a peaceful day immersed in nature.",
    distance: "40 kms",
    category: "Nature",
    image: "/fernhill/all/59_property_top_view.jpg",
    highlights: [
      "Boating on reservoir",
      "Wildlife sanctuary",
      "Bird watching",
      "Scenic sunset views",
    ],
  },
  {
    name: "Chikmagalur Town",
    description:
      "The charming hill town of Chikmagalur, meaning 'younger daughter's place,' is the gateway to Karnataka's coffee country. Explore local markets, visit the historic Jama Masjid, pick up fresh coffee beans, and sample local cuisine at traditional eateries. Just 30 minutes from Pentouz Hillside.",
    distance: "12 kms",
    category: "Food",
    image: "/fernhill/all/37_restaurant.jpg",
    highlights: [
      "Local coffee markets",
      "Traditional cuisine",
      "Historic Jama Masjid",
      "Fresh coffee shopping",
    ],
  },
  {
    name: "Sunrise Point",
    description:
      "A favorite among visitors, Sunrise Point offers spectacular views as the first golden rays illuminate the misty valleys and coffee plantations below. Located near the town, it's the perfect early morning excursion to witness Chikmagalur's legendary morning fog slowly lifting to reveal the stunning landscape.",
    distance: "15 kms",
    category: "Nature",
    image: "/fernhill/all/60_night_view.jpg",
    highlights: [
      "Spectacular sunrise views",
      "Morning mist vistas",
      "Photography hotspot",
      "Easy access by road",
    ],
  },
  {
    name: "Jhari Waterfall",
    description:
      "Also known as Buttermilk Falls, Jhari is a stunning multi-tiered waterfall that appears like buttermilk cascading down rocky slopes, especially during monsoon season. Surrounded by dense forests, the waterfall creates a magical atmosphere with its continuous flow and serene natural pool perfect for a refreshing dip.",
    distance: "28 kms",
    category: "Nature",
    image: "/fernhill/all/46_swimming_pool.jpg",
    highlights: [
      "Multi-tiered cascade",
      "Buttermilk appearance",
      "Forest setting",
      "Natural swimming pool",
    ],
  },
  {
    name: "Alde (Aldur) Mountain View",
    description:
      "A picturesque village in the Baba Budan Giri range, Aldur is renowned for its spectacular mountain vistas and tea and coffee plantations. The winding roads leading here offer dramatic views, and the town serves as a perfect base for exploring nearby trails while enjoying the peaceful rhythm of plantation life.",
    distance: "20 kms",
    category: "Nature",
    image: "/fernhill/all/58_side_view.jpg",
    highlights: [
      "Mountain panorama",
      "Tea and coffee estates",
      "Scenic drives",
      "Trekking basecamp",
    ],
  },
];

export const getAttractionsByCategory = (category: AttractionCategory): Attraction[] => {
  return chikmagalurAttractions.filter((attraction) => attraction.category === category);
};

export const getNearbyAttractions = (maxDistance: string): Attraction[] => {
  // Simple distance comparison - returns attractions within approximately the given distance
  const maxKm = parseInt(maxDistance.replace(/[^0-9]/g, ""), 10) || 50;
  return chikmagalurAttractions.filter((attraction) => {
    const distanceKm = parseInt(attraction.distance.replace(/[^0-9]/g, ""), 10);
    if (isNaN(distanceKm)) return true; // Include "Walk from property"
    return distanceKm <= maxKm;
  });
};
