const completedCountReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SETCOMPLETEDCOUNT':
            return state + 1;
        default:
            return state;
    }
}

export default completedCountReducer;