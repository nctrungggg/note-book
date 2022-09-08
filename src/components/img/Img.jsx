import React from "react";

Img.propTypes = {};

function Img({ img }) {
  return <img src={img} alt="img" style={{ borderRadius: "5px" }}></img>;
}

export default Img;
