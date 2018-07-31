export const allTodos = (state) => {
  const result = Object.keys(state.todos).map(id => state.todos[id]);
  return result;
};
