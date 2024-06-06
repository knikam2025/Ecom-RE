import React from 'react';

function ThankYouPage() {
  
  const orderId = Math.floor(Math.random() * 1000000);

  return (
    <div>
      <h1>Thank You</h1>
      <p>Your order has been placed successfully!</p>
      <p>Order ID: {orderId}</p>
      <p>Order will be delivered soon.</p>
    </div>
  );
}

export default ThankYouPage;
