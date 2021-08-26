import "./searchBar.css";
import React, { useState, Component } from "react";


class Search extends Component {
  state = {
    input:''
  }
  handleSearch =(str) =>{
this.setState({
  input:str.target.value
})
this.props.filtered{this.state.input} /** Essa parte esta travada */
  }
  render(){
    <div>
      <input
      type='text'
      placeholder='search...'
      value={this.state.input}
      onChange={this.handleSearch}


      
      />
    </div>



    return
  }
}
export default Search;
