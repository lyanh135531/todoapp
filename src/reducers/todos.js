import * as type from "../constants/ActionType";

var initialState = [];

var findIndex = (todos, id) => {
  var result = -1;
  todos.forEach((item, index) => {
    if (item.id === id) {
      result = index;
    }
  });
  return result;
};

const todos = (state = initialState, action) => {
  var id = action.id;
  var index = findIndex(state, id);

  switch (action.type) {
    case type.FETCH_TODO:
      state = action.todos;
      state = state.sort((a, b) => {
        return b.mark - a.mark;
      });
      return [...state];

    case type.ADD_TODO:
      var newTodo = {
        value: action.item,
      };
      state.push(newTodo);
      return [...state];

    case type.CHECKED:
      var index = findIndex(state, action.item.id);
      state[index].check = !state[index].check;

      return [...state];

    case type.CHECK_ALL:
      console.log(action);
      state.forEach((item) => {
        if (item.check === false) {
          item.check = true;
        }
      });
      return [...state];

    case type.EDIT_TODO:
      state[index].value = action.value;

      return [...state];

    case type.DEL_TODO:
      state.splice(index, 1);

      return [...state];

    case type.DELETE_ALL:
      state.splice(0, state.length);
      return [...state];

    case type.MARKED:
      console.log(action);
      var index = findIndex(state, action.item.id);
      state[index].mark = !state[index].mark;
      state = state.sort((a, b) => {
        return b.mark - a.mark;
      });
      return [...state];
    default:
      return [...state];
  }
};
export default todos;
