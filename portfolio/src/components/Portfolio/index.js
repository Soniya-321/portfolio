// src/components/Portfolio.js
import React from 'react';
import Introduction from '../Introduction';
import Header from '../Header'
import Skills from '../Skills'
import Projects from '../Projects';
import Education from '../Education';
import Contact from '../Contact';
import Footer from '../Footer';

import './index.css'

const Portfolio = () => {

  return (
    <div className={`portfolio-container`}>
      <Header />
      <Introduction />
      <Education/>
      <Skills />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Portfolio;

