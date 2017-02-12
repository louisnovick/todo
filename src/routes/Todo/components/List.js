import React from 'react'
import Controls from './Controls';

export const List = () => (
  <div>
    <ul className="todo__list">
      <li className="todo__list-item">
        <a href="#" className="todo__list-link">
          Take out the trash
        </a>
      </li>
      <li className="todo__list-item">
        <a href="#" className="todo__list-link">
          Buy groceries
        </a>
      </li>
      <li className="todo__list-item">
        <a href="#" className="todo__list-link">
          Do the dishes
        </a>
      </li>
    </ul>

    <Controls />

  </div>
)

export default List
