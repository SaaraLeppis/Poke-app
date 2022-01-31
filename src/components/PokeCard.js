import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap"
import { Heart, HeartFill } from 'react-bootstrap-icons';

import Card from 'react-bootstrap/Card';

function PokeCard({ name, image, type, pokemonName, fav }) {
    return (
        <Card key={name} bg={
            type === "grass" ? "success" :
                type === "fire" ? "danger" :
                    type === "bug" ? "secondary" :
                        "light"} className='text-white text-center' style={{ width: '18rem' }}>
            <Card.Header className="d-flex justify-content-between" bg="success">{name}
                {fav ? (<HeartFill size="30" color="red" />
                ) : (<Heart size="30" />)}
            </Card.Header>
            < Card.Body >
                <Card.Img variant="top" src={image} />
                <LinkContainer to={`/${pokemonName}`} >
                    <Button variant="outline-secondary" size="sm">Details</Button>
                </LinkContainer>
                <Card.Title>{type}</Card.Title>

            </Card.Body >
        </Card >
    );
}

export default PokeCard;
