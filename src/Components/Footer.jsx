import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (

<div className='footercl'>


    <footer className="bg-dark text-white ">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase mb-3">E Bokestore</h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase mb-3">Products</h6>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white">Privacy</Link></li>
              <li><Link to="#" className="text-white">Contact</Link></li>
              <li><Link to="#" className="text-white">Home</Link></li>
              <li><Link to="#" className="text-white">Bootstrap Angular</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase mb-3">Contact</h6>
            <p><i className="fas fa-home mr-3"></i> Vimanagar, Felix It System</p>
            <p><i className="fas fa-envelope mr-3"></i> kk@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> +9170 20 54 22 66</p>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase mb-3">Follow us</h6>
            <ul className="list-inline">
              <li className="list-inline-item"><Link to="#" className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#3b5998'}}><i className="fab fa-facebook-f"></i></Link></li>
              <li className="list-inline-item"><Link to="#" className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#55acee'}}><i className="fab fa-twitter"></i></Link></li>
              <li className="list-inline-item"><Link to="#" className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#dd4b39'}}><i className="fab fa-google"></i></Link></li>
              <li className="list-inline-item"><Link to="#" className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#ac2bac'}}><i className="fab fa-instagram"></i></Link></li>
              <li className="list-inline-item"><Link to="#" className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#0082ca'}}><i className="fab fa-linkedin-in"></i></Link></li>
              <li className="list-inline-item"><Link to="#" className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#333333'}}><i className="fab fa-github"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-secondary text-center py-3">
        <div className="container">
          © 2024 FelixIt.com | All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
