import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Contact } from './components/Contact';
import { MyNavbar } from './components/Navbar';
import Hero from './components/Hero';
import Section2 from './components/Section2';
import Footer from './components/Footer';


function App() {
  return (
    <div  >

      <MyNavbar />
      <div style={{ backgroundColor: 'black' }}>
        <Hero />
      </div>
      <Section2 />
      <div style={{backgroundColor: 'black' }} >
        <Footer />
      </div>


      {/* <Contact /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </div>
  );
}

export default App;
