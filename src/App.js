import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokeList from './components/PokeList';

import Home from './components/Home';
import Layout from './components/Layout';
import PokeSingle from './components/PokeSingle';
import FavList from './components/FavList';
import './App.css'

const App = () => {
  const [favourites, setFavourites] = useState([]);

  const getArray = JSON.parse(localStorage.getItem('favourites'))
  useEffect(() => {
    setFavourites(getArray)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const getArray = JSON.parse(localStorage.getItem('favourites') || '0');
  /*useEffect(() => {
    if (getArray !== 0) {
      setFavourites(getArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])*/

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const favHandler = (pokemon) => {
    let item = favourites.some(item => item.id === pokemon.id)
    if (!item) {
      setFavourites(favourites => [...favourites, pokemon]);
    } else {
      const newArray = [...favourites];
      newArray.splice(newArray.findIndex(item => item.id === pokemon.id), 1);
      setFavourites(newArray);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="pokelist"
            element={<PokeList favHandler={favHandler} favourites={favourites} />} />
          <Route
            path="favourites"
            element={
              <FavList favHandler={favHandler} favourites={favourites} />} />
          <Route
            path="/:pokemonName" element={<PokeSingle />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
