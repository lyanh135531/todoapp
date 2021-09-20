import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Pagination from "./Pagination";
import TodoContainer from "../containers/TodoContainer";
import Option from "./Option";

class Content extends Component {
  render() {
    return (
      <div className="todolist mt-3">
        <TodoForm />
        <Option />
        <TodoContainer />
        <Pagination />
      </div>
    );
  }
}

export default Content;
