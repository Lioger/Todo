export const setCompletedCount = () => {
    return {
        type: 'SETCOMPLETEDCOUNT'
    };
}

export const updateTodos = (todosNew) => {
    return {
        type: 'UPDATETODOS',
        payload: todosNew,
    };
}