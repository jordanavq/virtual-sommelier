import "./searchBar.css";
import React, { useState } from "react";
import searchResult from "./searchResult"
const Search = (props) => {

const[query, setSearch] = useState("")


function handleSearch(event){
setSearch(event.target.value);

}
  return (
    <div className="SearchBar">
     <form action="">
        <input type="text" name="query" id="query" onChange={handleSearch}/>
        <searchResult/>


        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
