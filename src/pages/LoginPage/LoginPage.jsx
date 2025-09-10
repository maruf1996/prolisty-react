import React from "react";
import Breadcumb from "../../component/Breadcumb/Breadcumb";
import loginImg from "/images/login/login.jpg";
import googleIcon from "/images/icon/googleIcon.png";
import appleIcon from "/images/icon/appleIcon.png";

const LoginPage = () => {
  return (
    <div>
      <Breadcumb title="Login"></Breadcumb>
      <section className="login-section fix section-padding">
        <div className="container">
          <div className="login-wrapper">
            <div className="row gx-5">
              <div className="col-xl-6 offset-xl-0 col-md-8 offset-md-2">
                <div className="contact-info-area">
                  <div className="contact-content">
                    <h2 className="contact-content__title">Get Started Now</h2>
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
                            Sign In
                          </button>
                        </div>
                      </div>
                    </form>

                    <div className="or-border">
                      <div className="border"></div>
                      <p>Or</p>
                    </div>

                    <div className="button-items-1">
                      <a href="#!">
                        <div className="button-items-1__google-button">
                          <img src={googleIcon} alt="icon" />
                          <p>Sign in with Google</p>
                        </div>
                      </a>

                      <a href="#!">
                        <div className="button-items-1__apple-button">
                          <img src={appleIcon} alt="icon" />
                          <p>Sign in with Apple</p>
                        </div>
                      </a>
                    </div>

                    <h5 className="contact-content__logtitle center">
                      Don't Have an account? <a href="register.html">Sign Up</a>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 offset-xl-0 col-md-8 offset-md-2">
                <div className="login-thumb">
                  <img src={loginImg} alt="register-thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
