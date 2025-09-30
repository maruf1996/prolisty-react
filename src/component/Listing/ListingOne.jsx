import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FeatureOneData } from "../../data/site";
import shape from "/images/about/sub-title-shape.png";
import beds from "/images/listing-categories/beds.svg";
import baths from "/images/listing-categories/beath.svg";
import sqft from "/images/listing-categories/sqft.svg";
import { Link } from "react-router-dom";

const icons = { beds, baths, sqft };

const ListingOne = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="listing1 section-padding pt-160 fix slider-nav-area">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title mb-60">
              <h6 className="section-title__subtitle">
                Luxury Feature
                <span className="shape">
                  <img src={shape} alt="shape" loading="lazy" />
                </span>
              </h6>
              <h2 className="section-title__title">
                Features for Your listing <br /> Journey
              </h2>
            </div>
          </div>

          <div className="col-lg-6 col-md-2">
            <div className="swiper-arrow">
              <div
                className="swiper-nav swiper-prev cursor-pointer"
                ref={prevRef}
              >
                <i className="fa-light fa-angle-left"></i>
              </div>
              <div
                className="swiper-nav swiper-next cursor-pointer"
                ref={nextRef}
              >
                <i className="fa-light fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={24}
          slidesPerView={3}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 24 },
            576: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            992: { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="listing1-slider"
        >
          {FeatureOneData?.map((slide) => (
            <SwiperSlide key={slide?._id}>
              <div className="listing1-card pb-4">
                <div className="listing1-card__thumb">
                  <img src={slide?.thumb} alt="thumb" loading="lazy" />
                  <div className="badge">
                    Recently Added{" "}
                    <span>
                      <i className="fa-light fa-camera"></i>
                    </span>
                  </div>
                  <Link className="wishlist" to="#!">
                    <i className="fa-light fa-heart"></i>
                  </Link>
                </div>

                <div className="listing1-card-content">
                  <h6 className="listing1-card-content__meta">
                    <span>
                      <i className="fa-sharp fa-light fa-location-dot"></i>
                    </span>{" "}
                    {slide?.location}
                  </h6>
                  <h3>
                    <Link
                      to={`/listing-details/${slide?.slug}`}
                      className="listing1-card-content__title"
                    >
                      {slide?.title}
                    </Link>
                  </h3>
                  <div className="listing1-card-feature">
                    <ul className="listing1-card-feature__list">
                      <li>
                        <img
                          className="svg"
                          src={icons?.beds}
                          alt="icon"
                          loading="lazy"
                        />{" "}
                        Beds : {slide.beds}
                      </li>
                      <li>
                        <img
                          className="svg"
                          src={icons?.baths}
                          alt="icon"
                          loading="lazy"
                        />{" "}
                        Baths : {slide.baths}
                      </li>
                      <li>
                        <img
                          className="svg"
                          src={icons?.sqft}
                          alt="icon"
                          loading="lazy"
                        />{" "}
                        Sqft : {slide?.sqft}
                      </li>
                    </ul>
                    <p className="listing1-card-feature__price">
                      {slide?.price}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ListingOne;
