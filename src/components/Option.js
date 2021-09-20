import React, { Component } from "react";
import { connect } from "react-redux";
import { checkAllRequest, deleteAll } from "../actions";

class Option extends Component {
  render() {
    var { todos } = this.props;
    var { onCheckAll } = this.props;
    var { onDeleteAll } = this.props;
    return (
      <div className="footer mt-5 border rounded d-flex justify-content-between">
        <div className="footer__checkall">
          <a
            className="footer-check"
            onClick={() => {
              onCheckAll();
            }}
          >
            Chọn tất cả
          </a>
        </div>
        <div className="footer-text">
          <p className="d-inline mt-1">{this.showUnfinished(todos)}</p>
        </div>
        <div className="footer__deleteall float-right">
          <a className="footer-del" onClick={() => onDeleteAll()}>
            Xoá tất cả
          </a>
        </div>
      </div>
    );
  }

  onDeleteAll = () => {
    this.props.onDeleteAll();
  };

  onCheckAll = () => {
    // state.forEach((item) => {
    //   if (item.check === false) {
    //     item.check = true;
    //   }
    // });
    this.props.onCheckAll();
  };

  showUnfinished = (todos) => {
    var result = "";
    var count = 0;
    todos.forEach((item) => {
      if (item.check === false) {
        count += 1;
      }
    });
    result = `${count} công việc chưa làm`;
    return result;
  };
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onCheckAll: () => {
      dispatch(checkAllRequest());
    },
    onDeleteAll: () => {
      dispatch(deleteAll());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Option);
