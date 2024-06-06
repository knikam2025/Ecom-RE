import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from './../Api/data';
import Home from './Home';

function Product() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    keyword: ''
  });
  
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

  return (
    <>
      <Home />
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
              />
            </div>
            <div className="filter-item">
              <label>Keyword</label>
              <input 
                type="text" 
                name="keyword" 
                value={filters.keyword} 
                onChange={handleFilterChange} 
              />
            </div>
          </div>
        </div>
        <Button className="toggle-button" onClick={() => setShowSidebar(!showSidebar)}>
          <i className="fas fa-filter"></i>
        </Button>
        <div className="d-flex flex-wrap justify-content-center">
          {filteredProducts.map(item => (
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
      </div>
    </>
  );
}

export default Product;
