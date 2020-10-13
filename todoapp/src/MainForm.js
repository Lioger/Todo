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
        }, () => console.log(...this.state.todos));
    };

    searchTodo = (value) => {
        const answers = this.state.todos.map( todo => {return todo.content.includes(value)});
        console.log(answers)
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
            <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } getCompletedCount={ this.getCompletedCount } clearCompleted={ this.clearCompleted }/>
            <AddTodo addTodo={ this.addTodo } />
            <Footer completedCount={ this.state.todos.length - this.state.completedCount } clearCompleted={ this.clearCompletedClick }/>
        </div>
        )
    }
    }

export default MainForm;
