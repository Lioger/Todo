const completedAllReducer = (state = false, action) => {
    switch (action.type) {
        case 'SETCOMPLETEDALL':
            return state = true;
        default:
            return state;
    }
}

export default completedAllReducer;