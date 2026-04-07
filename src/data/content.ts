import {
  indiranagarImageSet,
  lavelleImageSet,
  ootyImageSet,
} from "./propertyImageSets";

const lavelleKingImages = lavelleImageSet.filter((path) =>
  /9042_|9046_|9047_/i.test(path)
);
const lavelleQueenImages = lavelleImageSet.filter((path) =>
  /9041_|9043_/i.test(path)
);
const lavelleSuperiorImages = lavelleImageSet.filter((path) =>
  /9045_/i.test(path)
);
const lavelleCommonImages = lavelleImageSet.filter((path) =>
  /(facade|entrance|reception|restaurant|terrace|patio|parking|lift|staircase)/i.test(
    path
  )
);

// Destinations / Properties - Extended data
export const destinations = [
  {
    slug: "lavelle-road",
    subtitle: "Lavelle Road, Bangalore",
    title: "The Pentouz @ Lavelle Road",
    shortTitle: "Lavelle Road",
    copy: "Perched in Bangalore's prestigious Lavelle Road, The Pentouz offers an elegant blend of tranquility, sophistication, and city convenience.",
    description: "The Pentouz Lavelle Road boasts exquisitely designed, spacious studio rooms located on the top floor, each offering panoramic city views. Thoughtfully curated for discerning travelers, every studio balances timeless elegance with modern comfort. Set in one of Bangalore's most coveted neighborhoods and just a short stroll from UB City, this address places luxury dining, shopping, and culture right at your doorstep.",
    image: "/lavelle-road/facade-1.jpg",
    heroImage: "/lavelle-road/terrace-1.jpg",
    propertyType: "Boutique Hotel",
    totalRooms: "Studio Rooms",
    rating: 4,
    reviews: 12,
    capacity: "Up to 6 guests",
    address: "46, 6th Cross, Lavelle Road, Bangalore – 560001, India",
    features: [
      "Spacious top-floor studio rooms",
      "Panoramic city views",
      "Prime Lavelle Road location near UB City",
      "24-hour front desk and concierge",
      "Open Roof-Top Terrace",
      "Covered car parking"
    ],
    amenities: [
      "High-Speed WiFi",
      'Smart 55" TV',
      "Air Conditioning",
      "Kitchenette",
      "Refrigerator",
      "Microwave Oven",
      "Work Desk",
      "Daily Housekeeping",
      "Open Roof-Top Terrace",
      "Covered Car Parking",
      "Lift Access",
      "24-Hour Front Desk",
    ],
    rooms: [
      {
        name: "Queen Studio",
        description: '450 sq. ft. studio with queen bed, kitchenette, Smart 55" TV, and elegant bath.',
        image: "/lavelle-road/queen-suite-1.jpg",
      },
      {
        name: "King Studio",
        description: "475 sq. ft. studio with king bed, kitchenette, work desk, and city views.",
        image: "/lavelle-road/king-suite-1.jpg",
      },
      {
        name: "Superior Studio",
        description: "450 sq. ft. studio with twin beds, kitchenette, and refined interiors.",
        image: "/lavelle-road/superior-suite-1.jpg",
      },
      {
        name: "King Superior Studio",
        description: "500 sq. ft. studio with king bed, premium furnishings, kitchenette, and panoramic city views.",
        image: "/lavelle-road/king-suite-1.jpg",
      },
      {
        name: "Three Bedroom Unit",
        description: "Combined Superior + two King Studios, ~1,400 sq. ft., ideal for up to six guests.",
        image: "/lavelle-road/terrace-1.jpg",
      },
    ],
    gallery: [...lavelleImageSet],
    bookingUrl: "https://bookmystay.io/rooms/37853/2025-12-23/2025-12-24/2/0?utm_source=brandWebsite",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    idealFor: ["Business Travelers", "Couples", "Solo Travelers", "Weekend Getaways"],
    location: {
      airport: { name: "Kempegowda International Airport", distance: "35 km", time: "55 minutes" },
      railway: { name: "KSR Bengaluru City Junction", distance: "5 km", time: "15 minutes" },
      metro: { name: "MG Road Metro Station", distance: "1 km", time: "5 minutes" },
    },
    livingIntro:
      "The Pentouz @ Lavelle Road offers elegantly designed top-floor studio accommodations, each balancing space, privacy, and refined comfort in Bangalore's premier neighborhood.",
    legalSeo: {
      title:
        "Hotel Near High Court of Karnataka for Outstation Advocates | The Pentouz Lavelle Road",
      description:
        "Business-friendly hotel near the High Court of Karnataka, ideal for outstation advocates in Bengaluru. Stay close to court access, UB City, and central legal districts.",
      keywords: [
        "hotel near Bangalore High Court",
        "hotel near High Court of Karnataka",
        "outstation advocates accommodation Bengaluru",
        "lawyers hotel stay Bangalore",
        "Lavelle Road hotel for court hearings",
      ],
    },
    livingLocation: {
      airport: { name: "Kempegowda International Airport", distance: "37 km", time: "60 minutes" },
      railway: { name: "KSR Bengaluru City Junction", distance: "10 km", time: "35 minutes" },
      metro: { name: "MG Road Metro Station", distance: "1 km", time: "5 minutes" },
    },
    livingRooms: [
      {
        name: "Queen Studio",
        size: "450 sq ft",
        description: 'A refined queen-bed studio with kitchenette, refrigerator, microwave oven, work desk, Smart 55" TV, high-speed WiFi, air conditioning, spacious wardrobes, and a beautifully designed bathroom.',
        features: ["Queen Bed", "Kitchenette", "Work Desk", 'Smart 55" TV'],
        image: lavelleQueenImages[0] || "/lavelle-road/queen-suite-1.jpg",
        images: lavelleQueenImages,
      },
      {
        name: "King Studio",
        size: "475 sq ft",
        description: 'A luxurious king-bed studio with kitchenette, refrigerator, microwave oven, dedicated work desk, Smart 55" TV, high-speed WiFi, air conditioning, spacious wardrobes, and an elegantly designed bathroom.',
        features: ["King Bed", "Kitchenette", "Work Desk", "High-Speed WiFi"],
        image: lavelleKingImages[0] || "/lavelle-road/king-suite-1.jpg",
        images: lavelleKingImages,
      },
      {
        name: "Superior Studio",
        size: "450 sq ft",
        description: 'A stylish twin-bed studio with kitchenette, refrigerator, microwave oven, work desk, Smart 55" TV, high-speed WiFi, air conditioning, and premium bathroom design.',
        features: ["Twin Beds", "Kitchenette", "Work Desk", "High-Speed WiFi"],
        image: lavelleSuperiorImages[0] || "/lavelle-road/superior-suite-1.jpg",
        images: lavelleSuperiorImages,
      },
      {
        name: "King Superior Studio",
        size: "500 sq ft",
        description: 'A premium king-bed studio with superior furnishings, kitchenette, refrigerator, microwave oven, work desk, Smart 55" TV, high-speed WiFi, air conditioning, and a generously appointed bathroom with panoramic city views.',
        features: ["King Bed", "Premium Furnishings", 'Smart 55" TV', "City Views"],
        image: lavelleKingImages[1] || lavelleKingImages[0] || "/lavelle-road/king-suite-1.jpg",
        images: lavelleKingImages,
      },
      {
        name: "Three Bedroom Unit",
        size: "1,400 sq ft",
        description: "An expansive three-bedroom unit that combines one Superior Studio and two King Studios. Ideal for families, groups, or business travelers who want both privacy and shared comfort.",
        features: ["Up to 6 Guests", "3 Bedroom Combination", "City Views", "Extended-Stay Ready"],
        image: lavelleCommonImages[0] || "/lavelle-road/terrace-1.jpg",
        images: lavelleCommonImages,
      }
    ]
  },
  {
    slug: "indiranagar",
    subtitle: "Indiranagar, Bangalore",
    title: "The Pentouz @ 100 Feet Road",
    shortTitle: "Indiranagar",
    copy: "A luxurious three-bedroom penthouse in the heart of Indiranagar, crafted for families, groups, and business travelers seeking premium comfort.",
    description: "The Pentouz Indiranagar is a luxurious 3-bedroom penthouse nestled in one of Bangalore's most upscale neighborhoods. This exclusive residence blends comfort, elegance, and convenience with spacious interiors and thoughtfully designed living areas. Each bedroom features a private balcony with vibrant city views, plush bedding, ample storage, and tasteful decor for a serene and elevated stay.",
    image: "/indiranagar/terrace-7.jpg",
    heroImage: "/indiranagar/living-room-5.jpg",
    propertyType: "Three Bedroom Penthouse",
    totalSize: "6,000 sq ft",
    rating: 5,
    reviews: 4,
    capacity: "Up to 6 guests",
    address: "2022, 100 Feet Road, Indiranagar, Bangalore – 560038, India",
    features: [
      "Three-bedroom private penthouse",
      "Private balcony in each bedroom",
      "Open Roof-Top Terrace and city views",
      "Ultra-modern kitchen",
      "Daily housekeeping",
      "Covered car parking",
    ],
    amenities: [
      "Prime Location",
      "Peace & Tranquillity",
      "Great Views",
      "Safe & Secure",
      "Ultra-modern Kitchen",
      "Daily Housekeeping",
      "Laundry Room",
      "Wifi & Internet",
      "State-Of-Art Entertainment",
      "Spacious Balconies",
      "Open Roof-Top Terrace",
      "Covered Car Parking",
      "Transport Services",
      "Airport Pick-up Service",
    ],
    rooms: [
      {
        name: "The Skyline Suite",
        description: "Panoramic city views with private terrace",
        image: "/indiranagar/skyline-suite.jpg",
      },
      {
        name: "The Terrace Haven",
        description: "Direct terrace access with lounge seating",
        image: "/indiranagar/terrace-7.jpg",
      },
      {
        name: "The Urban Retreat",
        description: "Contemporary comfort in the heart of the city",
        image: "/indiranagar/vista-room.jpg",
      },
    ],
    gallery: [...indiranagarImageSet],
    bookingUrl: "https://hotels.eglobe-solutions.com/pentouz/booking/hotels/the-pentouz-bangalore",
    location: {
      airport: { name: "Kempegowda International Airport", distance: "37 km", time: "60 minutes" },
      railway: { name: "KSR Bengaluru City Junction", distance: "10 km", time: "35 minutes" },
      metro: { name: "Indiranagar Metro Station", distance: "1 km", time: "5 minutes" },
    },
    coordinates: { lat: 12.9767, lng: 77.641 },
    idealFor: ["Corporate Guests", "Families", "Extended Stays", "Special Occasions"],
    livingIntro:
      "The centerpiece of The Pentouz Indiranagar is its spacious and thoughtfully designed penthouse with three well-appointed bedrooms and private balconies overlooking the city.",
    livingLocation: {
      airport: { name: "Kempegowda International Airport", distance: "37 km", time: "60 minutes" },
      railway: { name: "KSR Bengaluru City Junction", distance: "10 km", time: "35 minutes" },
      metro: { name: "Indiranagar Metro Station", distance: "1 km", time: "5 minutes" },
    },
    livingRooms: [
      {
        name: "Three Bedroom Penthouse",
        size: "6,000 sq ft",
        description: "A spacious full-floor penthouse with three bedrooms, private balconies, elegant living and dining spaces, an ultra-modern kitchen, and an open roof-top terrace for memorable gatherings.",
        features: ["3 Bedrooms", "Private Balconies", "Open Roof-Top Terrace", "Ultra-modern Kitchen"],
        image: "/indiranagar/living-room-5.jpg"
      },
      {
        name: "The Terrace Haven",
        size: "3,000 sq ft",
        description: "A refined suite with direct terrace access, plush bedding, elegant interiors, and shared access to the penthouse living and dining spaces.",
        features: ["Terrace Access", "Private Balcony", "Shared Living Areas", "City Views"],
        image: "/indiranagar/terrace-7.jpg"
      },
      {
        name: "The Skyline Suite",
        size: "600 sq ft",
        description: "A sophisticated king suite with expansive city views, private balcony, elegant bath, and all modern in-room essentials.",
        features: ["City Views", "King Bed", "Private Balcony", "Wifi & Internet"],
        image: "/indiranagar/skyline-suite.jpg"
      },
      {
        name: "The Vista Room",
        size: "500 sq ft",
        description: "A calm and comfortable room with private balcony, city outlook, and seamless access to the penthouse common areas.",
        features: ["City Views", "Private Balcony", "Peace & Tranquillity", "Shared Spaces"],
        image: "/indiranagar/vista-room.jpg"
      }
    ]
  },
  {
    slug: "ooty",
    subtitle: "Elk Hill, Ooty",
    title: "The Pentouz Windsor Heights",
    shortTitle: "Ooty",
    copy: "A mountain retreat where tea gardens meet misty mornings. Embrace the serenity of the Nilgiris.",
    description: "Escape to the misty hills of the Nilgiris at The Pentouz Windsor Heights. Surrounded by lush tea gardens and colonial charm, our Ooty property offers a tranquil retreat from the ordinary. Whether you're seeking contemplation, celebration, or creative inspiration, the serene mountain setting provides the perfect backdrop for an unforgettable stay.",
    address: "Elk Hill, Ooty, Tamil Nadu, India",
    image: "/ooty/view-24.jpeg",
    heroImage: "/ooty/facade-3.jpeg",
    features: [
      "Surrounded by tea gardens",
      "Panoramic mountain views",
      "Colonial heritage architecture",
      "In-house restaurant",
      "Fireplace in select rooms",
      "Nature trail access"
    ],
    amenities: ["Free WiFi", "Restaurant", "Room Service", "Fireplace", "Garden Views", "Heating"],
    rooms: [
      {
        name: "The Heritage Suite",
        description: "Colonial charm with modern luxury",
        image: "/ooty/bedroom-10.jpeg",
      },
      {
        name: "The Garden View Room",
        description: "Wake up to lush green vistas",
        image: "/ooty/bedroom-12.jpeg",
      },
      {
        name: "The Mountain Retreat",
        description: "Cozy comfort with hill views",
        image: "/ooty/bedroom-15.jpeg",
      },
    ],
    gallery: [...ootyImageSet],
    bookingUrl: "https://pentouz.com/the-pentouz-windsor-heights-ooty/",
    location: {
      airport: { name: "Coimbatore International Airport", distance: "84 km", time: "3 hours" },
      railway: { name: "Udhagamandalam Railway Junction", distance: "10 km", time: "25 minutes" },
      landmark: { name: "Ooty Lake", distance: "3 km", time: "15 minutes" }
    },
    livingRooms: [
      {
        name: "The Heritage Suite",
        size: "900 sq ft",
        description: "Colonial charm meets modern luxury. Features four-poster bed, fireplace, private sitting area, and stunning views of the Nilgiri hills.",
        features: ["Four-poster Bed", "Fireplace", "Sitting Area", "Hill Views"],
        image: "/ooty/bedroom-10.jpeg"
      },
      {
        name: "The Garden View Room",
        size: "500 sq ft",
        description: "Wake up to lush green vistas. Comfortable queen bed, en-suite bathroom, and French windows opening to the manicured gardens.",
        features: ["Garden Views", "Queen Bed", "French Windows", "En-suite Bathroom"],
        image: "/ooty/bedroom-12.jpeg"
      },
      {
        name: "The Mountain Retreat",
        size: "450 sq ft",
        description: "Cozy comfort with spectacular hill views. Features plush bedding, heating, and a private balcony overlooking the tea gardens.",
        features: ["Hill Views", "Heating", "Private Balcony", "Tea Garden Views"],
        image: "/ooty/bedroom-15.jpeg"
      }
    ]
  },
];

