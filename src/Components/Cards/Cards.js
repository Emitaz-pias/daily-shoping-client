import React from "react";

const Cards = (props) => {
  console.log(props.product);
  const { productName, price, quantity, productImage } = props.product;
  return (
    <div>
      <img className="w-25" src={productImage}></img>
      <h1>{productName}</h1>
      <h2>{quantity}</h2>
      <h2>{price}</h2>
    </div>
  );
};

export default Cards;
