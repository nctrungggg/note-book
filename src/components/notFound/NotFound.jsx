import React from "react";
import PropTypes from "prop-types";
import Img from "../img/Img";
import img404 from "../../assets/imgs/404.png";

NotFound.propTypes = {};

function NotFound(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <Img img={img404} />
    </div>
  );
}

export default NotFound;
