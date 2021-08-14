import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <img src="../images/logo.jpeg" alt="logo" />
      <Link to="/countries">Countries</Link>
      <Link to="grapes">Grapes</Link>
    </nav>
  );
};

export default Header;
