import React,{useState} from 'react';
import Carousel from './Carousel';
import Destinations from './Destinations';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Search from './Search';
import Selects from './Selects';
// import { BrowserRouter as Router, Route} from 'react-router-dom';



function Home() {
  return(

      <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
    
    </div>
  );
}

export default Home;