import React from "react";
import "./Home.css";
import grapesimage from "../../images/grapesImage.jpg";
import regionimage from "../../images/regionImage.jpg";

const Home = () => {
  return (
    <div>
      <h1> Virtual Sommelier</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img
              src={grapesimage}
              className="card-img-top"
              alt="grapes image"
            />
            <div className="card-body">
              <h5 className="card-title">Grapes</h5>
              <p className="card-text">Find wine by your favorite grape</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src={regionimage}
              className="card-img-top"
              alt="winery image"
            />
            <div className="card-body">
              <h5 className="card-title">Countries</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
