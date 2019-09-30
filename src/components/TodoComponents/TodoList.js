import React, { Component } from "react";

export class TodoList extends Component {
  render() {
    const { todossss } = this.props;
    return (
      <div>
        {todossss.map(singleTodo => (
          <h5>{singleTodo.task}</h5>
        ))}
      </div>
    );
  }
}

export default TodoList;
