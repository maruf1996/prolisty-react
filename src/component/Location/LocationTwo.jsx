import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import { Link } from "react-router-dom";
import subTitleShape from "/images/about/sub-title-shape.png";
import star from "/images/location/star.svg";
import { locationTwoData } from "../../data/site";
import imagesLoaded from "imagesloaded";

const LocationTwo = () => {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    const grid = document.querySelector(".location1-wrapper");
    imagesLoaded(grid, () => {
      isotope.current = new Isotope(grid, {
        itemSelector: ".location1-item",
        layoutMode: "fitRows",
      });
    });

    return () => isotope.current?.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  return (
    <section className="location1 section-padding fix">
      <div className="container">
        <div className="row justify-content-center mb-60">
          <div className="col-xl-8">
            <div className="section-title mb-30 text-center">
              <h6 className="section-title__subtitle">
                Listing City
                <span className="shape">
                  <img src={subTitleShape} alt="shape" />
                </span>
              </h6>
              <h2 className="section-title__title">
                Find Your Dream Listing in City
              </h2>
            </div>
            <div className="button-group location1-button-group">
              <button
                className={filterKey === "*" ? "is-checked" : ""}
                onClick={() => setFilterKey("*")}
              >
                Top Listing
              </button>
              <button
                className={filterKey === "popular" ? "is-checked" : ""}
                onClick={() => setFilterKey("popular")}
              >
                Popular
              </button>
              <button
                className={filterKey === "featured" ? "is-checked" : ""}
                onClick={() => setFilterKey("featured")}
              >
                Featured
              </button>
              <button
                className={filterKey === "recommended" ? "is-checked" : ""}
                onClick={() => setFilterKey("recommended")}
              >
                Recommended
              </button>
            </div>
          </div>
        </div>

        <div className="row location1-wrapper">
          {locationTwoData?.map((loc) => (
            <div
              key={loc.id}
              className={`col-xl-4 col-md-6 location1-item ${loc.filter}`}
            >
              <div className="location1-card">
                <div className="location1-card__thumb">
                  <img src={loc.img} alt={loc.meta} />
                  <div className="badge">{loc.badge}</div>
                </div>
                <div className="location1-card-content">
                  <h6 className="location1-card-content__meta">
                    <span>
                      <i className="fa-sharp fa-light fa-location-dot" />
                    </span>{" "}
                    {loc.meta}
                  </h6>
                  <h3>
                    <Link
                      to={`/listing-details/${loc?.slug}`}
                      className="location1-card-content__location"
                    >
                      {loc.title}
                    </Link>
                  </h3>
                  <div className="location1-card-content__ratings">
                    <ul className="location1-card-content__ratings-list">
                      {[...Array(5)].map((_, i) => (
                        <li key={i}>
                          <img src={star} alt="star" />
                        </li>
                      ))}
                    </ul>
                    <p className="location1-card-content__ratings-reviews">
                      ( 5 Reviews )
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationTwo;
