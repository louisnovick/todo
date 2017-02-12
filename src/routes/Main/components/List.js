import React from 'react'
import Controls from './Controls';

export const List = () => (
  <div>
    <ul className="main__list">
      <li className="main__list-item">
        <a href="#" className="main__list-link">
          Take out the trash
        </a>
      </li>
      <li className="main__list-item">
        <a href="#" className="main__list-link">
          Buy groceries
        </a>
      </li>
      <li className="main__list-item">
        <a href="#" className="main__list-link">
          Do the dishes
        </a>
      </li>
    </ul>

    <Controls />

  </div>
)

export default List
