import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './actions';

import Home from './components/Home';
import Header from './components/Header';
import TodoApp from './components/TodoApp';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <main className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/todo" component={TodoApp} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
