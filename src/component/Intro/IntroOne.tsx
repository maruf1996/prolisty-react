import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { locationOptions, listingOptions, priceOptions } from "../../data/data";
import { GlobalDataTypeTwo } from "../../data/types";

const IntroOne = () => {
  const [location, setLocation] = useState<GlobalDataTypeTwo | null>(null);
  const [listingType, setListingType] = useState<GlobalDataTypeTwo | null>(
    null
  );
  const [priceRange, setPriceRange] = useState<GlobalDataTypeTwo | null>(null);

  return (
    <section className="intro1 fix background-image">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-12">
            <div className="intro1-content">
              <div className="intro1-content__subtitle">
                Listing That Match Your Lifestyle.
              </div>
              <h1 className="intro1-content__title">
                Turning Your{" "}
                <span>
                  <img
                    src="/images/intro/intro-star.png"
                    alt="star"
                    loading="lazy"
                  />
                </span>{" "}
                Listing Dreams into Reality.
              </h1>

              <div className="listing-search1">
                <div className="container">
                  <div className="row">
                    <div className="listing-search1-items">
                      {/* Location */}
                      <div className="listing-search1-item">
                        <div className="listing-search1-item__title">
                          Location
                        </div>
                        <Select
                          options={locationOptions}
                          placeholder="Select Your City"
                          value={location}
                          onChange={(
                            newValue: SingleValue<GlobalDataTypeTwo>
                          ) => setLocation(newValue)}
                          className="single-select"
                          classNamePrefix="custom-select"
                          isSearchable={false}
                        />
                      </div>

                      {/* Listing Type */}
                      <div className="listing-search1-item">
                        <div className="listing-search1-item__title">
                          Listing Type
                        </div>
                        <Select
                          options={listingOptions}
                          placeholder="Select Listing Type"
                          value={listingType}
                          onChange={(
                            newValue: SingleValue<GlobalDataTypeTwo>
                          ) => setListingType(newValue)}
                          classNamePrefix="custom-select"
                          className="single-select"
                          isSearchable={false}
                        />
                      </div>

                      {/* Price Range */}
                      <div className="listing-search1-item">
                        <div className="listing-search1-item__title">
                          Price range
                        </div>
                        <Select
                          options={priceOptions}
                          placeholder="Select Price Range"
                          value={priceRange}
                          onChange={(
                            newValue: SingleValue<GlobalDataTypeTwo>
                          ) => setPriceRange(newValue)}
                          className="single-select"
                          classNamePrefix="custom-select"
                          isSearchable={false}
                        />
                      </div>

                      {/* Search Button */}
                      <div className="listing-search1-item">
                        <button className="theme-btn style1">
                          <i className="fa-solid fa-magnifying-glass"></i>{" "}
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroOne;
