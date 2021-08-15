import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = (props) => {
  return (
    <nav
      style={{ backgroundColor: "#911d47" }}
      className="navbar align-items-center fs-5 text fw-bold "
    >
      <Link exact to="/">
        <img className="logo-navbar" src="../images/logo.jpeg" alt="logo" />
      </Link>
      {props.active ? (
        <>
          <ul className="nav justify-content-center">
            <Link to="/countries">Countries</Link>

            <Link to="/grapes">Grapes</Link>
          </ul>
        </>
      ) : null}
    </nav>
  );
};

export default Header;
