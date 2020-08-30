import React          from "react";
import CartController from "./CartController/CartController";
import css            from "./CartItem.module.css";

const CartItem = ( props ) => (
    <div className={css.CartItem}>
        <div className={css.Item}>
            <div style={{ borderRight: "2px dotted black", textAlign: "center" }}>
                <h3>{props.payload.title}</h3>
            </div>
            <div>
                <p>count: x{props.payload.count},</p>
            </div>
            <div>
                <p>cost: ${(props.payload.cost || 0).toFixed(2)},</p>
            </div>
            <div>
                <p>total cost: ${(props.payload.price || 0).toFixed(2)}</p>
            </div>
        </div>
        <CartController
            pizzaKey={props.payload.key}
            handlers={props.handlers} />
    </div>
);

export default CartItem;
