import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sale from './components/Sale';
import Products from './components/Products';
import Footer from './components/Footer';
import Pic from './components/Products';


function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <Sale />
      <Products />
      <Pic />
      <Footer />
    </div>
  );
}

export default Homepage;
