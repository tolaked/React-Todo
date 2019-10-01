import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const {
      todo,
      toggleTodo,
      searchText,
      searchTasks,
      handleSearchChange
    } = this.props;
    return (
      <div>
        <input
          className="todo-list-input"
          name="searchText"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
        />
        <button onClick={searchTasks}>Search</button>
        {todo.map(
          singleTodo => (
            <Todo
              key={singleTodo.id}
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
