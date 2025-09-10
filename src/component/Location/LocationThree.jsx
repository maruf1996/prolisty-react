import React from "react";
import subTitleShape from "/images/about/sub-title-shape.png";
import star from "/images/location/star.svg";
import locationShape from "/images/location/location3-shape1.png";
import { locationThreeData } from "../../data/site";
import { Link } from "react-router-dom";

const LocationThree = () => {
  return (
    <section className="location3 section-padding fix bg-color1">
      <div className="container">
        {/* Section Title */}
        <div className="section-title mb-60 text-center">
          <h6 className="section-title__subtitle">
            Luxury Feature
            <span className="shape">
              <img src={subTitleShape} alt="shape" />
            </span>
          </h6>
          <h2 className="section-title__title">Our Exclusive Listings</h2>
        </div>

        {/* Cards */}
        <div className="row">
          {locationThreeData?.map((item) => (
            <div className="col-xl-4 col-md-6" key={item.id}>
              <div className="location3-card">
                <div className="location3-card__thumb">
                  <img src={item.thumb} alt="thumb" />
                  <div className="badge">
                    {item.badge}{" "}
                    <span>
                      <i className="fa-light fa-camera"></i>
                    </span>{" "}
                    1/4
                  </div>
                  <div className="wishlist">
                    <a href="#!">
                      <i className="fa-sharp fa-light fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="location3-card-content">
                  <h6 className="location3-card-content__meta">
                    <span>
                      <i className="fa-sharp fa-light fa-location-dot"></i>
                    </span>{" "}
                    {item.country}
                  </h6>
                  <h3>
                    <Link
                      to={`/listing-details/${item?.slug}`}
                      className="location3-card-content__location"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <div className="location3-card-content__ratings">
                    <ul className="location3-card-content__ratings-list">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <li key={index}>
                          <img src={star} alt="star" />
                        </li>
                      ))}
                    </ul>
                    <p className="location3-card-content__ratings-reviews">
                      ( {item.reviews} Reviews )
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shape */}
      <div className="location3-shape1">
        <img src={locationShape} alt="Shape" />
      </div>
    </section>
  );
};

export default LocationThree;
