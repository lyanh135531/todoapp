import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group list-group-flush mt-4">
        {this.props.children}
      </ul>
    );
  }
}

export default TodoList;
