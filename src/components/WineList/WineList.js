import React, { Component } from "react";
import GrapesCard from "../Card/GrapesCard";
import Search from "../Search/searchBar";

class WineList extends Component {
  state = {
    searching: false,
  };

  handleSearch = (input) => {
    input.length
      ? this.setState({ searching: true })
      : this.setState({ searching: false });
  };

  render() {
    console.log(this.props.filtered);
    return (
      <>
        <h1>All Wines</h1>

        <Search
          filtered={this.props.filterWine}
          filteredWine={this.props.filtered}
          handleSearch={this.handleSearch}
        />
        {!this.state.searching ? (
          <div className="row">
            {this.props.wines.map((wine) => (
              <div className="col-3">
                <GrapesCard {...wine} />
              </div>
            ))}
          </div>
        ) : null}
      </>
    );
  }
}

export default WineList;
