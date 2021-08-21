import "./GrapesCard.css";
import React from "react";

const GrapesCard = (props) => {
  return (
    <div className="GrapesCards">
      <img src={props.image} alt={`${props.name} bottle`} />

      <h3>{props.name}</h3>
      <h2>{props.winery}</h2>
      <h2>{props.year}</h2>
      <h2>{props.grape}</h2>
      <h2>{props.region}</h2>
      <h2>{props["alcohol-content"]}</h2>
      <h2>{props.rate}</h2>
      <h2>{props.parings}</h2>
      <button>Add to favorites wine</button>
    </div>
  );
};

export default GrapesCard;
