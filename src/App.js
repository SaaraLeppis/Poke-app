import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import axios from 'axios';

import './App.css'
import { Spinner } from 'react-bootstrap';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=20")
      .then((res) => {
        const fetches = res.data.results.map((p) => axios.get(p.url).then((res) => res.data));


        Promise.all(fetches).then((data) => {
          setPokemons(data);
          setIsLoading(false);
        });
      });
  }, []);

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
          {isLoading && (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading ... </span></Spinner>
          )}
          {/*{pokemons.map((p) => (
            <li>{p.name}</li>))}*/}
          {!isLoading && pokemons.map((pokemon) => (
            <Card key={pokemon.id} bg="dark" className='text-white text-center' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Img variant="top" src={pokemon.sprites.other.dream_world.front_default} />
                <Card.Title>{pokemon.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
      <Button variant="primary">Get next 20</Button>


    </div >
  );
}

export default App;
