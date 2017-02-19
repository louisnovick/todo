// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CLEAR_TODOS = 'CLEAR_TODOS'

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

export function clearTodos () {
  return {
    type    : CLEAR_TODOS
  }
}

export const actions = {
  addTodo,
  toggleTodo,
  clearTodos
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
  }),

  [CLEAR_TODOS]  : (state, action) => [
    ...state.filter((todo, index) => todo.completed !== true)
  ]

  // To do
  // To do list filter for completed items and active items
  // Search bar
  // Better styling, ex. highlight clear btn when there are completed todos
  // Set due date
  // Move to home route
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [];

export default function todoReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
