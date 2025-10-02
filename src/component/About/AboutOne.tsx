import { Link } from "react-router-dom";
// Import images
import aboutThumb1 from "/images/about/about-thumb1_1.jpg";
import aboutThumb2 from "/images/about/about1_2.png";
import shape1 from "/images/about/about-shape1_1.png";
import shape2 from "/images/about/about-shape1_2.png";
import shape3 from "/images/about/about-shape1_3.png";
import subTitleShape from "/images/about/sub-title-shape.png";
import listIcon from "/images/icon/theme-list-icon.svg";

const AboutOne = () => {
  return (
    <section className="about1 section-padding fix bg-img bg-color1">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6">
            <div className="about1-thumb-wrapper">
              <div className="about1-thumb-wrapper__thumb">
                <img src={aboutThumb1} alt="thumb" loading="lazy" />
                <img
                  className="thumb-1"
                  src={aboutThumb2}
                  alt="thumb"
                  loading="lazy"
                />
              </div>
              <div className="about1-thumb-wrapper__shape1">
                <img src={shape1} alt="shape" loading="lazy" />
              </div>
              <div className="about1-thumb-wrapper__shape2">
                <img src={shape2} alt="shape" loading="lazy" />
              </div>
              <div className="about1-thumb-wrapper__shape3">
                <img src={shape3} alt="shape" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about1-content">
              <div className="section-title mb-30px">
                <h6 className="section-title__subtitle">
                  About us{" "}
                  <span className="shape">
                    <img src={subTitleShape} alt="shape" loading="lazy" />
                  </span>
                </h6>
                <h2 className="section-title__title">
                  Building Communities One Home at a Time
                </h2>
                <p className="section-title__text">
                  At real estate we are dedicated to connecting people with
                  properties they’ll love. With a deep understanding of the real
                  estate market and a passion for excellence, we help you
                  navigate the journey of buying, selling, or renting with
                  confidence and ease.
                </p>
              </div>
              <ul className="about1-content__list">
                <li className="about1-content__list-item">
                  <span>
                    <img
                      className="svg"
                      src={listIcon}
                      alt="icon"
                      loading="lazy"
                    />
                  </span>
                  Quality real estate services
                </li>
                <li className="about1-content__list-item">
                  <span>
                    <img
                      className="svg"
                      src={listIcon}
                      alt="icon"
                      loading="lazy"
                    />
                  </span>
                  100% Satisfaction guarantee
                </li>
                <li className="about1-content__list-item">
                  <span>
                    <img
                      className="svg"
                      src={listIcon}
                      alt="icon"
                      loading="lazy"
                    />
                  </span>
                  Highly professional team
                </li>
                <li className="about1-content__list-item">
                  <span>
                    <img
                      className="svg"
                      src={listIcon}
                      alt="icon"
                      loading="lazy"
                    />
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
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
