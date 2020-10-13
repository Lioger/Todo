import React from 'react';


<<<<<<< HEAD
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
=======
const Todos = ({todos, deleteTodo, clearCompleted}) => {
    let completedCount = 0;
    const todoList = (this.props.todos.length) ? (
        this.props.todos.map(todo => {
            if (!todo.hidden) {
            return (
                <div className={collection-item + completed} key={todo.id} onClick={  }>
                    <span className="task-text">{todo.content}</span>
                    <div className="checkbox"></div>
                    <div className="cross" onClick={ () => this.props.deleteTodo(todo.id) }></div>
                </div>
            )} else { return null }
        })
    ) : (null);

        return (
            <div className="todos collection">
                { todoList }
            </div>
        )
    }
}

export default Todos;



    // completeTodo = (e) => {
    //     if (e.target.className === 'collection-item') {
    //         e.target.className = 'collection-item completed';
    //         this.setState({
    //             completedCount: this.state.completedCount+1,
    //         }, () => this.props.getCompletedCount(this.state.completedCount));
    //     } else if (e.target.className === 'collection-item completed') {
    //         e.target.className = 'collection-item';
    //         this.props.todos.completed = false;
    //         this.setState({
    //             completedCount: this.state.completedCount-1
    //         }, () => this.props.getCompletedCount(this.state.completedCount));
    //     };
    // };
>>>>>>> 0e7a028706db13e3cd72df14a9bb3d8b5d50227a