// Related Properties - The Collection
export const relatedProperties = [
  {
    slug: "hotel-kingdom-manyata",
    name: "Hotel Kingdom Manyata",
    location: "Manyata Tech Park, Bangalore",
    description: "Ideally located near Manyata Tech Park, perfect for business travelers seeking comfort and convenience.",
    image: "/lavelle-road/facade-2.jpg",
    bookingUrl: "https://pentouz.com/hotel-kingdom-manyata/",
    features: ["Business Center", "Free Parking", "Restaurant", "Conference Rooms"]
  },
  {
    slug: "bangalore-inn-doddanekundi",
    name: "Bangalore Inn Doddanekundi",
    location: "Doddanekundi, Bangalore",
    description: "A comfortable stay in the heart of Bangalore's IT corridor, offering modern amenities and excellent connectivity.",
    image: "/indiranagar/living-room-1.jpg",
    bookingUrl: "https://pentouz.com/bangalore-inn-doddanekundi/",
    features: ["24/7 Front Desk", "Free WiFi", "Airport Shuttle", "Laundry Service"]
  },
  {
    slug: "bangalore-times-brookefield",
    name: "Bangalore Times Brookefield",
    location: "Brookefield, Bangalore",
    description: "Contemporary accommodations in the vibrant Brookefield area, close to major tech parks and shopping centers.",
    image: "/ooty/facade-1.jpeg",
    bookingUrl: "https://pentouz.com/bangalore-times-brookefield/",
    features: ["Modern Rooms", "Rooftop Lounge", "Gym", "Meeting Rooms"]
  },
  {
    slug: "bangalore-inn-brookefield",
    name: "Bangalore Inn Brookefield",
    location: "Brookefield, Bangalore",
    description: "Budget-friendly comfort without compromising on quality. Ideal for both short and extended stays.",
    image: "/lavelle-road/entrance-2.jpg",
    bookingUrl: "https://pentouz.com/bangalore-inn-brookefield/",
    features: ["Value Pricing", "Clean Rooms", "Breakfast Included", "Travel Desk"]
  }
];

