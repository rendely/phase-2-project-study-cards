import React from 'react';
import { Routes, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Home from './Home';
import Collections from './Collections';
import Collection from './Collection';
import Review from './Review';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route path="/collections" element={<Collections />} />
    <Route path="/collections/:id" element={<Collection />} />
    <Route path="/review" element={<Review />} />
  </Routes> 
  )
}

export default App;
