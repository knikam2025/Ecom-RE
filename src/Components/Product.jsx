import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from './../Api/data';
import Home from './Home';
function Product() {
  return (

<>


<Home/>

    <div className="d-flex flex-wrap">
      {products.map(item => (
        <Card key={item.id} style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" className='cardimg' src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Card.Text>
            &#x20B9;{item.price}
            </Card.Text>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </>
  );
}

export default Product;
