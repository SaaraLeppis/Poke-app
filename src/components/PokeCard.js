import React from 'react';

import Card from 'react-bootstrap/Card';

function PokeCard({ key, name, image }) {
    return (
        <Card key={key} bg="dark" className='text-white text-center' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={image} />
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default PokeCard;