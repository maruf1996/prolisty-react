import { useState } from "react";
import subTitleShape from "/images/about/sub-title-shape.png";
import Select from "react-select";

const ContactOne = () => {
  const [location, setLocation] = useState(null);

  const locationOptions = [
    { value: "", label: "Select Location type" },
    { value: "german", label: "German" },
    { value: "italy", label: "Italy" },
    { value: "newyork", label: "New York" },
  ];

  return (
    <section className="contact1 section-padding fix">
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center mb-60">
          <h6 className="section-title__subtitle">
            Contact Us
            <span className="shape">
              <img src={subTitleShape} alt="shape" loading="lazy" />
            </span>
          </h6>
          <h2 className="section-title__title">Get in touch</h2>
        </div>

        <div className="row gx-0 align-items-center">
          {/* Map */}
          <div className="col-lg-6">
            <div className="contact1__map-items">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                className="border-0"
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="contact1-content img-custom-anim-right">
              <form
                id="contact-form"
                method="POST"
                className="content-form-items"
              >
                <div className="row g-4">
                  {/* Full Name */}
                  <div className="col-lg-6">
                    <div className="contact-area form-group">
                      <label htmlFor="fullName" className="form-label">
                        Full name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="What's your name?"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-lg-6">
                    <div className="contact-area form-group">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="What's your email address?"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-lg-6 ">
                    <div className="contact-area form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="What's your phone number?"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="col-lg-6">
                    <div className="contact-area form-group">
                      <label htmlFor="location" className="form-label">
                        Location
                      </label>
                      <Select
                        options={locationOptions}
                        placeholder="Select Location type"
                        value={location}
                        onChange={setLocation}
                        classNamePrefix="custom-select"
                        className="single-select"
                        isSearchable={false}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="col-lg-12">
                    <div className="contact-area contact-message form-group">
                      <label htmlFor="message" className="form-label">
                        Your message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="5"
                        placeholder="Write a message here ..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Button + Social */}
                  <div className="col-lg-7">
                    <div className="contact1__button-wrapper">
                      <button type="submit" className="theme-btn style1">
                        Get Started
                      </button>
                      <ul className="social-link">
                        <li>
                          <a href="#!">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOne;
