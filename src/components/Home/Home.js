import React from "react";
import "./Home.css";
import grapesimage from "../../images/grapesImage.jpg";
import regionimage from "../../images/regionImage.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1> Virtual Sommelier</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <Link to="/grapes">
              <img src={grapesimage} className="card-img-top" alt="grapes" />
            </Link>
            <div className="card-body">
              <h5 className="card-title">Grapes</h5>
              <p className="card-text">Find wine by your favorite grape</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <Link to="/countries">
              <img src={regionimage} className="card-img-top" alt="winery" />
            </Link>
            <div className="card-body">
              <h5 className="card-title">Countries</h5>
              <p className="card-text">Find wine from your favorite country</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
