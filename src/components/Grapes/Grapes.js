import React from "react";
import "./Grapes.css";
import { NavLink } from "react-router-dom";

const Grapes = ({ grapes }) => {
  const grapesList = [...new Set(grapes)];
  console.log(grapesList);

  return (
    <div>
      <h1>Search by Grapes</h1>
      <div className="row">
        {grapesList.map((grape) => {
          return (
            <NavLink
              className="col-4 d-flex justify-content-center text-decoration-none"
              to={`/grapes/${grape}`}
            >
              <button
                type="button"
                className="btn btn-outline-danger w-50 my-3"
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
