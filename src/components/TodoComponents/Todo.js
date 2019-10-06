// import React, { Component } from "react";

// class Todo extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const { toggleTodo } = this.props;
//     let { todoTask, completed } = this.props;
//     completed =
//       completed !== undefined && completed === false
//         ? "not completed"
//         : "completed";
//     return (
//       <div>
//         <h5>{todoTask}</h5>
//         <button onClick={toggleTodo}>{completed}</button>
//       </div>
//     );
//   }
// }

// export default Todo;

import React from "react";

function Todo(props) {
  const { toggleTodo } = props;
  let { todoTask, completed } = props;
  completed =
    completed !== undefined && completed === false
      ? "not completed"
      : "completed";
  return (
    <div>
      <h5>{todoTask}</h5>
      <button onClick={toggleTodo}>{completed}</button>
    </div>
  );
}

export default Todo;
