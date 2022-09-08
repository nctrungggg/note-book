import React from "react";
import "./Category.scss";

Category.propTypes = {};

function Category({ children }) {
  return (
    <div className="category">
      <p>{children}</p>
    </div>
  );
}

export default Category;
