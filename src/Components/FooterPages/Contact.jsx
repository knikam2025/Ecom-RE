import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';

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

  React.useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <Container>
      <h1>Contact</h1>
      <p>My name is Krishna Nikam.</p>
      <p>You can contact me at: 7020542266</p>
      
      {imageSrc && <Image src={imageSrc} alt="Random Image" fluid />}
    </Container>
  );
}

export default Contact;