// Living experiences
export const living = [
  {
    title: "Living @ Indiranagar",
    copy: "Urban luxury steps from the city's most vibrant neighbourhood. Work, play, and stay in style.",
  },
  {
    title: "Living @ Lavelle Road",
    copy: "The pinnacle of Bangalore's cosmopolitan elegance—skyline views, rooftop terraces, and bespoke comfort.",
  },
  {
    title: "Living @ Ooty",
    copy: "Escape to misty hills and timeless charm. Perfect for contemplation, celebration, or creative retreat.",
  },
];

// Experiences
export const experiences = [
  {
    title: "Tailored Stays",
    copy: "From corporate retreats to intimate anniversaries—our team designs every detail around your needs.",
  },
  {
    title: "City & Nature",
    copy: "Experience the best of both worlds: buzzing city centers by day, peaceful hills by weekend.",
  },
  {
    title: "Privé Club",
    copy: "Exclusive member benefits: priority reservations, complimentary upgrades, and invitation-only events.",
  },
];

// Offers
export const offers = [
  {
    badge: "Seasonal",
    title: "Stay 3, Pay 2",
    copy: "Book three nights at any Pentouz property and enjoy the third night complimentary. Valid through spring.",
  },
  {
    badge: "Signature",
    title: "Gastronomy at Home",
    copy: "Let our private chef craft a bespoke dining experience in-suite, paired with curated wines.",
  },
  {
    badge: "Privé",
    title: "Early Access",
    copy: "Privé members unlock new properties 48 hours before public release, plus 15% exclusive savings.",
  },
];

