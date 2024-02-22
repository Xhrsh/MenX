import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './cart.css';
import { myCart } from "./cartTemp";

const Cart = () => {
  // Initialize state to hold quantity and size for each item
  const [itemsInfo, setItemsInfo] = useState({});

  // Function to handle quantity change for a specific item
  const handleQuantityChange = (itemId, quantity) => {
    setItemsInfo(prevItemsInfo => ({
      ...prevItemsInfo,
      [itemId]: {
        ...prevItemsInfo[itemId],
        quantity: quantity
      }
    }));
  };

  // Function to handle size change for a specific item
  const handleSizeChange = (itemId, size) => {
    setItemsInfo(prevItemsInfo => ({
      ...prevItemsInfo,
      [itemId]: {
        ...prevItemsInfo[itemId],
        size: size
      }
    }));
  };


  const getTotalPrice = () => {
    let totalPrice = 0;
    myCart.forEach(item => {
      const itemInfo = itemsInfo[item.id] || { quantity: 0 };
      totalPrice += item.price * itemInfo.quantity;
    });
    return totalPrice.toFixed(2);
  };

  if (!myCart || myCart.length === 0) {
    return (
      <Container>
        <p>Cart information is not available.</p>
        <Link to="/casual" className="btn btn-primary back-link">
          Back to Home
        </Link>
      </Container>
    );
  }

  return (
    <Container>
      <Link to="/casual" className="btn btn-primary back-link fixed-top ml-3 mt-3">
        Back to Home
      </Link>
      <h2 className="text-center mt-5">CART</h2>
      <Row className="justify-content-around">
        {myCart.map((item) => (
          <Col key={item.id} md={4} className="mb-4">
            <Card>
              <Card.Img
                src={item.image}
                alt={item.name}
                className="img-fluid card-img"
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: {item.price}</Card.Text>
                <Card.Text>
                  <label htmlFor={`quantity_${item.id}`}>Quantity:</label>
                  <input 
                    type="number"
                    id={`quantity_${item.id}`}
                    value={(itemsInfo[item.id] && itemsInfo[item.id].quantity) || 0}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    min="0"
                  />
                </Card.Text>
                <div>
                  <span>Size:</span>
                  <Button 
                    variant={(itemsInfo[item.id] && itemsInfo[item.id].size === 'S') ? 'primary' : 'outline-primary'} 
                    onClick={() => handleSizeChange(item.id, 'S')}
                    className="mx-1"
                  >
                    S
                  </Button>
                  <Button 
                    variant={(itemsInfo[item.id] && itemsInfo[item.id].size === 'M') ? 'primary' : 'outline-primary'} 
                    onClick={() => handleSizeChange(item.id, 'M')}
                    className="mx-1"
                  >
                    M
                  </Button>
                  <Button 
                    variant={(itemsInfo[item.id] && itemsInfo[item.id].size === 'L') ? 'primary' : 'outline-primary'} 
                    onClick={() => handleSizeChange(item.id, 'L')}
                    className="mx-1"
                  >
                    L
                  </Button>
                  <Button 
                    variant={(itemsInfo[item.id] && itemsInfo[item.id].size === 'L') ? 'primary' : 'outline-primary'} 
                    onClick={() => handleSizeChange(item.id, 'L')}
                    className="mx-1"
                  >
                    XL
                  </Button>
                  <Button 
                    variant={(itemsInfo[item.id] && itemsInfo[item.id].size === 'L') ? 'primary' : 'outline-primary'} 
                    onClick={() => handleSizeChange(item.id, 'L')}
                    className="mx-1"
                  >
                    XXL
                  </Button>
                </div>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <p>Total Price: {getTotalPrice()}</p>
        </Col>
      </Row>
      <Button>Buy</Button>
    </Container>
  );
};

export default Cart;
