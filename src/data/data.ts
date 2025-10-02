import {
  blogOneDataType,
  BlogPageDataType,
  featureCategoryDataType,
  FeatureOneDataType,
  GlobalDataTypefour,
  GlobalDataTypeOne,
  GlobalDataTypeThree,
  GlobalDataTypeTwo,
  listingTwoDataType,
  locationThreeDataType,
  locationTwoDataType,
  OpeningHour,
  PlanType,
  recentPostType,
  sidebarCategoriesType,
  TestimonialDataType,
} from "./types";

// introThumbData
export const introThumbData: GlobalDataTypeOne[] = [
  {
    _id: "1",
    img: "/images/intro/intro-thumb1_1.jpg",
  },
  {
    _id: "2",
    img: "/images/intro/intro-thumb1_2.png",
  },
  {
    _id: "3",
    img: "/images/intro/intro-thumb1_3.png",
  },
  {
    _id: "4",
    img: "/images/intro/intro-thumb1_4.png",
  },
  {
    _id: "5",
    img: "/images/intro/intro-thumb1_5.png",
  },
];

// introListingData
export const locationOptions: GlobalDataTypeTwo[] = [
  { value: "london", label: "London" },
  { value: "usa", label: "Usa" },
  { value: "uk", label: "Uk" },
];
export const listingOptions: GlobalDataTypeTwo[] = [
  { value: "restaurant", label: "Restaurant" },
  { value: "hotel", label: "Hotel" },
  { value: "car", label: "Car" },
];
export const priceOptions: GlobalDataTypeTwo[] = [
  { value: "low", label: "$5 - $100" },
  { value: "medium", label: "$100 - $200" },
  { value: "high", label: "$500 - $1000" },
];

// FeatureOneData
export const FeatureOneData: FeatureOneDataType[] = [
  {
    _id: "1",
    thumb: "/images/listing-categories/listing1_1.jpg",
    location: "Sunset Meadows, London",
    title: "First-Time Homebuyers to Secure the Best Deal.",
    slug: "first-time-homebuyers-to-secure-the-best-deal",
    beds: 4,
    baths: 4,
    sqft: 1100,
    price: "$ 70,600",
  },
  {
    _id: "2",
    thumb: "/images/listing-categories/listing1_2.jpg",
    location: "Oakwood Estates, London",
    title: "Top Neighborhoods for Renting Need to Know.",
    slug: "top-neighborhoods-for-renting-need-to-know",
    beds: 4,
    baths: 2,
    sqft: 1100,
    price: "$ 10,000",
  },
  {
    _id: "3",
    thumb: "/images/listing-categories/listing1_3.jpg",
    location: "Lakeside Haven, London",
    title: "Home Quickly Without Compromising Value",
    slug: "home-quickly-without-compromising-value",
    beds: 4,
    baths: 3,
    sqft: 1100,
    price: "$ 88,600",
  },
  {
    _id: "4",
    thumb: "/images/listing-categories/listing1_1.jpg",
    location: "Sunset Meadows, London",
    title: "First-Time Homebuyers to Secure the Best Deal.",
    slug: "first-time-homebuyers-to-secure-the-best-deal-2",
    beds: 4,
    baths: 4,
    sqft: 1100,
    price: "$ 70,600",
  },
];

