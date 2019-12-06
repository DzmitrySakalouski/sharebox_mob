import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { navigationReducer, userReducer } from './reducers';

const reducer = combineReducers({
    user: userReducer,
    nav: navigationReducer
});

export const store = createStore(reducer, applyMiddleware(logger, thunk));