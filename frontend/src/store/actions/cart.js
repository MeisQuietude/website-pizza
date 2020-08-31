import { DEC_ORDER_PIZZA, INC_ORDER_PIZZA, UPDATE_CART } from "./actionTypes";

export const incrementOrderPizza = ( key ) => {
    return {
        type: INC_ORDER_PIZZA,
        payload: {
            key,
            value: 1,
        },
    };
};

export const decrementOrderPizza = ( key ) => {
    return {
        type: DEC_ORDER_PIZZA,
        payload: {
            key,
            value: 1,
        },
    };
};

export const updateCart = ( cart ) => {
    return {
        type: UPDATE_CART,
        payload: {
            cart,
        },
    };
};
