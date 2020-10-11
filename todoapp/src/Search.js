import React, { Component } from 'react';

class Search extends Component {
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
    }

    render () {
        return(
            <div>
                <form className="search" onSubmit={ this.handleSubmit }>
                    <input type="text" className="input collection-item" onChange={ this.handleChange } placeholder="Search..." value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default Search;
