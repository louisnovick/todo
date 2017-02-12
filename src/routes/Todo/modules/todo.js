// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TODO = 'ADD_TODO'

// ------------------------------------
// Actions
// ------------------------------------
export function addTodo (todo) {
  return {
    type    : ADD_TODO,
    payload : todo
  }
}

export const actions = {
  addTodo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_TODO]    : (state, action) => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function todoReducer (state, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
