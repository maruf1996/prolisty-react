import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import whiteLogo from "/images/logo/white-logo.png";
import themeLogo from "/images/logo/theme-logo.png";
import arrowIcon from "/images/icon/nav-btn-icon.svg";
import bagedIcon1 from "/images/icon/nav-option1_1.svg";
import bagedIcon2 from "/images/icon/nav-option1_2.svg";
import bagedIcon3 from "/images/icon/nav-option1_3.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const toggleSubmenu = (index) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  // Sticky effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`global-menu-wrapper onepage-nav ${
          menuOpen ? "global-body-visible" : ""
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="global-menu-area text-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            className="global-menu-toggle"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fal fa-times"></i>
          </button>

          {/* Mobile Logo */}
          <div className="mobile-logo">
            <Link to="/">
              <img src={whiteLogo} alt="Prolisty" />
            </Link>
          </div>

          {/* Mobile Navigation */}
          <nav className="global-mobile-menu">
            <ul>
              {/* Home with submenu */}
              <li
                className={`menu-item-has-children ${
                  activeSubmenu === 0 ? "global-active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmenu(0);
                }}
              >
                <Link to="#">
                  Home <span className="global-mean-expand"></span>
                </Link>
                <ul
                  className={`sub-menu ${
                    activeSubmenu === 0 ? "global-open" : ""
                  }`}
                  style={{ display: activeSubmenu === 0 ? "block" : "none" }}
                >
                  <li>
                    <Link className="active" to="/">
                      Home One
                    </Link>
                  </li>
                  <li>
                    <Link to="/index2">Home Two</Link>
                  </li>
                  <li>
                    <Link to="/index3">Home Three</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/listings">Listings</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>

              {/* Pages submenu */}
              <li
                className={`menu-item-has-children ${
                  activeSubmenu === 1 ? "global-active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmenu(1);
                }}
              >
                <Link to="#">
                  Page’s <span className="global-mean-expand"></span>
                </Link>
                <ul
                  className={`sub-menu ${
                    activeSubmenu === 1 ? "global-open" : ""
                  }`}
                  style={{ display: activeSubmenu === 1 ? "block" : "none" }}
                >
                  <li>
                    <Link to="/locations">Locations</Link>
                  </li>
                  <li>
                    <Link to="/location-listings">Location Wise Listing</Link>
                  </li>
                  <li>
                    <Link to="/categories">Categories</Link>
                  </li>
                  <li>
                    <Link to="/category-listings">Category Wise Listing</Link>
                  </li>
                  <li>
                    <Link to="/listing-details">Listing Details</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms">Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to="/faq">Faq</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Blog Details</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Registration</Link>
                  </li>
                  <li>
                    <Link to="/forget-password">Forget Password</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Header Section */}
      <header className="global-header1 header-layout1">
        <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
          <div className="container">
            <div className="global-header1-menu-area">
              <div className="row align-items-center justify-content-between">
                {/* Logo */}
                <div className="col-xl-2 col-2">
                  <div className="header-logo">
                    <Link to="/">
                      <img src={themeLogo} alt="Prolisty" />
                    </Link>
                  </div>
                </div>

                {/* Desktop Menu */}
                <div className="col-xl-6 col-2 text-center">
                  <nav className="global-header1-menu-area-main-menu d-none d-xl-inline-block">
                    <ul>
                      <li className="global-header1-menu-item-has-children">
                        <Link to="#" className="active">
                          Home
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link className="active" to="/">
                              Home One
                            </Link>
                          </li>
                          <li>
                            <Link to="/index2">Home Two</Link>
                          </li>
                          <li>
                            <Link to="/index3">Home Three</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/listings">Listings</Link>
                      </li>
                      <li>
                        <Link to="/pricing">Pricing</Link>
                      </li>
                      <li className="global-header1-menu-item-has-children">
                        <Link to="#">Page’s</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/locations">Locations</Link>
                          </li>
                          <li>
                            <Link to="/location-listings">
                              Location Wise Listing
                            </Link>
                          </li>
                          <li>
                            <Link to="/categories">Categories</Link>
                          </li>
                          <li>
                            <Link to="/category-listings">
                              Category Wise Listing
                            </Link>
                          </li>
                          <li>
                            <Link to="/listing-details">Listing Details</Link>
                          </li>
                          <li>
                            <Link to="/privacy">Privacy Policy</Link>
                          </li>
                          <li>
                            <Link to="/terms">Terms and Conditions</Link>
                          </li>
                          <li>
                            <Link to="/faq">Faq</Link>
                          </li>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/register">Registration</Link>
                          </li>
                          <li>
                            <Link to="/forget-password">Forget Password</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>

                  {/* Mobile menu toggle button */}
                  <div className="header-button d-xl-none">
                    <button
                      type="button"
                      className="global-menu-toggle sidebar-btn"
                      onClick={() => setMenuOpen(true)}
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                  </div>
                </div>

                {/* Right side buttons */}
                <div className="col-xl-4 d-none d-xl-block text-end">
                  <div className="global-header1-header-button">
                    <div className="btn-wrapper">
                      <Link className="theme-btn style1" to="/add-listing">
                        <img className="svg" src={arrowIcon} alt="arrow" /> Add
                        to Listing
                      </Link>
                    </div>
                    <div className="d-none d-xxl-block">
                      <div className="nav-other-option">
                        <ul>
                          <li className="nav-badge-wrapper">
                            <Link to="#!">
                              <img
                                className="svg"
                                src={bagedIcon1}
                                alt="icon"
                              />
                            </Link>
                            <span className="badge">0</span>
                          </li>
                          <li className="nav-badge-wrapper">
                            <Link to="#!">
                              <img
                                className="svg"
                                src={bagedIcon2}
                                alt="icon"
                              />
                            </Link>
                            <span className="badge">0</span>
                          </li>
                          <li>
                            <Link to="#!">
                              <img
                                className="svg"
                                src={bagedIcon3}
                                alt="icon"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end right col */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
