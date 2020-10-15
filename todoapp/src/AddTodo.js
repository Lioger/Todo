import React, { useState } from 'react';

const AddTodo = (props) => {

    const [todo, setTodo] = useState({id: Math.random(), completed: false, hidden: false, content: ''});

    const handleChange = (e) => {
        setTodo( {...todo, content: e.target.value} );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.content) {
            props.addTodo(todo);
            setTodo({id: Math.random(), completed: false, hidden: false, content: ''})
        }
    };

    const completeAllStatus = props.completeAllStatus ? 'active' : '';
    return(
        <form className="add-todo-form input-item" onSubmit={ handleSubmit }>
            <input type="text" className="input collection-item" onChange={ handleChange } placeholder="What needs to be done?" value={todo.content} />
            <div className={'arrow ' + completeAllStatus} onClick={ () => props.completeAll() }></div>
        </form>
    );
};

export default AddTodo