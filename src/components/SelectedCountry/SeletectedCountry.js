import React, { Component } from "react";
import GrapesCard from "../Card/GrapesCard";

class SelectedCountry extends Component {
  render() {
    console.log(this.props);
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <h1>{this.props.match.params.name}</h1>
        {this.props.wines
          .filter((wine) => {
            return wine.region === this.props.match.params.name;
          })
          .map((wine) => (
            <GrapesCard {...wine} />
          ))}
      </div>
    );
  }
}

export default SelectedCountry;
