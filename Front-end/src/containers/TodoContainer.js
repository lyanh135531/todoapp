import React, { Component } from "react";
import { connect } from "react-redux";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import {
  editTodo,
  actFetchTodoRequest,
  delTodoRequest,
  actCheckedRequest,
  actMarkedRequest,
  editTodoRequest,
} from "../actions/index";

class TodoContainer extends Component {
  componentDidMount() {
    this.props.fetchAllTodo();
  }

  render() {
    var { todos } = this.props;
    return <TodoList> {this.showTodoItem(todos)}</TodoList>;
  }

  showTodoItem(todos) {
    var result = null;
    var { onChecked } = this.props;
    var { onMarked } = this.props;
    var { onDelTodo } = this.props;
    var { onEditTodo } = this.props;
    if (todos.length > 0) {
      result = todos.map((item, index) => {
        return (
          <TodoItem
            key={index}
            item={item}
            onChecked={onChecked}
            onMarked={onMarked}
            onDelTodo={onDelTodo}
            onEditTodo={onEditTodo}
          />
        );
      });
    }
    return result;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onChecked: (item) => {
      dispatch(actCheckedRequest(item));
    },
    onMarked: (item) => {
      dispatch(actMarkedRequest(item));
    },
    onDelTodo: (id) => {
      dispatch(delTodoRequest(id));
    },
    onEditTodo: (id, value, check, mark) => {
      dispatch(editTodoRequest(id, value, check, mark));
    },
    fetchAllTodo: () => {
      dispatch(actFetchTodoRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
