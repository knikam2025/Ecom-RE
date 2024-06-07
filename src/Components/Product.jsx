import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from './../Api/data';
import Cycle from './Cycle';
import Cards from './SmallCompo/Cards';

function Product() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    keyword: ''
  });
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

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProducts = products.filter(item =>
    (filters.minPrice ? item.price >= filters.minPrice : true) &&
    (filters.maxPrice ? item.price <= filters.maxPrice : true) &&
    (filters.keyword ? item.description.toLowerCase().includes(filters.keyword.toLowerCase()) : true)
  );

  const handleNext = () => {
    if (currentIndex + itemsPerPage < filteredProducts.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const displayedProducts = filteredProducts.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <>
      <Cards />
      <div className="product-container">
        <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
          <div className="filter-container">
            <h3>Filters</h3>
            <div className="filter-item">
              <label>Min Price</label>
              <input 
                type="number" 
                name="minPrice" 
                value={filters.minPrice} 
                onChange={handleFilterChange} 
                min="0" 
                className="form-control" // Add Bootstrap class for styling
              />
            </div>
            <div className="filter-item">
              <label>Max Price</label>
              <input 
                type="number" 
                name="maxPrice" 
                value={filters.maxPrice} 
                onChange={handleFilterChange} 
                min="0" 
                className="form-control" // Add Bootstrap class for styling
              />
            </div>
            <div className="filter-item">
              <label>Keyword</label>
              <input 
                type="text" 
                name="keyword" 
                value={filters.keyword} 
                onChange={handleFilterChange} 
                className="form-control" // Add Bootstrap class for styling
              />
            </div>
          </div>
        </div>
        <Button className="toggle-button" onClick={() => setShowSidebar(!showSidebar)}>
          <i className="fas fa-filter"></i>
        </Button>
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
          <Button onClick={handleNext} disabled={currentIndex + itemsPerPage >= filteredProducts.length}>Next &gt;</Button>
        </div>
      </div>

      <Cycle />
    </>
  );
}

export default Product;
