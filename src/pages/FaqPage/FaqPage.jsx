import React from "react";
import Breadcumb from "../../component/Breadcumb/Breadcumb";
import faqImg from "/images/faq/faq-thumb1.jpg";

const FaqPage = () => {
  return (
    <div>
      <Breadcumb title="faq"></Breadcumb>
      <div className="faq1 fix section-padding">
        <div className="container">
          <div className="row gx-60 align-items-center">
            <div className="col-lg-6">
              <div className="faq1-card">
                <div className="accordion" id="accordionExample">
                  <div className="global-accordion-item">
                    <div className="global-accordion-header">
                      <div
                        className="global-accordion-button"
                        data-bs-toggle="collapse"
                        role="group"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <div className="question">
                          How can I create a listing on your website?
                        </div>
                        <span className="icon">
                          <i className="fa-solid fa-plus"></i>
                        </span>
                        <span className="icon2">
                          <i className="fa-solid fa-minus"></i>
                        </span>
                      </div>
                    </div>
                    <div
                      id="collapseOne"
                      className="global-accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="global-accordion-body">
                        <p>
                          You can create a listing by signing up for an account,
                          navigating to the "Add Listing" section, and filling
                          out the required information, such as business name,
                          description, and contact details.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="global-accordion-item">
                    <div className="global-accordion-header">
                      <div
                        className="global-accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="group"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        <div className="question">
                          Is there a fee to list my business?
                        </div>
                        <span className="icon">
                          <i className="fa-solid fa-plus"></i>
                        </span>
                        <span className="icon2">
                          <i className="fa-solid fa-minus"></i>
                        </span>
                      </div>
                    </div>
                    <div
                      id="collapseTwo"
                      className="global-accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="global-accordion-body">
                        <p>
                          We offer both free and premium listing options. Free
                          listings provide basic features, while premium
                          listings include additional benefits like higher
                          visibility and enhanced customization.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="global-accordion-item mb-0">
                    <div className="global-accordion-header">
                      <div
                        className="global-accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="group"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        <div className="question">
                          How do I edit or update my existing listing?
                        </div>
                        <span className="icon">
                          <i className="fa-solid fa-plus"></i>
                        </span>
                        <span className="icon2">
                          <i className="fa-solid fa-minus"></i>
                        </span>
                      </div>
                    </div>
                    <div
                      id="collapseThree"
                      className="global-accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="global-accordion-body">
                        <p>
                          Log in to your account, go to the "My Listings"
                          section, select the listing you want to update, and
                          click on the "Edit" button to make changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq1-thumb img-custom-anim-right">
                <img src={faqImg} alt="thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
