import "./App.css";
import { Items, TotalPrice, AddNewItem } from "./Components/components";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [products, setProducts] = useState([
    {
      id: nanoid(),
      product: "Bananas",
      price: 0.5,
      amount: 0,
    },
    {
      id: nanoid(),
      product: "Apples",
      price: 0.6,
      amount: 0,
    },
    {
      id: nanoid(),
      product: "Avocados",
      price: 1.9,
      amount: 0,
    },
  ]);

  const newProductsAmount = (index, newAmount) => {
    const newProduct = [...products];
    newProduct[index] = { ...newProduct[index], amount: newAmount };
    setProducts(newProduct);
  };

  const setTotalPrice = () => {
    const newTotals = products.map((product) => {
      return product.price * product.amount;
    });
    const sum = newTotals.reduce((a, b) => a + b, 0);
    return sum;
  };

  function newRest() {
    let rest = 30;
    rest -= setTotalPrice();
    return rest;
  }

  function deleteProduct(id) {
    let newProduct = products.filter((product) => {
      return product.id !== id;
    });

    setProducts(newProduct);
  }

  function addNewProduct(newProduct) {
    const newItem = [
      ...products,
      {
        id: nanoid(),
        product: newProduct[0],
        price: newProduct[1],
        amount: 0,
      },
    ];
    setProducts(newItem);
  }

  return (
    <div className="App">
      <header>
        <h1>Shopping-Cart</h1>
        <TotalPrice sum={setTotalPrice} />
        <TotalPrice sum={newRest} />
      </header>
      <AddNewItem addNewProduct={addNewProduct} />
      {products.map((product, index) => {
        return (
          <Items
            key={product.id}
            product={product}
            rest={newRest}
            deleteProduct={deleteProduct}
            setNewAmount={(newAmount) => newProductsAmount(index, newAmount)}
          />
        );
      })}
    </div>
  );
}

export default App;
