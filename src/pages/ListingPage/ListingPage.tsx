import { useState } from "react";
import Breadcumb from "../../component/Breadcumb/Breadcumb";
import Select, { SingleValue } from "react-select";
import { Link } from "react-router-dom";
import star from "/images/location/star.svg";
import {
  listingPageCategory,
  listingPageLocation,
  listingPageFeature,
  sortOptions,
  featureCategoryData,
  listingPageTag,
} from "../../data/data";
import Pagination from "../../component/Pagination/Pagination";
import {
  featureCategoryDataType,
  GlobalDataTypefour,
  GlobalDataTypeTwo,
} from "../../data/types";

const ListingPage = () => {
  const [category, setCategory] =
    useState<SingleValue<GlobalDataTypeTwo>>(null);
  const [location, setLocation] =
    useState<SingleValue<GlobalDataTypeTwo>>(null);
  const [feature, setFeature] = useState<SingleValue<GlobalDataTypeTwo>>(null);
  const [sort, setSort] = useState<SingleValue<GlobalDataTypeTwo>>(null);

  return (
    <>
      <Breadcumb title="Listings" />
      <section className="listings-page section-padding fix">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="main-sidebar">
                {/* Search */}
                <div className="single-sidebar-widget">
                  <h5 className="widget-title">Search</h5>
                  <div className="search-widget">
                    <form>
                      <input type="text" placeholder="Search here" />
                      <button type="submit">
                        <i className="fa-light fa-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>
                </div>

                {/* Filters */}
                <div className="single-sidebar-widget">
                  <h5 className="widget-title">Filters</h5>
                  <div className="filter-container">
                    <div className="filter-group">
                      <input
                        type="text"
                        placeholder="Listing Name ..."
                        className="filter-input"
                      />
                    </div>
                    <div className="filter-group">
                      <Select
                        options={listingPageCategory}
                        className="filter-select single-select"
                        placeholder="Hotel"
                        value={category}
                        onChange={(selected: SingleValue<GlobalDataTypeTwo>) =>
                          setCategory(selected)
                        }
                        classNamePrefix="filter-select"
                        isSearchable={false}
                      />
                    </div>
                    <div className="filter-group">
                      <Select
                        options={listingPageLocation}
                        className="filter-select single-select"
                        placeholder="Paris, France"
                        value={location}
                        onChange={(selected: SingleValue<GlobalDataTypeTwo>) =>
                          setLocation(selected)
                        }
                        classNamePrefix="filter-select"
                        isSearchable={false}
                      />
                    </div>
                    <div className="filter-group">
                      <Select
                        options={listingPageFeature}
                        className="filter-select single-select"
                        placeholder="Swimming Pool"
                        value={feature}
                        onChange={(selected: SingleValue<GlobalDataTypeTwo>) =>
                          setFeature(selected)
                        }
                        classNamePrefix="filter-select"
                        isSearchable={false}
                      />
                    </div>
                    <button className="filter-button">Filter</button>
                  </div>
                </div>

                {/* Tags */}
                <div className="single-sidebar-widget">
                  <h5 className="widget-title">Tag</h5>
                  <ul className="tagcloud">
                    {listingPageTag?.map((tag: GlobalDataTypefour) => (
                      <li key={tag?._id}>
                        <Link to={`/category-listing/${tag?.slug}`}>
                          {tag?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Review Stars */}
                <div className="single-sidebar-widget">
                  <h5 className="widget-title">Review star</h5>
                  <div className="categories-list">
                    {[5, 4, 3, 2, 1].map((count) => (
                      <label
                        key={count}
                        className="checkbox-single d-flex align-items-center"
                      >
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              {Array.from({ length: 5 }, (_, idx) => (
                                <i
                                  key={idx}
                                  className={
                                    idx < count
                                      ? "fa-solid fa-star"
                                      : "fa-sharp fa-light fa-star"
                                  }
                                ></i>
                              ))}
                            </span>
                            {count * 7}
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Listings */}
            <div className="col-lg-8">
              {/* Sort bar */}
              <div className="sort-bar">
                <div className="row g-sm-0 gy-20 justify-content-between align-items-center">
                  <div className="col-md">
                    <p className="woocommerce-result-count">
                      Showing 1 - 12 of 30 Results
                    </p>
                  </div>
                  <div className="col-md-auto">
                    <form className="category">
                      <Select
                        options={sortOptions}
                        className="single-select"
                        placeholder="Default Sorting"
                        value={sort}
                        onChange={(selected: SingleValue<GlobalDataTypeTwo>) =>
                          setSort(selected)
                        }
                        classNamePrefix="category-select"
                        isSearchable={false}
                      />
                    </form>
                  </div>
                </div>
              </div>

              {/* Listings grid */}
              <div className="listings-card-wrapper">
                <div className="row">
                  {featureCategoryData.map((item: featureCategoryDataType) => (
                    <div className="col-md-6" key={item?._id}>
                      <div className="listing-categories1-card">
                        <div className="listing-categories1-card__thumb">
                          <img
                            src={item?.img}
                            alt={item?.title}
                            loading="lazy"
                          />
                          <div className="badge-wrapper">
                            <div className="badge">{item?.badge}</div>
                            <div className="badge2">{item?.badge2}</div>
                          </div>
                        </div>
                        <div className="listing-categories1-card-content">
                          <h3>
                            <Link
                              to={`/listing-details/${item?.slug}`}
                              className="listing-categories1-card-content__title"
                            >
                              {item?.title}
                            </Link>
                          </h3>
                          <div className="listing-categories1-card-content__price">
                            <p className="listing-categories1-card-content__price-text">
                              {item?.price}
                            </p>
                            <Link
                              to={`/listing-details/${item?.slug}`}
                              className="listing-categories1-card-content__price-details theme-btn style3"
                            >
                              Details
                            </Link>
                          </div>
                          <div className="listing-categories1-card-content__ratings">
                            <ul className="listing-categories1-card-content__ratings-list">
                              {Array.from({ length: 5 }, (_, i) => (
                                <li key={i}>
                                  <img src={star} alt="star" loading="lazy" />
                                </li>
                              ))}
                            </ul>
                            <p className="listing-categories1-card-content__ratings-reviews">
                              ( 5 Reviews )
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Pagination */}
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingPage;
