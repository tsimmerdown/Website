import React, { useState } from 'react';
import './App.css';

import { Navbar, Home, About, Skills, Projects, ContactLander, Contact } from './components/index';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

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
              <div id="Home"><Home /></div>
              <div id="About" ><About /></div>
              <div id="Skills" ><Skills /></div>
              <div id="Projects" ><Projects carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} slideIn={slideIn} setSlideIn={setSlideIn} slideDirection={slideDirection} setSlideDirection={setSlideDirection} /></div>
              <ContactLander />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
