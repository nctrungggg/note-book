import React from "react";
import dataCardBlog from "../../data/dataCardBlog";
import CardBlog from "../cardBlog/CardBlog";
import Heading from "../core/heading/Heading";
import Tag from "../core/tag/Tag";
import TagList from "../core/tag/TagList";
import "./Popular.scss";

Popular.propTypes = {};

function Popular(props) {
  return (
    <div name="about" className="popular container  ">
      <Heading className="gray-color title">Popular topics</Heading>

      <div className="popular-menu">
        <TagList />
        <div className="popular-view">
          <Tag> View All</Tag>
        </div>
      </div>

      <ul className="popular-card">
        {dataCardBlog.map(
          (item, idx) =>
            idx < 8 && (
              <li key={item.id}>
                <CardBlog item={item} />
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default Popular;
