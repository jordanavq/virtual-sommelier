import React from "react";
import "./Grapes.css";
import { NavLink } from "react-router-dom";

const Grapes = ({ grapes }) => {
  const grapesList = [...new Set(grapes)];
  console.log(grapesList);

  return (
    <div>
      <h1>Search by Grapes</h1>
      <ul className="list-group">
        {grapesList.map(([grape]) => {
          return (
            <NavLink to={`/grapes/:${grape}`}>
              <li>{grape}</li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Grapes;
