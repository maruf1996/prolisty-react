import subTitleShape from "/images/about/sub-title-shape.png";
import priceShape from "/images/price/price1-shape.png";
import { plansData } from "../../data/data";
import { Link } from "react-router-dom";
import { PlanType } from "../../data/types";

const PriceOne = () => {
  return (
    <section className="price1 section-padding fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title mb-60 text-center">
              <h6 className="section-title__subtitle">
                Pricing
                <span className="shape">
                  <img src={subTitleShape} alt="shape" loading="lazy" />
                </span>
              </h6>
              <h2 className="section-title__title">
                Transparent Pricing for <br />
                Every Need
              </h2>
            </div>
          </div>
        </div>

        <div className="row gx-30">
          {plansData.map((plan: PlanType) => (
            <div className="col-xl-4 col-md-6" key={plan?._id}>
              <div
                className={`price1-card ${
                  plan.highlight ? "highlight-card" : ""
                }`}
              >
                <div className="price1-card__top">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="price1-card__top-icon">
                      <img src={plan?.icon} alt="img" loading="lazy" />
                    </div>
                    <h4
                      className={`price1-card__top-price ${
                        plan?.highlight ? "text-white" : ""
                      }`}
                    >
                      {plan?.price}
                    </h4>
                  </div>
                  <h4
                    className={`price1-card__top-title ${
                      plan?.highlight ? "text-white" : ""
                    }`}
                  >
                    {plan?.title}
                  </h4>
                  <p
                    className={`price1-card__top-text ${
                      plan?.highlight ? "text-white" : ""
                    }`}
                  >
                    {plan?.text}
                  </p>
                </div>

                <div className="price1-card__feature">
                  <h4 className="price1-card__feature-title">Features</h4>
                  <ul className="price1-card__feature-list">
                    {plan?.features.map((feature, i) => (
                      <li key={i}>
                        <img src={plan?.checkIcon} alt="icon" loading="lazy" />{" "}
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="price1-card__feature-btn-wrapper">
                    <Link to="#" className="theme-btn style1">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="price1__shape">
        <img src={priceShape} alt="shape" loading="lazy" />
      </div>
    </section>
  );
};

export default PriceOne;
