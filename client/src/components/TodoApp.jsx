import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class TodoApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchTodos());
  }

  render() {
    return <div className="container">TodoApp.jsx</div>;
  }
}

const mapStateToProps = state => ({
  todos: state.todosReducer,
});

export default connect(mapStateToProps)(TodoApp);
