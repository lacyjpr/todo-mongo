import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const item = this.refs.todoText.value;

    if (item.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(item));
    } else {
      this.refs.todoText.focus();
    }
  }
  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.handleSubmit}>
          <input
            className="add-todo__input"
            type="text"
            ref="todoText"
            placeholder="What needs to be done?"
          />
          <div>
            <button className="add-todo__btn">Add Todo</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
