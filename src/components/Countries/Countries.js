import React from "react";
import "./Countries.css";
import { NavLink } from "react-router-dom";

const Countries = ({ countries }) => {
  const countriesList = [...new Set(countries)];
  console.log(countriesList);

  return (
    <div>
      <h1>Search by Countries</h1>
      <ul className="list-group">
        {countriesList.map((country) => {
          return (
            <NavLink to={`/countries/${country}`}>
              <li>{country}</li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Countries;
