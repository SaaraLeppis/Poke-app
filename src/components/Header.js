import React from 'react';
import { LinkContainer } from "react-router-bootstrap"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';


const Header = props => {
    return (

        <Navbar expand="lg" variant="dark" bg="dark" >
            <Container>
                <Navbar.Brand href="#home">Pokemons</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link >HOME</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="pokelist">
                            <Nav.Link >POKELIST</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="favourites">
                            <Nav.Link >FAVOURITES</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
};

export default Header;