// featureCategoryData
export const featureCategoryData: featureCategoryDataType[] = [
  {
    _id: "1",
    img: "/images/listing-categories/categories1_1.jpg",
    title: "Hostel",
    badge: "1 Listing",
    badge2: "BUY",
    price: "$ 1780,00",
    filter: "hostel fitness",
    slug: "hostel",
    reviews: 5,
  },
  {
    _id: "2",
    img: "/images/listing-categories/categories1_2.jpg",
    title: "Restaurant",
    badge: "4 Listing",
    badge2: "SALE",
    price: "$ 2100,00",
    filter: "hostel restaurant",
    slug: "restaurant",
    reviews: 5,
  },
  {
    _id: "3",
    img: "/images/listing-categories/categories1_3.jpg",
    title: "Fitness",
    badge: "1 Listing",
    badge2: "RENT",
    price: "$ 8600,00",
    filter: "fitness real-estate",
    slug: "fitness",
    reviews: 5,
  },
  {
    _id: "4",
    img: "/images/listing-categories/categories1_4.jpg",
    title: "Real Estate",
    badge: "4 Listing",
    badge2: "SALE",
    price: "$ 8860,00",
    filter: "restaurant hostel",
    slug: "real-estate",
    reviews: 5,
  },
  {
    _id: "5",
    img: "/images/listing-categories/categories1_5.jpg",
    title: "Shopping",
    badge: "2 Listing",
    badge2: "SALE",
    price: "$ 8800,00",
    filter: "fitness real-estate",
    slug: "shopping",
    reviews: 5,
  },
  {
    _id: "6",
    img: "/images/listing-categories/categories1_6.jpg",
    title: "Health",
    badge: "1 Listing",
    badge2: "BUY",
    price: "$ 600,00",
    filter: "fitness restaurant",
    slug: "health",
    reviews: 5,
  },
];

// plansData
export const plansData: PlanType[] = [
  {
    _id: "1",
    title: "Basic",
    price: "$ 21/mo",
    icon: "/images/price/price1.png",
    text: "We believe in transparent, straightforward pricing with no hidden fees.",
    features: [
      "Flexible Plans Transparent",
      "Simple Pricing Business Size",
      "Tailored Plans, Designed",
      "Pay Only for Hidden Costs",
    ],
    checkIcon: "/images/icon/price-check1.svg",
    highlight: false,
  },
  {
    _id: "2",
    title: "Enterprise",
    price: "$ 30/mo",
    icon: "/images/price/price2.png",
    text: "Listing, we believe in transparent, straightforward pricing with no hidden fees.",
    features: [
      "No Complex Contracts",
      "Scale Confidently",
      "Flexible Pricing",
      "Unlimited Possibilities",
    ],
    checkIcon: "/images/icon/price-check2.svg",
    highlight: true,
  },
  {
    _id: "3",
    title: "Business",
    price: "$ 21/mo",
    icon: "/images/price/price1.png",
    text: "We believe in transparent, straightforward pricing with no hidden fees.",
    features: [
      "Predictable Costs",
      "Customized Solutions",
      "Effortless Pricing",
      "Seamless Growth",
    ],
    checkIcon: "/images/icon/price-check1.svg",
    highlight: false,
  },
];

// blogOneData
export const blogOneData: blogOneDataType[] = [
  {
    _id: "1",
    img: "/images/blog/blog-thumb1_1.jpg",
    date: "19 Dec, 2024",
    comments: 3,
    title: "Discover the Future of Technology",
    slug: "discover-the-future-of-technology-1",
  },
  {
    _id: "2",
    img: "/images/blog/blog-thumb1_2.jpg",
    date: "19 Dec, 2024",
    comments: 3,
    title: "Discover the Future of Technology",
    slug: "discover-the-future-of-technology-2",
  },
  {
    _id: "3",
    img: "/images/blog/blog-thumb1_3.jpg",
    date: "19 Dec, 2024",
    comments: 3,
    title: "Discover the Future of Technology",
    slug: "discover-the-future-of-technology-3",
  },
  {
    _id: "4",
    img: "/images/blog/blog-thumb1_2.jpg",
    date: "19 Dec, 2024",
    comments: 3,
    title: "Discover the Future of Technology",
    slug: "discover-the-future-of-technology-2",
  },
];

// Blog Page Data
export const blogPageData: BlogPageDataType[] = [
  {
    _id: "1",
    img: "/images/blog/blog-thumb3_1.jpg",
    date: "October 19, 2023",
    comments: "Comments (05)",
    title:
      "Harness the Power of the Listing Brighten Your Life Embrace Sustainability",
    slug: "harness-the-power",
  },
  {
    _id: "2",
    img: "/images/blog/blog-thumb3_2.jpg",
    date: "October 19, 2023",
    comments: "Comments (05)",
    title: "Shine Brighter with Listing Let the Listing Power Your Home",
    slug: "shine-brighter",
  },
  {
    _id: "3",
    img: "/images/blog/blog-thumb3_3.jpg",
    date: "October 19, 2023",
    comments: "Comments (05)",
    title: "Listing for a Sustainable Future Go Listing Go Green Harness",
    slug: "listing-for-a-sustainable",
  },
];

