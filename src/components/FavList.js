import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

import PokeCard from './PokeCard';

const FavList = ({ favHandler, favourites }) => {
    return (
        <div>
            <Container>
                <Row xs={2} md={4} lg={5} className="justify-content-between my-5 d-flex gap-3">

                    {favourites.map((pokemon) => (

                        <PokeCard
                            key={pokemon.name}

                            type={pokemon.types[0].type.name}
                            name={pokemon.name}
                            image={pokemon.sprites.other.dream_world.front_default}
                            pokemonName={pokemon.name}
                            fav={favourites.some(item => item.name === pokemon.name)}
                            favClick={() => favHandler(pokemon)} />
                    ))}
                </Row>
            </Container>
            Favs will be herererere


        </div>
    );
};

export default FavList;