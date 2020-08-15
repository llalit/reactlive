import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Common from './Common';

import h2 from './images/h2.jpg';
const About = ()=> {
  return (
    <>
      <Common name="Welcome to About me page." img={h2} visit="/contact" btname="Contact Now"/> 
    </>
  );
}

export default About;