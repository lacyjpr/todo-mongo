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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="todoText"
            placeholder="What do you need to do?"
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
