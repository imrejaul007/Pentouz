/**
 * Schema.org structured data utilities for AI search engine optimization
 * Implements: FAQ, Hotel, LocalBusiness, BreadcrumbList, Review, SpeakableSpecification
 */

import { withSiteUrl } from "./site";
import { destinations, testimonials, contactInfo } from "@/data/content";

// ============================================================================
// FAQ SCHEMA
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * FAQ Schema - Critical for featured snippets and AI answers
 * Target queries: "What is Pentouz?", "How to book?", "Is breakfast included?"
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Common FAQs for Pentouz homepage
 */
export const homepageFAQs: FAQItem[] = [
  {
    question: "What is The Pentouz?",
    answer:
      "The Pentouz is a collection of boutique luxury accommodations across Bangalore (Lavelle Road and Indiranagar), Chikmagalur (The Pentouz Hillside), and Ooty (Windsor Heights). Each property offers a distinct hospitality experience combining privacy, space, and refined comfort.",
  },
  {
    question: "Where are The Pentouz properties located?",
    answer:
      "The Pentouz has four properties: The Pentouz Lavelle Road (Bangalore city center near UB City), The Pentouz 100 Feet Road Indiranagar (Bangalore's most vibrant neighborhood), The Pentouz Hillside Chikmagalur (Karnataka coffee country), and The Pentouz Windsor Heights Ooty (Nilgiri hills, Tamil Nadu).",
  },
  {
    question: "What is the price range at The Pentouz?",
    answer:
      "Room rates at The Pentouz start from approximately INR 6,200 per night at Lavelle Road and go up to INR 1,20,000 for the entire Hillside property. Prices vary by property, room type, and season. Contact the concierge for the most accurate pricing and seasonal offers.",
  },
  {
    question: "Does The Pentouz include breakfast?",
    answer:
      "Breakfast inclusion varies by property. The Pentouz Hillside Chikmagalur includes breakfast. Other properties offer room service and nearby dining recommendations. Check the specific property page or contact concierge for details.",
  },
  {
    question: "Is The Pentouz suitable for families?",
    answer:
      "Yes, The Pentouz properties cater to families. The Indiranagar penthouse (6,000 sq ft, 3 bedrooms) is ideal for families, while Hillside Chikmagalur offers multiple accommodation types including a 4-bedroom villa. Ooty provides a serene retreat suitable for families seeking mountain experiences.",
  },
  {
    question: "How do I book a stay at The Pentouz?",
    answer:
      "You can book directly through each property's booking page, by calling the concierge at +91 888 444 9930, or via WhatsApp at +91 888 444 9930. Direct booking is recommended for the best rates and personalized service.",
  },
  {
    question: "What amenities are available at The Pentouz?",
    answer:
      "Amenities vary by property but typically include high-speed WiFi, air conditioning, Smart TV, kitchenette or full kitchen, daily housekeeping, rooftop terrace or balcony access, and parking. Each property page lists specific amenities.",
  },
  {
    question: "Is The Pentouz pet-friendly?",
    answer:
      "Pet policies vary by property. Contact the concierge at +91 888 444 9930 directly to inquire about pet-friendly accommodations. The Hillside Chikmagalur property may accommodate pets in certain room types.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellation policies vary by booking source and rate type. Direct bookings typically offer more flexible cancellation. Contact the concierge or refer to your booking confirmation for specific cancellation terms.",
  },
  {
    question: "Does The Pentouz offer airport transfer?",
    answer:
      "Yes, airport transfer services are available. The Indiranagar property specifically mentions airport pickup service. Contact concierge at +91 888 444 9930 to arrange transfers in advance.",
  },
];

/**
 * Property-specific FAQs
 */
