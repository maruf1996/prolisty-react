import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { locationOptions, listingOptions, priceOptions } from "../../data/data";
import { GlobalDataTypeTwo } from "../../data/types";

const ListingSearchTwo = () => {
  const [location, setLocation] = useState<GlobalDataTypeTwo | null>(null);
  const [listingType, setListingType] = useState<GlobalDataTypeTwo | null>(
    null
  );
  const [priceRange, setPriceRange] = useState<GlobalDataTypeTwo | null>(null);

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
                onChange={(newValue: SingleValue<GlobalDataTypeTwo>) =>
                  setLocation(newValue)
                }
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
                onChange={(newValue: SingleValue<GlobalDataTypeTwo>) =>
                  setListingType(newValue)
                }
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
                onChange={(newValue: SingleValue<GlobalDataTypeTwo>) =>
                  setPriceRange(newValue)
                }
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
