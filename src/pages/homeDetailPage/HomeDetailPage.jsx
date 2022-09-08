import React from "react";
import BigPost from "../../components/bigPost/BigPost";
import ContentDetail from "../../components/contentDetail/ContentDetail";
import RelatedPosts from "../../components/relatedPosts/RelatedPosts";

HomeDetailPage.propTypes = {};

function HomeDetailPage(props) {
  return (
    <>
      <BigPost />
      <ContentDetail />

      <div
        style={{ background: " rgba(229, 229, 229, 0.3)", padding: "10rem 0" }}
      >
        <RelatedPosts heading="Related Posts" />
      </div>
    </>
  );
}

export default HomeDetailPage;
