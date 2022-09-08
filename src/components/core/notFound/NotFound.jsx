import React from "react";
import img404 from "../../../assets/imgs/404.png";
import Img from "../img/Img";

NotFound.propTypes = {};

function NotFound(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <Img img={img404} />
    </div>
  );
}

export default NotFound;
