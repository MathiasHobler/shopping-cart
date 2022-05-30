import { React, useState } from "react";
import "./AddNewItem.css";

const AddNewItem = ({ addNewProduct }) => {
  const [newProduct, setNewProduct] = useState(["", 0]);

  function setInputValue(index, value) {
    const newProductAdded = [...newProduct];
    newProductAdded[index] = value;
    setNewProduct(newProductAdded);
  }

  return (
    <form
      className="addNewItem"
      onSubmit={(event) => {
        event.preventDefault();
        addNewProduct(newProduct);
      }}
    >
      <h2>Add new Item</h2>
      <label className="addNewItem__label" htmlFor="addNewItem">
        Item:
      </label>
      <input
        className="addNewItem__label"
        id="addNewItem"
        type="text"
        onChange={(event) => setInputValue(0, event.target.value)}
      ></input>
      <label className="addNewItem__label" htmlFor="pricePerPiece">
        Price per piece:
      </label>
      <input
        className="addNewItem__label"
        id="pricePerPiece"
        type="text"
        onChange={(event) => setInputValue(1, event.target.value)}
      ></input>
      <button className="addNewItem__label" type="submit">
        Add item
      </button>
    </form>
  );
};

export default AddNewItem;