export function getPropertyFAQs(slug: string): FAQItem[] {
  const propertyFAQs: Record<string, FAQItem[]> = {
    "lavelle-road": [
      {
        question: "What is The Pentouz Lavelle Road?",
        answer:
          "The Pentouz Lavelle Road is a boutique hotel featuring elegantly designed top-floor studio rooms in Bangalore's most prestigious neighborhood. Located near UB City and the High Court of Karnataka, it offers panoramic city views, refined interiors, and proximity to premium dining and shopping.",
      },
      {
        question: "What room types are available at Lavelle Road?",
        answer:
          "The Pentouz Lavelle Road offers four room types: Queen Studio (450 sq ft, INR 6,200), King Studio (475 sq ft, INR 6,800), Superior Studio (450 sq ft, INR 6,300), and a Three Bedroom Unit combining multiple studios (~1,400 sq ft, INR 20,000).",
      },
      {
        question: "How far is The Pentouz Lavelle Road from MG Road Metro?",
        answer:
          "The Pentouz Lavelle Road is approximately 1 km from MG Road Metro Station, a 5-minute walk. Kempegowda International Airport is 35 km (55 minutes), and KSR Bengaluru City Junction railway station is 5 km (15 minutes).",
      },
      {
        question: "Is there parking at The Pentouz Lavelle Road?",
        answer:
          "Yes, The Pentouz Lavelle Road offers covered car parking. The property also features an open roof-top terrace available for guest use.",
      },
      {
        question: "Is The Pentouz Lavelle Road suitable for business travelers?",
        answer:
          "Yes, The Pentouz Lavelle Road is ideal for business travelers. Located near the High Court of Karnataka, UB City, and the central business district, it offers work desks, high-speed WiFi, kitchenettes, and rooftop access in a premium boutique setting.",
      },
      {
        question: "Are the studio rooms at Lavelle Road air-conditioned?",
        answer:
          "Yes, all studio rooms at The Pentouz Lavelle Road are fully air-conditioned with Smart 55-inch TVs, high-speed WiFi, kitchenettes with refrigerator and microwave, and elegant bathrooms.",
      },
    ],
    indiranagar: [
      {
        question: "What is The Pentouz Indiranagar?",
        answer:
          "The Pentouz Indiranagar is a luxurious three-bedroom penthouse on 100 Feet Road, one of Bangalore's most upscale and vibrant neighborhoods. Spanning 6,000 sq ft, it offers private balconies, an open roof-top terrace, ultra-modern kitchen, and residential-style living perfect for families, groups, and extended stays.",
      },
      {
        question: "How many bedrooms does the Indiranagar penthouse have?",
        answer:
          "The Pentouz Indiranagar features three spacious bedrooms, each with a private balcony and city views. The penthouse also includes elegant living and dining spaces, an ultra-modern kitchen, and an open roof-top terrace.",
      },
      {
        question: "What is the maximum capacity at Indiranagar?",
        answer:
          "The Pentouz Indiranagar accommodates up to 6 guests comfortably across its three bedrooms. The spacious layout and shared living areas make it ideal for families or groups seeking premium city accommodation.",
      },
      {
        question: "Is airport transfer available at Indiranagar?",
        answer:
          "Yes, The Pentouz Indiranagar offers airport pickup service. Kempegowda International Airport is approximately 37 km (60 minutes). Contact concierge to arrange transfers.",
      },
      {
        question: "What nearby attractions are accessible from Indiranagar?",
        answer:
          "The Pentouz Indiranagar is steps from 100 Feet Road's restaurants, cafes, galleries, and nightlife. The Indiranagar Metro Station is 1 km away (5 minutes). Shopping at Forum Mall and entertainment venues are within walking distance.",
      },
    ],
    ooty: [
      {
        question: "What is The Pentouz Windsor Heights Ooty?",
        answer:
          "The Pentouz Windsor Heights is a mountain retreat in Ooty, Tamil Nadu, surrounded by lush tea gardens and colonial charm. Located on Elk Hill, it offers a tranquil escape with stunning views of the Nilgiri hills, comfortable rooms, and a serene atmosphere.",
      },
      {
        question: "What room types are available at Windsor Heights Ooty?",
        answer:
          "The Pentouz Windsor Heights Ooty offers three room types: The Heritage Suite (900 sq ft with four-poster bed and fireplace, INR 12,000), The Garden View Room (500 sq ft overlooking manicured gardens, INR 8,000), and The Mountain Retreat (450 sq ft with hill views and private balcony, INR 8,800).",
      },
      {
        question: "Does The Pentouz Ooty have a restaurant?",
        answer:
          "Yes, The Pentouz Windsor Heights Ooty has an in-house restaurant serving local cuisine. Room service is also available. The property's colonial setting and gardens provide additional dining ambiance.",
      },
      {
        question: "How do I reach The Pentouz Ooty?",
        answer:
          "The Pentouz Windsor Heights is on Elk Hill, Ooty. The nearest airport is Coimbatore International Airport (84 km, 3 hours). Udhagamandalam Railway Junction is 10 km (25 minutes). Ooty Lake is 3 km away.",
      },
      {
        question: "Is The Pentouz Ooty suitable for honeymoon?",
        answer:
          "Yes, The Pentouz Windsor Heights Ooty is ideal for honeymoons and romantic getaways. The Heritage Suite with fireplace, stunning hill views, colonial charm, and serene mountain atmosphere create a perfect romantic retreat.",
      },
    ],
    "pentouz-hillside": [
      {
        question: "What is The Pentouz Hillside Chikmagalur?",
        answer:
          "The Pentouz Hillside is a luxury homestay in Chikmagalur's coffee country, Karnataka. Nestled in the Western Ghats, it features a swimming pool, on-site restaurant with local cuisine, bonfire area, private gardens, and four distinct accommodations: a private pool homestay, 4-bedroom villa, cottage with private garden, and group-friendly squad cottage.",
      },
      {
        question: "What accommodations are available at Hillside Chikmagalur?",
        answer:
          "The Pentouz Hillside offers four options: Entire Homestay with Private Pool (INR 1,20,000, full property), Ultra-Luxurious Four Bedroom Villa (INR 50,000, up to 10 guests), Luxury Cottage with Private Garden (INR 16,000, 2 king beds), and Luxury 8-Bed Squad Cottage (INR 30,000, ideal for groups).",
      },
      {
        question: "Is breakfast included at The Pentouz Hillside?",
        answer:
          "Yes, breakfast is included in stays at The Pentouz Hillside Chikmagalur. The on-site restaurant also serves local cuisine and in-room dining is available.",
      },
      {
        question: "What activities are available at Hillside Chikmagalur?",
        answer:
          "Guests at The Pentouz Hillside enjoy swimming in the pool, bonfire evenings, nature walks, indoor games, kids play area, and exploration of nearby coffee plantations. The property features fire camp areas (indoor and outdoor) with music.",
      },
      {
        question: "How far is The Pentouz Hillside from Chikmagalur town?",
        answer:
          "The Pentouz Hillside is 12 km (30 minutes) from Chikmagalur Railway Station. Mangalore International Airport is 130 km away (3 hours). The property sits in Karnataka's coffee country with access to Mullayanagiri peak and other local attractions.",
      },
      {
        question: "Is The Pentouz Hillside suitable for corporate retreats?",
        answer:
          "Yes, The Pentouz Hillside is ideal for corporate retreats. The 8-Bed Squad Cottage is specifically designed for groups and corporate events, while the 4-Bedroom Villa offers space for smaller team gatherings. Indoor games, bonfire areas, and serene setting support team building.",
      },
    ],
  };

  return propertyFAQs[slug] || [];
}

