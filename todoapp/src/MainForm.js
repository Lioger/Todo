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
    todos: [],
    footer: false
  };

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos
        }, this.showFooter);
    };

    deleteTodo = (e, id) => {
        const todos = this.state.todos.filter( todo => todo.id !== id );
        this.setState({
            todos
        }, this.showFooter);
        e.stopPropagation();
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
            todos
        }, this.getCompletedCount());
    };

    checkCompletedAll = () => {
        (this.state.todos.length === this.state.completedCount && this.state.todos.length !== 0) ? this.setState({completedAll: true}) : this.setState({completedAll: false});
    }

    completeAll = () => {
        this.setState({
            completedAll: !this.state.completedAll,
        }, this.allTodoCompletedSwitch)
    }

    allTodoCompletedSwitch = () => {
        if (this.state.completedAll) {
            const todos = this.state.todos.map(todo => {
                todo.completed = true;
                return todo;
            });
            this.setState({
                todos
            }, this.getCompletedCount)
        } else {
            const todos = this.state.todos.map(todo => {
                todo.completed = false;
                return todo;
            });
            this.setState({
                todos
            }, this.getCompletedCount)
        }
    }

    showFooter = () => {
        (this.state.todos.length) ? this.setState({ footer: true }) : this.setState({ footer: false });
    }

    getCompletedCount = () => {
        const completedTodos = this.state.todos.filter(todo => todo.completed);
        this.setState({
            completedCount: completedTodos.length
        }, this.checkCompletedAll);
    }

    clearCompleted = () => {
        const completedTodos = this.state.todos.filter(todo => !todo.completed);
        this.setState({
            todos: completedTodos,
            completedCount: 0
        }, () => {this.showFooter(); this.checkCompletedAll()});
    }

    appendFilter = (filter) => {
        if (filter === 'all') {
            const todos = this.state.todos.map(todo => { todo.hidden = false; return todo });
            this.setState({
                todos
            });
        } else if (filter === 'active') {
            const todos = this.state.todos.map(todo => {
                todo.completed ? todo.hidden = true : todo.hidden = false;
                return todo;
            });
            this.setState({
                todos
            });
        } else if (filter === 'completed') {
            const todos = this.state.todos.map(todo => {
                todo.completed ? todo.hidden = false : todo.hidden = true;
                return todo;
            });
            this.setState({
                todos
            });
        }
    }

    render() {
        return (
        <div className="main-form">
            <Search searchTodo={ this.searchTodo }/>
            <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } completeTodo={ this.completeTodo }/>
            <AddTodo addTodo={ this.addTodo } completeAll={ this.completeAll } completeAllStatus={ this.state.completedAll }/>
            <Footer appendFilter={ this.appendFilter } showFooter={ this.state.footer } completedCount={ this.state.todos.length - this.state.completedCount } clearCompleted={ this.clearCompleted }/>
        </div>
        )
    }
    }

export default MainForm;
