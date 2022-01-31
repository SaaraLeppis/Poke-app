import React from 'react';
import { Button } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';

function PokeCard({ name, image, type }) {
    return (
        <Card bg={
            type === "grass" ? "success" :
                type === "fire" ? "danger" :
                    type === "bug" ? "secondary" :
                        "light"} className='text-white text-center' style={{ width: '18rem' }}>
            <Card.Header bg="success">{name}</Card.Header>
            < Card.Body >
                <Card.Img variant="top" src={image} />
                <Button variant="outline-secondary" size="sm">Details</Button>

                <Card.Title>{type}</Card.Title>

            </Card.Body >
        </Card >
    );
}

export default PokeCard;