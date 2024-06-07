import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';

function Contact() {
  const [imageSrc, setImageSrc] = useState('');

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://source.unsplash.com/random/800x600');
      setImageSrc(response.url);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <Container className="contact-container">
      <h1>Contact</h1>
      <p>My name is Krishna Nikam.</p>
      <p>You can contact me at: 7020542266</p>
      {imageSrc && <Image src={imageSrc} alt="Random Image" fluid />}
    </Container>
  );
}

export default Contact;