// ============================================================================
// HOTEL SCHEMA
// ============================================================================

export interface HotelSchemaOptions {
  name: string;
  description: string;
  image: string;
  address: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
  latitude?: number;
  longitude?: number;
  telephone: string;
  priceRange?: string;
  starRating?: number;
  propertyType: string;
  amenities?: string[];
  rooms?: { name: string; description: string; price: string }[];
  url: string;
}

/**
 * Generate comprehensive Hotel schema for a property
 */
export function generateHotelSchema(options: HotelSchemaOptions) {
  const {
    name,
    description,
    image,
    address,
    locality,
    region,
    postalCode,
    country,
    latitude,
    longitude,
    telephone,
    priceRange,
    starRating,
    propertyType,
    amenities = [],
    url,
  } = options;

  const hotelSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness"],
    name,
    description,
    image: withSiteUrl(image),
    url,
    telephone,
    priceRange: priceRange || "INR 6,200 - 1,20,000",
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: locality,
      addressRegion: region,
      postalCode,
      addressCountry: country,
    },
  };

  // Add geo coordinates if available
  if (latitude && longitude) {
    hotelSchema.geo = {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    };
  }

  // Add star rating if available
  if (starRating) {
    hotelSchema.starRating = {
      "@type": "Rating",
      ratingValue: starRating.toString(),
      bestRating: "5",
    };
  }

  // Add amenity features
  if (amenities.length > 0) {
    hotelSchema.amenityFeature = amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    }));
  }

  return hotelSchema;
}

