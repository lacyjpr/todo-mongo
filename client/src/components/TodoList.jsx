import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import TodoAPI from '../api/TodoAPI';

class TodoList extends Component {
  render() {
    let { todos, showCompleted, searchText } = this.props;
    const renderTodos = () => {
      let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      if (filteredTodos.length === 0) {
        return <p>Nothing To Do</p>;
      }
      return filteredTodos.map(todo => {
        return <Todo key={todo._id} {...todo} />;
      });
    };
    return <div>{renderTodos()}</div>;
  }
}

const mapStateToProps = state => ({
  todos: state.todosReducer,
  showCompleted: state.showCompletedReducer,
  searchText: state.searchReducer,
});

export default connect(mapStateToProps)(TodoList);
