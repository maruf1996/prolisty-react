import Breadcumb from "../../component/Breadcumb/Breadcumb";
import { featureCategoryData } from "../../data/site";
import { Link } from "react-router-dom";
import Pagination from "../../component/Pagination/Pagination";

const CategoryListingsPage = () => {
  return (
    <div>
      <Breadcumb title="Category Wise Listings" />
      <section className="location-wise section-padding fix">
        <div className="container">
          <div className="row g-30">
            {featureCategoryData?.map((item) => (
              <div key={item?._id} className="col-xl-4 col-md-6">
                <div className="listing-categories1-card">
                  <div className="listing-categories1-card__thumb">
                    <img src={item?.img} alt={item?.title} loading="lazy" />
                    <div className="badge-wrapper">
                      <div className="badge">{item?.badge}</div>
                      <div className="badge2">{item?.badge2}</div>
                    </div>
                  </div>
                  <div className="listing-categories1-card-content">
                    <h3>
                      <Link
                        to={`/listing-details/${item?.slug}`}
                        className="listing-categories1-card-content__title"
                      >
                        {item?.title}
                      </Link>
                    </h3>
                    <div className="listing-categories1-card-content__price">
                      <p className="listing-categories1-card-content__price-text">
                        {item?.price}
                      </p>
                      <Link
                        className="listing-categories1-card-content__price-details theme-btn style3"
                        to={`/listing-details/${item?.slug}`}
                      >
                        Details
                      </Link>
                    </div>
                    <div className="listing-categories1-card-content__ratings">
                      <ul className="listing-categories1-card-content__ratings-list">
                        {Array.from({ length: item?.reviews }).map((_, i) => (
                          <li key={i}>
                            <img
                              src="/images/location/star.svg"
                              alt="star"
                              loading="lazy"
                            />
                          </li>
                        ))}
                      </ul>
                      <p className="listing-categories1-card-content__ratings-reviews">
                        ( {item?.reviews} Reviews )
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Pagination */}
            <Pagination title="extra-class" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryListingsPage;
