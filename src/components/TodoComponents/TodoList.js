import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const { todo, toggleTodo } = this.props;
    return (
      <div>
        {todo.map(
          singleTodo => (
            <Todo
              todoTask={singleTodo.task}
              toggleTodo={() => toggleTodo(singleTodo, todo)}
            />
          ),
          console.log(todo)
        )}
      </div>
    );
  }
}

export default TodoList;
