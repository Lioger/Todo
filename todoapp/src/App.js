import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Search from './Search';

class App extends Component {
  state = {
    todos: []
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter( todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    })
  };

  completeTodo = (e, id) => {
    this.state.todos.map( todo => { if (todo.id === id) { e.target.classList.toggle('completed') } } )
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })

  };

  render() {
    return (
      <div className="todo-app">
        <h1 className="header">todos</h1>
        <Search />
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } completeTodo={ this.completeTodo }/>
        <AddTodo addTodo={ this.addTodo } />
      </div>
    )
  }
}

export default App;
