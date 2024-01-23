import React from "react";
import { Link } from "react-router-dom";
import './cart.css';
import { cartItems } from "./casual";

const Cart = () => {
  console.log(cartItems)

  if (!cartItems) {
    return (
      <div>
        <p>Cart information is not available.</p>
        <Link to="/Casual" className="back-link">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
    <body>
    <h2>CART</h2>
      <div className="con1">
      
    
         {cartItems.map((item) => (
     <div key={item.id} className="m1">
     <img src={item.image} alt={item.name} className="mmg"></img>
     </div>
  ))}
        
      </div>
      <Link to="/casual" className="back-link">
          Back to Home
        </Link>
      </body></>
  );
};
export default Cart;
