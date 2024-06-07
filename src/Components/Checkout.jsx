import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');

  const handleProceedToPayment = () => {
    // Validate name, email, contact, address, and pin code
    // Proceed to payment if valid
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h1 className="mb-4">Checkout</h1>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Pin Code" value={pinCode} onChange={(e) => setPinCode(e.target.value)} />
          </div>
          <Link to="/payment" className="btn btn-primary" onClick={handleProceedToPayment}>Proceed to Payment</Link>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
