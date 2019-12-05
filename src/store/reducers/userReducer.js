import { SET_USER } from '../actions';

const initialState = {
    user: null
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                user: action.payload
            }
    
        default:
            return state;
    }
}