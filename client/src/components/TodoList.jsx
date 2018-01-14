import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
//import TodoAPI from '../api/TodoAPI';

class TodoList extends Component {
  render() {
    const renderTodos = () => {
      if (this.props.todos.length === 0) {
        return <p>Nothing To Do</p>;
      }
      return this.props.todos.reverse().map(todo => {
        return <Todo key={todo._id} {...todo} />;
      });
    };
    return <div>{renderTodos()}</div>;
  }
}

const mapStateToProps = state => ({
  todos: state.todosReducer,
});

export default connect(mapStateToProps)(TodoList);
