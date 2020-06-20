import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import roomReducer from './roomReducer';

const appReducer = combineReducers({
    tokenReducer,
    roomReducer
});

const rootReducer = (state, action) => {
    if(action.type === 'LOGOUT_CURRENT_USER') {
        state = undefined;
    }

    return appReducer(state, action);
}

export default rootReducer;