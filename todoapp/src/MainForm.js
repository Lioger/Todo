import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Search from './Search';
import Footer from './Footer';
import './_styles/main-form-styles.css';

class MainForm extends Component {
  state = {
    completedCount: 0,
    completedAll: false,
    todos: []
  };

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos
        });
    };

    deleteTodo = (id) => {
        const todos = this.state.todos.filter( todo => {
            return todo.id !== id;
        });
        this.setState({
            todos
        })
    };

    searchTodo = (value) => {
        const todos = this.state.todos.map(todo => {
            if (!todo.content.toLowerCase().includes(value.toLowerCase())) {
                todo.hidden = true;
            } else {
                todo.hidden = false;
            };
            return todo;
        });
        this.setState({
            todos
        })
    }

    completeTodo = (id) => {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            };
            return todo;
        });
        this.setState({
<<<<<<< HEAD
            todos
        }, this.getCompletedCount());
    };

    completeAll = () => {
        if (this.state.todos.length === this.state.completedCount) {
            this.setState({
                completedAll: !this.state.completedAll
            })
        } else {
            const todos = this.state.todos.map(todo => {
                todo.completed = !todo.completed;
                return todo;
            });
            this.setState({
                todos,
                completedAll: !this.state.completedAll
            })
        }
=======
        todos
        });
    };

    searchTodo = (value) => {
        // let todos = this.state.todos.filter( todo => todo.content.includes(value));
>>>>>>> 0e7a028706db13e3cd72df14a9bb3d8b5d50227a
    }

    getCompletedCount = () => {
        const completedTodos = this.state.todos.filter(todo => todo.completed);
        this.setState({
            completedCount: completedTodos.length
        })
    }

    clearCompleted = () => {
        const completedTodos = this.state.todos.filter(todo => !todo.completed);
        this.setState({
            todos: completedTodos
        });
        this.getCompletedCount();
    }

    render() {
        return (
        <div className="main-form">
            <Search searchTodo={ this.searchTodo }/>
<<<<<<< HEAD
            <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } completeTodo={ this.completeTodo }/>
            <AddTodo addTodo={ this.addTodo } completeAll={ this.completeAll } completeAllStatus={ this.state.completedAll }/>
            <Footer completedCount={ this.state.todos.length - this.state.completedCount } clearCompleted={ this.clearCompleted }/>
=======
            <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } clearCompleted={ this.clearCompleted }/>
            <AddTodo addTodo={ this.addTodo } />
            <Footer todos={ this.state.todos } completedCount={ this.state.todos.length - this.state.completedCount } clearCompleted={ this.clearCompletedClick }/>
>>>>>>> 0e7a028706db13e3cd72df14a9bb3d8b5d50227a
        </div>
        )
    }
    }

export default MainForm;
