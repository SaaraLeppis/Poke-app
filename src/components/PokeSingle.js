import React from 'react';
import { useParams, useEffect } from 'react-router-dom';
import axios from 'axios';


const PokeSingle = () => {
    let { pokemonName } = useParams();
    const [pokeData, setPokeData] = useState("https://pokeapi.co/api/v2/pokemon", `/${pokemonName}`)

    return (
        <div>
            <p>Hello {pokemonName}</p>
        </div>
    );
};

export default PokeSingle;