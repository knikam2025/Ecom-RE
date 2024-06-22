import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Product from './Components/Product';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import Error from './Components/Error';
import Login from './Components/Login';
import Cart from './Components/Cart';
import ThankYouPage from './Components/ThankYou';
import Payment from './Components/Payment';
import Checkout from './Components/Checkout';
import Privacy from './Components/FooterPages/Privacy';
import Contact from './Components/FooterPages/Contact';

function App() {
  return (
    <>

    
      <Router>
        <Header />
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/thankyoupage" element={<ThankYouPage />} /> 
          <Route path="/payment" element={<Payment />} /> 
          <Route path="*" element={<Error />} /> 
          <Route path='/Privacy' element={<Privacy/>}/>
          <Route path='/Contact' element={<Contact/>}/>

        </Routes>
        <Footer />
      </Router>


    </>
  );
}

export default App;
