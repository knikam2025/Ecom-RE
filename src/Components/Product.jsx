import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <div className="container mx-auto">
        <div className={`fixed inset-0 z-50 bg-white transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <div className="mb-4">
              <label className="block text-gray-700">Min Price</label>
              <input 
                type="number" 
                name="minPrice" 
                value={filters.minPrice} 
                onChange={handleFilterChange} 
                min="0" 
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Max Price</label>
              <input 
                type="number" 
                name="maxPrice" 
                value={filters.maxPrice} 
                onChange={handleFilterChange} 
                min="0" 
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Keyword</label>
              <input 
                type="text" 
                name="keyword" 
                value={filters.keyword} 
                onChange={handleFilterChange} 
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>
        <button 
          className="fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-full"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <i className="fas fa-filter"></i>
        </button>
        <div className="flex justify-between items-center mt-8">
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
          >
            &lt; Previous
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedProducts.map(item => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="overflow-hidden rounded-lg">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                </div>
                <div className="mt-4">
                  <h5 className="text-lg font-semibold">{item.title}</h5>
                  <p className="text-gray-700">{item.description}</p>
                  <p className="text-gray-900 font-bold">&#x20B9;{item.price}</p>
                  <button 
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => handleBuy(item)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={handleNext} 
            disabled={currentIndex + itemsPerPage >= filteredProducts.length}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
          >
            Next &gt;
          </button>
        </div>
      </div>

      <Cycle />
    </>
  );
}

export default Product;
