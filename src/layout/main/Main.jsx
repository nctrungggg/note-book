import React from "react";
import PropTypes from "prop-types";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

Main.propTypes = {};

function Main(props) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
