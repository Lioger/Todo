import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodos, setCompletedCount, setCompletedAll, setCompleteAllSwitch } from './actions';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Search from './Search';
import Footer from './Footer';
import './_styles/main-form-styles.css';

const MainForm = () => {

    const todos = useSelector(state => state.todos);
    const completedCount = useSelector(state => state.completedCount);
    const completedAll = useSelector(state => state.completedAll);
    const completeAllSwitch = useSelector(state => state.completeAllSwitch);

    const dispatch = useDispatch();

    useEffect(() => {
        getCompletedCount();
    }, [todos]);

    useEffect(() => {
        allTodoCompletedSwitch();
    }, [completeAllSwitch]);

    
    const addTodo = (todo) => {
        const todosNew = [...todos, todo];
        dispatch(updateTodos(todosNew));
    };

    const deleteTodo = (e, id) => {
        const todosNew = todos.filter( todo => todo.id !== id );
        dispatch(updateTodos(todosNew));
        e.stopPropagation();
    };

    const searchTodo = (value) => {
        const todosNew = todos.map(todo => {
            if (!todo.content.toLowerCase().includes(value.toLowerCase())) {
                todo.hidden = true;
            } else {
                todo.hidden = false;
            };
            return todo;
        });
        dispatch(updateTodos(todosNew));
    }

    const completeTodo = (id) => {
        const todosNew = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            };
            return todo;
        });
        dispatch(updateTodos(todosNew));
    };

    const checkCompletedAll = () => {
        (todos.length === completedCount && todos.length !== 0) ? dispatch(setCompletedAll(true)) : dispatch(setCompletedAll(false));
    }

    const completeAll = () => {
        dispatch(setCompletedAll(!completedAll));
        dispatch(setCompleteAllSwitch(!completeAllSwitch));
    }

    const allTodoCompletedSwitch = () => {
        if (completedAll) {
            const todosNew = todos.map(todo => {
                todo.completed = true;
                return todo;
            });
            dispatch(updateTodos(todosNew));
        } else {
            const todosNew = todos.map(todo => {
                todo.completed = false;
                return todo;
            });
            dispatch(updateTodos(todosNew));
        }
    }

    const getCompletedCount = () => {
        const completedTodos = todos.filter(todo => todo.completed);
        dispatch(setCompletedCount(completedTodos.length));
    }

    const clearCompleted = () => {
        const completedTodos = todos.filter(todo => !todo.completed);
        dispatch(updateTodos(completedTodos));
        dispatch(setCompletedCount(0));
    }

    const appendFilter = (filter) => {
        if (filter === 'all') {
            const todosNew = todos.map(todo => { todo.hidden = false; return todo });
            dispatch(updateTodos(todosNew));
        } else if (filter === 'active') {
            const todosNew = todos.map(todo => {
                todo.completed ? todo.hidden = true : todo.hidden = false;
                return todo;
            });
            dispatch(updateTodos(todosNew));
        } else if (filter === 'completed') {
            const todosNew = todos.map(todo => {
                todo.completed ? todo.hidden = false : todo.hidden = true;
                return todo;
            });
            dispatch(updateTodos(todosNew));
        }
    }
    
    return (
        <div className="main-form">
            <Search searchTodo={ searchTodo }/>
            <Todos todos={ todos }
                deleteTodo={ deleteTodo }
                completeTodo={ completeTodo }
            />
            <AddTodo addTodo={ addTodo }
                completeAll={ completeAll }
                completeAllStatus={ completedAll }
            />
            {todos.length ? <Footer appendFilter={ appendFilter }
                completedCount={ todos.length-completedCount }
                clearCompleted={ clearCompleted }
                /> : null}
        </div>
    )
}

export default MainForm;
