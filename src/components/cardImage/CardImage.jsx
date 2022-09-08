import React from "react";
import Category from "../core/category/Category";
import Img from "../core/img/Img";
import "./CardImage.scss";

CardImage.propTypes = {};

function CardImage({ img, category }) {
  return (
    <div className="card-img">
      <div className="card-img-overlay"></div>
      <Img img={img} />

      <div className="card-img-cate">
        <Category>{category}</Category>
      </div>
    </div>
  );
}

export default CardImage;
