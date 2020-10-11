import React from 'react'

const Todos = ({ todos, deleteTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <div className="checkbox"></div>
                    <span className="task-text">{todo.content}</span>
                    <div className="cross" onClick={ () => {deleteTodo(todo.id)} }></div>
                </div>
            )
        })
    ) : (
        // we have no todos
        <p className="center">You have no todo's left, yay!</p>
    );

    return (
        <div className="todos collection">
            { todoList }
        </div>
    )
}

export default Todos