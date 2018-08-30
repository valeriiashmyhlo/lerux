import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import { Provider } from './redux';
import { store } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoForm />
          <Todos />
        </div>
      </Provider>
    );
  }
}

export default App;
