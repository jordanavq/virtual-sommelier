import React, { Component } from "react";
import GrapesCard from "../Card/GrapesCard";
import Search from "../Search/searchBar";

class WineList extends Component {
  render() {
    return (
      <>
        <h1>All Wines</h1>
        <Search
          filtered={this.props.filterWine}
          filteredWine={this.props.filtered}
        />
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
