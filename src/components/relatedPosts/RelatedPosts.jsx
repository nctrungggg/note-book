import React from "react";
import dataCardBlog from "../../data/dataCardBlog";
import CardBlog from "../cardBlog/CardBlog";
import CardContent from "../cardContent/CardContent";
import CardImage from "../cardImage/CardImage";
import Heading from "../core/heading/Heading";
import "./RelatedPosts.scss";

RelatedPosts.propTypes = {};

function RelatedPosts({ heading }) {
  return (
    <div className="ralated container">
      <Heading className="gray-color sub-title">{heading}</Heading>

      <ul className="ralated-card">
        {dataCardBlog.slice(8).map((item) => {
          const { category, img, title, content } = item;

          return (
            <li key={item.id} className="ralated-card-img">
              <CardImage category={category} img={img} />

              <div className="ralated-card-content">
                <CardContent
                  title={title}
                  content={content}
                  color="white-color"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RelatedPosts;
