import React from "react";

const TotalPrice = ({ sum }) => {
  const totalPrice = sum();
  return <p>{`Total: ${totalPrice}$`}</p>;
};

export default TotalPrice;
