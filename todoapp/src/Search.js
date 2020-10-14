import React, { useState, useEffect } from 'react';

const Search = (props) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        props.searchTodo(content);
    }, [content])

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    return(
        <form className="search input-item" onSubmit={ (e) => e.preventDefault() }>
            <input type="text" className="input collection-item" onChange={ handleChange } placeholder="Search..." value={content} />
        </form>
    )
}

export default Search;
