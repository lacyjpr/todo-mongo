import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './actions';

import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
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
  }
}

export default connect(null, actions)(App);
