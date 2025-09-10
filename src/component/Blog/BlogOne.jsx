import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import blogBg from "/images/blog/blog-bg1.png";
import subTitleShape from "/images/about/sub-title-shape.png";
import blogMeta1 from "/images/blog/blog-meta1_1.svg";
import blogMeta2 from "/images/blog/blog-meta1_2.svg";
import { Link } from "react-router-dom";
import { blogOneData } from "../../data/site";

const BlogOne = () => {
  return (
    <section
      className="blog1 section-padding fix bg-img bg-color1 slider-nav-area"
      style={{ backgroundImage: `url(${blogBg})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title mb-60 text-center">
              <h6 className="section-title__subtitle">
                Blog Listing
                <span className="shape">
                  <img src={subTitleShape} alt="shape" />
                </span>
              </h6>
              <h2 className="section-title__title">The Latest in Listing</h2>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          slidesPerView={3}
          spaceBetween={10}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 24 },
            576: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            992: { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 3, spaceBetween: 24 },
          }}
          navigation={{
            nextEl: ".slider-nav-area .swiper-next",
            prevEl: ".slider-nav-area .swiper-prev",
          }}
          className="blog1-slider"
        >
          {blogOneData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="blog1-card">
                <div className="blog1-card__thumb">
                  <img src={item.img} alt="thumb" />
                </div>
                <div className="blog1-card-content">
                  <div className="blog1-card-content__meta">
                    <div className="blog1-card-content__meta-item">
                      <div className="blog1-card-content__meta-item-icon">
                        <img src={blogMeta1} alt="Icon" />
                      </div>
                      <div className="blog1-card-content__meta-item-text">
                        {item.date}
                      </div>
                    </div>
                    <div className="blog1-card-content__meta-item">
                      <div className="blog1-card-content__meta-item-icon">
                        <img src={blogMeta2} alt="Icon" />
                      </div>
                      <p className="blog1-card-content__meta-item-text">
                        {item.comments} Comment
                      </p>
                    </div>
                  </div>
                  <h3>
                    <Link
                      to={`/blog-details/${item?.slug}`}
                      className="blog1-card-content__title"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <div className="blog1-card-content__btn-wrapper">
                    <Link
                      className="theme-btn style2"
                      to={`/blog-details/${item?.slug}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-arrow">
          <div className="swiper-nav swiper-next cursor-pointer">
            <i className="fa-light fa-angle-left"></i>
          </div>
          <div className="swiper-nav swiper-prev cursor-pointer">
            <i className="fa-light fa-angle-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
