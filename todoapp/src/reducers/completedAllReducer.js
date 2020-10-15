const completedAllReducer = (state = false, action) => {
    switch (action.type) {
        case 'SETCOMPLETEDALL':
            return state = action.payload;
        default:
            return state;
    }
}

export default completedAllReducer;