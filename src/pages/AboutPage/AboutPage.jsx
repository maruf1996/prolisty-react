import React from "react";
import Breadcumb from "../../component/Breadcumb/Breadcumb";
import AboutTwo from "../../component/About/AboutTwo";
import MarqueeOne from "../../component/Marquee/MarqueeOne";
import ServiceOne from "../../component/Service/ServiceOne";
import PriceOne from "../../component/Price/PriceOne";
import TestimonialOne from "../../component/Testimonial/TestimonialOne";

const AboutPage = () => {
  return (
    <>
      <Breadcumb title="About Us"></Breadcumb>
      <AboutTwo></AboutTwo>
      <MarqueeOne></MarqueeOne>
      <ServiceOne></ServiceOne>
      <PriceOne></PriceOne>
      <TestimonialOne></TestimonialOne>
    </>
  );
};

export default AboutPage;
