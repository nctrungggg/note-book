import React from "react";
import navbarList from "../../data/navbarList";
import Social from "../social/Social";
import NavbarItem from "./NavbarItem";
import "./NavbarMobile.scss";

NavbarMobile.propTypes = {};

function NavbarMobile({ onClick }) {
  return (
    <ul className=" navbar-mobile ">
      {navbarList.map((item) => (
        <li key={item.id} onClick={onClick}>
          <NavbarItem item={item} />
        </li>
      ))}

      <div className="navbar-mobile-social">
        <Social />
      </div>
    </ul>
  );
}

export default NavbarMobile;
