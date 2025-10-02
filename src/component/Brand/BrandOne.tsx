import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { brandOneData } from "../../data/data";
import { GlobalDataTypeOne } from "../../data/types";

const BrandOne = () => {
  return (
    <section className="brand1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Title */}
            <div className="brand1-top">
              <p className="brand1-top__title">
                Used by the world's most average companies
              </p>
            </div>

            {/* Swiper Slider */}
            <Swiper
              className="brand1-slider"
              modules={[Autoplay]}
              loop={true}
              slidesPerView={3}
              spaceBetween={10}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 24 },
                576: { slidesPerView: 2, spaceBetween: 24 },
                768: { slidesPerView: 3, spaceBetween: 24 },
                992: { slidesPerView: 4, spaceBetween: 24 },
                1200: { slidesPerView: 5, spaceBetween: 24 },
              }}
            >
              {brandOneData.map((brand: GlobalDataTypeOne) => (
                <SwiperSlide key={brand?._id}>
                  <div className="brand1-slider__item">
                    <Link to={`/brand-${brand?._id}`}>
                      <img
                        src={brand.img}
                        alt={`Brand ${brand._id}`}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandOne;
