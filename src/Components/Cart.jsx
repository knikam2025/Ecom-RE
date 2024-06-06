import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Cart() {
  const defaultProduct = {
    image: 'default-image.jpg', 
    name: 'Default Product',
    id: '0',
    title: 'Default Title',
    description: 'Default Description',
    price: 0, 

  };


  
  const product = JSON.parse(localStorage.getItem('product')) || defaultProduct;

  return (
    <div>
      <h1>Cart</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={product.image} alt={product.title} style={{ width: '18rem', margin: '10px' }} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>&#x20B9;{product.price}</p>
      </div>
      <Link to="/checkout">
        <Button className='primary mb-3 '>Proceed to Payment</Button>
      </Link>
    </div>
  );
}

export default Cart;
