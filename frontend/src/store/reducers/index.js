import authReducer     from "./auth";
import pizzaBoxReducer from "./pizzaBox";
import cartReducer     from "./cart";

const reducersMap = {
    auth: authReducer,
    pizzaBox: pizzaBoxReducer,
    cart: cartReducer,
};

export default reducersMap;
