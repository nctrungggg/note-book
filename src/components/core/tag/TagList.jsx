import React from "react";
import popularList from "../../../data/popularList";
import TagItem from "./Tag";
import "./TagList.scss";

TagList.propTypes = {};

function TagList(props) {
  return (
    <ul className=" tagList">
      {popularList.map((item) => (
        <li key={item.id}>
          <TagItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default TagList;
