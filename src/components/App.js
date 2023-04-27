import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import CardForm from './CardForm';
import Collections from './Collections';
import CollectionDetail from './CollectionDetail';
import Review from './Review';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/collections" element={<Collections />} />
      <Route path="/collections/:id" element={<CollectionDetail />} />
      <Route path="/collections/:id/add" element={<CardForm />} />
      <Route path="/review" element={<Review />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App;
