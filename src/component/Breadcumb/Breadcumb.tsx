import { Link } from "react-router-dom";

type BreadcumbProps = {
  title?: string;
};

const Breadcumb = ({ title }: BreadcumbProps) => {
  return (
    <div className="breadcumb-section">
      <div className="breadcumb-wrapper background-image">
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
