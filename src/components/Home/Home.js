import React from "react";
import "./Home.css";
import grapesimage from "../../images/grapesImage.jpg";
import regionimage from "../../images/regionImage.jpg";
import Search from "../Search/searchBar"
import { Link } from "react-router-dom";
import CarouselHome from "./CarouselHome";

const Home = () => {
  return (
    <div>
      <h1> Virtual Sommelier</h1>
          
      <CarouselHome />
    </div>
  );
};

export default Home;
