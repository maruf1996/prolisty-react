import React from "react";
import ctaBg from "/images/cta/cta-bg1.png";

const CtaOne = ({ title }) => {
  return (
    <div className="cta1">
      <div className="container">
        <div
          className={`cta1-card ${title === "home-one" ? "mb-80 mt-0" : ""}`}
          style={{ backgroundImage: `url(${ctaBg})` }}
        >
          <div className="cta1-card-left">
            <h6 className="cta1-card-left__subtitle">Newsletter</h6>
            <h3 className="cta1-card-left__title">
              Subscribe <br />
              our Newsletter
            </h3>
          </div>

          <div className="cta1-card-right">
            <div className="cta1-card-right__input">
              <input
                type="text"
                className="form-control"
                id="newsletterEmail"
                placeholder="Enter Your Email Address"
              />
            </div>
            <button className="theme-btn style1">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaOne;
