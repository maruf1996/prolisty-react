import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import starIcon from "/images/location/star.svg";
import testimonialThumb from "/images/testimonial/testimonial-thumb2_1.jpg";
import testimonialShape from "/images/testimonial/testimonial-shape2_1.png";
import subTitleShape from "/images/about/sub-title-shape.png";
import { testimonialTwoData } from "../../data/site";

const TestimonialTwo = () => {
  return (
    <section className="testimonial2 section-padding fix bg-color1">
      <div className="container position-relative">
        {/* Section Title */}
        <div className="section-title mb-60">
          <h6 className="section-title__subtitle">
            Testimonial
            <span className="shape">
              <img src={subTitleShape} alt="shape" loading="lazy" />
            </span>
          </h6>
          <h2 className="section-title__title">
            What Our Clients <br /> Are Saying
          </h2>
        </div>

        <div className="row g-40 align-items-center">
          {/* Left Thumb */}
          <div className="col-lg-5">
            <div className="testimonial2__thumb">
              <img src={testimonialThumb} alt="thumb" loading="lazy" />
            </div>
          </div>

          {/* Right Slider */}
          <div className="col-lg-7">
            <div className="testimonial2-slider-wrapper slider-nav-area">
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                speed={600}
                navigation={{
                  nextEl: ".slider-nav-area .swiper-next",
                  prevEl: ".slider-nav-area .swiper-prev",
                }}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 24 },
                  576: { slidesPerView: 1, spaceBetween: 24 },
                  768: { slidesPerView: 1, spaceBetween: 24 },
                  992: { slidesPerView: 1, spaceBetween: 24 },
                  1200: { slidesPerView: 1, spaceBetween: 24 },
                }}
              >
                {testimonialTwoData?.map((item) => (
                  <SwiperSlide key={item?._id} className="pt-4 pb-4">
                    <div className="testimonial2-card">
                      {/* Profile */}
                      <div className="testimonial2-card__profile">
                        <div className="testimonial2-card__profile-name">
                          {item?.name}
                        </div>
                        <div className="testimonial2-card__profile-title">
                          {item?.title}
                        </div>
                      </div>
                      {/* Content */}
                      <div className="testimonial2-card__content">
                        <p className="testimonial2-card__content-text">
                          {item?.text}
                        </p>
                        <ul className="testimonial2-card__content-ratings">
                          {Array?.from({ length: item?.rating }).map((_, i) => (
                            <li key={i}>
                              <img src={starIcon} alt="star" loading="lazy" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Swiper Arrows */}
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

        {/* Shape */}
        <div className="testimonial2-shape1">
          <img src={testimonialShape} alt="shape" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialTwo;
