import React from 'react';

const Todo = ({ className, id, content, completeTodo, deleteTodo }) => {
    return (
        <div className={ className } onClick={ () => completeTodo(id) }>
            <span className="task-text">{ content }</span>
            <div className="checkbox"></div>
            <div className="cross" onClick={ (e) => deleteTodo(e, id) }></div>
        </div>
    )
};

export default Todo