import "./GrapesCard.css";
import React from "react";

const GrapesCard = (props) => {
  return (
    <div className="GrapesCards">
      <img src={props.image} alt={`${props.name} bottle`} />

      <h3>{props.name}</h3>
      <div className="info">
        <h2>Winery: {props.winery}</h2>
        <h2>Year: {props.year}</h2>
        <h2>Grape: {props.grape}</h2>
        <h2>Country: {props.region}</h2>
        <h2>Alcohol-Content: {props["alcohol-content"]}</h2>
        <h2>Rate: {props.rate}</h2>
        <h2>Parings: {props.parings.join(", ")}</h2>
      </div>
    </div>
  );
};

export default GrapesCard;
