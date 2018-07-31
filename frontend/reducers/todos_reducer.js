import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";

 const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      const result = {};
      action.todos.map(todo => {
        result[todo.id] = todo;
      });
      return result;
      case RECEIVE_TODO:
      const newState = Object.assign({}, state);
      newState[action.todo.id] = action.todo;
        return newState;
    default:
      return state;
    }
};
