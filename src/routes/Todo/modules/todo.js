// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TODO = 'ADD_TODO'

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

export const actions = {
  addTodo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_TODO]    : (state, action) => [
    ...state,
    action.payload
  ]
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [];

export default function todoReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
