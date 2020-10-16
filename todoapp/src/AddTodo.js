import React from 'react';

const AddTodo = ({ addTodo, completeAll, completedAll }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const content = e.target.children[0].value;
        if (content) {
            addTodo({id: Math.random(), completed: false, hidden: false, content});
            e.target.children[0].value = '';
        }
    };

    const arrowClassName = `arrow ${completedAll ? 'active' : ''}`;
    return(
        <form className="add-todo-form input-item" onSubmit={ handleSubmit }>
            <input type="text" className="input collection-item" placeholder="What needs to be done?" />
            <div className={arrowClassName} onClick={ () => completeAll() }></div>
        </form>
    );
};

export default AddTodo