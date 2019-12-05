export const SET_USER = "SET_USER";

export function setUser(user) {
    const payload = {
        name: user.displayName,
        email: user.email
    };

    return {
        type: SET_USER,
        payload
    }
}