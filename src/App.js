import "./App.css";
import { Items, TotalPrice, AddNewItem } from "./Components/components";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [products, setProducts] = useState(() => {
    const localStoredItems = localStorage.getItem("products");
    if (localStoredItems) {
      return JSON.parse(localStoredItems);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const newProductsAmount = (id, newAmount) => {
    const newProduct = products.map((product) => {
      if (product.id === id) {
        return { ...product, amount: newAmount };
      } else {
        return product;
      }
    });
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
      {products.map((product) => {
        return (
          <Items
            key={product.id}
            product={product}
            rest={newRest}
            deleteProduct={deleteProduct}
            setNewAmount={(newAmount) =>
              newProductsAmount(product.id, newAmount)
            }
          />
        );
      })}
    </div>
  );
}

export default App;
