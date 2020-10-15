import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import todosReducer from './todosReducer';
import searchReducer from './searchReducer';
import completedCountReducer from './completedCountReducer';
import completedAllReducer from './completedAllReducer';
import completeAllSwitchReducer from './completeAllSwitchReducer';

const allReducers = combineReducers({
    todo: todoReducer,
    todos: todosReducer,
    search: searchReducer,
    completedCount: completedCountReducer,
    completedAll: completedAllReducer,
    completeAllSwitch: completeAllSwitchReducer,
});

export default allReducers;