import React from "react";
import PropTypes from "prop-types";
import search from "../../../assets/icons/search.svg";
import "./Search.scss";

Search.propTypes = {};

function Search(props) {
  return (
    <div className="search">
      <img src={search} alt="" />
    </div>
  );
}

export default Search;
