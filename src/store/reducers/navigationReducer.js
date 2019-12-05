import { SET_NAVIGATION } from '../actions';

const initialState = {
    navigation: null
};

export function navigationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NAVIGATION:
            return {
                navigation: action.payload
            }
    
        default:
            return state;
    }
}