import { React } from "react";
import "./Item.css";

const Items = ({ product, setNewAmount, rest, deleteProduct }) => {
  console.log(product.amount);
  return (
    <section className="items">
      <h1>{product.product}</h1>
      <p>{`${product.price}$ per piece`}</p>
      <button
        onClick={() => {
          if (rest() - product.price > 0) {
            setNewAmount(product.amount + 1);
          }
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          if (product.amount > 0) {
            setNewAmount(product.amount - 1);
          }
        }}
      >
        -
      </button>
      <p>amount: {product.amount}</p>
      <p>total: {(product.amount * product.price).toFixed(2)}</p>
      <button onClick={() => deleteProduct(product.id)}>X</button>
    </section>
  );
};

export default Items;
