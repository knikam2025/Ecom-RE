import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = () => {
    // Payment processing logic can be added here
  };

  return (
    <Container className="payment-container">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1 className="text-center">Payment</h1>
          <Form>
            <Form.Group>
              <Form.Check 
                type="radio" 
                label="Pay with Card" 
                name="paymentMethod" 
                value="card" 
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')} 
                className="mb-3"
              />
              <Form.Check 
                type="radio" 
                label="Cash on Delivery" 
                name="paymentMethod" 
                value="cod" 
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
                className="mb-3"
              />
            </Form.Group>
            <Link to="/thankyoupage">
              <Button variant="primary" onClick={handlePayment} disabled={!paymentMethod} className="mt-3 mb-3">
                Proceed to Payment
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Payment;
