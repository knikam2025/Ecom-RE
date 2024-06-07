import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://source.unsplash.com/random/800x150?sig=1",
    "https://source.unsplash.com/random/800x150?sig=2",
    "https://source.unsplash.com/random/800x150?sig=3",
    "https://source.unsplash.com/random/800x150?sig=4",
    "https://source.unsplash.com/random/800x150?sig=5",
    "https://source.unsplash.com/random/800x150?sig=6"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <Container>
      <div className="home-slideshow">
        <img src={images[currentImage]} alt="slideshow" className="slideshow-image" />
        <Button onClick={handlePrevImage} className="prev-button">Previous</Button>
        <Button onClick={handleNextImage} className="next-button">Next</Button>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentImage === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
      <Row className="mt-4">
        <Col md={6}>
          <img src="https://source.unsplash.com/random/400x300?ebike&sig=1" alt="e-bike" className="content-image" />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2>Why Choose E-Bikes?</h2>
          <p>E-bikes offer a convenient and eco-friendly mode of transportation. They are perfect for both urban and rural environments, providing an easy and efficient way to travel.</p>
          <p>Benefits include reduced carbon emissions, lower transportation costs, and the ability to cover longer distances without the physical strain associated with traditional cycling.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2>Environmental Impact</h2>
          <p>Using e-bikes contributes to a cleaner environment by reducing air pollution and reliance on fossil fuels. Each ride on an e-bike helps in reducing greenhouse gas emissions, contributing to a greener planet.</p>
          <p>With the growing concerns about climate change, adopting e-bikes for daily commutes and errands is a step towards a sustainable future.</p>
        </Col>
        <Col md={6}>
          <img src="https://source.unsplash.com/random/400x300?environment&sig=2" alt="environment" className="content-image" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <img src="https://source.unsplash.com/random/400x300?cycle&sig=3" alt="cycle" className="content-image" />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2>Save the Earth</h2>
          <p>By opting for e-bikes and cycles, you contribute to the reduction of traffic congestion and noise pollution. This not only makes cities more livable but also promotes a healthier lifestyle.</p>
          <p>Join the movement to save our planet. Every ride counts!</p>
          <Button variant="success" className="mt-3">Learn More</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2>Health Benefits</h2>
          <p>Riding e-bikes and cycles can significantly improve your cardiovascular health. It's a low-impact exercise that enhances muscle strength and flexibility.</p>
          <p>Regular cycling also boosts mental health by reducing stress levels and promoting a sense of well-being.</p>
        </Col>
        <Col md={6}>
          <img src="https://source.unsplash.com/random/400x300?health&sig=4" alt="health benefits" className="content-image" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <img src="https://source.unsplash.com/random/400x300?savings&sig=5" alt="cost savings" className="content-image" />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2>Cost Savings</h2>
          <p>E-bikes and cycles are cost-effective alternatives to cars and public transportation. They require minimal maintenance and no fuel costs.</p>
          <p>Investing in an e-bike can lead to significant savings over time, making it a smart financial choice for your daily commutes.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2>Convenience and Flexibility</h2>
          <p>E-bikes provide the flexibility to navigate through traffic with ease and park conveniently, eliminating the stress of finding parking spaces.</p>
          <p>Whether you're commuting to work, running errands, or exploring new places, e-bikes offer unparalleled convenience and freedom.</p>
        </Col>
        <Col md={6}>
          <img src="https://source.unsplash.com/random/400x300?convenience&sig=6" alt="convenience" className="content-image" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
