
const initialState = { todos: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return { todos: [...state.todos, action.payload] };
    case "REMOVE":
      return { todos: state.todos.filter(t => t.id !== action.payload) }
    case "TOGGLE":
      return {
        todos: state.todos.map(t => {
          if (t.id === action.payload) {
            t.completed ? t.completed = false : t.completed = true;
          }
          return t;
        })
      }
    default:
      return state;
  }
}

export default rootReducer;