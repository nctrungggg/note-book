import React from "react";
import navbarList from "../../data/navbarList";
import "./Navbar.scss";
import NavbarItem from "./NavbarItem";

Navbar.propTypes = {};

function Navbar(props) {
  return (
    <ul className=" navbar ">
      {navbarList.map((item) => (
        <li key={item.id}>
          <NavbarItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
