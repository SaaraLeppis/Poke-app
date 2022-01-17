import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Pokemons</Navbar.Brand>
        </Container>
      </Navbar>


    </div>
  );
}

export default App;
