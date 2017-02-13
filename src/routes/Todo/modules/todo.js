// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

// ------------------------------------
// Actions
// ------------------------------------
let todoId = 0;
export function addTodo (value) {
  return {
    type    : ADD_TODO,
    payload : {
      id: todoId++,
      text: value,
      completed: false
    }
  }
}

export function toggleTodo (value) {
  return {
    type    : TOGGLE_TODO,
    payload : {
      id: value
    }
  }
}

export const actions = {
  addTodo,
  toggleTodo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

  [ADD_TODO]  : (state, action) => [
    ...state,
    action.payload
  ],

  [TOGGLE_TODO]  : (state, action) => state.map(todo => {
    if(todo.id !== action.payload.id) {
      return todo;
    }
    return {
      ...todo,
      completed: !todo.completed
    };
  })

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [];

export default function todoReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
