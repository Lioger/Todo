import React from 'react';


const Todos = (props) => {
    const todoList = (props.todos.length) ? (
        props.todos.map(todo => {
            const completeStatus = todo.completed ? 'completed' : '';
            const hideStatus = todo.hidden ? 'hidden' : '';
            return (
                <div className={'collection-item ' + completeStatus + hideStatus} key={todo.id} onClick={ () => props.completeTodo(todo.id) }>
                    <span className="task-text">{todo.content}</span>
                    <div className="checkbox"></div>
                    <div className="cross" onClick={ () => props.deleteTodo(todo.id) }></div>
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