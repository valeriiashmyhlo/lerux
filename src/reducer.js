import { INPUT_CHANGE, CREATE_TODO, TOGGLE_TODO, DELETE_TODO } from './actions';

const initState = {
  inputValue: '',
  todos: []
};

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

export default (state = initState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        inputValue: action.payload
      };
    case CREATE_TODO:
      const currentTodo = {
        id: uuidv4(),
        text: action.payload,
        isChecked: false
      }
      return {
        ...state,
        todos: [...state.todos, currentTodo]
      };
    case TOGGLE_TODO:
      state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.isChecked = action.payload.value
        }
      });
      return {
        ...state,
        todos: state.todos
      };
    case DELETE_TODO: 
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      console.log(index);
      state.todos.splice(index, 1);
      return {
        ...state,
        todos: state.todos
      }
    default:
      return state;
  }
} 