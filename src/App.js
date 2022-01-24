import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import PokeList from './components/PokeList';
import Home from './components/Home';
import Layout from './components/Layout';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="pokelist" element={<PokeList />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
