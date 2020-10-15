const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATETODOS':
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default todosReducer;