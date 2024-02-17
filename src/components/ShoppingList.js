import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [shoppingItems, setShoppingItems] = useState(items)
  const [searchText, setSearchText] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(newSearchText) {
    setSearchText(newSearchText)
  }

  const itemsToDisplay = shoppingItems.filter((item) => {
    const itemCategoryMatches = selectedCategory === "All" || item.category === selectedCategory;
    const itemTextMatches = item.name.toLowerCase().includes(searchText.toLowerCase());

    return itemCategoryMatches && itemTextMatches
  });

  function handleItemFormSubmit(newItem) {
    setShoppingItems([...shoppingItems, newItem])
  }


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
