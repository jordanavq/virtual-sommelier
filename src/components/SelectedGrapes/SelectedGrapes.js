import React, { Component } from "react";
import GrapesCard from "../Card/GrapesCard";

class SelectedGrapes extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <h1>{this.props.match.params.name}</h1>
        {this.props.wines
          .filter((wine) => {
            return wine.grape === this.props.match.params.name;
          })
          .map((wine) => (
            <GrapesCard {...wine} />
          ))}
      </div>
    );
  }
}

export default SelectedGrapes;
