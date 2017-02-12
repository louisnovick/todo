import React from 'react'
import './Todo.scss'

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo = this.refs.todo;
    const val = newTodo.value;

    if(val !== "") {
      this.props.addTodo(val);
      newTodo.value = "";
    } else {
      return false;
    }
  }

  render() {

    return (
      <div className="todo">
        <ul className="todo__list">
          {this.props.todos.todo.map((todo, index) => (
            <li className="todo__list-item" key={todo.id}>
              <a href="#" className="todo__list-link">
                {todo.text}
              </a>
            </li>
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="What needs doing?" className="todo__input" ref="todo" />
          <a href="#" type="submit" className="hidden"></a>
        </form>

        <a href="#" className="todo__btn">
          Clear Completed
        </a>
      </div>
    );
  }
}
