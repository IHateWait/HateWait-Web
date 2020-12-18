import { combineReducers } from 'redux';
import log from './login/reducer';
import { Login } from './login/types';



export type RootState = {
log : Login
};

const rootReducer = combineReducers({
    log
});

export default rootReducer;