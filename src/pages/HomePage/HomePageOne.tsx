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
      <IntroTwo />
      <ListingSearchTwo />
      <ListingOne />
      <AboutTwo />
      <MarqueeOne />
      <ServiceOne />
      <LocationOne />
      <PriceOne />
      <ContactOne />
      <BlogOne />
    </>
  );
};

export default HomePageOne;
