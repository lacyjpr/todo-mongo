import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import AddTodo from './AddTodo';

class TodoApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchTodos());
  }

  render() {
    return (
      <div className="container">
        TodoApp.jsx
        <AddTodo />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todosReducer,
});

export default connect(mapStateToProps)(TodoApp);
