import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo4.png";

const Header = (props) => {
  return (
    <nav
      style={{ backgroundColor: "#911d47" }}
      className="navbar align-items-center   fs-5 text fw-bold "
    >
      <Link exact to="/">
        <img
          className="logo-navbar"
          src={logo}
          alt="logo"
          style={{ marginLeft: "10px" }}
        />
      </Link>

      <>
        <Link to="/wines">Wines</Link>
        <Link to="/grapes">Grapes</Link>

        <Link to="/countries" style={{ marginRight: "210px" }}>
          Countries
        </Link>
      </>
    </nav>
  );
};

export default Header;
