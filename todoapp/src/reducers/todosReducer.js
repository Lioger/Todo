const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'APPENDTODO':
            return state = [...state, action.payload];

        case 'REMOVETODO':
            return state = state.filter((todo) => todo.id !== action.payload);

        case 'SETCOMPLETETODO':
            return state = state.map((todo) => {
            if (todo.id === action.payload) {
                todo.completed = !todo.completed;
            };
            return todo});

        case 'FINDTODOS':
            return state = state.map((todo) => {
            if (!todo.content.toLowerCase().includes(action.payload.toLowerCase())) {
                todo.hidden = true;
            } else {
                todo.hidden = false;
            };
            return todo;
        });    
        
        case 'ALLTODOCOMPLETEDSWITCHON':
            return state = state.map((todo) => {
                todo.completed = true;
                return todo});

        case 'ALLTODOCOMPLETEDSWITCHOFF':
            return state = state.map((todo) => {
                todo.completed = false;
                return todo});

        case 'CLEARCOMPLETEDTODOS':
            return state = state.filter((todo) => !todo.completed);

        case 'ALLFILTER':
            return state = state.map((todo) => { todo.hidden = false; return todo });
        
        case 'ACTIVEFILTER':
            return state = state.map((todo) => {
                todo.completed ? todo.hidden = true : todo.hidden = false;
                return todo;
            });

        case 'COMPLETEDFILTER':
            return state = state.map((todo) => {
                todo.completed ? todo.hidden = false : todo.hidden = true;
                return todo;
            });

        default:
            return state;
    }
}

export default todosReducer;