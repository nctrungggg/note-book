import React from "react";
import "./Text.scss";

Text.propTypes = {};

function Text({ className, children }) {
  return <div className={`${className} text`}>{children}</div>;
}

export default Text;
