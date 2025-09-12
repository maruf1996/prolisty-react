import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoaded(true), 600);
    };

    window.addEventListener("load", handleLoad);

    const fallback = setTimeout(() => setLoaded(true), 3000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      id="preloader"
      className={`preloader ${loaded ? "loaded d-none" : ""}`}
    >
      <div className="animation-preloader">
        <div className="txt-loading">
          <span data-text-preloader="P" className="letters-loading">
            P
          </span>
          <span data-text-preloader="R" className="letters-loading">
            R
          </span>
          <span data-text-preloader="O" className="letters-loading">
            O
          </span>
          <span data-text-preloader="L" className="letters-loading">
            L
          </span>
          <span data-text-preloader="I" className="letters-loading">
            I
          </span>
          <span data-text-preloader="S" className="letters-loading">
            S
          </span>
          <span data-text-preloader="T" className="letters-loading">
            T
          </span>
          <span data-text-preloader="Y" className="letters-loading">
            Y
          </span>
        </div>
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
