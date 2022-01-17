import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


import './App.css'



function App() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark" className="change-color">
        <Container>
          <Navbar.Brand href="#">Pokemons</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row xs={2} md={4} lg={5} className="justify-content-between my-5 d-flex gap-3">
          <Card bg="dark" className='text-white' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.radiatedaily.com/wp-content/uploads/2016/12/Green-Wallpaper-29.jpg" />
            <Card.Body>
              <Card.Title>Green Card</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card bg="dark" className='text-white' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.radiatedaily.com/wp-content/uploads/2016/12/Green-Wallpaper-29.jpg" />
            <Card.Body>
              <Card.Title>Green Card</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card><Card bg="dark" className='text-white' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.radiatedaily.com/wp-content/uploads/2016/12/Green-Wallpaper-29.jpg" />
            <Card.Body>
              <Card.Title>Green Card</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card bg="dark" className='text-white' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.radiatedaily.com/wp-content/uploads/2016/12/Green-Wallpaper-29.jpg" />
            <Card.Body>
              <Card.Title>Green Card</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card><Card bg="dark" className='text-white' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.radiatedaily.com/wp-content/uploads/2016/12/Green-Wallpaper-29.jpg" />
            <Card.Body>
              <Card.Title>Green Card</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>


    </div >
  );
}

export default App;