/**
 * Get Hotel schema for a specific property
 */
export function getPropertyHotelSchema(slug: string) {
  const hotelConfigs: Record<string, HotelSchemaOptions> = {
    "lavelle-road": {
      name: "The Pentouz Lavelle Road",
      description:
        "Boutique hotel in Bangalore featuring elegantly designed top-floor studio rooms with panoramic city views. Located near UB City and the High Court of Karnataka.",
      image: "/lavelle-road/terrace-1.jpg",
      address: "46, 6th Cross, Lavelle Road",
      locality: "Bengaluru",
      region: "Karnataka",
      postalCode: "560001",
      country: "IN",
      latitude: 12.9716,
      longitude: 77.5946,
      telephone: "+91-888-444-9930",
      priceRange: "INR 6,200 - 20,000",
      starRating: 4,
      propertyType: "Boutique Hotel",
      amenities: [
        "High-Speed WiFi",
        "Smart 55-inch TV",
        "Air Conditioning",
        "Kitchenette",
        "Open Roof-Top Terrace",
        "Covered Car Parking",
        "24-Hour Front Desk",
        "Lift Access",
      ],
      url: withSiteUrl("/destinations/lavelle-road"),
    },
    indiranagar: {
      name: "The Pentouz 100 Feet Road, Indiranagar",
      description:
        "Luxurious 3-bedroom penthouse in Bangalore's most vibrant neighborhood. 6,000 sq ft residence with private balconies, roof-top terrace, and ultra-modern kitchen.",
      image: "/indiranagar/terrace-7.jpg",
      address: "2022, 100 Feet Road, Indiranagar",
      locality: "Bengaluru",
      region: "Karnataka",
      postalCode: "560038",
      country: "IN",
      latitude: 12.9767,
      longitude: 77.641,
      telephone: "+91-888-444-9930",
      priceRange: "INR 15,000 - 50,000",
      starRating: 5,
      propertyType: "Three Bedroom Penthouse",
      amenities: [
        "High-Speed WiFi",
        "3 Bedrooms with Private Balconies",
        "Open Roof-Top Terrace",
        "Ultra-modern Kitchen",
        "Daily Housekeeping",
        "Laundry Room",
        "Covered Car Parking",
        "Airport Pickup Service",
      ],
      url: withSiteUrl("/destinations/indiranagar"),
    },
    ooty: {
      name: "The Pentouz Windsor Heights Ooty",
      description:
        "Mountain retreat in Ooty surrounded by lush tea gardens and colonial charm. Located on Elk Hill with stunning Nilgiri hill views.",
      image: "/ooty/view-24.jpeg",
      address: "Elk Hill, Ooty",
      locality: "Udhagamandalam",
      region: "Tamil Nadu",
      postalCode: "643001",
      country: "IN",
      telephone: "+91-888-444-9930",
      priceRange: "INR 8,000 - 12,000",
      starRating: 4,
      propertyType: "Mountain Retreat",
      amenities: [
        "Free WiFi",
        "Restaurant",
        "Room Service",
        "Fireplace",
        "Garden Views",
        "Heating",
        "Nature Trail Access",
        "In-house Restaurant",
      ],
      url: withSiteUrl("/destinations/ooty"),
    },
    "pentouz-hillside": {
      name: "The Pentouz Hillside Chikmagalur",
      description:
        "Luxury homestay in Karnataka's coffee country. Features swimming pool, on-site restaurant, bonfire area, and four distinct accommodations amidst the Western Ghats.",
      image: "/fernhill/all/59_property_top_view.jpg",
      address: "The Pentouz Hillside, Chikmagalur",
      locality: "Chikmagalur",
      region: "Karnataka",
      postalCode: "577101",
      country: "IN",
      latitude: 13.3166,
      longitude: 75.772,
      telephone: "+91-888-444-9930",
      priceRange: "INR 16,000 - 1,20,000",
      starRating: 4,
      propertyType: "Luxury Homestay",
      amenities: [
        "Swimming Pool",
        "Free WiFi",
        "Free Parking",
        "Air Conditioning",
        "Smart Android TV",
        "In-room Dining",
        "Daily Housekeeping",
        "Bonfire Area",
      ],
      url: withSiteUrl("/destinations/pentouz-hillside"),
    },
  };

  return hotelConfigs[slug];
}

