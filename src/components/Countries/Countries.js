import React from "react";
import "./Countries.css";
import { NavLink } from "react-router-dom";

const Countries = ({ countries }) => {
  const countriesList = [...new Set(countries)];
  console.log(countriesList);

  return (
    <div>
      <h1>Search by Countries</h1>
      <div className="row">
        {countriesList.map((country) => {
          return (
            <NavLink
              className="col-4 d-flex justify-content-center text-decoration-none"
              to={`/countries/${country}`}
            >
              <button
                type="button"
                className="btn btn-outline-danger w-50 my-3"
              >
                {country}
              </button>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
