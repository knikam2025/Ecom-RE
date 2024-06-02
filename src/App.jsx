import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Product from './Components/Product';
import Signup from './Components/Signup';
import Footer from './Components/Footer';

function App() {
  return (
  <>
  <Router>
  <Header/>
  
  <Routes>
<Route path='/product' element={<Product/>}/>
    <Route path="/Home" element={<Home/>} />
    <Route path='/signup' element={<Signup/>}/>
  </Routes>
  <Footer/>
  </Router>


  </>
  
  );
}

export default App;
