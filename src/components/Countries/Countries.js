import React from "react";
import "./Countries.css";

const Countries = () => {
  return (
    <div>
      <h1>Search by Countries</h1>
      <ul className="d-flex justify-content-around">
        <li>
          <button type="button" className="btn btn-outline-danger">
            Argentina
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-outline-danger">
            Australia
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-outline-danger">
            Brazil
          </button>
        </li>
      </ul>
      <ul className="d-flex justify-content-around">
        <li>
          <button type="button" className="btn btn-outline-danger">
            Chile
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-outline-danger">
            France
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-outline-danger">
            Italy
          </button>
        </li>
      </ul>
      <ul className="d-flex justify-content-around">
        <li>
          <button type="button" className="btn btn-outline-danger">
            Portugal
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-outline-danger">
            Spain
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-outline-danger">
            South Africa
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Countries;
