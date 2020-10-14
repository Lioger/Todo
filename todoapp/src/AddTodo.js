import React, { useState, useEffect } from 'react';

const AddTodo = (props) => {
    const [todo, setTodo] = useState({});
    const [content, setContent] = useState('');

    useEffect(() => {
        if (content) {
            props.addTodo(todo);
            setContent('');
        }
    }, [todo])

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo({
            content: content,
            id: Math.random(),
            completed: false,
            hidden: false
        });
    };

    const completeAllStatus = props.completeAllStatus ? 'active' : '';
    return(
        <form className="add-todo-form input-item" onSubmit={ handleSubmit }>
            <input type="text" className="input collection-item" onChange={ handleChange } placeholder="What needs to be done?" value={content} />
            <div className={'arrow ' + completeAllStatus} onClick={ () => props.completeAll() }></div>
        </form>
    );
}

export default AddTodo