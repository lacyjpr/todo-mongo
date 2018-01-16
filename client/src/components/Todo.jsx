import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };

    this.renderTodo = this.renderTodo.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  renderTodo() {
    let { item, completed } = this.props;
    if (this.state.editable && !completed) {
      return <input type="text" defaultValue={item} ref="editTodoText" />;
    } else {
      return <p>{item}</p>;
    }
  }

  renderButton() {
    let { _id, completed, dispatch } = this.props;
    if (!completed) {
      if (!this.state.editable) {
        return (
          <button
            ref="editTodoBtn"
            onClick={() => {
              this.setState({ editable: !this.state.editable });
            }}
          >
            Edit
          </button>
        );
      } else {
        return (
          <button
            ref="saveEditBtn"
            onClick={() => {
              var newText = this.refs.editTodoText.value;
              this.refs.editTodoText.value = '';
              if (newText.length > 0) {
                dispatch(actions.startSaveEditedTodo(_id, newText));
              }
              this.setState({ editable: false });
            }}
          >
            Save
          </button>
        );
      }
    }
  }

  render() {
    let {
      todo,
      _id,
      completed,
      createdAt,
      completedAt,
      edited,
      editedAt,
      dispatch,
    } = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';
    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (edited) {
        message = 'Edited ';
        timestamp = editedAt;
      }

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }
      let localTime = new Date(timestamp).toLocaleString();
      return message + localTime;
    };

    return (
      <div className={todoClassName}>
        <div>
          <input
            type="checkbox"
            checked={completed}
            ref="toggler"
            onClick={() => {
              dispatch(actions.startToggleTodo(_id, !completed));
            }}
            onChange={() => {}}
          />
        </div>
        <div>
          {this.renderTodo()}
          <p className="todo_subtext">{renderDate()}</p>
        </div>
        <div className="controls">
          {this.renderButton()}
          <button
            className="small expanded button alert hollow"
            ref="deleteTodoBtn"
            onClick={() => {
              dispatch(actions.startDeleteTodo(_id));
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Todo);
