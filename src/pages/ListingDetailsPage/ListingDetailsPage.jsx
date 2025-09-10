import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalForm from "../../hooks/ModalForm";
import VideoModal from "../../hooks/VideoModal";
import ImageModal from "../../hooks/ImageModal";
import { openingHours } from "../../data/site";
import { categories } from "../../data/site";
import { locations } from "../../data/site";
import gallaryImg1 from "/images/listing-categories/listing-gallery1_1.jpg";
import gallaryImg2 from "/images/listing-categories/listing-gallery1_2.jpg";
import videoImg1 from "/images/listing-categories/video-bg1_1.jpg";
import videoImg2 from "/images/listing-categories/video-bg1_2.jpg";
import reviewThumb1 from "/images/listing-categories/review-thumb1_1.jpg";
import reviewThumb2 from "/images/listing-categories/review-thumb1_2.jpg";
import reviewThumb3 from "/images/listing-categories/review-thumb1_3.jpg";

const ListingDetailsPage = () => {
  const [videoActive, setVideoActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Send Message Modal */}
      <ModalForm
        title="Send Message"
        dataTarget="send_message_modal"
      ></ModalForm>

      {/* Report Modal */}
      <ModalForm title="Submit Report" dataTarget="report_modal"></ModalForm>

      {/* Breadcrumb Section */}
      <div
        className="breadcrumb-wrapper bg-img"
        style={{
          backgroundImage: "url(/images/intro/common-intro-bg1_1.jpg)",
        }}
      >
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-content__title">
              Saybrook Point Resort & Marina
            </h1>
            <div className="breadcrumb-content__location">
              <Link to="/contact">
                <i className="fas fa-map-marker-alt"></i> London, UK
              </Link>
            </div>
            <div className="breadcrumb-content__review">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span>(2 Reviews)</span>
            </div>
            <div className="breadcrumb-content__call">
              <a href="tel:860-395-2000">
                <i className="fas fa-phone-volume"></i> (860) 395-2000
              </a>
            </div>
            <div className="breadcrumb-content__listing-items">
              <a href="#!">
                <i className="far fa-edit"></i> Hotel
              </a>
              <a href="#!">
                <i className="fas fa-heart"></i> Add to Wishlist
              </a>
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#send_message_modal"
              >
                <i className="far fa-envelope"></i> Send Message
              </a>
              <a href="#" data-bs-toggle="modal" data-bs-target="#report_modal">
                <i className="far fa-flag"></i> Report
              </a>
            </div>
            <div className="breadcrumb-content__social">
              <ul>
                <li>
                  <a href="#!">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Listing Details Section  */}
      <section className="listing-details-page section-padding fix">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-lg-8">
              <div className="listing-details-content">
                {/* Description */}
                <h2 className="listing-details-content__title">
                  <i className="fa-solid fa-folder"></i> Description
                </h2>
                <p className="listing-details-content__text">
                  Lorem ipsum dolor sit amet, suscipit dissentiunt usu at, eu
                  nam veri vidit signiferumque. Ad mea erat fabellas, et facete
                  everti eum, tation consul ea ius. Autem feugiat maiorum id
                  sea. Est omnis mediocrem assentior ea. Nam ubique possit
                  verterem ea, cum facer scriptorem an.
                </p>
                <p className="listing-details-content__text">
                  Equidem legendos duo ei, et legimus offendit mei. Mea amet
                  tibique explicari ne. Nam blandit patrioque comprehensam an,
                  sed in errem omnes partem. No quo impedit percipit
                  comprehensam, ei dolores intellegam pro, et sed quaeque
                  temporibus referrentur. Quodsi causae dissentias in pri, idque
                  ridens cum an. Vis in facilisi conclusionemque, eu est erant
                  affert veritus. Id qui quodsi iriure quaestio, omittam
                  praesent ne sea, postulant consetetur definitiones an nec.
                </p>
                <p className="listing-details-content__text">
                  Probo animal interpretaris ea mea. Mea ad nostrud urbanitas
                  inciderint, sea no noluisse incorrupte. His democritum
                  vituperatoribus no, ad cum offendit rationibus
                  vituperatoribus, eos te quodsi interesset. Regione bonorum no
                  quo. Lobortis torquatos constituto ne per, ferri facete ea
                  duo. Usu molestie complectitur eu, euismod forensibus
                  moderatius sed no.
                </p>

                {/* Gallery */}
                <div className="listing-details-content-gallery">
                  <h2 className="listing-details-content__title">
                    <i className="fa-sharp fa-solid fa-image"></i> Photo
                  </h2>
                  <div className="row popup-gallery">
                    <div className="col-md-6">
                      <div className="gallery-item">
                        <img src={gallaryImg1} alt="Gallery Image" />
                        <div className="gallery-overly">
                          <button onClick={() => setSelectedImage(gallaryImg1)}>
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="gallery-item">
                        <img src={gallaryImg2} alt="Gallery Image" />
                        <div className="gallery-overly">
                          <button onClick={() => setSelectedImage(gallaryImg2)}>
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Modal */}
                  {selectedImage && (
                    <ImageModal
                      imgSrc={selectedImage}
                      onClose={() => setSelectedImage(null)}
                    />
                  )}
                </div>

                {/* Video */}
                <div className="listing-details-content-gallery">
                  <h2 className="listing-details-content__title">
                    <i className="fa-solid fa-video"></i> Video
                  </h2>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="video-item">
                        <img src={videoImg1} alt="img" />
                        <div className="video-item-overlay">
                          <button
                            onClick={() => setVideoActive(true)}
                            className="video-item-overlay-btn popup-video"
                          >
                            <i className="fa-regular fa-circle-play"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="video-item">
                        <img src={videoImg2} alt="img" />
                        <div className="video-item-overlay ">
                          <button
                            onClick={() => setVideoActive(true)}
                            className="video-item-overlay-btn popup-video "
                          >
                            <i className="fa-regular fa-circle-play"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="listing-details-content-map">
                  <h2 className="listing-details-content__title">
                    <i className="fa-solid fa-map"></i> Location Map
                  </h2>
                  <div className="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.1644726412524!2d-72.35277188518384!3d41.283524779273854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e62268e8620931%3A0x88b1bc148a89e421!2s2%20Bridge%20St%2C%20Old%20Saybrook%2C%20CT%2006475%2C%20USA!5e0!3m2!1sen!2sbd!4v1625913163080!5m2!1sen!2sbd"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map"
                    ></iframe>
                  </div>
                </div>

                {/* Amenities */}
                <div className="listing-details-content-amenities">
                  <h2 className="listing-details-content__title">
                    <i className="fa-solid fa-bullhorn"></i> Amenities
                  </h2>
                  <ul>
                    <li>
                      <i className="fas fa-check-square"></i> Free Wifi
                    </li>
                    <li>
                      <i className="fas fa-check-square"></i> Swimming Pool
                    </li>
                  </ul>
                </div>

                {/* Features */}
                <div className="listing-details-content-feature">
                  <h2 className="listing-details-content__title">
                    <i className="fa-sharp fa-solid fa-address-card"></i>{" "}
                    Additional Features
                  </h2>
                  <div className="contact">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td className="w-300">Masks required</td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <td className="w-300">Payment Methods</td>
                          <td>All major payment method are allowed</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="listing-details-content-contact">
                  <h2 className="listing-details-content__title">
                    <i className="fa-sharp fa-solid fa-address-card"></i>{" "}
                    Contact Information
                  </h2>
                  <div className="contact">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td className="w-200">Address</td>
                          <td>2 Bridge St Old Saybrook, CT 06475</td>
                        </tr>
                        <tr>
                          <td>Phone Number</td>
                          <td>
                            <a href="tel:860-395-2000">(860) 395-2000</a>
                          </td>
                        </tr>
                        <tr>
                          <td>Email Address</td>
                          <td>
                            <a href="mailto:info@saybrook.com">
                              info@saybrook.com
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Website</td>
                          <td className="website">
                            <a href="#!" target="_blank">
                              https://www.saybrook.com/
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Reviews */}
                <div className="listing-details-content-review">
                  <h2 className="listing-details-content__title">
                    Reviews (2)
                  </h2>
                  <div className="review-overall">
                    <div className="review">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div className="total">(Overall 4.5 Out of 5)</div>
                  </div>
                  <div className="reviews-wrapper">
                    <div className="reviews-item">
                      <div className="reviews-item__photo">
                        <img src={reviewThumb1} alt="thumb" />
                      </div>
                      <div className="reviews-item-info">
                        <div className="name">Robert Cook</div>
                        <div className="date-time">04 Feb, 2025</div>
                        <div className="score">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="comment">
                          <p>Awesome place. I recommend always!</p>
                        </div>
                      </div>
                    </div>
                    <div className="reviews-item">
                      <div className="reviews-item__photo">
                        <img src={reviewThumb2} alt="thumb" />
                      </div>
                      <div className="reviews-item-info">
                        <div className="name">Samin Shikder</div>
                        <div className="date-time">16 Jul, 2021</div>
                        <div className="score">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="comment">
                          <p>
                            I visited this resort last year. It is a very
                            charming place.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-details-content-review-login">
                    <h2 className="listing-details-content__title">
                      Write a Review
                    </h2>
                    <div className="review-form">
                      <a href="#!">Login to Review</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="main-sidebar">
                {/* Agent */}
                <div className="single-sidebar-widget">
                  <h5 className="widget-title">Agent</h5>
                  <div className="single-sidebar-widget-agent">
                    <div className="single-sidebar-widget-agent__thumb">
                      <img src={reviewThumb3} alt="thumb" />
                    </div>
                    <div className="single-sidebar-widget-agent__info">
                      <h3>
                        <a
                          href="#!"
                          className="single-sidebar-widget-agent__info-name"
                        >
                          Peter Smith
                        </a>
                      </h3>
                      <h4 className="single-sidebar-widget-agent__info-date">
                        Posted on 10 Jul, 2021
                      </h4>
                    </div>
                  </div>
                  <div className="single-sidebar-widget-links">
                    <ul>
                      <li>
                        <a href="#!">
                          <span>
                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                          </span>
                          23, PK Road, NYC 45
                        </a>
                      </li>
                      <li>
                        <a href="tel:111-222-4569">
                          <span>
                            <i className="fa-sharp fa-solid fa-phone"></i>
                          </span>
                          111-222-4569
                        </a>
                      </li>
                      <li>
                        <a href="mailto:customer@gmail.com">
                          <span>
                            <i className="fa-sharp fa-solid fa-envelope"></i>
                          </span>
                          customer@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <span>
                            {" "}
                            <i className="fa-sharp fa-regular fa-globe"></i>
                          </span>
                          https://www.testwebsite.com
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-sidebar-widget-social">
                    <ul>
                      <li>
                        <a href="#!" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                    <a href="#!" className="theme-btn style1 btn-block">
                      View Profile
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="single-sidebar-widget">
                  <h5 className="widget-title">Opening Hours</h5>
                  <div className="single-sidebar-widget-openning-hour">
                    <table className="table table-bordered">
                      <tbody>
                        {openingHours.map((item, i) => (
                          <tr key={i}>
                            <td>{item.day}</td>
                            <td>{item.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Categories */}
                <div className="single-sidebar-widget">
                  <h5 className="widget-title">Categories</h5>
                  <div className="single-sidebar-widget-category">
                    <ul>
                      {categories.map((cat, i) => (
                        <li key={i}>
                          <a href="#!">
                            <i className="fas fa-angle-right"></i> {cat.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Location */}
                <div className="single-sidebar-widget">
                  <h5 className="widget-title">Location</h5>
                  <div className="single-sidebar-widget-location">
                    <ul>
                      {locations.map((loc, i) => (
                        <li key={i}>
                          <a href="#!">
                            <i className="fas fa-angle-right"></i> {loc.name}
                          </a>
                        </li>
                      ))}
                    </ul>
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
    </>
  );
};

export default ListingDetailsPage;
