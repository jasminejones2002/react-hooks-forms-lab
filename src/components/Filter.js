import React, { useState } from "react";

function Filter({ search, onSearchChange }) {
  const [searchText, setSearchText] = useState(search)

  function handleSearch(event) {
    const newSearchText = event.target.value
    setSearchText(newSearchText)
    onSearchChange(newSearchText)
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search" 
        placeholder="Search..." 
        value={searchText} 
        onChange={handleSearch}
       />
      <select name="filter" onChange={onSearchChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
