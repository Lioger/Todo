import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import completedCountReducer from './completedCountReducer';
import completedAllReducer from './completedAllReducer';
import completeAllSwitchReducer from './completeAllSwitchReducer';

const allReducers = combineReducers({
    todos: todosReducer,
    completedCount: completedCountReducer,
    completedAll: completedAllReducer,
    completeAllSwitch: completeAllSwitchReducer,
});

export default allReducers;