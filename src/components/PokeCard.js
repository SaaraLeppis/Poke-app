import React from 'react';

import Card from 'react-bootstrap/Card';

function PokeCard({ name, image, type }) {
    return (
        <Card bg={
            type === "grass" ? "success" :
                type === "fire" ? "danger" :
                    type === "bug" ? "secondary" :
                        "light"} className='text-white text-center' style={{ width: '18rem' }}>
            < Card.Body >
                <Card.Img variant="top" src={image} />
                <Card.Title bg="success">{name}</Card.Title>
                <Card.Title>{type}</Card.Title>

            </Card.Body >
        </Card >
    );
}

export default PokeCard;