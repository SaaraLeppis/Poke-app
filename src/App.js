import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import './App.css'

function App() {
  const [pokemons, setPokemons] = useState("here is pokemon");

  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark" className="change-color">
        <Container>
          <Navbar.Brand href="#">Pokemons</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row xs={2} md={4} lg={5} className="justify-content-between my-5 d-flex gap-3">
          {/* my-f = margin y 5 // d-flex = display flex // gap-3 = gap between cards 1 rem*/}
          <Card bg="dark" className='text-white' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.radiatedaily.com/wp-content/uploads/2016/12/Green-Wallpaper-29.jpg" />
            <Card.Body>
              <Card.Title>{pokemons}</Card.Title>

              <Card.Text>
                Learning to use Hooks. And generating pokemon Cards from api.
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
