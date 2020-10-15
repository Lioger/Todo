export const setTodo = (todo) => {
    return {
        type: 'SETTODO',
        payload: todo,
    };
}

export const updateTodos = (todosNew) => {
    return {
        type: 'UPDATETODOS',
        payload: todosNew,
    };
}

export const setSearch = (content) => {
    return {
        type: 'SEARCH',
        payload: content,
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
        type: 'SETCOMPLETEDALL',
        payload: completedAll,
    };
}

export const setCompleteAllSwitch = () => {
    return {
        type: 'COMPLETEALLSWITCH',
    };
}