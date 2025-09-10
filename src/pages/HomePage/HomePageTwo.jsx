import React from "react";
import MarqueeOne from "../../component/Marquee/MarqueeOne";
import BrandOne from "../../component/Brand/BrandOne";
import PriceOne from "../../component/Price/PriceOne";
import TestimonialOne from "../../component/Testimonial/TestimonialOne";
import ContactOne from "../../component/Contact/ContactOne";
import BlogOne from "../../component/Blog/BlogOne";
import CtaOne from "../../component/Cta/CtaOne";
import IntroOne from "../../component/Intro/IntroOne";
import AboutOne from "../../component/About/AboutOne";
import ListingCategoriesOne from "../../component/Listing/ListingCategoriesOne";
import LocationTwo from "../../component/Location/LocationTwo";

const HomePageTwo = () => {
  return (
    <>
      <IntroOne></IntroOne>
      <MarqueeOne></MarqueeOne>
      <AboutOne></AboutOne>
      <LocationTwo></LocationTwo>
      <ListingCategoriesOne></ListingCategoriesOne>
      <BrandOne></BrandOne>
      <PriceOne></PriceOne>
      <TestimonialOne></TestimonialOne>
      <ContactOne></ContactOne>
      <BlogOne></BlogOne>
      <CtaOne></CtaOne>
    </>
  );
};

export default HomePageTwo;
