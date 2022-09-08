import React from "react";
import "./Heading.scss";

Heading.propTypes = {};

function Heading({ children, className }) {
  return <h1 className={`${className} heading`}>{children}</h1>;
}

export default Heading;
