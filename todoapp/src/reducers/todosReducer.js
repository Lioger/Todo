const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'APPENDTODO':
            return state = [...state, action.payload];

        case 'REMOVETODO':
            return state = state.filter((todo) => todo.id !== action.payload);

        case 'SETCOMPLETETODO':
            return state = state.map((todo) => {
                if (todo.id === action.payload) {
                    return {...todo, completed: !todo.completed};
                };
            return todo});

        case 'FINDTODOS':
            return state = state.map((todo) => {
                if (!todo.content.toLowerCase().includes(action.payload.toLowerCase())) {
                    return {...todo, hidden: true};
                } else {
                    return {...todo, hidden: false};
                };
            });    
        
        case 'ALLTODOCOMPLETEDSWITCHON':
            return state = state.map((todo) => ({...todo, completed: true}));

        case 'ALLTODOCOMPLETEDSWITCHOFF':
            return state = state.map((todo) => ({...todo, completed: false}));

        case 'CLEARCOMPLETEDTODOS':
            return state = state.filter((todo) => !todo.completed);

        case 'ALLFILTER':
            return state = state.map((todo) => ({...todo, hidden: false}));
        
        case 'ACTIVEFILTER':
            return state = state.map((todo) => {
                todo.completed ? todo.hidden = true : todo.hidden = false;
                return todo;
            });

        case 'COMPLETEDFILTER':
            return state = state.map((todo) => {
                if (todo.completed) {
                    return {...todo, hidden: false};
                } else {
                    return {...todo, hidden: true};
                 };
            });

        default:
            return state;
    }
}

export default todosReducer;