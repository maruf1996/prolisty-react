import { Link } from "react-router-dom";
import { listingTwoData } from "../../data/data";
import { listingTwoDataType } from "../../data/types";

const ListingTwo = () => {
  return (
    <section className="listing2 section-padding fix">
      <div className="container">
        {/* Section Title */}
        <div className="section-title mb-60 text-center">
          <h6 className="section-title__subtitle">
            Listing City
            <span className="shape">
              <img
                src="/images/about/sub-title-shape.png"
                alt="shape"
                loading="lazy"
              />
            </span>
          </h6>
          <h2 className="section-title__title">
            Your Dream Listing Awaits In City
          </h2>
        </div>

        {/* Cards */}
        <div className="row">
          {listingTwoData.map((item: listingTwoDataType) => (
            <div key={item?._id} className="col-xl-4 col-md-6">
              <div className="listing2-card">
                <div className="listing2-card__thumb">
                  <img src={item?.thumb} alt={item?.country} loading="lazy" />
                </div>
                <div className="listing2-card-content">
                  <h6 className="listing2-card-content__meta">
                    <span>
                      <i className="fa-sharp fa-light fa-location-dot"></i>
                    </span>
                    {item?.meta}
                  </h6>
                  <h4>
                    <Link
                      to={`/listing-details/${item?.slug}`}
                      className="listing2-card-content__location"
                    >
                      {item?.country}
                    </Link>
                  </h4>
                  <div className="listing2-card-content__bottom">
                    <p className="listing2-card-content__bottom-listing">
                      {item?.listings} Listing
                    </p>
                    <Link
                      className="theme-btn style1"
                      to={`/listing-details/${item?.slug}`}
                    >
                      <i className="fa-light fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All Button */}
        <div className="listing2-btn-wrapper mt-2 text-center">
          <Link className="theme-btn style1" to="/locations">
            Browse all Location{" "}
            <span>
              <i className="fa-sharp fa-light fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ListingTwo;
