import React, { Component } from "react";
import GrapesCard from "../Grapes/GrapesCard";

class WineList extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {this.props.wines.map((wine) => (
          <GrapesCard {...wine} />
        ))}
      </div>
    );
  }
}

export default WineList;