// Blog Sidebar Data
export const sidebarCategories: sidebarCategoriesType[] = [
  { _id: "1", name: "Listingize Your Home", number: "01" },
  { _id: "2", name: "Energy Systems", number: "02" },
  { _id: "3", name: "Listing Technologies", number: "03" },
  { _id: "4", name: "Listing Services", number: "04" },
];
export const recentPosts: recentPostType[] = [
  {
    _id: "1",
    img: "/images/blog/rp-thumb1_1.jpg",
    category: "Category",
    title: "Listing Solutions for Your Energy",
    slug: "listing-solutions",
  },
  {
    _id: "2",
    img: "/images/blog/rp-thumb1_2.jpg",
    category: "Category",
    title: "Embrace Listing is a Sustainability",
    slug: "embrace-listing",
  },
  {
    _id: "3",
    img: "/images/blog/rp-thumb1_3.jpg",
    category: "Category",
    title: "Listinglight to Power Your World",
    slug: "listinglight-to-ower",
  },
];
export const sidebarTags: GlobalDataTypeThree[] = [
  { _id: "1", title: "Listinglight Solutions" },
  { _id: "2", title: "Energy Systems" },
  { _id: "3", title: "Listing Spark" },
  { _id: "4", title: "Services" },
  { _id: "5", title: "Energy" },
];

// brandOneData
export const brandOneData: GlobalDataTypeOne[] = [
  { _id: "1", img: "/images/brand/brand1_1.png" },
  { _id: "2", img: "/images/brand/brand1_2.png" },
  { _id: "3", img: "/images/brand/brand1_3.png" },
  { _id: "4", img: "/images/brand/brand1_4.png" },
  { _id: "5", img: "/images/brand/brand1_5.png" },
  { _id: "6", img: "/images/brand/brand1_3.png" },
];

// testimonialOneData
export const testimonialOneData: TestimonialDataType[] = [
  {
    _id: "1",
    name: "Sarah Johnson",
    title: "Homeowner",
    text: "Working with this team was a seamless and rewarding experience. They truly understood my needs and helped me find the perfect home in no time! Exceptional service and attention to detail! They made selling my property stress-free.",
    rating: 5,
  },
  {
    _id: "2",
    name: "Michael Smith",
    title: "Business Owner",
    text: "Working with this team was a seamless and rewarding experience. They truly understood my needs and helped me find the perfect home in no time! Exceptional service and attention to detail! They made selling my property stress-free.",
    rating: 5,
  },
  {
    _id: "3",
    name: "Emily Davis",
    title: "Investor",
    text: "Working with this team was a seamless and rewarding experience. They truly understood my needs and helped me find the perfect home in no time! Exceptional service and attention to detail! They made selling my property stress-free.",
    rating: 5,
  },
];

// testimonialTwoData
export const testimonialTwoData: TestimonialDataType[] = [
  {
    _id: "1",
    name: "Sarah Johnson",
    title: "Homeowner",
    text: "Working with this team was a seamless and rewarding experience. They truly understood my needs and helped me find the perfect home in no time! Exceptional service and attention to detail! They made selling my property stress-free.",
    rating: 5,
  },
  {
    _id: "2",
    name: "Michael Smith",
    title: "Investor",
    text: "Working with this team was a seamless and rewarding experience. They truly understood my needs and helped me find the perfect home in no time! Exceptional service and attention to detail! They made selling my property stress-free.",
    rating: 5,
  },
  {
    _id: "3",
    name: "Emily Davis",
    title: "Seller",
    text: "Working with this team was a seamless and rewarding experience. They truly understood my needs and helped me find the perfect home in no time! Exceptional service and attention to detail! They made selling my property stress-free.",
    rating: 5,
  },
];

// locationTwoData
export const formLocationData: GlobalDataTypeTwo[] = [
  { value: "german", label: "German" },
  { value: "italy", label: "Italy" },
  { value: "newyork", label: "New York" },
];

