import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Visuals from './components/Visuals'
import Tours from './components/Tours';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Visuals />
      <Tours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
