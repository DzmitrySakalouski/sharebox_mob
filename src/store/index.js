import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { navigationReducer, userReducer, trackReducer } from './reducers';

const reducer = combineReducers({
    user: userReducer,
    nav: navigationReducer,
    trackData: trackReducer
});

export const store = createStore(reducer, applyMiddleware(thunk, logger));