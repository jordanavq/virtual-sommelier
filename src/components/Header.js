import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.jpeg";

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
          style={{ marginLeft: "20px" }}
        />
      </Link>
      {props.active ? (
        <>
          <Link to="/grapes" style={{ marginLeft: "220px" }}>
            Grapes
          </Link>

          <Link to="/countries" style={{ marginRight: "200px" }}>
            Countries
          </Link>
        </>
      ) : null}
    </nav>
  );
};

export default Header;
