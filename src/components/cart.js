import React from "react";

export default function Cart(props) {
  return (
    <div className="container">
      <header>
        <h2>{props.category}</h2>
        <hr></hr>
      </header>
      <main className="cart-items-box">
        <div className="cart-item">
          <p>Name : {props.cosmeticdata[0].name} </p>
          <p>Price : {props.cosmeticdata[0].price}</p>

          <button
            onClick={() => {
              props.addtoCart(props.cosmeticdata[0]);
            }}
            className="btn"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              props.removefromCart(props.cosmeticdata[0]);
            }}
            className="btn"
          >
            Remove from Cart
          </button>
        </div>

        <div className="cart-item">
          <p>Name : {props.cosmeticdata[1].name} </p>
          <p>Price : {props.cosmeticdata[1].price}</p>

          <button
            onClick={() => {
              props.addtoCart(props.cosmeticdata[1]);
            }}
            className="btn"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              props.removefromCart(props.cosmeticdata[1]);
            }}
            className="btn"
          >
            Remove from Cart
          </button>
        </div>
      </main>
    </div>
  );
}
