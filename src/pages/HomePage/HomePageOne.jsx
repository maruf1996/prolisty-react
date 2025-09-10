import React from "react";
import MarqueeOne from "../../component/Marquee/MarqueeOne";
import ServiceOne from "../../component/Service/ServiceOne";
import PriceOne from "../../component/Price/PriceOne";
import ContactOne from "../../component/Contact/ContactOne";
import BlogOne from "../../component/Blog/BlogOne";
import IntroTwo from "../../component/Intro/IntroTwo";
import AboutTwo from "../../component/About/AboutTwo";
import ListingSearchTwo from "../../component/Listing/ListingSearchTwo";
import ListingOne from "../../component/Listing/ListingOne";
import LocationOne from "../../component/Location/LocationOne";

const HomePageOne = () => {
  return (
    <>
      <IntroTwo></IntroTwo>
      <ListingSearchTwo></ListingSearchTwo>
      <ListingOne></ListingOne>
      <AboutTwo></AboutTwo>
      <MarqueeOne></MarqueeOne>
      <ServiceOne></ServiceOne>
      <LocationOne></LocationOne>
      <PriceOne></PriceOne>
      <ContactOne></ContactOne>
      <BlogOne></BlogOne>
    </>
  );
};

export default HomePageOne;
