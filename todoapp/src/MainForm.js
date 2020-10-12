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
        })
    };

    render() {
        return (
        <div className="main-form">
            <Search />
            <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } getCompletedCount={ this.getCompletedCount }/>
            <AddTodo addTodo={ this.addTodo } />
            <Footer completedCount={ this.state.completedCount }/>
        </div>
        )
    }
    }

export default MainForm;
