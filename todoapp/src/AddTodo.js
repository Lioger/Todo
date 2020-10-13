import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: '',
        completed: false
    };

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        });
    };

    render(){
        return(
            <form className="add-todo-form input-item" onSubmit={ this.handleSubmit }>
                <input type="text" className="input collection-item" onChange={ this.handleChange } placeholder="What needs to be done?" value={this.state.content} />
                <div className="arrow"></div>
            </form>
        );
    }
}

export default AddTodo