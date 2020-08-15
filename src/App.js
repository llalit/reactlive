import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import AboutMe from './Components/AboutMe';
import Services from './Components/Services';

import NavBar from './Components/NavBar/NavBar';
function App() {
  return (
    <>

    <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      
    </>
  );
}

export default App;