import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  const name = localStorage.getItem('registrationData') ? JSON.parse(localStorage.getItem('registrationData')).name : null;

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
            <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
           
           <div className='ml-3 justi'>{name && <div>{name}</div>}  </div> 
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
