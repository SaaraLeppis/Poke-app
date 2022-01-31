import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokeList from './components/PokeList';

import Home from './components/Home';
import Layout from './components/Layout';
import PokeSingle from './components/PokeSingle';
import './App.css'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokelist" element={<PokeList />} />
          <Route path="/:pokemonName" element={<PokeSingle />} />

        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
