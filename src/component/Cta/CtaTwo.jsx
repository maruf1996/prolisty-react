import React, { useState } from "react";
import { Link } from "react-router-dom";
import ctaThumb1 from "/images/cta/cta-thumb2_1.jpg";
import ctaThumb2 from "/images/cta/cta-thumb2_2.jpg";
import ctaShape1 from "/images/cta/cta-shape2_1.png";
import ctaShape2 from "/images/cta/cta-shape2_2.png";
import ctaShape3 from "/images/cta/cta-shape2_3.png";
import VideoModal from "../../hooks/VideoModal";

const CtaTwo = () => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <section className="cta2 section-padding fix">
      <div className="container">
        <div className="cta2-card">
          <div className="row">
            {/* Left content */}
            <div className="col-xl-7">
              <h3 className="cta2-card__title">
                Your Trusted Partner in Listing Success
              </h3>
              <p className="cta2-card__text">
                Start your real estate journey with us. Whether buying, selling,
                or investing, we're here to provide expert guidance and
                unmatched support every step of the way.
              </p>
              <div className="cta2-card__btn-wrapper">
                <Link className="theme-btn style1" to="/contact">
                  Contact us
                </Link>
              </div>
            </div>

            {/* Right images + video */}
            <div className="col-xl-5">
              <div className="cta2-card-thumb">
                <div className="cta2-card-thumb__thumb1">
                  <img src={ctaThumb1} alt="thumb" />
                </div>
                <div className="cta2-card-thumb__thumb2">
                  <img src={ctaThumb2} alt="thumb" />
                </div>
                <div className="cta2-card-shape3">
                  <img src={ctaShape3} alt="Shape" />
                </div>

                <div className="cta2-card-thumb-video">
                  <button
                    onClick={() => setVideoActive(true)}
                    className="cta2-card-thumb-video-btn ripple popup-video"
                  >
                    <i className="fa-solid fa-play"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Shapes */}
          <div className="cta2-card__shape1">
            <img src={ctaShape1} alt="Shape" />
          </div>
          <div className="cta2-card__shape2">
            <img src={ctaShape2} alt="Shape" />
          </div>
        </div>
      </div>
      {/* Video Modal */}
      <VideoModal
        videoActive={videoActive}
        setVideoActive={setVideoActive}
        videoSrc="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=fpLFGwoKO1XkBky9"
      />
    </section>
  );
};

export default CtaTwo;
