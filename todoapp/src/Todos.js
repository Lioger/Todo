import React, { Component } from 'react';


class Todos extends Component {
    state = {
        completedCount: 0
    }

    completeTodo = (e) => {
        if (e.target.className === 'collection-item') {
            e.target.className = 'collection-item completed';
            this.setState({
                completedCount: (this.state.completedCount+1)
            });
        } else if (e.target.className === 'collection-item completed') {
            e.target.className = 'collection-item';
            this.setState({
                completedCount: (this.state.completedCount-1)
            });
        };
        this.props.getCompletedCount(this.state.completedCount);
    };

    render() {
        const todoList = (this.props.todos.length) ? (
            this.props.todos.map(todo => {
                return (
                    <div className="collection-item" key={todo.id} onClick={ this.completeTodo }>
                        <span className="task-text">{todo.content}</span>
                        <div className="checkbox"></div>
                        <div className="cross" onClick={ () => this.props.deleteTodo(todo.id) }></div>
                    </div>
                )
            })
        ) : (null);
        return (
            <div className="todos collection">
                { todoList }
            </div>
        )
    }
}

export default Todos