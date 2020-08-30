import React from "react";
import css   from "./CartController.module.css";

const CartController = ( props ) => (
    <div className={css.CartController}>
        <button
            className={css.green}
            children="&#43;"
            onClick={props.handlers.add.bind(null, props.pizzaKey)} />
        <button
            className={css.red}
            children="&#8722;"
            onClick={props.handlers.remove.bind(null, props.pizzaKey)} />
    </div>
);

export default CartController;
