import * as React from 'react';
import { connect } from '../redux';
import { toggleTodo, deleteTodo } from '../actions';

class Todos extends React.Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map((todo, i) => (
          <li key={todo.id} className={`todo-list__item ${todo.isChecked ? "todo-list__item--done" : ""}`}>
            <div>
              <input
                type="checkbox"
                checked={todo.isChecked}
                onChange={(e) => this.props.toggleTodo({ id: todo.id, value: e.target.checked })}
              />
              <span className="todo-list__item-txt">{todo.text}</span>
            </div>
            <button 
              type="button" 
              onClick={() => this.props.deleteTodo(todo.id)}
              className="todo-list__item-btn"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(state => ({
  todos: state.todos
}), { toggleTodo, deleteTodo })(Todos);
