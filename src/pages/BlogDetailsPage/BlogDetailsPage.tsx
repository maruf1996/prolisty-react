import blogThumb1 from "/images/blog/blog-details-thumb1_1.jpg";
import blogThumb2 from "/images/blog/blog-details-thumb1_2.jpg";
import blogThumb3 from "/images/blog/blog-details-thumb1_3.jpg";
import { sidebarTags } from "../../data/data";
import BlogSidebar from "../../component/Blog/BlogSidebar";
import Breadcumb from "../../component/Breadcumb/Breadcumb";
import { GlobalDataTypeThree } from "../../data/types";

const BlogDetailsPage = () => {
  return (
    <div>
      <Breadcumb title="Blog Details" />
      <section className="blog-details section-padding fix">
        <div className="container">
          <div className="row gy-5 justify-content-center">
            {/* Left Side Blog Details */}
            <div className="col-xl-8">
              <div className="blog-details-card">
                <div className="blog-details-card__thumb hover-img">
                  <img src={blogThumb1} alt="thumb" loading="lazy" />
                </div>
                <h3 className="blog-details-card__title">
                  Shine Brighter with Listings
                </h3>
                <div className="blog-details-card__meta">
                  <span>
                    <i className="fa-regular fa-calendar-days"></i>October 19,
                    2023
                  </span>
                  <a href="#!">
                    <i className="fa-regular fa-user"></i>By admin
                  </a>
                  <a href="#!">
                    <i className="fa-regular fa-folder-open"></i>Category
                  </a>
                </div>
                <p className="blog-details-card__text">
                  Listings energy is a renewable source of power derived from
                  the sun's radiation. It is harnessed using Listings panels or
                  through Listings thermal techniques. Listings power
                </p>
                <p className="blog-details-card__text">
                  Listings energy is a renewable source of power derived from
                  the sun's radiation. It is harnessed using Listings panels or
                  through Listings thermal techniques. Listings power Listings
                  energy renewable source of power derived from the sun's
                  radiation. It is harnessed
                </p>

                {/* Blog list */}
                <div className="blog-details-list-wrapper">
                  <ul className="blog-details__list">
                    <li>
                      <span>
                        <i className="fa-light fa-check-double"></i>
                      </span>
                      Listings Energy for a Sustainable Future
                    </li>
                    <li>
                      <span>
                        <i className="fa-light fa-check-double"></i>
                      </span>
                      Brighten Your Life with Listings Power
                    </li>
                    <li>
                      <span>
                        <i className="fa-light fa-check-double"></i>
                      </span>
                      Embrace Listings, Embrace Sustainability
                    </li>
                  </ul>
                  <ul className="blog-details__list">
                    <li>
                      <span>
                        <i className="fa-light fa-check-double"></i>
                      </span>
                      Listings Solutions for Your Energy Need
                    </li>
                    <li>
                      <span>
                        <i className="fa-light fa-check-double"></i>
                      </span>
                      Sunlight to Power Your World
                    </li>
                    <li>
                      <span>
                        <i className="fa-light fa-check-double"></i>
                      </span>
                      Shine Brighter with Listings Let the Sun
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quote box */}
              <div className="blog-details-review">
                <div className="blog-details-review__icon">
                  <i className="fa-sharp fa-thin fa-quote-left"></i>
                </div>
                <p className="blog-details-review__text">
                  A real estate website is an online platform that provides
                  property listings, real estate services, and market
                  information to buyers, sellers, renters, and agents.
                </p>
                <h5 className="blog-details-review__user">Albert Flores</h5>
                <h6 className="blog-details-review__user-title">Designer</h6>
              </div>

              {/* Two side images */}
              <div className="row">
                <div className="col-md-6">
                  <div className="blog-details__thumb hover-img mt-2">
                    <img src={blogThumb2} alt="thumb" loading="lazy" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="blog-details__thumb hover-img mt-2">
                    <img src={blogThumb3} alt="thumb" loading="lazy" />
                  </div>
                </div>
              </div>

              <p className="blog-details-card__text">
                A real estate website is an online platform that provides
                property listings, real estate services, and market information
                to buyers, sellers, renters, and agents.
              </p>

              {/* Tags + Social */}
              <div className="blog-details-tag">
                <div className="blog-details-tag__list">
                  <h4 className="blog-details-tag__list-title">Tags:</h4>
                  <ul>
                    {sidebarTags
                      ?.slice(0, 3)
                      .map((tag: GlobalDataTypeThree) => (
                        <li key={tag?._id}>
                          <a href="#!">{tag?.title}</a>
                        </li>
                      ))}
                  </ul>
                </div>
                <ul className="blog-details-tag__list-social">
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Prev / Next Buttons */}
              <div className="blog-details-button">
                <button className="blog-details-button__arry-prev">
                  <i className="fa-sharp-duotone fa-regular fa-arrow-left"></i>
                  <span className="ps-3">Previous</span>
                </button>
                <button className="blog-details-button__arry-next">
                  <span className="blog-details-button__next pe-3">Next</span>
                  <i className="fa-sharp-duotone fa-regular fa-arrow-right"></i>
                </button>
              </div>

              {/* Comments */}
              <div className="blog-details-comment">
                <h3 className="blog-details-comment__title">1 Comment</h3>
                {[1, 2].map((i) => (
                  <div className="blog-details-comment-box" key={i}>
                    <h5 className="blog-details-comment-box__user">
                      Chis Hawel
                    </h5>
                    <h6 className="blog-details-comment-box__title">
                      Designer
                    </h6>
                    <a className="blog-details-comment-box__reply" href="#!">
                      Reply
                    </a>
                    <p className="blog-details-comment-box__text">
                      A real estate website is an online platform that provides
                      property listings, real estate services, and market
                      information to buyers, sellers, renters, and agents.
                    </p>
                  </div>
                ))}
                {/* Comment Form */}
                <div className="blog-details-comment-input">
                  <h4 className="blog-details-comment-input__title">
                    Leave A Comment
                  </h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        className="blog-details-comment-input__form-control"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="blog-details-comment-input__form-control"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="blog-details-comment-input__form-control"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="col-lg-6">
                      <select
                        className="nice-select blog-details-comment-input__form-control"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Choose An Option
                        </option>
                        <option>Tv</option>
                        <option>Freeze</option>
                        <option>Rice Cooker</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        className="blog-details-comment-input__form-control"
                        name="message"
                        placeholder="Message here.."
                      ></textarea>
                    </div>
                  </div>
                  <div className="blog-details-comment-input__btn-wrapper">
                    <button className="theme-btn style1">
                      Sent Now{" "}
                      <i className="fa-sharp-duotone fa-light fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-10">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailsPage;
