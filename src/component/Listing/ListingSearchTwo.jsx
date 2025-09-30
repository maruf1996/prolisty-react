import { useState } from "react";
import Select from "react-select";
import { locationOptions } from "../../data/site";
import { listingOptions } from "../../data/site";
import { priceOptions } from "../../data/site";

const ListingSearchTwo = () => {
  const [location, setLocation] = useState(null);
  const [listingType, setListingType] = useState(null);
  const [priceRange, setPriceRange] = useState(null);

  return (
    <div className="listing-search2">
      <div className="container">
        <div className="row">
          <div className="listing-search2-items">
            {/* Location */}
            <div className="listing-search2-item">
              <div className="listing-search2-item__title">Location</div>
              <Select
                options={locationOptions}
                placeholder="Select Your City"
                value={location}
                onChange={setLocation}
                classNamePrefix="custom-select"
                isSearchable={false}
              />
            </div>

            {/* Listing Type */}
            <div className="listing-search2-item">
              <div className="listing-search2-item__title">Listing Type</div>
              <Select
                options={listingOptions}
                placeholder="Select Listing Type"
                value={listingType}
                onChange={setListingType}
                classNamePrefix="custom-select"
                isSearchable={false}
              />
            </div>

            {/* Price Range */}
            <div className="listing-search2-item">
              <div className="listing-search2-item__title">Price range</div>
              <Select
                options={priceOptions}
                placeholder="Select Price Range"
                value={priceRange}
                onChange={setPriceRange}
                classNamePrefix="custom-select"
                isSearchable={false}
              />
            </div>

            {/* Search Button */}
            <div className="listing-search2-item">
              <button className="theme-btn style1">
                <i className="fa-solid fa-magnifying-glass"></i> Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingSearchTwo;
