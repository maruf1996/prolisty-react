import { useState } from "react";
import Select from "react-select";
import thumb1 from "/images/intro/intro-thumb2_1.jpg";
import thumb2 from "/images/intro/intro-thumb2_2.jpg";
import circleShape from "/images/intro/intro-circle-shape2.png";
import arrow from "/images/intro/intro-arrow.svg";
import searchShape1 from "/images/intro/search-shape2_1.png";
import searchShape2 from "/images/intro/search-shape2_2.png";
import introShape1 from "/images/intro/intro-shape2_1.png";
import introShape2 from "/images/intro/intro-shape2_2.png";
import { locationOptions } from "../../data/site";
import { listingOptions } from "../../data/site";
import { priceOptions } from "../../data/site";

const IntroThree = () => {
  const [location, setLocation] = useState(null);
  const [listingType, setListingType] = useState(null);
  const [priceRange, setPriceRange] = useState(null);

  return (
    <section className="intro3 fix bg-img">
      <div className="container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="intro3-wrapper">
              <div className="intro3-content">
                <h1 className="intro3-content__title">
                  Your Journey To The Perfect Listing Starts Here
                </h1>
                <p className="intro3-content__text">
                  Start your real estate journey with us. Whether buying,
                  selling, or investing, we're here to provide expert guidance
                  and unmatched support every step of the way.
                </p>
              </div>

              <div className="intro3-thumb-wrapper">
                <div className="thumb1">
                  <img src={thumb1} alt="thumb1" loading="lazy" />
                </div>
                <div className="thumb2">
                  <img src={thumb2} alt="thumb2" loading="lazy" />
                </div>
                <div className="intro3-shape3">
                  <div className="position-relative">
                    <img
                      className="img1 cir36"
                      src={circleShape}
                      alt="shape"
                      loading="lazy"
                    />
                    <img
                      className="img2"
                      src={arrow}
                      alt="arrow"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Listing Search Section */}
            <div className="listing-search1">
              <div className="container">
                <div className="row">
                  <div className="listing-search1-items">
                    <div className="listing-search1-item">
                      <div className="listing-search1-item__title">
                        Location
                      </div>
                      <Select
                        options={locationOptions}
                        placeholder="Select Your City"
                        value={location}
                        onChange={setLocation}
                        className="single-select"
                        classNamePrefix="custom-select"
                        isSearchable={false}
                      />
                    </div>

                    <div className="listing-search1-item">
                      <div className="listing-search1-item__title">
                        Listing Type
                      </div>
                      <Select
                        options={listingOptions}
                        placeholder="Select Listing Type"
                        value={listingType}
                        onChange={setListingType}
                        classNamePrefix="custom-select"
                        className="single-select"
                        isSearchable={false}
                      />
                    </div>

                    <div className="listing-search1-item">
                      <div className="listing-search1-item__title">
                        Price Range
                      </div>
                      <Select
                        options={priceOptions}
                        placeholder="Select Price Range"
                        value={priceRange}
                        onChange={setPriceRange}
                        className="single-select"
                        classNamePrefix="custom-select"
                        isSearchable={false}
                      />
                    </div>

                    <div className="listing-search1-item">
                      <button className="theme-btn style1">
                        <i className="fa-solid fa-magnifying-glass"></i> Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="listing-search1__shape1">
                <img src={searchShape1} alt="shape1" loading="lazy" />
              </div>
              <div className="listing-search1__shape2">
                <img src={searchShape2} alt="shape2" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <div className="intro3-shape1">
          <img src={introShape1} alt="shape1" loading="lazy" />
        </div>
        <div className="intro3-shape2">
          <img src={introShape2} alt="shape2" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default IntroThree;
