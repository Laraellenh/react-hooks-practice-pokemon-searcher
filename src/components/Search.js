import React from "react";

function Search({searchTerm, setSearchTerm}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        onChange={(e)=> setSearchTerm(e.target.value)}
        className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
