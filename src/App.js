import React, { useState } from 'react';
import './App.css';

import { Navbar, Home, About, Skills, Projects, ContactLander, Contact } from './components/index';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Fade } from '@material-ui/core';

function App() {

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('up');


  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/Contact">
              <Contact />
          </Route>
          <Route path="/">
              <Navbar />
              <a id="Home"><Home /></a>
              <a id="About"><About /></a>
              <a id="Skills"><Skills /></a>
              <a id="Projects"><Projects carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} slideIn={slideIn} setSlideIn={setSlideIn} slideDirection={slideDirection} setSlideDirection={setSlideDirection} /></a>
              <ContactLander />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
