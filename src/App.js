import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Contact } from './components/Contact';
import { MyNavbar } from './components/Navbar';
import Hero from './components/Hero';
import Section2 from './components/Section2';
import Footer from './components/Footer';
import Future from './components/Future';


function App() {
  return (
    <div  >

      <MyNavbar />
      <div style={{ backgroundColor: 'black' }}>
        <Hero />
      </div>

      <Section2 />
      <div style={{ backgroundColor: 'black' }} >
        <Future />
        <Footer />
      </div>



    </div>
  );
}

export default App;
