import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');

  const handleProceedToPayment = () => {
    // Validate address and pin code
    // Proceed to payment if valid
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <input type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input type="text" placeholder="Enter Pin Code" value={pinCode} onChange={(e) => setPinCode(e.target.value)} />
      </form>
      <Link to="/payment">
        <button onClick={handleProceedToPayment}>Proceed to Payment</button>
      </Link>
    </div>
  );
}

export default Checkout;
