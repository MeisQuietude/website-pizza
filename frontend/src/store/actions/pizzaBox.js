import { INIT_PIZZA } from "./actionTypes";

export const initPizza = ( pizzas ) => {
    return {
        type: INIT_PIZZA,
        payload: {
            pizzas,
        },
    };
};
