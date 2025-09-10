import React from "react";
import subTitleShape from "/images/about/sub-title-shape.png";
import themeListIcon from "/images/icon/theme-list-icon.svg";
import aboutShape1 from "/images/about/about2-shape1_1.png";
import aboutShape2 from "/images/about/about2-shape1_2.png";
import aboutShape3 from "/images/about/about2-shape1_3.png";
import aboutThumb1 from "/images/about/about2-thumb1_1.jpg";
import aboutThumbmask2 from "/images/about/about2-thumb1_2.png";
import aboutThumb2 from "/images/about/about2-thumb1_2.jpg";
import aboutThumbmask3 from "/images/about/about2-thumb1_3.png";
import aboutThumb3 from "/images/about/about2-thumb1_3.jpg";
import { Link } from "react-router-dom";

const AboutTwo = () => {
  return (
    <section className="about2 section-padding fix">
      <div className="container">
        <div className="row gy-5">
          {/* Left Content */}
          <div className="col-xl-6 order-2 order-md-1">
            <div className="about2-content">
              <div className="section-title mb-30px">
                <h6 className="section-title__subtitle">
                  About us{" "}
                  <span className="shape">
                    <img src={subTitleShape} alt="shape" />
                  </span>
                </h6>
                <h2 className="section-title__title">
                  Comprehensive Listing Solutions For Every Need
                </h2>
                <p className="section-title__text">
                  We are committed to connecting people with their dream
                  properties through exceptional service and expertise. Our
                  mission is to simplify the real estate process and deliver
                  results that exceed expectations.
                </p>
              </div>

              <ul className="about1-content__list">
                <li className="about1-content__list-item">
                  <span>
                    <img className="svg" src={themeListIcon} alt="icon" />
                  </span>
                  Quality real estate services
                </li>
                <li className="about1-content__list-item">
                  <span>
                    <img className="svg" src={themeListIcon} alt="icon" />
                  </span>
                  100% Satisfaction guarantee
                </li>
                <li className="about1-content__list-item">
                  <span>
                    <img className="svg" src={themeListIcon} alt="icon" />
                  </span>
                  Highly professional team
                </li>
                <li className="about1-content__list-item">
                  <span>
                    <img className="svg" src={themeListIcon} alt="icon" />
                  </span>
                  Dealing always on time
                </li>
              </ul>

              <div className="about1-content__btn-wrapper">
                <Link className="theme-btn style1" to="/about">
                  See More
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-xl-6 order-1 order-md-2">
            <div className="about2-thumb">
              <div className="about2-thumb-shape__one">
                <img src={aboutShape1} alt="shape" />
              </div>
              <div className="about2-thumb-shape__two">
                <img src={aboutShape2} alt="shape" />
              </div>
              <div className="about2-thumb-shape__three">
                <img src={aboutShape3} alt="shape" />
              </div>
              <div className="about2-thumb__one">
                <img src={aboutThumb1} alt="thumb" />
              </div>
              <div
                className="about2-thumb__two bg-mask"
                style={{
                  maskImage: `url(${aboutThumbmask2})`,
                  WebkitMaskImage: `url(${aboutThumbmask2})`,
                }}
              >
                <img src={aboutThumb2} alt="thumb" />
              </div>
              <div
                className="about2-thumb__three bg-mask"
                style={{
                  maskImage: `url(${aboutThumbmask3})`,
                  WebkitMaskImage: `url(${aboutThumbmask3})`,
                }}
              >
                <img src={aboutThumb3} alt="thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
