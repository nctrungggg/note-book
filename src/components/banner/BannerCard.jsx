import React from "react";
import CardHeading from "../cardHeading/CardHeading";
import "./Banner.scss";

const BannerCard = ({ img }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${img})` }}>
      <div className="banner-overlay"></div>
      <div className="banner-card">
        <CardHeading category="ADVENTURE" />
      </div>
    </div>
  );
};

export default BannerCard;
