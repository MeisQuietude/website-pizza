import { AUTH_SIGN_UP_IN, AUTH_SIGNOUT } from "./actionTypes";

export const signUpIn = ( user ) => {
    return {
        type: AUTH_SIGN_UP_IN,
        payload: {
            user,
        },
    };
};

export const signOut = () => {
    return {
        type: AUTH_SIGNOUT,
        payload: {},
    };
};
