import React from "react";
import CardHeading from "../cardHeading/CardHeading";
import "./BigPost.scss";

BigPost.propTypes = {};

function BigPost(props) {
  return (
    <div className="big-post">
      <div className="big-post-card">
        <CardHeading category="FASHION" />
      </div>
    </div>
  );
}

export default BigPost;
