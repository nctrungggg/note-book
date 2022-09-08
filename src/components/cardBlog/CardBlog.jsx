import React from "react";
import CardContent from "../cardContent/CardContent";
import CardImage from "../cardImage/CardImage";
import "./CardBlog.scss";

CardBlog.propTypes = {};

function CardBlog({ item }) {
  const { category, title, content, img } = item;

  return (
    <section className="card-blog">
      <div className="card-blog-img">
        <CardImage category={category} img={img} />
      </div>

      <CardContent title={title} content={content} color="gray-color" />
    </section>
  );
}

export default CardBlog;
