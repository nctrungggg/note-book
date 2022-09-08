import React from "react";
import PropTypes from "prop-types";

SocialItem.propTypes = {};

function SocialItem({ item }) {
  return (
    <>
      <img src={item.icon} alt="  " />
    </>
  );
}

export default SocialItem;
