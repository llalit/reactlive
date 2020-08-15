import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Common from './Common';
import h1 from './images/h1.jpg';
const Home = ()=> {
  return (
    <>
      
      <Common name="Welcome to Home page me page." img={h1} visit="/services" btname="services Available"/> 
      
      
    </>
  );
}

export default Home;