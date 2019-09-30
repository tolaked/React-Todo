import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todoTask } = this.props;
    return <div>{todoTask}</div>;
  }
}

export default Todo;
