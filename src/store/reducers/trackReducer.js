import { SET_TRACKS, SET_CURRENT_TRACK } from '../actions';

const initialState = {
    currentTrack: null,
    tracks: []
};

export function trackReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TRACKS:
            return {
                ...state,
                tracks: action.payload
            }

        case SET_CURRENT_TRACK:
            return {
                ...state,
                currentTrack: state.tracks.find(item => item.id === action.payload)
            }
    
        default:
            return state;
    }
}