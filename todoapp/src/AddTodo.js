import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: '',
        completed: false,
        hidden: false
    };

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.content) {
            this.props.addTodo(this.state);
        }
        this.setState({
            content: ''
        });
    };

    render(){
        const completeAllStatus = this.props.completeAllStatus ? 'active' : '';
        return(
            <form className="add-todo-form input-item" onSubmit={ this.handleSubmit }>
                <input type="text" className="input collection-item" onChange={ this.handleChange } placeholder="What needs to be done?" value={this.state.content} />
                <div className={'arrow ' + completeAllStatus} onClick={ () => this.props.completeAll() }></div>
            </form>
        );
    }
}

export default AddTodo