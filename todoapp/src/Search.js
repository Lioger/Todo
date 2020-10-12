import React, { Component } from 'react';

class Search extends Component {
    state = {
        content: ''
    };

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
        console.log(e.target.value)
    };

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render () {
        return(
            <form className="search input-item" onSubmit={ this.handleSubmit }>
                <input type="text" className="input collection-item" onChange={ this.handleChange } placeholder="Search..." value={this.state.content} />
            </form>
        )
    }
}

export default Search;
