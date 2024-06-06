import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = () => {
    
  };

  return (
    <div>
      <h1>Payment</h1>
      <button onClick={() => setPaymentMethod('card')}>Pay with Card</button>
      <button onClick={() => setPaymentMethod('cod')}>Cash on Delivery</button>
      <Link to="/thankyoupage">
        <button onClick={handlePayment}>Payment</button>
      </Link>
    </div>
  );
}

export default Payment;
