import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Search from './Search';
import Footer from './Footer';
import './_styles/main-form-styles.css';

class MainForm extends Component {
  state = {
    completedCount: 0,
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

    getCompletedCount = (count) => {
        this.setState({
            completedCount: count
        })
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
        todos
        });
    };

    searchTodo = (value) => {
        // let todos = this.state.todos.filter( todo => todo.content.includes(value));
    }

    clearCompletedClick = () => {
        this.clearCompleted();
    }

    clearCompleted = () => {

    }

    render() {
        return (
        <div className="main-form">
            <Search searchTodo={ this.searchTodo }/>
            <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } clearCompleted={ this.clearCompleted }/>
            <AddTodo addTodo={ this.addTodo } />
            <Footer todos={ this.state.todos } completedCount={ this.state.todos.length - this.state.completedCount } clearCompleted={ this.clearCompletedClick }/>
        </div>
        )
    }
    }

export default MainForm;
