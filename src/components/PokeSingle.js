import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import { Button } from 'react-bootstrap';


const PokeSingle = () => {
    let { pokemonName } = useParams();
    let navigate = useNavigate();
    const [pokemon, setPokemon] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .catch(error => {
                console.log(error);
            })
            .then((res) => {
                setPokemon(res.data);
                setIsLoading(false);
                console.log(pokemon);
            });
    }, []);

    return (
        <div>
            {isLoading && <Loader />}
            {!isLoading && (
                <div>
                    <img src={pokemon.sprites.other.dream_world.front_default} />
                    <p>Base experience: {pokemon.base_experience}</p>
                    <p>Height: {pokemon.height}0 cm</p>
                    <p>Weight: {pokemon.weight} g</p>
                    <p>Types:
                        <ul>
                            {pokemon.types.map((item) => (
                                <li key={item.type.name}>{item.type.name}</li>
                            ))}
                        </ul>
                    </p>
                    <p>Hello {pokemon.name}</p>
                </div>
            )}
            <Button onClick={() => navigate(-1)}>Back to list</Button></div>
    );
};

export default PokeSingle;