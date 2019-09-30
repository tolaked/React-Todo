import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const { todo } = this.props;
    return (
      <div>
        {todo.map(singleTodo => (
          <Todo todoTask={singleTodo.task} />
        ))}
      </div>
    );
  }
}

export default TodoList;
