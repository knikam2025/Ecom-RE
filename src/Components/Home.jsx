import React, { useState, useEffect } from 'react';

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://source.unsplash.com/random/800x150?sig=1",
    "https://source.unsplash.com/random/800x150?sig=2",
    "https://source.unsplash.com/random/800x150?sig=3"
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
    <div>
      <div className='Home1'>
        <img src={images[currentImage]} alt="slideshow" />
        <button onClick={handlePrevImage} className='prevButton'>Previous</button>
        <button onClick={handleNextImage} className='nextButton'>Next</button>
        <div className='dots'>
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentImage === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;
