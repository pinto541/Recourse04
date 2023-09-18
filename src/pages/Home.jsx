import React from 'react';
import Navbar from '../Components/Navbar';
import Intro from './Intro';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from '../Components/Footer';
import Commit from '../Components/Commit/Commit';

import Services from '../Components/Services/Services';
import Faqmain from '../Components/faq/Faqmain';
<<<<<<< HEAD
=======

import Stats from '../Components/stats/Stats';
>>>>>>> 0430434a2ac8d98910d753903d1f15dd583a8278

import Stats from '../Components/stats/Stats';

import "./Home.css"

const Home = () => {
  return (
    <div className='all'>
      
  
    <Intro/>
     <Services/>
    <Commit/>
    <Stats/>
      <Faqmain/>
      
      
      
    </div>
  )
}

export default Home;