// ============================================================================
// LOCAL BUSINESS SCHEMA
// ============================================================================

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "The Pentouz",
    description:
      "Boutique luxury accommodations across Bangalore, Chikmagalur, and Ooty. Properties include Lavelle Road boutique hotel, Indiranagar penthouse, Hillside Chikmagalur homestay, and Windsor Heights Ooty retreat.",
    url: withSiteUrl("/"),
    logo: withSiteUrl("/logo-white.png"),
    telephone: "+91-888-444-9930",
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address,
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/pentouz",
      "https://www.facebook.com/pentouz",
      "https://wa.me/918884449930",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-888-444-9930",
      contactType: "reservations",
      availableLanguage: ["English", "Hindi", "Kannada"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bengaluru",
      },
      {
        "@type": "City",
        name: "Chikmagalur",
      },
      {
        "@type": "City",
        name: "Ooty",
      },
    ],
  };
}

// ============================================================================
// BREADCRUMB SCHEMA
// ============================================================================

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: withSiteUrl(item.url),
    })),
  };
}

/**
 * Standard breadcrumbs for destination pages
 */
export function getDestinationBreadcrumbs(slug: string, propertyName: string) {
  return [
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: propertyName, url: `/destinations/${slug}` },
  ];
}

/**
 * Standard breadcrumbs for living pages
 */
export function getLivingBreadcrumbs(slug: string, propertyName: string) {
  return [
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: propertyName, url: `/destinations/${slug}` },
    { name: "Rooms & Suites", url: `/destinations/${slug}/living` },
  ];
}

// ============================================================================
// REVIEW/RATING SCHEMA
// ============================================================================

export function generateAggregateRatingSchema(
  propertyName: string,
  ratingValue: number,
  reviewCount: number,
  bestRating: number = 5
) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "Hotel",
      name: propertyName,
    },
    ratingValue: ratingValue.toString(),
    bestRating: bestRating.toString(),
    reviewCount: reviewCount.toString(),
    ratingCount: reviewCount.toString(),
  };
}

// ============================================================================
// HOW-TO SCHEMA
// ============================================================================

export function generateHowToSchema(
  title: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      itemListElement: {
        "@type": "HowToDirection",
        text: step.text,
      },
    })),
  };
}

/**
 * How to book a stay at The Pentouz
 */
