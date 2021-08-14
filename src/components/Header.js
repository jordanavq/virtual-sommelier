import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav>
      <Link exact to="/">
        <img src="../images/logo.jpeg" alt="logo" />
      </Link>
      {props.active ? (
        <>
          <Link to="/countries">Countries</Link>
          <Link to="/grapes">Grapes</Link>
        </>
      ) : null}
    </nav>
  );
};

export default Header;
