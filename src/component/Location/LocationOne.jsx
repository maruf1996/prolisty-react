import React from "react";
import { Link } from "react-router-dom";

import subTitleShape from "/images/about/sub-title-shape.png";
import locationThumb1 from "/images/location/location-thumb2_1.jpg";
import locationThumb2 from "/images/location/location-thumb2_2.jpg";
import locationThumb3 from "/images/location/location-thumb2_3.jpg";
import locationThumb4 from "/images/location/location-thumb2_4.jpg";
import star from "/images/location/star.svg";
import arrowIcon from "/images/icon/arrow-up-right-theme.svg";

const LocationOne = () => {
  return (
    <section className="location2 section-padding fix">
      <div className="container">
        <div className="section-title mb-60">
          <h6 className="section-title__subtitle">
            Feature Listing
            <span className="shape">
              <img src={subTitleShape} alt="shape" />
            </span>
          </h6>
          <h2 className="section-title__title">
            Explore the Best Listing <br />
            in City
          </h2>
        </div>

        <div className="row">
          {/* Left big card */}
          <div className="col-lg-6">
            <div className="location2-card">
              <div className="location2-card__thumb">
                <img src={locationThumb1} alt="thumb" />
                <button className="badge" type="button">
                  <i className="fa-sharp fa-regular fa-heart"></i>
                </button>
              </div>
              <div className="location2-card-content">
                <h6 className="location2-card-content__meta">
                  <span>
                    <i className="fa-sharp fa-light fa-location-dot"></i>
                  </span>
                  Bavaria (Germany)
                </h6>
                <h3>
                  <Link
                    to={`/listing-details/copacabana`}
                    className="location2-card-content__location"
                  >
                    Copacabana
                  </Link>
                </h3>
                <div className="location2-card-content__ratings">
                  <ul className="location2-card-content__ratings-list">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <img src={star} alt="star" />
                      </li>
                    ))}
                  </ul>
                  <p className="location2-card-content__ratings-reviews">
                    ( 5 Reviews )
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side cards */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6">
                <div className="location2-card style2">
                  <div className="location2-card__thumb">
                    <img src={locationThumb2} alt="thumb" />
                    <button className="badge" type="button">
                      <i className="fa-sharp fa-regular fa-heart"></i>
                    </button>
                  </div>
                  <div className="location2-card-arrow">
                    <Link to={`/listing-details/2`}>
                      <img className="svg-img" src={arrowIcon} alt="arrow" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="location2-card style2">
                  <div className="location2-card__thumb">
                    <img src={locationThumb3} alt="thumb" />
                    <button className="badge" type="button">
                      <i className="fa-sharp fa-regular fa-heart"></i>
                    </button>
                  </div>
                  <div className="location2-card-arrow">
                    <Link to={`/listing-details/3`}>
                      <img className="svg-img" src={arrowIcon} alt="arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom big card */}
            <div className="location2-card">
              <div className="location2-card__thumb">
                <img src={locationThumb4} alt="thumb" />
                <button className="badge" type="button">
                  <i className="fa-sharp fa-regular fa-heart"></i>
                </button>
              </div>
              <div className="location2-card-content">
                <h6 className="location2-card-content__meta">
                  <span>
                    <i className="fa-sharp fa-light fa-location-dot"></i>
                  </span>
                  The Algarve (Portugal)
                </h6>
                <h3>
                  <Link
                    to={`/listing-details/bellavista`}
                    className="location2-card-content__location"
                  >
                    Bellavista
                  </Link>
                </h3>
                <div className="location2-card-content__ratings">
                  <ul className="location2-card-content__ratings-list">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <img src={star} alt="star" />
                      </li>
                    ))}
                  </ul>
                  <p className="location2-card-content__ratings-reviews">
                    ( 5 Reviews )
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationOne;
