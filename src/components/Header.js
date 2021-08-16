import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = (props) => {
  return (
    <nav
      style={{ backgroundColor: "#911d47" }}
      className="navbar align-items-center   fs-5 text fw-bold "
    >
      <Link exact to="/">
        <img
          className="logo-navbar"
          src="../images/logo.jpeg"
          alt="logo"
          style={{ marginLeft: "20px" }}
        />
      </Link>
      {props.active ? (
        <>
          <Link to="/countries" style={{ marginLeft: "220px" }}>
            Countries
          </Link>

          <Link to="/grapes" style={{ marginRight: "200px" }}>
            Grapes
          </Link>
        </>
      ) : null}
    </nav>
  );
};

export default Header;
