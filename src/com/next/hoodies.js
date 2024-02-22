import React, { useState } from "react";

import './casual.css'
import { Link } from "react-router-dom"
import { FaMagnifyingGlass } from "react-icons/fa6";
import cs1 from "./image/formal.jpg"
import cs2 from "./image/cs2.webp"
import black from './image/black.avif'
import cs3 from './image/cs-3.jpg'
import CartPage from "./Cart";
import { myCart } from "./cartTemp";





    const clothingItems = [
        {
          id: 1,
          name: "Grey-Shirt",
          image: cs1,
          price: 1200,
          mrp:999
        },
        {
          id: 2,
          name: "Black-Shirt",
          image: black,
          price: 1200,
          mrp:10899
        },
        {
          id: 3,
          name: "White-Shirt",
          image: cs2,
          price: 1400,
          mrp:1199
        },
        {
          id: 4,
          name: "Eggwhite-Shirt",
          image: cs2,
          price: 1300,
          mrp:1099
        },
        {
          id: 5,
          name: "Blue-Shirt",
          image: cs3,
          price: 1000,
          mrp:799
        },
        {
          id: 6,
          name: "Skyblue-Shirt",
          image: cs3,
          price: 1199,
          mrp:1099
        },
      ];
      


 
export default function  Hoodies() {
  const addToCart = (item) => {
    const isItemInCart = myCart.some((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      console.log(myCart)

      myCart.forEach((cartItem) => {
        if (cartItem.id === item.id) {
          cartItem.quantity += 1;
        }
      });
    } else {
      
      myCart.push({ ...item, quantity: 1 });
    }
  };
  return (
    <>
      <head>
        <title>Menx</title>
      </head>
      <div className="userinter">
        <div className="labelhead">
        <Link to='/Userpage' style={{textDecoration:'none'}}><label>Home</label></Link>
          <label><Link to='/profie' style={{textDecoration:'none'}} >Profile</Link></label>
          <input type="search"  placeholder="search..." />
      
        </div>
        <div className="overall">
          <div className="sidebar">
          <Link to='/casual' style={{textDecoration:'none'}} ><button type="button">Casualshirt</button></Link>
            <Link to='/westernwear' style={{textDecoration:'none'}} ><button type="button">WesternWear</button></Link>
            <Link to='/polo' style={{textDecoration:'none'}} ><button type="button">Polo T-shirt</button></Link>
            <Link to='/tees' style={{textDecoration:'none'}} ><button type="button">Oversize-tees</button></Link>
            <Link to='/hoodies' style={{textDecoration:'none'}} ><button type="button">Hoodies</button></Link>
            <Link to='/pant' style={{textDecoration:'none'}} ><button type="button">Pant</button></Link>
            <Link to='/short' style={{textDecoration:'none'}} ><button type="button">Shorts</button></Link>
            <Link to='/shoe' style={{textDecoration:'none'}} ><button type="button">Shoes</button></Link>
            <Link to='/accessories' style={{textDecoration:'none'}} >  <button type="button">Accessories</button></Link>
            <Link to='/cart'  style={{textDecoration:'none'}} >
            <button type="button" className="cart">Cart</button>
            </Link>



          </div>
          <div className="in-contain">
            {clothingItems.map((item) => (
              <div key={item.id} className="casual-shirt">
                <Link to={`/cs`}>
                  <img src={item.image} alt={item.name} />
                </Link>
                <br />
                <label>{item.name}</label>
                <br />
                <p>Price: <del>{item.price}</del> {item.mrp}</p>
                <button type="button" onClick={() => addToCart(item)}>
             Cart
            </button>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </>
  );
}

  