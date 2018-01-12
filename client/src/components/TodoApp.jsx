import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoApp extends Component {
  render() {
    return <div className="container">TodoApp.jsx</div>;
  }
}

export default connect()(TodoApp);
