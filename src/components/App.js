import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Collections from './Collections';
import CollectionDetail from './CollectionDetail';
import Review from './Review';
import Search from './Search';
import NavBar from './NavBar';
import 'semantic-ui-css/semantic.min.css'


function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/collections" element={<Collections />} />
      <Route path="/collections/:id" element={<CollectionDetail />} />
      <Route path="/review" element={<Review />} />
      <Route path="/review/:collectionId" element={<Review />} />
      <Route path="/search" element={<Search />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App;

/*
Component hierarchy

App
- Collections
  - CollectionForm
  - CollectionCard (list)
- CollectionDetail
  - StudyCardForm
  - StudyCard (list)
- Review
  - ReviewCard (list)
- Search
  - StudyCard (list)
- Home
*/