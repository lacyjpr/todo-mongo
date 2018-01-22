import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Home from './Home';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';

class TodoApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchTodos());
  }
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Home />;
      default:
        return (
          <div className="todo-container">
            <h2>Todo List</h2>
            <AddTodo />
            <TodoSearch />
            <TodoList />
          </div>
        );
    }
  }
  render() {
    return <div className="todo-container">{this.renderContent()}</div>;
  }
}

export default connect()(TodoApp);
