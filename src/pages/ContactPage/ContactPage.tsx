import Breadcumb from "../../component/Breadcumb/Breadcumb";

const ContactPage = () => {
  return (
    <div>
      <Breadcumb title="Contact" />
      {/* Contact Info */}
      <div className="contact-info section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-4 col-md-6">
              <div className="contact-info-item">
                <div className="contact-info-item__icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-info-item__content">
                  <p>Address</p>
                  <a href="#!">
                    <h4>2715 .San Dakota 83475</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info-item">
                <div className="contact-info-item__icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-info-item__content">
                  <p>E-mail</p>
                  <a href="mailto:sara.cruz@example.com">
                    <h4>sara.cruz@example.com</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info-item">
                <div className="contact-info-item__icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-info-item__content">
                  <p>Mobile</p>
                  <a href="tel:008175145177">
                    <h4>+0081751451771</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form section-padding pt-0">
        <div className="container">
          <div className="row d-flex justify-content-end">
            <div className="col-lg-6">
              <div className="contact6-input img-custom-anim-left">
                <h4 className="contact6-input__title">Get In Touch</h4>
                <form
                  action="contact.php"
                  id="contact-form"
                  method="POST"
                  className="contact6-input__form"
                >
                  <div className="row">
                    <div className="col-xl-6">
                      <input
                        className="contact6-input__form-control"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        className="contact6-input__form-control"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-xl-12">
                      <select
                        className="nice-select contact6-input__form-control"
                        id="validationDefault04"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Choose An Option
                        </option>
                        <option value="Tv">Tv</option>
                        <option value="Freeze">Freeze</option>
                        <option value="Rice Cooker">Rice Cooker</option>
                      </select>
                    </div>
                  </div>
                  <textarea
                    className="contact6-input__form-control"
                    name="message"
                    id="message"
                    placeholder="Message here.."
                  ></textarea>
                  <div className="contact6-input__btn">
                    <button className="theme-btn style1" type="submit">
                      Sent Now
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Map */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28821.965472924858!2d89.07524545!3d25.4467646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcb92fb4d9696d%3A0x74b18fed6b93e5e5!2sNobabgonj%20National%20garden!5e0!3m2!1sen!2sbd!4v1737219845253!5m2!1sen!2sbd"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
