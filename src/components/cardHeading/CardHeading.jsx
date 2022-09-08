import React from "react";
import Category from "../core/category/Category";
import DateTime from "../core/dateTime/DateTime";
import Heading from "../core/heading/Heading";
import Text from "../core/text/Text";
import "./CardHeading.scss";

CardHeading.propTypes = {};

function CardHeading({ category }) {
  return (
    <div className="blog-card">
      <div className="blog-card-cate">
        <Category>{category}</Category>
      </div>

      <div className="blog-card-heading">
        <Heading className="white-color title">
          Richird Norton photorealistic rendering as real photos
        </Heading>
      </div>

      <Text className="gray-text-color">
        <div className="blog-card__sub-title">
          <DateTime></DateTime>
          <div className="blog-card__line"></div>
          <p>
            Progressively incentivize cooperative systems through technically
            sound functionalities. The credibly productivate seamless data.
          </p>
        </div>
      </Text>
    </div>
  );
}

export default CardHeading;
