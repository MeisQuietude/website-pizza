import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils";

const initialState = {
    pizza: [
        // { key, title, description }
    ],
};

const initPizza = ( state, payload ) => {
    const pizza = payload || [];

    return updateObject(state, {
        pizza,
    });
};

const reducer = ( state = initialState, action ) => {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.INIT_PIZZA:
            return initPizza(state, payload.pizzas);
        default:
            return state;
    }
};

export default reducer;
