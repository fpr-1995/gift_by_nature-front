import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Router from '../src/routes/index.routes';
import Header from '../src/components/UI/Partials/Header';
import Footer from '../src/components/UI/Partials/Footer';

function App() {
  return (
    <>
      <Header/>
      <Router/>
      <Footer/>
    </>
  );
}

export default App;