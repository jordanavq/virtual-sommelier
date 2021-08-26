import React, { Component } from "react";
import GrapesCard from "../Card/GrapesCard";

class WineList extends Component {
  render() {
    return (
      <>
        <h1>All Wines</h1>
        <div className="row">
          {this.props.wines.map((wine) => (
            <div className="col-3">
              <GrapesCard {...wine} />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default WineList;
