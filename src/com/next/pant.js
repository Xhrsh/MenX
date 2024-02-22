import React, { useState } from "react";

import './casual.css'
import { Link } from "react-router-dom"
import { FaMagnifyingGlass } from "react-icons/fa6";
import pa1 from './image/pa1.webp'
import pa2 from './image/pa2.avif'
import pa3 from './image/pa3.jpg'
import pa4 from './image/pa4.webp'
import pa5 from './image/pa5.jpg'
import pa6 from './image/pa6.webp'
import pa7 from './image/pa7.webp'
import pa8 from './image/pa8.htm'
import CartPage from "./Cart";
import { myCart } from "./cartTemp";





    const clothingItem = [
        {
          id: 11,
          name: "Grey-Shirt",
          image: pa1,
          price: 1200,
          mrp:999
        },
        {
          id: 12,
          name: "Black-Shirt",
          image: pa2,
          price: 1200,
          mrp:10899
        },
        {
          id: 13,
          name: "White-Shirt",
          image:pa3,
          price: 1400,
          mrp:1199
        },
        {
          id:14,
          name: "Eggwhite-Shirt",
          image: pa4,
          price: 1300,
          mrp:1099
        },
        {
          id: 15,
          name: "Blue-Shirt",
          image: pa5,
          price: 1000,
          mrp:799
        },
        {
          id: 16,
          name: "Skyblue-Shirt",
          image: pa6,
          price: 1199,
          mrp:1099
        },
        {
          id: 17,
          name: "Skyblue-Shirt",
          image: pa7,
          price: 1199,
          mrp:1099
        },
        {
          id: 18,
          name: "Skyblue-Shirt",
          image: pa8,
          price: 1199,
          mrp:1099
        },
      ];
      


export default function Pant() {
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
          <label>Home</label>
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
            {clothingItem.map((item) => (
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
