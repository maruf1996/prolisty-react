import React from "react";
import Breadcumb from "../../component/Breadcumb/Breadcumb";
import PriceOne from "../../component/Price/PriceOne";
import TestimonialOne from "../../component/Testimonial/TestimonialOne";

const PricingPage = () => {
  return (
    <>
      <Breadcumb title="Pricing" />
      <PriceOne />
      <TestimonialOne />
    </>
  );
};

export default PricingPage;
