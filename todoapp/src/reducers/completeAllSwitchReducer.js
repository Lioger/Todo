const completeAllSwitchReducer = (state = false, action) => {
    switch (action.type) {
        case 'COMPLETEALLSWITCH':
            return state = !state;
        default:
            return state;
    }
}

export default completeAllSwitchReducer;