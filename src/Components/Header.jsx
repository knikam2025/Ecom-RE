import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function Header() {
  const name = localStorage.getItem('registrationData') ? JSON.parse(localStorage.getItem('registrationData')).name : null;
  const cartCount = JSON.parse(localStorage.getItem('cart'))?.length || 0;

  const handleSignOut = () => {

    localStorage.removeItem('registrationData');
    window.location.href = '/login'; 
  };

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/product">Product</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            {name ? (
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  {name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/cart">Cart ({cartCount})</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
