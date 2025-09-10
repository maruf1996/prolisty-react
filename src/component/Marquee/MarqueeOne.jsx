import React from "react";
import starIcon from "/images/icon/marquee-star.png";

const MarqueeOne = () => {
  return (
    <div className="marquee1 fix">
      <div className="marquee1-scrolling">
        <div className="marquee1-scrolling__item">
          <div className="marquee1-scrolling__item-icon">
            <img src={starIcon} alt="icon" />
          </div>
          <div className="marquee1-scrolling__item-text">Brand Craft</div>
          <div className="marquee1-scrolling__item-icon">
            <img src={starIcon} alt="icon" />
          </div>
          <div className="marquee1-scrolling__item-text-2">
            Perfect Solutions
          </div>
          <div className="marquee1-scrolling__item-icon">
            <img src={starIcon} alt="icon" />
          </div>
          <div className="marquee1-scrolling__item-text">Artistry Avenue</div>
          <div className="marquee1-scrolling__item-icon">
            <img src={starIcon} alt="icon" />
          </div>
          <div className="marquee1-scrolling__item-text-2">Brand Craft</div>
        </div>

        <div className="marquee1-scrolling__item">
          <div className="marquee1-scrolling__item-icon">
            <img src={starIcon} alt="icon" />
          </div>
          <div className="marquee1-scrolling__item-text">Perfect Solutions</div>
          <div className="marquee1-scrolling__item-icon">
            <img src={starIcon} alt="icon" />
          </div>
          <div className="marquee1-scrolling__item-text-2">Artistry Avenue</div>
          <div className="marquee1-scrolling__item-icon">
            <img src={starIcon} alt="icon" />
          </div>
          <div className="marquee1-scrolling__item-text">Brand Craft</div>
          <div className="marquee1-scrolling__item-icon">
            <img src={starIcon} alt="icon" />
          </div>
          <div className="marquee1-scrolling__item-text-2">
            Perfect Solutions
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeOne;
