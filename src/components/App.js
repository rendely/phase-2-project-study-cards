import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import CardForm from './CardForm';
import Collections from './Collections';
import CollectionDetail from './CollectionDetail';
import Review from './Review';
import Search from './Search';
import 'semantic-ui-css/semantic.min.css'


function App() {

  return (
    <Routes>
      <Route path="/collections" element={<Collections />} />
      <Route path="/collections/:id" element={<CollectionDetail />} />
      <Route path="/review" element={<Review />} />
      <Route path="/search" element={<Search />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App;
