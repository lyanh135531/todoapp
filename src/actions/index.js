import * as type from "../constants/ActionType";
import callApi from "../utils/apiCaller";

export const actChecked = (item) => {
  return {
    type: type.CHECKED,
    item,
  };
};

export const actCheckedRequest = (item) => {
  return (dispatch) => {
    return callApi("todo", "PUT", {
      id: item.id,
      value: item.value,
      check: !item.check,
      mark: item.mark,
    }).then((res) => {
      dispatch(actChecked(item));
    });
  };
};

export const actMarked = (item) => {
  return {
    type: type.MARKED,
    item,
  };
};

export const actMarkedRequest = (item) => {
  return (dispatch) => {
    return callApi("todo", "PUT", {
      id: item.id,
      value: item.value,
      check: item.check,
      mark: !item.mark,
    }).then((res) => {
      dispatch(actMarked(item));
    });
  };
};

export const addTodo = (item) => {
  return {
    type: type.ADD_TODO,
    item,
  };
};

export const addTodoRequest = (item) => {
  return (dispatch) => {
    return callApi("todo", "POST", { value: item }).then((res) => {
      dispatch(addTodo(item));
    });
  };
};

export const delTodo = (id) => {
  return {
    type: type.DEL_TODO,
    id,
  };
};

export const delTodoRequest = (id) => {
  return (dispatch) => {
    return callApi(`todo/${id}`, "DELETE", null).then((res) => {
      dispatch(delTodo(id));
    });
  };
};

export const editTodo = (id, value, check, mark) => {
  return {
    type: type.EDIT_TODO,
    id,
    value,
    check,
    mark,
  };
};

export const editTodoRequest = (id, value, check, mark) => {
  return (dispatch) => {
    return callApi("todo", "PUT", {
      id: id,
      value: value,
      check: check,
      mark: mark,
    }).then((res) => {
      dispatch(editTodo(id, value, check, mark));
    });
  };
};

export const checkAll = () => {
  return {
    type: type.CHECK_ALL,
  };
};

export const checkAllRequest = () => {
  return (dispatch) => {
    return callApi("todo", "POST", { check: true }).then((res) => {
      dispatch(checkAll());
    });
  };
};

export const deleteAll = () => {
  return {
    type: type.DELETE_ALL,
  };
};

export const deleteAllRequest = () => {
  return (dispatch) => {
    return callApi("todo", "DELETE", null).then((res) => {
      dispatch(deleteAll());
    });
  };
};

export const actFetchTodo = (todos) => {
  return {
    type: type.FETCH_TODO,
    todos,
  };
};

export const actFetchTodoRequest = () => {
  return (dispatch) => {
    return callApi("todo", "GET", null).then((res) => {
      dispatch(actFetchTodo(res.data));
    });
  };
};
