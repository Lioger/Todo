import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTodo } from './actions';

const AddTodo = ({ addTodo, completeAll, completedAll }) => {

    const todo = useSelector(state => state.todo);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setTodo( {id: Math.random(), completed: false, hidden: false, content: e.target.value} ) );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.content) {
            addTodo(todo);
            dispatch(setTodo({id: Math.random(), completed: false, hidden: false, content: ''}));
        }
    };

    const arrowClassName = `arrow ${completedAll ? 'active' : ''}`;
    return(
        <form className="add-todo-form input-item" onSubmit={ handleSubmit }>
            <input type="text" className="input collection-item" onChange={ handleChange } placeholder="What needs to be done?" value={todo.content} />
            <div className={arrowClassName} onClick={ () => completeAll() }></div>
        </form>
    );
};

export default AddTodo