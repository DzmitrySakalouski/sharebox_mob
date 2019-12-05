import { SET_USER, LOG_OUT } from '../actions';

const initialState = {
    user: null
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                user: action.payload
            }

        case LOG_OUT: {
            return {
                user: null
            }
        }
    
        default:
            return state;
    }
}