// locationTwoData
export const locationTwoData: locationTwoDataType[] = [
  {
    _id: "1",
    img: "/images/location/location-thumb1_1.jpg",
    badge: "1 Listing",
    meta: "Canary Wharf (London)",
    title: "United States",
    filter: "featured",
    slug: "united-states",
  },
  {
    _id: "2",
    img: "/images/location/location-thumb1_2.jpg",
    badge: "2 Listing",
    meta: "Canary Wharf (London)",
    title: "New York",
    filter: "recommended popular",
    slug: "new-york",
  },
  {
    _id: "3",
    img: "/images/location/location-thumb1_3.jpg",
    badge: "1 Listing",
    meta: "Champs-Élysées (Paris)",
    title: "Canada",
    filter: "featured",
    slug: "canada",
  },
  {
    _id: "4",
    img: "/images/location/location-thumb1_4.jpg",
    badge: "4 Listing",
    meta: "Canary Wharf (London, UK)",
    title: "Australia",
    filter: "recommended popular",
    slug: "australia",
  },
  {
    _id: "5",
    img: "/images/location/location-thumb1_1.jpg",
    badge: "3 Listing",
    meta: "Shinjuku (Tokyo)",
    title: "Russia",
    filter: "featured",
    slug: "russia",
  },
  {
    _id: "6",
    img: "/images/location/location-thumb1_6.jpg",
    badge: "1 Listing",
    meta: "Canary Wharf (London)",
    title: "United States",
    filter: "popular",
    slug: "united-states",
  },
];

// locationThreeData
export const locationThreeData: locationThreeDataType[] = [
  {
    _id: "1",
    thumb: "/images/location/location-thumb3_1.jpg",
    badge: "Hotel",
    country: "Japan",
    title: "Best Neighborhoods to Rent",
    reviews: 5,
    slug: "best-neighborhoods-to-rent",
  },
  {
    _id: "2",
    thumb: "/images/location/location-thumb3_2.jpg",
    badge: "Restaurant",
    country: "UK",
    title: "Tips for First-Time Homebuyers",
    reviews: 5,
    slug: "tips-for-first-time-homebuyers",
  },
  {
    _id: "3",
    thumb: "/images/location/location-thumb3_3.jpg",
    badge: "Real Estate",
    country: "UK",
    title: "Sell Your Home Fast Sacrificing",
    reviews: 5,
    slug: "sell-your-home-fast-sacrificing",
  },
];

// listingTwoData
export const listingTwoData: listingTwoDataType[] = [
  {
    _id: "1",
    thumb: "/images/listing-categories/listing-thumb2_1.jpg",
    meta: "Le Marais (Paris, France)",
    country: "France",
    listings: 209,
    slug: "france",
  },
  {
    _id: "2",
    thumb: "/images/listing-categories/listing-thumb2_2.jpg",
    meta: "Plaka (Athens, Greece)",
    country: "Italy",
    listings: 230,
    slug: "italy",
  },
  {
    _id: "3",
    thumb: "/images/listing-categories/listing-thumb2_3.jpg",
    meta: "Westlands (Nairobi, Kenya)",
    country: "Spain",
    listings: 450,
    slug: "spain",
  },
  {
    _id: "4",
    thumb: "/images/listing-categories/listing-thumb2_4.jpg",
    meta: "Ponsonby (Auckland, New Zealand)",
    country: "South Africa",
    listings: 209,
    slug: "south-africa",
  },
  {
    _id: "5",
    thumb: "/images/listing-categories/listing-thumb2_5.jpg",
    meta: "Bondi Beach (Sydney, Australia)",
    country: "Mexico",
    listings: 234,
    slug: "mexico",
  },
  {
    _id: "6",
    thumb: "/images/listing-categories/listing-thumb2_6.jpg",
    meta: "El Jadida (Morocco)",
    country: "Turkey",
    listings: 400,
    slug: "turkey",
  },
];

