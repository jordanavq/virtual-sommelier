import React from "react";
import "./Countries.css";

const Countries = () => {
  return (
    <div>
      <h1>Search by Countries</h1>
      <ul className="d-flex justify-content-around">
        <li>
          <button type="button" className="btn btn-outline-danger">
            Cabernet Sauvignon
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-outline-danger">
            Chardonnay
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-outline-danger">
            Malbec
          </button>
        </li>
      </ul>
      <ul className="d-flex justify-content-around">
        <li>
          <button type="button" className="btn btn-outline-danger">
            Merlot
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-outline-danger">
            Primitivo
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-outline-danger">
            Pinot Noir
          </button>
        </li>
      </ul>
      <ul className="d-flex justify-content-around">
        <li>
          <button type="button" className="btn btn-outline-danger">
            Sauvignon Blanc
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-outline-danger">
            Shiraz
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-outline-danger">
            Tempranillo
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Countries;
