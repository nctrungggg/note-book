import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarItem.scss";

NavbarItem.propTypes = {};

function NavbarItem({ item }) {
  return (
    <NavLink
      to={item.to}
      smooth="true"
      className="navbar__item"
      duration={500}
      onClick={() => (document.documentElement.scrollTop = 0)}
    >
      {item.title}
    </NavLink>
  );
}

export default NavbarItem;
