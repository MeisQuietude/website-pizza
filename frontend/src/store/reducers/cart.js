import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils";

const initialState = {
    cart: {
        // pizza-key: count || 0,
    },
};

const addPizzaToCart = ( state, payload, limitValue = 15 ) => {
    const pizza = payload.key;
    const value = payload.value;

    if ( state.cart[pizza] >= limitValue ) {
        return state;
    }

    const cart = { ...state.cart };
    cart[pizza] = (state.cart[pizza] || 0) + value;

    return updateObject(state, { cart });
};

const removePizzaFromCart = ( state, payload, minimalValue = 1 ) => {
    const pizza = payload.key;
    const value = payload.value;

    if ( state.cart[pizza] === undefined ) {
        return state;
    }

    if ( state.cart[pizza] <= minimalValue ) {
        const cart = { ...state.cart };
        delete cart[pizza];
        return updateObject(state, { cart });
    }

    const cart = { ...state.cart };
    cart[pizza] = (state.cart[pizza] >= value) ? state.cart[pizza] - value : 0;

    return updateObject(state, { cart });
};

const updateCart = ( state, payload ) => {
    const cart = payload.cart || {};

    if ( Object.keys(cart).length ) {
        return updateObject(state, { cart });
    }

    return state;
};

const reducer = ( state = initialState, action ) => {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.INC_ORDER_PIZZA:
            return addPizzaToCart(state, payload);
        case actionTypes.DEC_ORDER_PIZZA:
            return removePizzaFromCart(state, payload);
        case actionTypes.UPDATE_CART:
            return updateCart(state, payload);
        default:
            return state;
    }
};

export default reducer;
