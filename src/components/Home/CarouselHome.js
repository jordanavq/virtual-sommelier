import React from "react";
import Carousel from "react-bootstrap/Carousel";
import grapesImage from "../../images/grapesImage.jpg";
import regionImage from "../../images/regionImage.jpg";
import "./CarouselHome.css";
import { Link } from "react-router-dom";

const CarouselHome = () => {
  return (
    <div className="d-flex justify-content-center">
      <Carousel className="w-50">
        <Carousel.Item>
          <Link to="/grapes">
            <img
              className="d-block w-100 img-fluid"
              style={{ objectFit: "cover", height: "547px" }}
              src={grapesImage}
              alt="grapes"
            />
          </Link>
          <Carousel.Caption>
            <h3>Grapes</h3>
            <p>Find a wine of your favorite grape</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/countries">
            <img
              className="d-block w-100 img-fluid"
              src={regionImage}
              style={{ objectFit: "cover", height: "547px" }}
              alt="winery"
            />
          </Link>
          <Carousel.Caption>
            <h3>Countries</h3>
            <p>Find a wine from your favorite country</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
