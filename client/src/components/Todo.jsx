import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.renderTodo = this.renderTodo.bind(this);
  }

  renderTodo() {
    let { item } = this.props;
    return <p>{item}</p>;
  }

  render() {
    return <div>{this.renderTodo()}</div>;
  }
}

export default Todo;
