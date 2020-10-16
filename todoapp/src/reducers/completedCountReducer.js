const completedCountReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SETCOMPLETEDCOUNT':
            return state = action.payload.filter((todo) => todo.completed).length;
            
        default:
            return state;
    }
}

export default completedCountReducer;