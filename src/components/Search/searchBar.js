import "./searchBar.css";
import React, { useState } from "react";

const Search = (props) => {

const[search, setSearch] = useState("")


function handleSearch(event){
setSearch(event.target.value);

}
  return (
    <div className="SearchBar">
     <form action="">
        <input type="text" name="search" id="search" onChange={handleSearch}/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
