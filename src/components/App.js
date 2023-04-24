import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Card, Grid, Progress } from 'semantic-ui-react'
import Layout from './Layout';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  const [cards, setCards] = useState([]);

  function getCards() {
    fetch('http://localhost:3001/cards')
      .then(r => r.json())
      .then(d => setCards(d))
  }

  useEffect(getCards, [])

  return (
    <Routes>
    <Route path="/" element={<Layout>Home</Layout>} />
    <Route path="/collections" element={<Layout>All Collections</Layout>} />
    <Route path="/collections/:id" element={<Layout>Collection: </Layout>} />
  </Routes> 
  )
}

export default App;
