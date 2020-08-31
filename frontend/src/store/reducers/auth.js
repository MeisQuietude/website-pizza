import * as actionTypes               from "../actions/actionTypes";
import { deleteCookie, updateObject } from "../../utils";

const initialState = {
    isAuth: false,
    user: null,
};

const authSignUpInSuccess = ( state, payload ) => {
    return updateObject(state, {
        isAuth: true,
        user: payload.user,
    });
};

const authSignOut = ( state, payload ) => {
    deleteCookie();
    return updateObject(state, {
        isAuth: false,
        user: null,
    });
};

const reducer = ( state = initialState, action ) => {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.AUTH_SIGN_UP_IN:
            return authSignUpInSuccess(state, payload);
        case actionTypes.AUTH_SIGNOUT:
            return authSignOut(state, payload);
        default:
            return state;
    }
};

export default reducer;
