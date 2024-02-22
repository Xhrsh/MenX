import React, { useState } from "react";

import './casual.css'
import { Link } from "react-router-dom"
import { FaMagnifyingGlass } from "react-icons/fa6";
import acc1 from "./image/acc1.png"
import acc2 from"./image/acc2.png"
import acc3 from "./image/acc3.webp"
import acc4 from "./image/acc4.webp"
import acc5 from "./image/acc5.avif"

import CartPage from "./Cart";
import { myCart } from "./cartTemp";





    const clothingItems = [
        {
          id: 81,
          name: "Egg-white Cap",
          image: acc1,
          price: 299,
          mrp:250
        },
        {
          id: 82,
          name: "Black Cap",
          image: acc2,
          price: 400,
          mrp: 200
        },
        {
          id: 83,
          name: "NY Cap",
          image: acc3,
          price: 250,
          mrp: 170
        },
        {
          id: 84,
          name: "Black Lap Bag",
          image: acc5,
          price: 1300,
          mrp:1099
        },
        {
          id: 85,
          name: "Exam Bag",
          image: acc4,
          price: 1000,
          mrp:799
        },
       
      ];
      


 //export const cartItems = [];
export default function Accessories() {
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
