import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import NotFound from './components/pages/NotFound';



function App() {
  return (
    <>

    <Router>
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path='/about-us' element={<AboutUs/>} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
      
    </>
  );
}

export default App;
