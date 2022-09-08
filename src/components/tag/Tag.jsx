import React from "react";
import "./TagItem.scss";
Tag.propTypes = {};

function Tag({ item, children }) {
  return <span className="tagItem"> {children || item.title} </span>;
}

export default Tag;
