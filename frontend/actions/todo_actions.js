export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});


export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});


window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
