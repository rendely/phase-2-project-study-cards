import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Card, Grid, Progress } from 'semantic-ui-react'
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
    <Route path="/" element={<div>Hello</div>} />
    <Route path="/dog" element={<div>dog</div>} />
  </Routes> 
  )
}

export default App;