export const howToBookSchema = generateHowToSchema(
  "How to Book Your Stay at The Pentouz",
  "Step-by-step guide to reserving your boutique luxury accommodation at The Pentouz properties in Bangalore, Chikmagalur, or Ooty.",
  [
    {
      name: "Choose Your Property",
      text: "Select from The Pentouz Lavelle Road (boutique city hotel), Indiranagar penthouse (family accommodation), Hillside Chikmagalur (coffee country retreat), or Windsor Heights Ooty (mountain escape).",
    },
    {
      name: "Check Availability",
      text: "Visit the property page or contact concierge at +91 888 444 9930 to check availability for your preferred dates. Each property page shows room types and indicative pricing.",
    },
    {
      name: "Select Your Room",
      text: "Choose from available room types: Queen/King Studios at Lavelle Road, Three-Bedroom Penthouse at Indiranagar, various accommodations at Hillside Chikmagalur, or Heritage/Garden/Mountain rooms at Ooty.",
    },
    {
      name: "Complete Your Booking",
      text: "Book directly through the property's booking link, call the concierge team, or send a WhatsApp message. Direct booking often provides better rates and personalized service.",
    },
    {
      name: "Receive Confirmation",
      text: "You'll receive booking confirmation via email with check-in details, property address, and concierge contact information. The team can arrange airport transfers and special requests.",
    },
  ]
);

/**
 * How to reach Lavelle Road
 */
export const howToReachLavelleSchema = generateHowToSchema(
  "How to Reach The Pentouz Lavelle Road, Bangalore",
  "Directions and travel options to The Pentouz Lavelle Road, including from airport, railway station, and metro.",
  [
    {
      name: "From Kempegowda International Airport",
      text: "The hotel is 35 km from the airport. Pre-book an airport taxi or use ride-sharing apps. Journey takes approximately 55 minutes depending on traffic.",
    },
    {
      name: "From KSR Bengaluru City Junction",
      text: "KSR railway station is 5 km away. Take a taxi or auto-rickshaw. The journey takes approximately 15 minutes via Queens Road and Residency Road.",
    },
    {
      name: "From MG Road Metro Station",
      text: "MG Road Metro Station is just 1 km away. Walk north on Mahatma Gandhi Road, turn left onto Residency Road, and continue to Lavelle Road.",
    },
    {
      name: "By Car",
      text: "The property is on 6th Cross, Lavelle Road, near the High Court. Covered car parking is available at the property.",
    },
  ]
);

// ============================================================================
// ORGANIZATION SCHEMA (Enhanced)
// ============================================================================

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Pentouz",
    alternateName: "Pentouz Hotels & Residences",
    description:
      "Boutique luxury hospitality brand offering distinctive accommodations across Bangalore, Chikmagalur, and Ooty, India.",
    url: withSiteUrl("/"),
    logo: withSiteUrl("/logo-white.png"),
    foundingDate: "2015",
    foundingLocation: "Bangalore, India",
    telephone: "+91-888-444-9930",
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address,
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/pentouz",
      "https://www.facebook.com/pentouz",
    ],
    knowsAbout: [
      "Luxury Boutique Hotels",
      "Vacation Rentals",
      "Hospitality Services",
      "Boutique Accommodation India",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pentouz Accommodations",
      itemListElement: destinations.map((dest) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Hotel",
          name: dest.title,
          description: dest.description,
        },
        seller: {
          "@type": "Organization",
          name: "The Pentouz",
        },
      })),
    },
  };
}

// ============================================================================
// WEBSITE SCHEMA WITH SITESEARCHACTION
// ============================================================================

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Pentouz",
    url: withSiteUrl("/"),
    description:
      "Boutique luxury residences and suites in Bangalore, Chikmagalur, and Ooty. Book direct for the best rates and personalized service.",
    publisher: {
      "@type": "Organization",
      name: "The Pentouz",
      logo: {
        "@type": "ImageObject",
        url: withSiteUrl("/logo-white.png"),
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: withSiteUrl("/destinations?q={search_term_string}"),
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ============================================================================
// COLLECTION PAGE SCHEMA
// ============================================================================

export function generateCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "The Pentouz Property Collection",
    description:
      "Boutique luxury properties across India: Lavelle Road boutique hotel, Indiranagar penthouse, Hillside Chikmagalur homestay, and Windsor Heights Ooty retreat.",
    numberOfItems: destinations.length,
    itemListElement: destinations.map((dest, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Hotel",
        name: dest.title,
        description: dest.description,
        url: withSiteUrl(`/destinations/${dest.slug}`),
        image: withSiteUrl(dest.image),
        address: {
          "@type": "PostalAddress",
          addressLocality: dest.subtitle.split(",")[0]?.trim() || "India",
          addressCountry: "IN",
        },
      },
    })),
  };
}

