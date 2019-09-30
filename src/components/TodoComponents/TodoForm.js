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
  }

  handleChange = e => {
    const { name, value } = e.target;
    const { formData } = e.target;
    this.setState({ formData: { ...formData, ...{ [name]: value } } });
  };

  render() {
    const { task } = this.state.formData;
    return (
      <div>
        <input name="task" value={task} onChange={this.handleChange} />
      </div>
    );
  }
}

export default TodoForm;
