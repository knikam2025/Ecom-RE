import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import oldCycleData from './../Api/oldCycleData';

function Cycle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  
  const navigate = useNavigate();

  const handleBuy = (item) => {
    const productData = {
      image: item.image,
      name: item.name,
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
    };

    localStorage.setItem('product', JSON.stringify(productData));
    alert('Buy success!');
    navigate('/cart');
  };

  const handleNext = () => {
    if (currentIndex + itemsPerPage < oldCycleData.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const displayedProducts = oldCycleData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <>
      
      <div className="product-container">
        <div className="d-flex justify-content-between align-items-center">
          <Button onClick={handlePrev} disabled={currentIndex === 0}>&lt; Previous</Button>
          <div className="d-flex flex-wrap justify-content-center product-row">
            {displayedProducts.map(item => (
              <Card key={item.id} className="product-card">
                <div className="img-container">
                  <Card.Img variant="top" className="cardimg" src={item.image} />
                </div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>&#x20B9;{item.price}</Card.Text>
                  <Button variant="primary" onClick={() => handleBuy(item)}>Buy</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
          <Button onClick={handleNext} disabled={currentIndex + itemsPerPage >= oldCycleData.length}>Next &gt;</Button>
        </div>
      </div>
    </>
  );
}

export default Cycle;