// listing Page data
export const listingPageCategory: GlobalDataTypeTwo[] = [
  { value: "hotel", label: "Hotel" },
  { value: "apartment", label: "Apartment" },
  { value: "resort", label: "Resort" },
];
export const listingPageLocation: GlobalDataTypeTwo[] = [
  { value: "paris", label: "Paris, France" },
  { value: "london", label: "London, UK" },
  { value: "newyork", label: "New York, USA" },
];
export const listingPageFeature: GlobalDataTypeTwo[] = [
  { value: "pool", label: "Swimming Pool" },
  { value: "wifi", label: "Free WiFi" },
  { value: "breakfast", label: "Breakfast Included" },
];
export const sortOptions: GlobalDataTypeTwo[] = [
  { value: "default", label: "Default Sorting" },
  { value: "popularity", label: "Sort by popularity" },
  { value: "rating", label: "Sort by average rating" },
  { value: "date", label: "Sort by latest" },
  { value: "price", label: "Sort by price: low to high" },
  { value: "price-desc", label: "Sort by price: high to low" },
];
export const listingPageTag: GlobalDataTypefour[] = [
  { _id: "1", name: "Hostel", slug: "hostel" },
  { _id: "2", name: "Restaurant", slug: "restaurant" },
  { _id: "3", name: "Fitness", slug: "fitness" },
  { _id: "4", name: "Real Estate", slug: "real-estate" },
  { _id: "5", name: "Shopping", slug: "shopping" },
  { _id: "6", name: "Health", slug: "health" },
];

// listing Details Page data
export const openingHours: OpeningHour[] = [
  { _id: "1", day: "Monday", time: "24 Hours Open" },
  { _id: "2", day: "Tuesday", time: "24 Hours Open" },
  { _id: "3", day: "Wednesday", time: "24 Hours Open" },
  { _id: "4", day: "Thursday", time: "24 Hours Open" },
  { _id: "5", day: "Friday", time: "24 Hours Open" },
  { _id: "6", day: "Saturday", time: "24 Hours Open" },
  { _id: "7", day: "Sunday", time: "24 Hours Open" },
];
export const categories: GlobalDataTypefour[] = [
  { _id: "1", name: "Fitness", slug: "fitness" },
  { _id: "2", name: "Health and Medical", slug: "health-medical" },
  { _id: "3", name: "Hotel", slug: "hotel" },
  { _id: "4", name: "Real Estate", slug: "real-estate" },
  { _id: "5", name: "Restaurant", slug: "restaurant" },
  { _id: "6", name: "Shopping", slug: "shopping" },
];
export const locations: GlobalDataTypefour[] = [
  { _id: "1", name: "Chicago, USA", slug: "chicago" },
  { _id: "2", name: "Khulna, Bangladesh", slug: "khulna" },
  { _id: "3", name: "London, UK", slug: "london" },
  { _id: "4", name: "NewYork, USA", slug: "newyork" },
  { _id: "5", name: "Paris, France", slug: "paris" },
  { _id: "6", name: "Tokyo, Japan", slug: "tokyo" },
];

// Footer Data
export const FooterCategories: GlobalDataTypeThree[] = [
  { _id: "1", title: "Hostel" },
  { _id: "2", title: "Restaurant" },
  { _id: "3", title: "Fitness" },
  { _id: "4", title: "Real Estate" },
  { _id: "5", title: "Shopping" },
  { _id: "6", title: "Health and Medical" },
];
export const FooterLocation: GlobalDataTypeThree[] = [
  { _id: "1", title: "Evergreen Heights , Japan" },
  { _id: "2", title: "Golden Ridge Villas , UK" },
  { _id: "3", title: "Aurora Fields , US" },
  { _id: "4", title: "Khulna , Bangladesh" },
  { _id: "5", title: "New York , USA" },
  { _id: "6", title: "Paris , France" },
];
export const FooterMenu: GlobalDataTypeThree[] = [
  { _id: "1", title: "Home" },
  { _id: "2", title: "Privacy Policy" },
  { _id: "3", title: "Terms and Conditions" },
  { _id: "4", title: "Blog" },
  { _id: "5", title: "Contact us" },
  { _id: "6", title: "Pricing" },
];
