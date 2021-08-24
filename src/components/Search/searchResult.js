import React, { Component } from "react";
import GrapesCard from "../Card/GrapesCard";
import Search from"./searchBar"

class searchResult extends Component {
    render() {
      return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.props.wines.map((Search) => (
            <GrapesCard {...Search} />
          ))}
        </div>
      );
    }
  }

export default searchResult;
