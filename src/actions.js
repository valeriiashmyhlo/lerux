export const INPUT_CHANGE = 'INPUT_CHANGE';
export const CREATE_TODO = 'CREATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const inputChange = (value) => ({
  type: INPUT_CHANGE,
  payload: value
});

export const submitTodo = (value) => ({
  type: CREATE_TODO,
  payload: value
});

export const toggleTodo = ({ id, value }) => ({
  type: TOGGLE_TODO,
  payload: { id, value }
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
})
