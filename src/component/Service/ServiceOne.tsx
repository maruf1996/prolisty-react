import { Link } from "react-router-dom";
import subTitleShape from "/images/about/sub-title-shape.png";
import serviceTop from "/images/service/service-top.png";
import serviceThumb from "/images/service/service-thumb1_1.png";
import serviceShape from "/images/service/service-shape1_1.png";

const ServiceOne = () => {
  return (
    <section className="service1 section-padding fix">
      <div className="container">
        <div className="row mb-60">
          <div className="col-lg-6">
            <div className="section-title">
              <h6 className="section-title__subtitle text-white">
                Our Services
                <span className="shape">
                  <img src={subTitleShape} alt="shape" loading="lazy" />
                </span>
              </h6>
              <h2 className="section-title__title text-white">
                Listing Your Brand’s <br />
                Strategic Journey
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service1__thumb">
              <img src={serviceTop} alt="thumb" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Service Items */}
        <div className="service1-item">
          <div className="row gx-0">
            <div className="col-lg-6">
              <h4>
                <Link className="service1-item__title" to="/contact">
                  Buy a Properties
                </Link>
              </h4>
            </div>
            <div className="col-lg-6">
              <div className="service1-item-content">
                <p className="service1-item-content__text">
                  Find your dream home with ease. Our expert team is here to
                  guide you through every step of the buying process, ensuring
                  you make an informed decision
                </p>
                <div className="service1-item-content__thumb">
                  <img src={serviceThumb} alt="img" loading="lazy" />
                </div>
                <div className="service1-item-content__btn-wrapper">
                  <Link className="service-btn" to="/contact">
                    <i className="fa-light fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service1-item">
          <div className="row gx-0">
            <div className="col-lg-6">
              <h4>
                <Link className="service1-item__title" to="/contact">
                  Rent a Properties
                </Link>
              </h4>
            </div>
            <div className="col-lg-6">
              <div className="service1-item-content">
                <p className="service1-item-content__text">
                  Find your dream home with ease. Our expert team is here to
                  guide you through every step of the buying process, ensuring
                  you make an informed decision
                </p>
                <div className="service1-item-content__thumb">
                  <img src={serviceThumb} alt="img" loading="lazy" />
                </div>
                <div className="service1-item-content__btn-wrapper">
                  <Link className="service-btn" to="/contact">
                    <i className="fa-light fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service1-item">
          <div className="row gx-0">
            <div className="col-lg-6">
              <h4>
                <Link className="service1-item__title" to="/contact">
                  Sale a Properties
                </Link>
              </h4>
            </div>
            <div className="col-lg-6">
              <div className="service1-item-content">
                <p className="service1-item-content__text">
                  Find your dream home with ease. Our expert team is here to
                  guide you through every step of the buying process, ensuring
                  you make an informed decision
                </p>
                <div className="service1-item-content__thumb">
                  <img src={serviceThumb} alt="img" loading="lazy" />
                </div>
                <div className="service1-item-content__btn-wrapper">
                  <Link className="service-btn" to="/contact">
                    <i className="fa-light fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shape */}
      <div className="service1__shape">
        <img src={serviceShape} alt="shape" loading="lazy" />
      </div>
    </section>
  );
};

export default ServiceOne;
