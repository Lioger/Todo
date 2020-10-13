import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
<<<<<<< HEAD
        content: '',
        completed: false,
        hidden: false
=======
        content: ''
>>>>>>> 0e7a028706db13e3cd72df14a9bb3d8b5d50227a
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