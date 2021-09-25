import React, { Component } from "react";
import callApi from "../utils/apiCaller";

class TodoItem extends Component {
  render() {
    var { item } = this.props;
    return (
      <li className="list-group-item">
        <a onClick={() => this.onChecked(item)}>{this.showChecked(item)}</a>
        <input
          id="todo-item"
          type="text"
          className={item.check ? `form-control checked` : "form-control"}
          value={item.value}
          name="value"
          onChange={this.onChange}
          onKeyDown={() => {
            this.onEditTodo(item.id, item.value, item.check, item.mark);
          }}
        />
        <span className="form-inline float-right">
          <a className="markstar mr-4" onClick={() => this.onMarked(item)}>
            {this.showMarked(item)}
          </a>
          <button
            onClick={() => this.onDelTodo(item.id)}
            className="btn btn-danger btn-del"
          >
            Xóa
          </button>
        </span>
      </li>
    );
  }

  onEditTodo = (id, value, check, mark) => {
    this.props.onEditTodo(id, value, check, mark);
  };

  onChange = (e) => {
    this.onEditTodo(
      this.props.item.id,
      e.target.value,
      this.props.item.check,
      this.props.item.mark
    );
  };

  onDelTodo = (id) => {
    this.props.onDelTodo(id);
  };

  onChecked = (item) => {
    this.props.onChecked(item);
  };

  onMarked = (item) => {
    this.props.onMarked(item);
  };

  showChecked(item) {
    if (item.check === true) {
      return <i className="fas fa-check-circle pr-4"></i>;
    } else {
      return <i className="far fa-circle pr-4"></i>;
    }
  }

  showMarked(item) {
    if (item.mark === true) {
      return <i className="fas fa-star"></i>;
    } else {
      return <i className="far fa-star"></i>;
    }
  }
}

export default TodoItem;
