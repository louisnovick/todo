import React from 'react'
import './Todo.scss'
import TodoItem from './TodoItem'

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
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

  clearCompleted(e) {
    e.preventDefault();
    this.props.clearTodos();
  }

  render() {
    return (
      <div className="todo">
        <ul className="todo__list">
          {this.props.todos.todo.map((todo, index) => (
            <TodoItem key={todo.id}
                      completed={todo.completed}
                      text={todo.text}
                      onClick={() => this.props.toggleTodo(todo.id)}
                      />
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="What needs doing?" className="todo__input" ref="todo" />
          <a href="#" type="submit" className="hidden"></a>
        </form>

        <a href="#" className="todo__btn" onClick={this.clearCompleted}>
          Clear Completed
        </a>
      </div>
    );
  }
}
