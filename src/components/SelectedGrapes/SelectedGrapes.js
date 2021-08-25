import React, { Component } from "react";
import GrapesCard from "../Card/GrapesCard";

class SelectedGrapes extends Component {
  render() {
    return (
      <>
        <h1>{this.props.match.params.name}</h1>
        <div className="row">
          {this.props.wines
            .filter((wine) => {
              return wine.grape === this.props.match.params.name;
            })
            .map((wine) => (
              <div className="col-3">
                <GrapesCard {...wine} />
              </div>
            ))}
        </div>
      </>
    );
  }
}

export default SelectedGrapes;
