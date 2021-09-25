import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../actions/index";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <div className="todolist-form">
        <form method="post" onSubmit={this.onHandleSubmit}>
          <div className="input-group">
            <input
              id="todo-input"
              type="text"
              className="form-control"
              placeholder="Nhập việc cần làm..."
              name="name"
              value={this.state.name}
              onKeyDown={this.onAddTodo}
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    );
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
  };

  onAddTodo = (e) => {
    if (e.keyCode === 13) {
      var value = e.target.value.trim();
      if (value === "") {
        return;
      }
      this.props.onAddTodo(value);
      this.setState({
        name: "",
      });
    }
  };
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTodo: (item) => {
      dispatch(action.addTodoRequest(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
