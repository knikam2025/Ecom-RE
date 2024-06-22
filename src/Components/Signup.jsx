import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Signup() {
  const navigate = useNavigate(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('registrationData', JSON.stringify({name, email, password }));
    alert("Registered Successfully");
    navigate('/login'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleRegister}>
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        
        <div className="mb-4">
          <label htmlFor="formBasicName" className="block text-gray-700">Enter Name</label>
          <input 
            type="text" 
            id="formBasicName" 
            className="w-full p-2 border border-gray-300 rounded mt-1" 
            placeholder="Enter name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="formBasicEmail" className="block text-gray-700">Email address</label>
          <input 
            type="email" 
            id="formBasicEmail" 
            className="w-full p-2 border border-gray-300 rounded mt-1" 
            placeholder="Enter email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <small className="text-gray-600">Don't share your email with anyone</small>
        </div>

        <div className="mb-4">
          <label htmlFor="formBasicPassword" className="block text-gray-700">Password</label>
          <input 
            type="password" 
            id="formBasicPassword" 
            className="w-full p-2 border border-gray-300 rounded mt-1" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        <div className="mb-4 flex items-center">
          <input 
            type="checkbox" 
            id="formBasicCheckbox" 
            className="mr-2" 
          />
          <label htmlFor="formBasicCheckbox" className="text-gray-700">Check me out</label>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Signup;
