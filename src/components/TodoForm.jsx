import * as React from 'react';
import { connect } from '../redux';
import { inputChange, submitTodo } from '../actions';

class TodoForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitTodo(this.props.value);
    this.props.inputChange('');
  }

  reset = () => {

  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input 
          type='text' 
          placeholder='Add todos' 
          className="input"
          value={this.props.value}
          onChange={(e) => this.props.inputChange(e.target.value)} />
      </form>
    )
  }
}

export default connect(state => ({
  value: state.inputValue
}), { inputChange, submitTodo })(TodoForm)
