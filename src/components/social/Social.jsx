import React from "react";
import iconList from "../../data/socialList";
import "./Social.scss";
import SocialItem from "./SocialItem";

function Social() {
  return (
    <>
      <ul className="social">
        {iconList.map((item) => (
          <li key={item.id}>
            <SocialItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Social;
