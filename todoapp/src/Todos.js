import React from 'react';
import Todo from './Todo';


const Todos = ({ todos, deleteTodo, completeTodo }) => {
    const todoList = (todos.length) ? (
        todos.map(({ id, completed, hidden, content }) => {
            const className = `collection-item ${completed ? ' completed ' : ''} ${hidden ? ' hidden ' : ''}`;
            return <Todo className={ className }
                key={ id }
                id={ id }
                content={ content }
                completeTodo={ completeTodo }
                deleteTodo={ deleteTodo }
            />;
        })
    ) : null;
    return (
        <div className="todos collection">
            { todoList }
        </div>
    )
}


export default Todos