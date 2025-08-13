import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import Navbar from './component/Navbar/Navbar';
import './App.css'
import Hero from './component/Hero/Hero';
import Banner from './component/Banner/Banner';
import Footer from './component/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/suggestions" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
