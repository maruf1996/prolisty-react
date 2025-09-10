import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import { Link } from "react-router-dom";
import subTitleShape from "/images/about/sub-title-shape.png";
import star from "/images/location/star.svg";
import { featureCategoryData } from "../../data/site";
import imagesLoaded from "imagesloaded";

const ListingCategoriesOne = () => {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    const grid = document.querySelector(".category1-wrapper");
    imagesLoaded(grid, () => {
      isotope.current = new Isotope(grid, {
        itemSelector: ".category1-item",
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
    <section className="listing-categories1 section-padding fix">
      <div className="container">
        <div className="row justify-content-center mb-60">
          <div className="col-xl-8">
            <div className="section-title mb-30 text-center">
              <h6 className="section-title__subtitle">
                Feature Listing{" "}
                <span className="shape">
                  <img src={subTitleShape} alt="shape" />
                </span>
              </h6>
              <h2 className="section-title__title">
                Explore Listing Categories
              </h2>
            </div>

            <div className="button-group category1-button-group">
              <button
                className={filterKey === "*" ? "is-checked" : ""}
                onClick={() => setFilterKey("*")}
              >
                View all
              </button>
              <button
                className={filterKey === "hostel" ? "is-checked" : ""}
                onClick={() => setFilterKey("hostel")}
              >
                Hostel
              </button>
              <button
                className={filterKey === "restaurant" ? "is-checked" : ""}
                onClick={() => setFilterKey("restaurant")}
              >
                Restaurant
              </button>
              <button
                className={filterKey === "fitness" ? "is-checked" : ""}
                onClick={() => setFilterKey("fitness")}
              >
                Fitness
              </button>
              <button
                className={filterKey === "real-estate" ? "is-checked" : ""}
                onClick={() => setFilterKey("real-estate")}
              >
                Real Estate
              </button>
            </div>
          </div>
        </div>

        <div className="row category1-wrapper">
          {featureCategoryData?.map((cat) => (
            <div
              key={cat.id}
              className={`col-xl-4 col-md-6 category1-item ${cat.filter}`}
            >
              <div className="listing-categories1-card">
                <div className="listing-categories1-card__thumb">
                  <img src={cat.img} alt={cat.title} />
                  <div className="badge-wrapper">
                    <div className="badge">{cat.badge}</div>
                    <div className="badge2">{cat.badge2}</div>
                  </div>
                </div>
                <div className="listing-categories1-card-content">
                  <h3>
                    <Link
                      to={`/listing-details/${cat?.slug}`}
                      className="listing-categories1-card-content__title"
                    >
                      {cat.title}
                    </Link>
                  </h3>
                  <div className="listing-categories1-card-content__price">
                    <p className="listing-categories1-card-content__price-text">
                      {cat.price}
                    </p>
                    <Link
                      to={`/listing-details/${cat?.slug}`}
                      className="listing-categories1-card-content__price-details theme-btn style3"
                    >
                      Details
                    </Link>
                  </div>
                  <div className="listing-categories1-card-content__ratings">
                    <ul className="listing-categories1-card-content__ratings-list">
                      {[...Array(5)].map((_, i) => (
                        <li key={i}>
                          <img src={star} alt="star" />
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
        </div>
      </div>
    </section>
  );
};

export default ListingCategoriesOne;
