import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        task: "",
        completed: false
      }
    };
    this.initialForm = this.state.formData;
  }

  handleChange = e => {
    const { name, value } = e.target;
    const { formData } = this.state;
    this.setState({ formData: { ...formData, ...{ [name]: value } } });
  };

  handleClick = formData => {
    // e.preventDefault();s
    // const { formData } = this.state;
    this.props.addTodo(formData);
    this.setState({ formData: this.initialForm });
  };

  render() {
    const { task } = this.state.formData;
    const { formData } = this.state;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.handleClick(formData);
        }}
      >
        <input name="task" value={task} onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TodoForm;
