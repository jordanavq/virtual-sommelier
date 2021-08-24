import React, { Component } from "react";
import GrapesCard from "../Card/GrapesCard";

class WineList extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <h1>All Wines</h1>
        {this.props.wines.map((wine) => (
          <GrapesCard {...wine} />
        ))}
      </div>
    );
  }
}

export default WineList;
