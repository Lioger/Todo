export const setTodo = (todo) => {
    return {
        type: 'SETTODO',
        payload: todo,
    };
}

export const appendTodo = (todo) => {
    return {
        type: 'APPENDTODO',
        payload: todo,
    };
}

export const removeTodo = (id) => {
    return {
        type: 'REMOVETODO',
        payload: id,
    };
}

export const setCompleteTodo = (id) => {
    return {
        type: 'SETCOMPLETETODO',
        payload: id,
    };
}

export const findTodos = (searchRequest) => {
    return {
        type: 'FINDTODOS',
        payload: searchRequest,
    };
}

export const allTodoCompletedSwitchOn = () => {
    return {
        type: 'ALLTODOCOMPLETEDSWITCHON',
    };
}

export const allTodoCompletedSwitchOff = () => {
    return {
        type: 'ALLTODOCOMPLETEDSWITCHOFF',
    };
}

export const clearCompletedTodos = (todosNew) => {
    return {
        type: 'CLEARCOMPLETEDTODOS',
        payload: todosNew,
    };
}

export const setSearch = (content) => {
    return {
        type: 'SEARCH',
        payload: content,
    };
}

export const setCompletedCount = (todos) => {
    return {
        type: 'SETCOMPLETEDCOUNT',
        payload: todos,
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

export const setFilterAll = () => {
    return {
        type: 'ALLFILTER',
    };
}

export const setFilterActive = () => {
    return {
        type: 'ACTIVEFILTER',
    };
}

export const setFilterCompleted = () => {
    return {
        type: 'COMPLETEDFILTER',
    };
}