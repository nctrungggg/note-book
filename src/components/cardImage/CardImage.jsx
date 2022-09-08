import React from "react";
import Category from "../category/Category";
import Img from "../img/Img";

CardImage.propTypes = {};

function CardImage({ img, category }) {
  return (
    <>
      <Img img={img} />

      <div className="card-blog-cate">
        <Category>{category}</Category>
      </div>
    </>
  );
}

export default CardImage;
