import React, { useState, useEffect } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Search from './Search';
import Footer from './Footer';
import './_styles/main-form-styles.css';

const MainForm = () => {
    const [completedCount, setCompletedCount] = useState(0);
    const [completedAll, setCompletedAll] = useState(false);
    const [todos, setTodos] = useState([]);
    const [completeAllSwitch, setCompleteAllSwitch] = useState(false);

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
        const todosNew = [...todos, todo];
        setTodos(todosNew);
    };

    const deleteTodo = (e, id) => {
        const todosNew = todos.filter( todo => todo.id !== id );
        setTodos(todosNew);
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
        setTodos(todosNew);
    }

    const completeTodo = (id) => {
        const todosNew = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            };
            return todo;
        });
        setTodos(todosNew);
    };

    const checkCompletedAll = () => {
        (todos.length === completedCount && todos.length !== 0) ? setCompletedAll(true) : setCompletedAll(false);
    }

    const completeAll = () => {
        setCompletedAll(!completedAll);
        setCompleteAllSwitch(!completeAllSwitch);
    }

    const allTodoCompletedSwitch = () => {
        if (completedAll) {
            const todosNew = todos.map(todo => {
                todo.completed = true;
                return todo;
            });
            setTodos(todosNew);
        } else {
            const todosNew = todos.map(todo => {
                todo.completed = false;
                return todo;
            });
            setTodos(todosNew);
        }
    }

    const getCompletedCount = () => {
        const completedTodos = todos.filter(todo => todo.completed);
        setCompletedCount(completedTodos.length);
    }

    const clearCompleted = () => {
        const completedTodos = todos.filter(todo => !todo.completed);
        setTodos(completedTodos);
        setCompletedCount(0);
    }

    const appendFilter = (filter) => {
        if (filter === 'all') {
            const todosNew = todos.map(todo => { todo.hidden = false; return todo });
            setTodos(todosNew);
        } else if (filter === 'active') {
            const todosNew = todos.map(todo => {
                todo.completed ? todo.hidden = true : todo.hidden = false;
                return todo;
            });
            setTodos(todosNew);
        } else if (filter === 'completed') {
            const todosNew = todos.map(todo => {
                todo.completed ? todo.hidden = false : todo.hidden = true;
                return todo;
            });
            setTodos(todosNew);
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
