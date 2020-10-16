import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    appendTodo,
    removeTodo,
    setCompleteTodo,
    findTodos,
    allTodoCompletedSwitchOn,
    allTodoCompletedSwitchOff,
    clearCompletedTodos, 
    setCompletedCount, 
    setCompletedAll, 
    setCompleteAllSwitch,
    setFilterAll,
    setFilterActive,
    setFilterCompleted
    } from './actions';
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
        checkCompletedAll();
    }, [completedCount]);

    useEffect(() => {
        allTodoCompletedSwitch();
    }, [completeAllSwitch]);

    
    const addTodo = (todo) => {
        dispatch(appendTodo(todo));
    };

    const deleteTodo = (e, id) => {
        dispatch(removeTodo(id));
        e.stopPropagation();
    };

    const searchTodo = (searchRequest) => {
        dispatch(findTodos(searchRequest));
    }

    const completeTodo = (id) => {
        dispatch(setCompleteTodo(id));
    };

    const checkCompletedAll = () => {
        ((todos.length === completedCount) && (todos.length !== 0)) ?
         dispatch(setCompletedAll(true)) :
          dispatch(setCompletedAll(false));
    }

    const completeAll = () => {
        dispatch(setCompletedAll(!completedAll));
        dispatch(setCompleteAllSwitch());
    }

    const allTodoCompletedSwitch = () => {
        if (completedAll) {
            dispatch(allTodoCompletedSwitchOn());
        } else {
            dispatch(allTodoCompletedSwitchOff());
        }
    }

    const getCompletedCount = () => {
        dispatch(setCompletedCount(todos));
    }

    const clearCompleted = () => {
        dispatch(clearCompletedTodos());
    }

    const appendFilter = (filter) => {
        if (filter === 'all') {
            dispatch(setFilterAll());
        } else if (filter === 'active') {
            dispatch(setFilterActive());
        } else if (filter === 'completed') {
            dispatch(setFilterCompleted());
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
                completedAll={ completedAll }
            />
            {todos.length ? <Footer appendFilter={ appendFilter }
                completedCount={ todos.length-completedCount }
                clearCompleted={ clearCompleted }
                /> : null}
        </div>
    )
}

export default MainForm;
