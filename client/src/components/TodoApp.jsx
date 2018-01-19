import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';

class TodoApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchTodos());
  }

  render() {
    return (
      <div className="container">
        <h2>Todo List</h2>
        <AddTodo />
        <TodoSearch />
        <TodoList />
      </div>
    );
  }
}

export default connect()(TodoApp);
