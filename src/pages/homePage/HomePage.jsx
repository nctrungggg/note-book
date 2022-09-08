import React from "react";
import BigPost from "../../components/bigPost/BigPost";
import Popular from "../../components/popular/Popular";
import RelatedPosts from "../../components/relatedPosts/RelatedPosts";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <>
      <Popular />
      <BigPost />
      <div style={{ padding: "8rem 0" }}>
        <RelatedPosts heading="Editor’s Pick" />
      </div>
    </>
  );
}

export default HomePage;
