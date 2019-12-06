import axios from "axios";
import { BASE_URL } from '../../common'

export const SET_TRACKS = "SET_TRACKS";
export const SET_CURRENT_TRACK = "SET_CURRENT_TRACK";

export function getAllTracks() {
    return dispatch => {
        axios.get(BASE_URL + '/getTracksData').then(result => {
            dispatch({
                type: SET_TRACKS,
                payload: result.data
            });
        })
    }
}

export const setCurrentTrack = id => {
    return {
        type: SET_CURRENT_TRACK,
        payload: id
    }
}