import React from 'react';


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