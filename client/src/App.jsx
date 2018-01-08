import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';

/**
 * this container is defined as class so we can modify state
 * @return {Component} react base component
 */
const App = () => (
  <BrowserRouter>
    <main className="container">
      <Header />
      <ul className="left">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </main>
  </BrowserRouter>
);

export default App;
