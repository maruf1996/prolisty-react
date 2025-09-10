import React from "react";
import Breadcumb from "../../component/Breadcumb/Breadcumb";
import RegisterImg from "/images/register/register.jpg";

const RegisterPage = () => {
  return (
    <div>
      <Breadcumb title="Register"></Breadcumb>
      <section className="register-section fix section-padding">
        <div className="container">
          <div className="register-wrapper">
            <div className="row gx-5">
              <div className="col-xl-6 offset-xl-0 col-md-8 offset-md-2">
                <div className="contact-info-area">
                  <div className="contact-content">
                    <h2 className="contact-content__title">Get Register Now</h2>
                    <p className="contact-content__subtitle">
                      Enter your Credentials to access your account
                    </p>

                    <form
                      action="contact.php"
                      id="contact-form"
                      method="POST"
                      className="contact-form-items"
                    >
                      <div className="row g-4">
                        <div className="col-lg-12">
                          <div className="form-clt">
                            <span>Your name*</span>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-clt">
                            <span>Email address*</span>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-clt">
                            <span>Password*</span>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              placeholder="********"
                            />
                          </div>
                        </div>

                        <div className="form-check">
                          <input
                            id="reviewcheck"
                            name="reviewcheck"
                            type="checkbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="reviewcheck"
                          >
                            I agree to the <span>terms & policy</span>
                          </label>
                        </div>

                        <div className="col-lg-12">
                          <button type="submit" className="theme-btn style1">
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 offset-xl-0 col-md-8 offset-md-2">
                <div className="register-thumb">
                  <img src={RegisterImg} alt="register-thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
