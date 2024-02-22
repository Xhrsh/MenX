import React, { useState } from "react";

import './casual.css'
import { Link } from "react-router-dom"
import { FaMagnifyingGlass } from "react-icons/fa6";
import p1 from "./image/polo1.webp"
import p2 from "./image/polo3.avif"
import p3 from "./image/polo2.jpg"
import p4 from "./image/polo4.webp"
import p5 from "./image/polo5.jpg"
import p6 from "./image/polo6.jpg"


import CartPage from "./Cart";
import { myCart } from "./cartTemp";





    const clothingItems = [
        {
          id: 31,
          name: "polo t-shirt",
          image: p1,
          price: 1200,
          mrp:999
        },
        {
          id: 32,
          name: "polo t-shirt",
          image: p2,
          price: 1200,
          mrp:1099
        },
        {
          id: 33,
          name: "polo t-shirt",
          image: p3,
          price: 1400,
          mrp:1199
        },
        {
          id: 34,
          name: "polo t-shirt",
          image: p4,
          price: 1300,
          mrp:1099
        },
        {
          id: 35,
          name: "polo t-shirt",
          image: p5,
          price: 1000,
          mrp:799
        },
        {
          id: 36,
          name: "polo t-shirt",
          image: p6,
          price: 1199,
          mrp:1099
        },
        {
          id: 37,
          name: "polo t-shirt",
          image: p4,
          price: 1300,
          mrp:1099
        },
       
      ];
      


 //export const cartItems = [];
export default function Polo() {
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
          <label><Link to='/profie' style={{textDecoration:'none'}}>Profile</Link></label>
          <input type="search"  placeholder="search..." />
      
        </div>
        <div className="overall">
          <div className="sidebar">
          <Link to='/casual' style={{textDecoration:'none'}}><button type="button">Casualshirt</button></Link>
            <Link to='/westernwear' style={{textDecoration:'none'}}><button type="button">WesternWear</button></Link>
            <Link to='/polo' style={{textDecoration:'none'}}><button type="button">Polo T-shirt</button></Link>
            <Link to='/tees' style={{textDecoration:'none'}} ><button type="button">Oversize-tees</button></Link>
            <Link to='/hoodies' style={{textDecoration:'none'}} ><button type="button">Hoodies</button></Link>
            <Link to='/pant' style={{textDecoration:'none'}} ><button type="button">Pant</button></Link>
            <Link to='/short' style={{textDecoration:'none'}} ><button type="button">Shorts</button></Link>
            <Link to='/shoe' style={{textDecoration:'none'}} ><button type="button">Shoes</button></Link>
            <Link to='/accessories' style={{textDecoration:'none'}} >  <button type="button">Accessories</button></Link>
            <Link to='/cart' style={{textDecoration:'none'}} >
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
