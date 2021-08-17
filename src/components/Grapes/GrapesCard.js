import "./GrapesCards.css";
import React from "react";
const GrapesCard = (props) => {
    return (
      <div className = "GrapesCards">
        <img src={props.image}/>
        <h3>{props.name}</h3>
        <h2>{props.winery}</h2>
        <h2>{props.year}</h2>
        <h2>{props.grape}</h2>
        <h2>{props.region}</h2>
        <h2>{props.alcohol}</h2>
        <h2>{props.rate}</h2>
        <h2>{props.parings}</h2>
        <bottom>Adicionar aos favoritos</bottom>

      </div>
    );
  };
  
  export default GrapesCard;
  