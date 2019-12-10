export const SET_USER = "SET_USER";
export const LOG_OUT ="LOG_OUT";

export function setUser(user) {
    const payload = {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
    };

    return {
        type: SET_USER,
        payload
    }
}

export function logOut() {
    return {
        type: LOG_OUT,
    }
}