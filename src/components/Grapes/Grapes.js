import React from "react";
import "./Grapes.css";
import { NavLink } from "react-router-dom";

const Grapes = ({ grapes }) => {
  const grapesList = [...new Set(grapes)];
  console.log(grapesList);

  return (
    <div>
      <h1>Search by Grapes</h1>
      <div className="d-grid gap-3 col-1 mx-auto">
        {grapesList.map((grape) => {
          return (
            <NavLink to={`/grapes/${grape}`}>
              <button
                type="button"
                className="btn btn-outline-dangerbtn btn-outline-danger"
              >
                {grape}
              </button>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Grapes;
