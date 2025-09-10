import React from "react";
import { Link } from "react-router-dom";
import breadcumbBg from "/images/intro/breadcumb.jpg";

const Breadcumb = ({ title }) => {
  return (
    <div className="breadcumb-section">
      <div
        className="breadcumb-wrapper background-image"
        style={{ backgroundImage: `url(${breadcumbBg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcumb-content">
                <h1 className="breadcumb-title">{title}</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="text-white">/</li>
                  <li className="active">{title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcumb;
