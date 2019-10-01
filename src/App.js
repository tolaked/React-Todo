import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import uuid from "uuid";

let todo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo,
      searchText: ""
    };
  }

  addTodo = todo => {
    todo = { ...todo, ...{ id: uuid() } };
    const newTodos = [...this.state.todo, todo];
    todo = newTodos;

    this.setState({ todo });
  };

  toggleTodo = (singleTodo, todo) => {
    const copyOfTodo = { ...singleTodo };
    const { completed, id } = copyOfTodo;

    if (completed) copyOfTodo.completed = false;
    else copyOfTodo.completed = true;

    const neWfilteredArr = todo.filter(el => el.id !== id);

    this.setState({
      todo: neWfilteredArr.concat(copyOfTodo)
    });
  };

  clearTodo = e => {
    e.preventDefault();
    this.setState({
      todo: []
    });
  };

  render() {
    const { todo } = this.state;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} clearTodo={this.clearTodo} />
        <TodoList todo={todo} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
