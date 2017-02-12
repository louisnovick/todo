import React, { PropTypes } from 'react'

const TodoItem = (props) => (
  <li className="todo__list-item"
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? 'line-through' : 'none'
      }}
  >
    {props.text}
  </li>
)

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem
