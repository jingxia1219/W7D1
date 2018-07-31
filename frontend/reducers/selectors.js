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

export const allTodos = (state) => {
  const result = Object.keys(state.todos).map(id => state.id);
  return result;
};
