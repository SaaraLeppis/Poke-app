import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import axios from 'axios';

import PokeCard from './PokeCard';
import Loader from './Loader';

const PokeList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [nextPokemons, setNextPokemons] = useState("https://pokeapi.co/api/v2/pokemon")

    useEffect(() => { getPokemons() }, []);

    const getPokemons = () => {
        axios.get(nextPokemons).catch(error => {
            console.log(error);
        }).then((res) => {
            const fetches = res.data.results.map((p) => axios.get(p.url).then((res) => res.data));
            console.log(res.data);

            setNextPokemons(res.data.next);

            Promise.all(fetches).then((data) => {
                setPokemons((prevState) => [...prevState, ...data]);

            }); setIsLoading(false);
        });
    };

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

                            type={pokemon.types[0].type.name}
                            name={pokemon.name}
                            image={pokemon.sprites.other.dream_world.front_default} />
                    ))}
                </Row>
            </Container>
            <Button variant="primary" size="lg" onClick={getPokemons}>Load more</Button>
        </div >
    );
}
export default PokeList; 