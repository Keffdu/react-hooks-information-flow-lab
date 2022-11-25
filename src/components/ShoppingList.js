import React, { useState } from "react";
// import Item from "./Item";
import Filter from "./filter"

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

}

export default ShoppingList;
