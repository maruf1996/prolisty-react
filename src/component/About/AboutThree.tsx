import subTitleShape from "/images/about/sub-title-shape.png";
import aboutThumb1 from "/images/about/about-thumb2_1.jpg";
import aboutThumb2 from "/images/about/about-thumb2_2.jpg";
import aboutThumb3 from "/images/about/about-thumb2_3.jpg";
import textShape from "/images/about/about-text-shape2_1.png";
import arrow from "/images/intro/intro-arrow.svg";
import aboutShape1 from "/images/about/about-shape2_2.png";
import OdometerCounter from "../../hooks/OdometerCounter";

const AboutThree = () => {
  return (
    <section className="about3 section-padding fix">
      <div className="container position-relative">
        <div className="section-title mb-60">
          <h6 className="section-title__subtitle">
            About Us
            <span className="shape">
              <img src={subTitleShape} alt="shape" loading="lazy" />
            </span>
          </h6>
          <h2 className="section-title__title">
            Your Trusted Our Listing <br /> Partners
          </h2>
        </div>

        <div className="row g-0">
          <div className="col-lg-7">
            <div className="about3-left">
              <div className="row">
                <div className="col-md-6">
                  <div className="about3-left__thumb mb-30">
                    <img src={aboutThumb1} alt="thumb" loading="lazy" />
                  </div>
                  <div className="about3-left-card">
                    <h6 className="about3-left-card__subtitle">
                      Satisfied customers
                    </h6>
                    <h3 className="about3-left-card__count">
                      <span className="counters-item">
                        <OdometerCounter value={98} />
                      </span>
                      %
                    </h3>
                    <p className="about3-left-card__text">
                      A 98% satisfaction rate across all our consulting
                      services.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="about3-left-card style2 mb-30">
                    <h6 className="about3-left-card__subtitle text-white">
                      Projects completed
                    </h6>
                    <h3 className="about3-left-card__count text-white">
                      <span className="counters-item">
                        {" "}
                        <OdometerCounter value={475} />
                      </span>
                      +
                    </h3>
                    <p className="about3-left-card__text text-white">
                      Over 400 successful projects delivered to our clients
                      worldwide.
                    </p>
                  </div>
                  <div className="about3-left__thumb">
                    <img src={aboutThumb2} alt="thumb" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="about3__thumb-wrapper">
              <img
                className="thumb"
                src={aboutThumb3}
                alt="thumb"
                loading="lazy"
              />
              <div className="about3__thumb-shape">
                <div className="position-relative">
                  <img
                    className="img1 cir36"
                    src={textShape}
                    alt="shape"
                    loading="lazy"
                  />
                  <img
                    className="img2"
                    src={arrow}
                    alt="arrow"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about3__shape1">
          <img src={aboutShape1} alt="shape" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default AboutThree;
