export const updateTodos = (todosNew) => {
    return {
        type: 'UPDATETODOS',
        payload: todosNew,
    };
}

export const setCompletedCount = (completedCount) => {
    return {
        type: 'SETCOMPLETEDCOUNT',
        payload: completedCount,
    };
}

export const setCompletedAll = (completedAll) => {
    return {
        type: 'SETCOMPLETEDCOUNT',
        payload: completedAll,
    };
}

export const setCompleteAllSwitch = () => {
    return {
        type: 'COMPLETEALLSWITCH',
    };
}