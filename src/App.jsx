// import React from 'react'
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Salas from './components/Salas';
import Services from './components/Services';
import Team from './components/Team';
import Navbar from './components/Navbar';
import Estandes from './components/infoSalas/Estandes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/salas" element={<Salas />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stand" element={<Estandes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