// ============================================================================
// TESTIMONIAL/REVIEW SCHEMA
// ============================================================================

export function generateReviewSchemas() {
  return testimonials
    .filter((t) => t.sourceUrl)
    .slice(0, 4)
    .map((testimonial) => ({
      "@context": "https://schema.org",
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: testimonial.name,
        address: testimonial.location,
      },
      reviewBody: testimonial.quote,
      publisher: {
        "@type": "Organization",
        name: testimonial.source,
        url: testimonial.sourceUrl,
      },
    }));
}

// ============================================================================
// SPEAKABLE SPECIFICATION (Voice Search)
// ============================================================================

export function generateSpeakableSpecification() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        "main h1",
        "main h2",
        ".hero-section h1",
        ".intro-section h2",
        "[data-speakable]",
      ],
      xpath: [
        "/html/head/title",
        "//meta[@name='description']",
      ],
    },
  };
}

// ============================================================================
// COMBINED SCHEMA GENERATOR
// ============================================================================

export interface PageSchemaOptions {
  type: "homepage" | "destination" | "about" | "contact" | "collection" | "living";
  slug?: string;
  propertyName?: string;
}

export function generatePageSchemas(options: PageSchemaOptions) {
  const { type, slug, propertyName } = options;
  const schemas: unknown[] = [];

  // Always add Organization and WebSite
  schemas.push(generateOrganizationSchema());
  schemas.push(generateWebsiteSchema());

  switch (type) {
    case "homepage":
      schemas.push(generateFAQSchema(homepageFAQs));
      schemas.push(howToBookSchema);
      schemas.push(generateCollectionSchema());
      schemas.push(...generateReviewSchemas());
      schemas.push(generateLocalBusinessSchema());
      break;

    case "destination":
      if (slug) {
        schemas.push(
          generateHotelSchema(getPropertyHotelSchema(slug)!)
        );
        schemas.push(generateFAQSchema(getPropertyFAQs(slug)));
        schemas.push(generateBreadcrumbSchema(
          getDestinationBreadcrumbs(slug, propertyName || "Property")
        ));

        // Add aggregate rating if available
        const dest = destinations.find((d) => d.slug === slug);
        if (dest && dest.rating && dest.reviews) {
          schemas.push(
            generateAggregateRatingSchema(
              dest.title,
              dest.rating,
              dest.reviews
            )
          );
        }
      }
      break;

    case "living":
      if (slug) {
        schemas.push(
          generateHotelSchema(getPropertyHotelSchema(slug)!)
        );
        schemas.push(generateBreadcrumbSchema(
          getLivingBreadcrumbs(slug, propertyName || "Property")
        ));
      }
      break;

    case "about":
      schemas.push(generateFAQSchema([
        {
          question: "What is The Pentouz brand philosophy?",
          answer:
            "The Pentouz was built on the idea that premium accommodation should not be loud to feel luxurious. A well-positioned address, thoughtful interiors, clean service, and a more residential sense of privacy create a stronger impression than excess styling.",
        },
        {
          question: "How many properties does The Pentouz have?",
          answer:
            "The Pentouz currently operates four properties: The Pentouz Lavelle Road (Bangalore city center), The Pentouz Indiranagar (Bangalore's vibrant neighborhood), The Pentouz Hillside Chikmagalur (coffee country retreat), and The Pentouz Windsor Heights Ooty (mountain escape).",
        },
        {
          question: "What makes each Pentouz property unique?",
          answer:
            "Each Pentouz property has a distinct character. Lavelle Road serves business and court-related stays. Indiranagar offers rare penthouse scale. Hillside Chikmagalur anchors the collection with warmth and natural beauty. Ooty provides a softer, slower retreat experience.",
        },
      ]));
      break;

    case "contact":
      schemas.push(generateLocalBusinessSchema());
      break;

    case "collection":
      schemas.push(generateCollectionSchema());
      break;
  }

  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}