// Gallery items
export const galleryItems = [
  {
    title: "Skyline Suite",
    category: "Bedroom",
    image: "/indiranagar/skyline-suite.jpg",
  },
  {
    title: "Terrace Lounge",
    category: "Terrace",
    image: "/indiranagar/terrace-7.jpg",
  },
  {
    title: "Restaurant",
    category: "Lifestyle",
    image: "/ooty/restaurant-20.jpeg",
  },
  {
    title: "Terrace Views",
    category: "Terrace",
    image: "/ooty/view-24.jpeg",
  },
  {
    title: "Living Room",
    category: "Lifestyle",
    image: "/indiranagar/living-room-5.jpg",
  },
  {
    title: "Master Bathroom",
    category: "Bedroom",
    image: "/indiranagar/master-bath.jpg",
  },
  {
    title: "Reception",
    category: "Lifestyle",
    image: "/lavelle-road/reception-1.jpg",
  },
  {
    title: "Premium Living",
    category: "Lifestyle",
    image: "/indiranagar/living-room-10.jpg",
  },
];

// Testimonials
export const testimonials = [
  {
    quote: "The attention to detail was impeccable. From the moment we arrived, every need was anticipated.",
    name: "Johannes",
    source: "Booking.com",
  },
  {
    quote: "Pentouz Lavelle Road exceeded all expectations. The rooftop view at sunset is unforgettable.",
    name: "Gayatri",
    source: "TripAdvisor",
  },
  {
    quote: "Our stay in Ooty was magical. The staff made our anniversary celebration truly special.",
    name: "Anusha",
    source: "Booking.com",
  },
];

// Navigation links - Updated for multi-page
export const navLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/collection", label: "Collection" },
  { href: "/experiences", label: "Experiences" },
  { href: "/prive-club", label: "Privé Club" },
  { href: "/offers", label: "Offers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Social media links
export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/pentouz" },
  { label: "Facebook", href: "https://www.facebook.com/pentouz" },
  { label: "WhatsApp", href: "https://wa.me/918884449930" },
];

// Contact info
export const contactInfo = {
  address: "46, 6th Cross, Lavelle Road",
  city: "Bangalore - 560001, India",
  phones: ["+91 888 444 9930", "+91 8970 298 300"],
  email: "sales@pentouz.com",
  whatsapp: "+918884449930",
};

// Gallery categories
export const galleryCategories = ["All", "Bedroom", "Terrace", "Lifestyle"];

// Hero image
export const heroImage = "/indiranagar/living-room-10.jpg";
