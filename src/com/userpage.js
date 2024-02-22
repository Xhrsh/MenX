import React from "react";
import logo from "./images/logo.png";
import "./userpage.css";   
import {Link} from "react-router-dom"

export default function Userpage(){
    return(
        <>
       <header className="head">
        <div className="Headtag">
            <label>
                MenX           
                </label>       
                <input type="text" ></input>      
                <Link to="/cart"><button className="Cart">Cart</button>   </Link>      
        </div>
       </header>

       <body className="bodytag">
        <div className="offer">
            <img src={logo} alt="img"></img>
        </div>

        <div className="space"></div>

    <div className="f1">
        
        <div className="product1">
          <h3>
            FORMAL AND CASUAL SHIRT 
            </h3>
            <Link to='/casual'>
           <button type="button" className="b1">shop</button></Link>
        </div>
        <div className="product2">
            <h3>
            New Trends in fashion
            westernwear
            </h3>
            <Link to='/westernwear'>
            <button type="button" className="b2">Shop</button></Link>
        </div>
        <div className="product3">
        <h3>
            Flex with your outfit
            </h3>
            <Link to='/hoodies'>
           <button className="b3">shop</button></Link>
        </div>
    </div>
    <div className="space2">
    </div>
    <div className="f2">
        <div className="product4">
            <h3>
            Make your zone 
            oversized-tees
            </h3>
            <Link to='/tees'>
           <button className="b4">shop</button></Link>
        </div>
        <div className="product5">
            <h3>
                Complete your fashion.
           Accessories
            </h3><Link to='/accessories'>
           <button className="b5">shop</button></Link>
        </div>
        <div className="product6">
            <h3>
            Classic platform
            Polo-tshirt
            </h3><Link to='/polo'>
           <button className="b6">shop</button></Link>
        </div>
    </div>
    <div className="space2">
    </div>
    <div className="f3">
        <div className="product7">
        <h3>
            Classic platform
            Polo-tshirt
            </h3><Link to='/pant'>
           <button className="b7">shop</button></Link>
        </div>
        <div className="product8">
        <h3>
            Don't settle
            <br></br>
             Shoes
            </h3>
            <Link to='/shoe'>
           <button className="b8">shop</button></Link>
        </div>
        <div className="product9">
        <h3>
            Classic platform
            Polo-tshirt
            </h3>
            <Link to='/short'>
           <button className="b9">shop</button></Link>
        </div>

    </div>

       </body>     
       <footer>
        <div className="foot">
            <h3>MenX</h3>
          <div className="detail">
                
          </div>
        </div>
        </footer>              
          </>
    )
}