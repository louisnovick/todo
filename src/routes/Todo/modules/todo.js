// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'

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

export function completeTodo (value) {
  return {
    type    : COMPLETE_TODO,
    payload : {
      id: value.id,
      completed: true
    }
  }
}

export const actions = {
  addTodo,
  completeTodo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_TODO]    : (state, action) => [
    ...state,
    action.payload
  ],
  [COMPLETE_TODO]    : (state, action) => state
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [];

export default function todoReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
