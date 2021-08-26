import "./searchBar.css";
import React, { Component } from "react";
import GrapesCard from "../Card/GrapesCard"


class Search extends Component {
  state = {
    input: ''
  }
  handleSearch = (str) => {
    this.setState({
      input: str.target.value
    })

    this.props.filtered(this.state.input)
  }
  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='search...'
          value={this.state.input}
          onChange={this.handleSearch}



        />
        
        {this.state.input===''? null:this.props.filteredWine.map((wine)=> <GrapesCard {...wine}/>) }

              </div>


    )

  }
}
export default Search;
