import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

/**
 * this container is defined as class so we can modify state
 * @return {Component} react base component
 */
const App = () => (
  <BrowserRouter>
    <main className="container">
      <ul className="left">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
