import React from "react";
import PropTypes from "prop-types";
import DateTime from "../dateTime/DateTime";
import Heading from "../heading/Heading";
import Text from "../text/Text";
import "./CardContent.scss";

CardContent.propTypes = {};

function CardContent({ title, content, color }) {
  return (
    <div className="card-content">
      <div className="card-content-date">
        <DateTime />
      </div>

      <div>
        <div className="card-content-heading">
          {" "}
          <Heading className={`${color} sub-title`}>{title}</Heading>
        </div>

        <Text className="gray-txt-color">{content}</Text>
      </div>
    </div>
  );
}

export default CardContent;
