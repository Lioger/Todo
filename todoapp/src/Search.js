import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from './actions';

const Search = ({ searchTodo }) => {

    const search = useSelector(state => state.search);

    const dispatch = useDispatch();

    useEffect(() => {
        searchTodo(search);
    }, [search])

    const handleChange = (e) => {
        dispatch(setSearch(e.target.value));
    };

    return(
        <form className="search input-item" onSubmit={ (e) => e.preventDefault() }>
            <input type="text" className="input collection-item" onChange={ handleChange } placeholder="Search..." value={search} />
        </form>
    )
}

export default Search;
