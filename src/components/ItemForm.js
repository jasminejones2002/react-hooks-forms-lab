import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")
  const [items, setItems] = useState([])

  function addItemName(event) {
    setItemName(event.target.value)
  }

  function addItemCategory(event) {
    setItemCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,     
    }
    onItemFormSubmit(newItem)
    setItemName("")
    setItemCategory("")
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={addItemName}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={addItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
