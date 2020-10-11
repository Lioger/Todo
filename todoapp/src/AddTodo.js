import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
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
            <div>
                <form className="add-todo-form" onSubmit={ this.handleSubmit }>
                    <input type="text" className="input collection-item" onChange={ this.handleChange } placeholder="What needs to be done?" value={this.state.content} />
                    <div className="arrow"></div>
                </form>
            </div>
        );
    }
}

export default AddTodo