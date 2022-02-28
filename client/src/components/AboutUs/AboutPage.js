import React from 'react';
import About from './About.js';
import Navbar from '../Navbar/Navbar.js';
import CarouselHead from './CarouselHead';
import Carousel from './Carousel';
import Footer from '../Footer/Footer';
import Bottom from '../Bottom/bottom';

const AboutPage = () => {
  return(
      <div>
          <Navbar/>
          <About/>
          <CarouselHead/>
          <Carousel/>
          <Footer/>
          <Bottom/>
      </div>
  );
};

export default AboutPage;
