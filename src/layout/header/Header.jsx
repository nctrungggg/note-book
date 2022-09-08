import React, { useEffect, useRef, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import NavbarMobile from "../../components/navbar/NavbarMobile";
import Search from "../../components/search/Search";
import Social from "../../components/social/Social";
import "./Header.scss";
Header.propTypes = {};

function Header(props) {
  const headerRef = useRef(null);
  const [nav, setNav] = useState(false);

  const handleClickIcon = () => setNav(!nav);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      // let n = window.scrollY;

      if (
        document.body.scrollTop > 120 ||
        document.documentElement.scrollTop > 120
      ) {
        headerRef.current?.classList.add("shrink");
        // headerRef.current.style.background = `rgba(0, 0, 0, ${n / 2500})`;
      } else {
        headerRef.current?.classList.remove("shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="container header-wrap">
        <Logo />

        <div className="header-right">
          <Navbar />
          <div className="header-line"></div>
          <Social />
          <div className="header-line"></div>
          <Search />
        </div>

        <div onClick={handleClickIcon} className=" header-icon">
          {!nav ? <HiOutlineMenu /> : <MdOutlineClose />}
        </div>

        <div
          className={
            !nav
              ? " header-menu-mobile  invisible "
              : "header-menu-mobile visible "
          }
        >
          <NavbarMobile onClick={handleClickIcon} />
        </div>
      </div>
    </div>
  );
}

export default Header;
