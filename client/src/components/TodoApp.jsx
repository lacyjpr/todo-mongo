import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

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
        <TodoList />
      </div>
    );
  }
}

export default connect()(TodoApp);
