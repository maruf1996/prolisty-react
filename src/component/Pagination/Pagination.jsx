import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ title }) => {
  return (
    <div className="col-12">
      <div
        className={`page-nav-wrap text-center ${
          title === "extra-class" ? "mt-3" : ""
        }`}
      >
        <ul>
          <li>
            <Link className="previous" to="#">
              <i className="fa-sharp fa-light fa-arrow-left-long"></i>
            </Link>
          </li>
          <li>
            <Link className="page-numbers" to="#">
              1
            </Link>
          </li>
          <li>
            <Link className="page-numbers active" to="#">
              2
            </Link>
          </li>
          <li>
            <Link className="page-numbers" to="#">
              3
            </Link>
          </li>
          <li>
            <Link className="page-numbers" to="#">
              ...
            </Link>
          </li>
          <li>
            <Link className="next" to="#">
              <i className="fa-sharp fa-light fa-arrow-right-long"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
