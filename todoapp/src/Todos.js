import React from 'react';


const Todos = ({ todos, deleteTodo, completeTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id} onClick={ () => completeTodo(todo.id) }>
                    <div className="checkbox"></div>
                    <span className="task-text">{todo.content}</span>
                    <div className="cross" onClick={ () => deleteTodo(todo.id) }></div>
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

export default Todos