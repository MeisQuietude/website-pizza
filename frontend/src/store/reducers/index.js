import pizzaBoxReducer from "./pizzaBox";
import cartReducer     from "./cart";

const reducersMap = {
    pizzaBox: pizzaBoxReducer,
    cart: cartReducer,
};

export default reducersMap;
