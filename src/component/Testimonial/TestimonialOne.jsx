import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import testiQuote from "/images/testimonial/testi-quote.png";
import testiThumb from "/images/testimonial/testimonial.png";
import star from "/images/location/star.svg";
import subTitleShape from "/images/about/sub-title-shape.png";
import { testimonialOneData } from "../../data/site";
import VideoModal from "../../hooks/VideoModal";

const TestimonialOne = () => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <section className="testimonial1 section-padding fix bg-color1">
      <div className="container">
        <div className="section-title mb-60">
          <h6 className="section-title__subtitle">
            Testimonial
            <span className="shape">
              <img src={subTitleShape} alt="shape" />
            </span>
          </h6>
          <h2 className="section-title__title">
            What Our Clients <br /> Are Saying
          </h2>
        </div>
      </div>

      <div className="container-fluid g-0">
        <div className="row gx-40">
          {/* Left Thumb */}
          <div className="col-lg-6">
            <div className="testimonial1__thumb">
              <img src={testiThumb} alt="thumb" />
              <div className="testimonial1__thumb-video">
                <button
                  onClick={() => setVideoActive(true)}
                  className="testimonial1__thumb-video-btn ripple popup-video"
                >
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Right Slider */}
          <div className="col-lg-6">
            <div className="testimonial1-slider-wrapper slider-nav-area">
              <Swiper
                modules={[Navigation]}
                loop={true}
                speed={600}
                spaceBetween={30}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 24 },
                  576: { slidesPerView: 1, spaceBetween: 24 },
                  768: { slidesPerView: 1.4, spaceBetween: 24 },
                  992: { slidesPerView: 1, spaceBetween: 24 },
                  1200: { slidesPerView: 1.4, spaceBetween: 24 },
                }}
                navigation={{
                  nextEl: ".slider-nav-area .swiper-next",
                  prevEl: ".slider-nav-area .swiper-prev",
                }}
                className="testimonial1-slider"
              >
                {testimonialOneData?.map((item, index) => (
                  <SwiperSlide key={index} className="pt-4 pb-4">
                    <div className="testimonial1-card">
                      <div className="testimonial1-card__icon">
                        <img src={testiQuote} alt="icon" />
                      </div>
                      <div className="testimonial1-card__profile">
                        <div className="testimonial1-card__profile-name">
                          {item.name}
                        </div>
                        <div className="testimonial1-card__profile-title">
                          {item.title}
                        </div>
                      </div>
                      <div className="testimonial1-card__content">
                        <p className="testimonial1-card__content-text">
                          {item.text}
                        </p>
                        <ul className="testimonial1-card__content-ratings">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <li key={i}>
                              <img src={star} alt="star" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Swiper Navigation */}
              <div className="swiper-arrow">
                <div className="swiper-nav swiper-next cursor-pointer">
                  <i className="fa-sharp-duotone fa-thin fa-angle-left"></i>
                </div>
                <div className="swiper-nav swiper-prev cursor-pointer">
                  <i className="fa-sharp-duotone fa-thin fa-angle-right"></i>
                </div>
              </div>
            </div>
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

export default TestimonialOne;
