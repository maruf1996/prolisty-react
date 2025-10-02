// GlobalDataTypeOne
export interface GlobalDataTypeOne {
  _id: string;
  img: string;
}

// GlobalDataTypeTwo
export interface GlobalDataTypeTwo {
  value: string;
  label: string;
}

// GlobalDataTypeThree
export interface GlobalDataTypeThree {
  _id: string;
  title: string;
}

// GlobalDataTypeFour
export interface GlobalDataTypefour {
  _id: string;
  slug: string;
  name: string;
}

// Feature One Data Types
export interface FeatureOneDataType {
  _id: string;
  thumb: string;
  location: string;
  title: string;
  slug: string;
  beds: number;
  baths: number;
  sqft: number;
  price: string;
}

// feature Category Data Types
export interface featureCategoryDataType {
  _id: string;
  img: string;
  title: string;
  badge: string;
  badge2: string;
  price: string;
  filter: string;
  slug: string;
  reviews: number;
}

// listing Two Data Types
export interface listingTwoDataType {
  _id: string;
  thumb: string;
  meta: string;
  country: string;
  listings: number;
  slug: string;
}

// location Two Data Types
export interface locationTwoDataType {
  _id: string;
  img: string;
  badge: string;
  meta: string;
  title: string;
  filter: string;
  slug: string;
}

// location Three Data Types
export interface locationThreeDataType {
  _id: string;
  thumb: string;
  country: string;
  badge: string;
  title: string;
  reviews: number;
  slug: string;
}

// blog One Data Types
export interface blogOneDataType {
  _id: string;
  img: string;
  date: string;
  comments: number;
  title: string;
  slug: string;
}

// Blog Sidebar Data Types
export interface sidebarCategoriesType {
  _id: string;
  name: string;
  number: string;
}
export interface recentPostType {
  _id: string;
  img: string;
  category: string;
  title: string;
  slug: string;
}

// Plan Data Types
export interface PlanType {
  _id: string;
  title: string;
  price: string;
  icon: string;
  text: string;
  features: string[];
  checkIcon: string;
  highlight: boolean;
}

// testimonial Data Type
export interface TestimonialDataType {
  _id: string;
  name: string;
  title: string;
  text: string;
  rating: number;
}

// Blog Page Data Types
export interface BlogPageDataType {
  _id: string;
  img: string;
  date: string;
  comments: string;
  title: string;
  slug: string;
}

// Listing Page Data Types
export interface OpeningHour {
  _id: string;
  day: string;
  time: string;
}
