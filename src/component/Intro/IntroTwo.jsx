import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Navigation } from "swiper/modules";
import shape1 from "/images/intro/intro-shape1_1.png";
import shape2 from "/images/intro/intro-shape1_2.png";
import circleShape from "/images/intro/intro-circle-shape.png";
import arrowShape from "/images/intro/intro-arrow.svg";
import introThumbBig from "/images/intro/intro-thumb1_1.jpg";
import { introThumbData } from "../../data/site";
import { Link } from "react-router-dom";

const IntroTwo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <section className="intro2 fix">
      <div className="container position-relative">
        <div className="row">
          {/* Left Column with Thumbnails and Arrows */}
          <div className="col-lg-7 position-relative">
            <div className="intro2-content">
              <h1 className="intro2-content__title">
                Affordable Solutions for Your Real Estate Goals
              </h1>
              <p className="intro2-content__text">
                Discover pricing plans tailored to meet your needs. Whether
                you're searching for your dream home or listing your property,
                we provide transparent and competitive.
              </p>
              <div className="intro2-content__btn-wrapper">
                <Link className="theme-btn style1" to="about">
                  Request a Visit
                </Link>
              </div>

              {/* Thumbnail Slider */}
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 24 },
                  450: { slidesPerView: 2, spaceBetween: 24 },
                  768: { slidesPerView: 3, spaceBetween: 24 },
                  992: { slidesPerView: 3, spaceBetween: 24 },
                  1200: { slidesPerView: 4, spaceBetween: 24 },
                }}
                modules={[FreeMode, Thumbs]}
                className="intro-thumb-slider slider-nav-area"
              >
                {introThumbData?.map((thumb) => (
                  <SwiperSlide key={thumb?._id}>
                    <img src={thumb?.img} alt={thumb?._id} loading="lazy" />
                    <span>0{thumb?._id}</span>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows */}
              <div className="swiper-arrow">
                <div ref={nextRef} className="swiper-nav swiper-next">
                  <i className="fa-light fa-angle-left"></i>
                </div>
                <div ref={prevRef} className="swiper-nav swiper-prev">
                  <i className="fa-light fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column with Main Slider */}
          <div className="col-lg-5">
            <Swiper
              loop={true}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs]}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.params.navigation.prevEl = prevRef.current;
              }}
              navigation={{
                nextEl: nextRef.current,
                prevEl: prevRef.current,
              }}
              className="intro-slider"
            >
              {introThumbData?.map((thumb) => (
                <SwiperSlide key={thumb?._id}>
                  <img src={introThumbBig} alt={thumb?._id} loading="lazy" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Shapes */}
        <div className="intro2-shape1">
          <img src={shape1} alt="shape" loading="lazy" />
        </div>
        <div className="intro2-shape2">
          <img src={shape2} alt="shape" loading="lazy" />
        </div>
        <div className="intro2-shape3">
          <div className="position-relative">
            <img
              className="img1 cir36"
              src={circleShape}
              alt="shape"
              loading="lazy"
            />
            <img className="img2" src={arrowShape} alt="arrow" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroTwo;
