import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook

function Login() {
  const navigate = useNavigate(); // Initializing useNavigate hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const storedData = JSON.parse(localStorage.getItem('registrationData'));
    if (storedData) {
      const { email: storedEmail, password: storedPassword } = storedData;
      if (email === storedEmail && password === atob(storedPassword)) {
        alert("Login Successful");
        navigate('/home'); // Navigating to home page after successful login
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("No registration data found. Please register first.");
    }
  };

  return (
    <Form className="formregi">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="button"
        onClick={handleLogin}
      >
        Login
      </Button>
    </Form>
  );
}

export default Login;
