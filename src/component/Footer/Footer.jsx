import { Link } from "react-router-dom";
import logoWhite from "/images/logo/white-logo.png";
import themeArrow from "/images/footer/theme-arrow.svg";
import CtaOne from "../Cta/CtaOne";
import { FooterCategories } from "../../data/site";
import { FooterLocation } from "../../data/site";
import { FooterMenu } from "../../data/site";

const Footer = ({ title }) => {
  return (
    <footer className="footer1 fix">
      <div
        className={`footer1-bg bg-img ${
          title === "layout-one" ? "pt-110" : ""
        }`}
      >
        {title === "layout-one" && <CtaOne title="home-one"></CtaOne>}

        <div className="container">
          <div className="row justify-content-between">
            {/* Logo & Contact */}
            <div className="col-xl-4 col-lg-8 col-md-12">
              <div className="footer1-widget__item">
                <div className="footer1-widget__item-logo">
                  <img src={logoWhite} alt="logo" loading="lazy" />
                </div>
                <p className="footer1-widget__item-text">
                  Lorem Ipsum is simply dummy text of the and typesetting
                  industry.
                </p>

                <div className="footer1-widget__item-left">
                  <div className="footer1-widget__item-left-icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="footer1-widget__item-left-contact">
                    <h6 className="footer1-widget__item-left-contact-title">
                      Email
                    </h6>
                    <Link
                      className="footer1-widget__item-left-contact-link"
                      to="mailto:info@realestste.com"
                    >
                      info@realestste.com
                    </Link>
                  </div>
                </div>

                <div className="footer1-widget__item-left">
                  <div className="footer1-widget__item-left-icon">
                    <i className="fa-solid fa-headphones"></i>
                  </div>
                  <div className="footer1-widget__item-left-contact">
                    <h6 className="footer1-widget__item-left-contact-title">
                      Talk to us
                    </h6>
                    <Link
                      className="footer1-widget__item-left-contact-link"
                      to="tel:1235679083"
                    >
                      +123 567 9083
                    </Link>
                  </div>
                </div>

                <div className="footer1-widget__item-left">
                  <div className="footer1-widget__item-left-icon">
                    <i className="fa-light fa-location-dot"></i>
                  </div>
                  <div className="footer1-widget__item-left-contact">
                    <h6 className="footer1-widget__item-left-contact-title">
                      Address
                    </h6>
                    <Link
                      className="footer1-widget__item-left-contact-link"
                      to="/contact"
                    >
                      6391 Elgin St. Celina, Delaw
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="col-xxl-auto col-xl-3 col-lg-4 col-md-5">
              <div className="footer1-widget__item">
                <h3 className="footer1-widget__item-title">Categories</h3>
                <ul className="footer1-widget__item-list">
                  {FooterCategories?.map((item) => (
                    <li key={item?._id}>
                      <Link to="/category-listings">
                        <span>
                          <img src={themeArrow} alt="icon" loading="lazy" />
                        </span>{" "}
                        {item?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Location */}
            <div className="col-xxl-auto col-xl-3 col-lg-4 col-md-5">
              <div className="footer1-widget__item footer1-widget__item-2">
                <h3 className="footer1-widget__item-title">Location</h3>
                <ul className="footer1-widget__item-list">
                  {FooterLocation?.map((location) => (
                    <li key={location?._id}>
                      <Link to="/location-listings">
                        <span>
                          <img src={themeArrow} alt="icon" loading="lazy" />
                        </span>{" "}
                        {location?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Menu */}
            <div className="col-xxl-auto col-xl-3 col-lg-4 col-md-5">
              <div className="footer1-widget__item">
                <h3 className="footer1-widget__item-title">Footer Menu</h3>
                <ul className="footer1-widget__item-list">
                  {FooterMenu?.map((menu) => (
                    <li key={menu?._id}>
                      <Link
                        to={`/${menu?.title.toLowerCase().replace(/ /g, "-")}`}
                      >
                        <span>
                          <img src={themeArrow} alt="icon" loading="lazy" />
                        </span>{" "}
                        {menu?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer1-bottom ">
            <div className="container">
              <div className="footer1-bottom-item d-flex align-items-center justify-content-between">
                <p className="footer1-bottom-item__text">
                  Copyright © 2025 Designed by <a href="/">priotheme</a> and
                  Powered by <a href="/">Themeforest</a>
                </p>
                <ul className="footer1-bottom-item__list">
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
