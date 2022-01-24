import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import axios from 'axios';

import PokeCard from './PokeCard';
import Loader from './Loader';

const PokeList = () => {
    const [pokemons, setPokemons] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
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
            <Container>
                <Row xs={2} md={4} lg={5} className="justify-content-between my-5 d-flex gap-3">
                    {/* my-f = margin y 5 // d-flex = display flex // gap-3 = gap between cards 1 rem*/}
                    {isLoading && (<Loader />
                    )}

                    {!isLoading && pokemons.map((pokemon) => (
                        <PokeCard
                            key={pokemon.name}
                            name={pokemon.name}
                            image={pokemon.sprites.other.dream_world.front_default} />
                    ))}
                </Row>
            </Container>
            <Button variant="primary">Get next 20</Button>
        </div >
    );
}
export default PokeList; 