import React, { useState } from "react";
import "./cs.css";
import { Link } from "react-router-dom"
import cs3 from "./image/cs-3.jpg";
import i1 from "./image/i1.jpg";
import i2 from "./image/i2.jpg";
import i3 from "./image/i3.jpg";
import ch from'./image/chart.jpg'
export default function App() {
  const imageArray = [i1, i2, i3]; 

  const [currentImage, setCurrentImage] = useState(imageArray[0]); 

  const changeImage = (index) => {
    setCurrentImage(imageArray[index]);
  };
  

  return (
    <div className="ma">
      <nav className="head1">
        <div className="left">
          <label>Home</label>
          <label>Profile</label>
        </div>
        <button><Link to='/Cart'>Cart</Link></button>
      </nav>

      <div className="space"></div>
      
      
      <div className="main">
        <div className="ima">
          <img src={currentImage} alt="Product Image" />
          <div className="butt">
            {imageArray.map((image, index) => (
              <button key={index} onClick={() => changeImage(index)}>
                <img src={image} alt={`Button Image ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

      <div className="pro">
        <div className="det">
              <h2>
                Men Black Slim fit 
              </h2>
        </div>
        <div className="price">
          <p>MRP : <del>1200</del> 999</p>
          <button type="submit">Sale</button>
        </div>
        <div className="size">
          <p>Size:</p>
          <button type="button">S</button>
          <button type="button">M</button>
          <button type="button">L</button>
          <button type="button">XL</button>
          <button type="button">XXL</button>

        </div>
              <div className="chart">
                <img src={ch}></img>
              </div>
            <div className="ret">
              <p>This product is eligible for return or exchange under our 30-day return or exchange policy.</p>
              </div>  
              <div className="pdet">
                <h4>Product Details</h4>
                <h5>Material&Care:</h5>
                  <p>100% Cotton<br></br>Machine Wash</p>
              </div>
              <div className="cart1">
                <button type="button">Cart</button>
                <button type="button">Price:999</button>
                
              </div>
      </div>              

      </div>
    </div>
  );
}
