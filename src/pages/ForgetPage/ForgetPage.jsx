import React from "react";
import Breadcumb from "../../component/Breadcumb/Breadcumb";
import GoogleIcon from "/images/icon/googleIcon.png";
import AppleIcon from "/images/icon/appleIcon.png";
import ForgetPassImg from "/images/forget-password/forget-pass.jpg";

const ForgetPage = () => {
  return (
    <div>
      <Breadcumb title="Forget Password" />
      <section className="forget-password-section fix section-padding">
        <div className="container">
          <div className="login-wrapper">
            <div className="row gx-5">
              <div className="col-xl-6 offset-xl-0 col-md-8 offset-md-2">
                <div className="contact-info-area">
                  <div className="contact-content">
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
                          <button type="submit" className="theme-btn style1">
                            Verify Email
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
                          <img src={GoogleIcon} alt="icon" />
                          <p>Sign in with Google</p>
                        </div>
                      </a>

                      <a href="#!">
                        <div className="button-items-1__apple-button">
                          <img src={AppleIcon} alt="icon" />
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
                  <img src={ForgetPassImg} alt="forget-pass-thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgetPage;
